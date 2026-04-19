const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/amanda_schema_demo";

const userSchema = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true },
 age: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

const runDemo = async () => {
 try {
  await mongoose.connect(MONGO_URI);
  console.log("✅ Database Connected");

  await User.deleteMany({});

  const newUser = new User({
   name: "Amanda",
   email: "amanda.dev@example.com",
   age: 20,
  });

  await newUser.save();
  console.log("Sample data inserted successfully!");

  const users = await User.find();
  console.log("\n Hasil Retrieve Data dari Database:");
  console.log(users);
 } catch (error) {
  console.error("Terjadi kesalahan:", error.message);
 } finally {
  mongoose.connection.close();
  console.log("\n Koneksi ditutup.");
 }
};

runDemo();
