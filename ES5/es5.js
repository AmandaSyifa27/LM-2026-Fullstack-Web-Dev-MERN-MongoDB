var studentName = "Amanda";
var studentAge = 20;
var score = 75;

score = 85;

function greet(name) {
 return "Haii, " + name + "!";
}
console.log(greet(studentName));

function getInfo(name, age) {
 return "Nama: " + name + ", Usia: " + age;
}
console.log(getInfo(studentName, studentAge));

function perkalian(a, b) {
 return a * b;
}
console.log(perkalian(4, 5));

function perkenalan(name, major) {
 if (major === undefined) {
  major = "Informatika";
 }
 return name + " mengambil program studi " + major;
}
console.log(perkenalan("Andi"));
console.log(perkenalan("Citra", "Komputer Sains"));

var student = { name: "Amanda", age: 20, major: "Informatika" };
var name = student.name;
var age = student.age;
var major = student.major;
console.log(name + " berusia " + age + " tahun, program studi " + major);

var fruits = ["apel", "pisang", "anggur"];
var first = fruits[0];
var second = fruits[1];
console.log("Pertama: " + first + ", Kedua: " + second);

var newFruits = fruits.concat(["mangga", "durian"]);
console.log(newFruits);

var baseStudent = { name: "Andi", age: 19 };
var updatedStudent = Object.assign({}, baseStudent, {
 major: "Data Sains",
 age: 20,
});
console.log(updatedStudent);

var students = [
 { name: "Andi", grade: 85 },
 { name: "Amanda", grade: 92 },
 { name: "Citra", grade: 78 },
];

var lulus = students.filter(function (s) {
 return s.grade >= 80;
});
var names = students.map(function (s) {
 return s.name;
});

lulus.forEach(function (s) {
 console.log(s.name + " lulus dengan nilai " + s.grade);
});
console.log("Semua mahasiswa: " + names.join(", "));
