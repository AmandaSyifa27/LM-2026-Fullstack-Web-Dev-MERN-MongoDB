const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/amanda_aggregation_db";

const salesSchema = new mongoose.Schema({
 productName: String,
 category: String,
 price: Number,
 quantity: Number,
});

const Sale = mongoose.model("Sale", salesSchema);

const runAggregation = async () => {
 try {
  await mongoose.connect(MONGO_URI);
  console.log("Database Connected\n");

  await Sale.deleteMany({});

  const sampleData = [
   {
    productName: "Laptop Pro",
    category: "Electronics",
    price: 1500,
    quantity: 2,
   },
   {
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 50,
    quantity: 10,
   },
   {
    productName: "Mechanical Keyboard",
    category: "Electronics",
    price: 100,
    quantity: 5,
   },
   {
    productName: "Desk Chair",
    category: "Furniture",
    price: 200,
    quantity: 4,
   },
   {
    productName: "Standing Desk",
    category: "Furniture",
    price: 500,
    quantity: 2,
   },
   { productName: "Coffee Mug", category: "Kitchen", price: 15, quantity: 20 },
   {
    productName: "Monitor 4K",
    category: "Electronics",
    price: 400,
    quantity: 3,
   },
  ];

  await Sale.insertMany(sampleData);

  const matchResult = await Sale.aggregate([
   { $match: { category: "Electronics" } },
  ]);
  console.log("=== 1. Filter: Kategori Electronics ===");
  console.log(matchResult, "\n");

  const groupResult = await Sale.aggregate([
   {
    $group: {
     _id: "$category",
     totalItems: { $sum: "$quantity" },
     totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
   },
  ]);
  console.log("=== 2. Group: Pendapatan per Kategori ===");
  console.log(groupResult, "\n");

  const projectSortResult = await Sale.aggregate([
   {
    $project: {
     _id: 0,
     productName: 1,
     totalValue: { $multiply: ["$price", "$quantity"] },
    },
   },
   { $sort: { totalValue: -1 } },
  ]);
  console.log("=== 3. Project & Sort: Nilai Barang Descending ===");
  console.log(projectSortResult, "\n");

  const combinedResult = await Sale.aggregate([
   { $match: { category: "Electronics" } },
   {
    $group: {
     _id: "$productName",
     revenue: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
   },
   { $sort: { revenue: -1 } },
   {
    $project: {
     Produk: "$_id",
     Pendapatan: "$revenue",
     _id: 0,
    },
   },
  ]);
  console.log(
   "=== 4. Full Pipeline: Laporan Penjualan Elektronik Tertinggi ===",
  );
  console.log(combinedResult, "\n");
 } catch (err) {
  console.error(err);
 } finally {
  mongoose.connection.close();
 }
};

runAggregation();
