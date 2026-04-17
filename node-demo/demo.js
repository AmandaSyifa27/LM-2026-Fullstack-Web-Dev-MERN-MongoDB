const fs = require("fs");

const content =
 "Halo Dunia! Ini adalah pesan dari server Node.js pertama saya. 🚀\n";

fs.writeFile("message.txt", content, function (error) {
 if (error) {
  console.error("Gagal membuat file:", error);
  return;
 }
 console.log("Sukses! File message.txt berhasil dibuat.");
});
