console.log("=== STEP 2: ARRAY DESTRUCTURING ===");
const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Go"];
const [firstLang, , thirdLang, ...restLangs] = programmingLanguages;

console.log("First Language:", firstLang);
console.log("Third Language (Skipped Python):", thirdLang);
console.log("Remaining Languages:", restLangs);

console.log("\n=== STEP 3: OBJECT DESTRUCTURING ===");
const studentProfile = {
 username: "amanda_dev",
 major: "Information Systems",
 gpa: 3.8,
};
const { username, major } = studentProfile;

console.log("Username:", username);
console.log("Major:", major);

console.log("\n=== STEP 4: ADVANCED DESTRUCTURING ===");
const projectData = {
 projectId: 101,
 details: {
  title: "Cleanify Platform",
  framework: "Next.js",
 },
};

const {
 projectId: id,
 details: { title, framework: techStack },
 status = "In Progress",
} = projectData;

console.log("Renamed ID:", id);
console.log("Nested Title:", title);
console.log("Renamed & Nested Tech Stack:", techStack);
console.log("Default Value (Status):", status);

console.log("\n=== STEP 5: DESTRUCTURING IN FUNCTIONS ===");
const displayUserRole = ({ username, role = "Regular User" }) => {
 console.log(`User ${username} is logging in as: ${role}`);
};

const adminUser = { username: "amanda_admin", role: "Superadmin", age: 21 };
const normalUser = { username: "guest_01", age: 25 };

displayUserRole(adminUser);
displayUserRole(normalUser);
