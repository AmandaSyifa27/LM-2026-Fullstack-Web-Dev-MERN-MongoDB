console.log("=== 1. REFACTOR: ARRAY METHODS ===");
/* 
  MASALAH SEBELUMNYA: Menggunakan for-loop tradisional dan if statement untuk memfilter array. 
  Itu memakan banyak baris kode dan kurang mudah dibaca.
  
  SOLUSI: Menggunakan metode ES6 .filter() dan arrow function.
*/
const getEvenNumbers = (arr) => {
 return arr.filter((num) => num % 2 === 0);
};

console.log("Even Numbers (Optimized):", getEvenNumbers([1, 2, 3, 4, 5, 6]));

console.log("\n=== 2. REFACTOR: NESTED LOOPS (TIME COMPLEXITY) ===");
/* 
  MASALAH SEBELUMNYA: Menggunakan dua nested loop (O(n^2)). Kalau datanya jutaan, browser bisa nge-hang.
  
  SOLUSI: Menggunakan struktur data 'Set'. Kita hanya butuh satu kali loop (O(n)). 
  Set otomatis mengecek keunikan data dengan sangat cepat.
*/
function findDuplicates(arr) {
 const seen = new Set();
 const duplicates = new Set();

 arr.forEach((item) => {
  if (seen.has(item)) {
   duplicates.add(item); // Masukkan ke set duplicates jika sudah pernah dilihat
  } else {
   seen.add(item); // Catat sebagai item yang sudah dilihat
  }
 });

 return [...duplicates]; // Convert Set kembali menjadi Array
}

console.log(
 "Duplicates (Optimized):",
 findDuplicates([1, 2, 3, 4, 2, 5, 6, 1, 3]),
);

console.log("\n=== 3. REFACTOR: DOM MANIPULATION ===");
/* 
  MASALAH SEBELUMNYA: Melakukan innerHTML += di dalam loop. Ini memaksa browser untuk 
  me-render ulang (reflow) UI sebanyak 100 kali. Sangat berat untuk performa.
  
  SOLUSI: Kumpulkan semua string HTML di dalam sebuah variabel terlebih dahulu, 
  lalu update innerHTML HANYA SATU KALI di akhir.
*/
const list = document.getElementById("list");
let itemsHTML = "";

// Loop hanya untuk menyusun string (tidak menyentuh DOM)
for (let i = 1; i <= 10; i++) {
 // Dibatasi sampai 10 saja sebagai contoh agar UI tidak terlalu panjang
 itemsHTML += `<li>Optimized Item ${i}</li>`;
}

// Sentuh DOM HANYA 1 KALI di luar loop
list.innerHTML = itemsHTML;
console.log("DOM Manipulation complete! Check the web page.");
