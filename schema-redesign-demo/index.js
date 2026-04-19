const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/amanda_redesign_db";

const userSchema = new mongoose.Schema(
 {
  name: {
   type: String,
   required: [true, "Nama wajib diisi"],
  },
  email: {
   type: String,
   required: [true, "Email wajib diisi"],
   unique: true,
   match: [/^\S+@\S+\.\S+$/, "Format email tidak valid"], // Validasi regex Regex
  },
 },
 { timestamps: true },
);

const User = mongoose.model("User", userSchema);

const orderSchema = new mongoose.Schema(
 {
  userId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true,
  },
  productName: {
   type: String,
   required: true,
  },
  totalAmount: {
   type: Number,
   required: true,
   min: [1, "Total belanja tidak boleh 0"],
  },
 },
 { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

const runRedesignDemo = async () => {
 try {
  await mongoose.connect(MONGO_URI);
  console.log("Database Terhubung");

  await User.deleteMany({});
  await Order.deleteMany({});

  const amanda = await User.create({
   name: "Amanda Syifa",
   email: "amanda@ucic.edu",
  });
  console.log(`User berhasil dibuat: ${amanda.name} (ID: ${amanda._id})`);

  const newOrder = await Order.create({
   userId: amanda._id,
   productName: "Laptop HP ProBook",
   totalAmount: 7500000,
  });
  console.log("Order berhasil dibuat menggunakan Referenced Documents.");

  const orderDetails = await Order.findOne({ _id: newOrder._id }).populate(
   "userId",
   "name email",
  );

  console.log("\n Hasil Pengecekan Desain Baru (Order + Data User):");
  console.log(JSON.stringify(orderDetails, null, 2));
 } catch (error) {
  console.error(" Validasi Error Tertangkap:", error.message);
 } finally {
  mongoose.connection.close();
  console.log("\n Koneksi ditutup.");
 }
};

runRedesignDemo();
