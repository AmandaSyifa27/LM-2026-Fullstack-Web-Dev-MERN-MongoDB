// ==========================================
// STEP 2: IMPLEMENT CONDITIONAL STATEMENTS
// ==========================================
console.log("=== CONDITIONAL STATEMENTS ===");

function evaluateTemperature(temp) {
 if (temp >= 30) {
  return "It's hot outside! ☀️";
 } else if (temp >= 20) {
  return "The weather is perfectly warm. 🌤️";
 } else if (temp >= 10) {
  return "It's a bit chilly, bring a jacket. 🧥";
 } else {
  return "It's freezing cold! ❄️";
 }
}

// Menampilkan output yang berbeda berdasarkan input (Memenuhi checklist)
console.log("Temperature 32°C :", evaluateTemperature(32));
console.log("Temperature 22°C :", evaluateTemperature(22));
console.log("Temperature 5°C  :", evaluateTemperature(5));

// ==========================================
// STEP 3: IMPLEMENT LOOPS
// ==========================================
console.log("\n=== LOOPS ===");
console.log("Generating a countdown sequence:");

// Menggunakan for loop untuk melakukan perulangan (Memenuhi checklist)
for (let i = 5; i > 0; i--) {
 console.log(`Countdown: ${i}...`);
}
console.log("Liftoff! 🚀");

// ==========================================
// STEP 4: IMPLEMENT FUNCTIONS
// ==========================================
console.log("\n=== FUNCTIONS ===");

// Membuat fungsi yang dapat digunakan kembali (Memenuhi checklist)
function calculateDiscount(price, discountPercentage) {
 const discountAmount = price * (discountPercentage / 100);
 const finalPrice = price - discountAmount;
 return finalPrice;
}

// Memanggil fungsi dengan parameter berbeda
console.log(
 "Original Price: 100000, Discount: 20%. Final Price:",
 calculateDiscount(100000, 20),
);
console.log(
 "Original Price: 50000, Discount: 10%. Final Price:",
 calculateDiscount(50000, 10),
);
