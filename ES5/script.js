const studentName = "Amanda";
const studentAge = 20;
let score = 75;

score = 85;

const greet = (name) => `Haii, ${name}!`;
console.log(greet(studentName));

const getInfo = (name, age) => `Nama: ${name}, Usia: ${age}`;
console.log(getInfo(studentName, studentAge));

const perkalian = (a, b) => a * b;
console.log(perkalian(4, 5));

const perkenalan = (name, major = "Informatika") =>
 `${name} mengambil program studi ${major}`;
console.log(perkenalan("Andi"));
console.log(perkenalan("Citra", "Komputer Sains  "));

const student = { name: "Amanda", age: 20, major: "Informatika" };
const { name, age, major } = student;
console.log(`${name} berusia ${age} tahun, program studi ${major}`);

const fruits = ["apel", "pisang", "anggur"];
const [first, second] = fruits;
console.log(`Pertama: ${first}, Kedua: ${second}`);

const newFruits = [...fruits, "mangga", "durian"];
console.log(newFruits);

const baseStudent = { name: "Andi", age: 19 };
const updatedStudent = { ...baseStudent, major: "Data Sains", age: 20 };
console.log(updatedStudent);

const students = [
 { name: "Andi", nilai: 85 },
 { name: "Amanda", nilai: 92 },
 { name: "Citra", nilai: 78 },
];

const lulus = students.filter(({ nilai }) => nilai >= 80);
const names = students.map(({ name }) => name);

lulus.forEach(({ name, nilai }) =>
 console.log(`${name} lulus dengan nilai ${nilai}`),
);
console.log(`Semua mahasiswa: ${names.join(", ")}`);
