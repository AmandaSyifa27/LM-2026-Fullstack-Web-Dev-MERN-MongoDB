// // ARRAY
// let array = ["Amanda", 22, "Indramayu", true];

// // OBJECT
// let object = {
//  name: array[0],
//  age: array[1],
//  city: array[2],
//  isStudent: array[3],
// };

// console.log(object);

let buah = ["apel", "pisang", "anggur"];
let numbers = [10, 20, 30, 40, 50];

console.log(`Semua Buah: ${buah}`);
console.log(numbers);

buah.push("mango");
console.log(`Setelah Push: ${buah}`);

buah.pop();
console.log(`Setelah Pop: ${buah}`);

buah.unshift("strawberry");
console.log(`Setelah Unshift: ${buah}`);

buah.shift();
console.log(`Setelah Shift: ${buah}`);

console.log(`Jumlah Buah: ${buah.length}`);

let student = {
 nama: "Amanda",
 usia: 22,
 kota: "Indramayu",
 isActive: true,
};

console.log(student);

console.log(student.nama);
console.log(student.usia);

console.log(student["kota"]);
console.log(student["isActive"]);

student.usia = 21;
student["kota"] = "Cirebon";
console.log(student);

let doubled = numbers.map((n) => n * 2);
console.log(doubled);

let bigNumbers = numbers.filter((n) => n > 20);
console.log(bigNumbers);

buah.forEach((fruit) => console.log(fruit));

let students = [
 { name: "Andi", nilai: 85 },
 { name: "Budi", nilai: 92 },
 { name: "Citra", nilai: 78 },
];

console.log(students);

let passed = students.filter((s) => s.nilai >= 80);
console.log(`Siswa yang lulus: ${passed}`);

let names = students.map((s) => s.name);
console.log(`Nama-nama siswa: ${names}`);

students.forEach((s) => console.log(s.name + " - " + s.nilai));
