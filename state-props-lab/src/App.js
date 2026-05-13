import React, { useState } from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import Display from "./Display";

function App() {
 // Managing the shared state here (Lifting State Up)
 const [sharedCount, setSharedCount] = useState(0);

 const handleCountChange = (newCount) => {
  setSharedCount(newCount);
 };

 return (
  <div
   style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}
  >
   <h1>State and Props Lab</h1>
   <hr />

   {/* Step 2: Greeting Component with Props */}
   <Greeting name="Alice" />
   <Greeting name="Bob" />

   {/* Step 3 & 4: Counter passing state up */}
   <Counter label="My Counter" onCountChange={handleCountChange} />

   {/* Step 4: Displaying the lifted state */}
   <Display value={sharedCount} />
  </div>
 );
}

export default App;
