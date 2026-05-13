console.log("=== 1. FIXING SYNTAX ERROR ===");
/* 
  FAULTY CODE:
  const greeting = "Hello World; 
  console.log(Greeting)
  
  IDENTIFICATION: Missing closing quote and case-sensitivity issue (Greeting vs greeting).
*/
// FIXED CODE:
const greeting = "Hello World";
console.log(greeting);

console.log("\n=== 2. FIXING RUNTIME ERROR ===");
/* 
  FAULTY CODE:
  const user = null;
  console.log(user.profile.name); 
  
  IDENTIFICATION: Cannot read properties of null (reading 'profile'). App crashes here.
*/
// FIXED CODE:
const user = {
 profile: {
  name: "Developer",
 },
};
// Using Optional Chaining to prevent runtime crashes if object is missing
console.log(user?.profile?.name || "User not found");

console.log("\n=== 3. FIXING LOGICAL ERROR ===");
/* 
  FAULTY CODE:
  function calculateTotal(price, tax) {
      return price - tax; 
  }
  console.log("Total Payment:", calculateTotal(10000, 1100)); // Outputs 8900 instead of 11100
  
  IDENTIFICATION: The math operation is wrong. Tax should be added, not subtracted.
*/
// FIXED CODE:
function calculateTotal(price, tax) {
 return price + tax;
}
console.log("Total Payment:", calculateTotal(10000, 1100));
