const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
 name: String,
 category: String,
 price: Number,
 stock: Number,
});

const Product = mongoose.model("Product", productSchema);

const generateData = () => {
 const categories = ["Electronics", "Furniture", "Clothing", "Toys"];
 const data = [];
 for (let i = 1; i <= 30; i++) {
  data.push({
   name: `Product ${i}`,
   category: categories[i % 4],
   price: i * 10 + 100,
   stock: i * 5,
  });
 }
 return data;
};

const run = async () => {
 try {
  await mongoose.connect("mongodb://127.0.0.1:27017/query_analysis_lab");
  console.log("Connected to MongoDB\n");

  await Product.deleteMany({});
  await Product.collection.dropIndexes();

  await Product.insertMany(generateData());
  console.log("30 Sample records inserted successfully\n");

  const explain1 = await Product.find({ category: "Electronics" }).explain(
   "executionStats",
  );
  console.log("--- BEFORE INDEXING (COLLSCAN) ---");
  console.log(
   "Total Docs Examined:",
   explain1.executionStats.totalDocsExamined,
  );
  console.log(
   "Total Keys Examined:",
   explain1.executionStats.totalKeysExamined,
  );
  console.log(
   "Execution Time (ms):",
   explain1.executionStats.executionTimeMillis,
   "\n",
  );

  await Product.collection.createIndex({ category: 1 });
  console.log(">> Created Single Index on 'category'\n");

  const explain2 = await Product.find({ category: "Electronics" }).explain(
   "executionStats",
  );
  console.log("--- AFTER SINGLE INDEX (IXSCAN) ---");
  console.log(
   "Total Docs Examined:",
   explain2.executionStats.totalDocsExamined,
  );
  console.log(
   "Total Keys Examined:",
   explain2.executionStats.totalKeysExamined,
  );
  console.log(
   "Execution Time (ms):",
   explain2.executionStats.executionTimeMillis,
   "\n",
  );

  const explain3 = await Product.find({ category: "Electronics" })
   .sort({ price: 1 })
   .explain("executionStats");
  console.log("--- SORTING WITH SINGLE INDEX ---");
  console.log(
   "Total Docs Examined:",
   explain3.executionStats.totalDocsExamined,
  );
  console.log(
   "Total Keys Examined:",
   explain3.executionStats.totalKeysExamined,
  );
  console.log(
   "Execution Time (ms):",
   explain3.executionStats.executionTimeMillis,
   "\n",
  );

  await Product.collection.createIndex({ category: 1, price: 1 });
  console.log(">> Created Compound Index on 'category' and 'price'\n");

  const explain4 = await Product.find({ category: "Electronics" })
   .sort({ price: 1 })
   .explain("executionStats");
  console.log("--- SORTING WITH COMPOUND INDEX ---");
  console.log(
   "Total Docs Examined:",
   explain4.executionStats.totalDocsExamined,
  );
  console.log(
   "Total Keys Examined:",
   explain4.executionStats.totalKeysExamined,
  );
  console.log(
   "Execution Time (ms):",
   explain4.executionStats.executionTimeMillis,
   "\n",
  );

  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
 } catch (error) {
  console.error(error);
 }
};

run();
