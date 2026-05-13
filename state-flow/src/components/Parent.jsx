import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

const Parent = () => {
 // Step 2.1: Create Parent State
 const [sharedState, setSharedState] = useState(
  "Hello from Parent Initial State!",
 );

 // Step 3.1: Callback Function to update state
 const handleStateUpdate = (newData) => {
  setSharedState(newData);
 };

 return (
  <div className="box parent-box">
   <h1>Parent Component</h1>
   <p className="subtitle">Controls the source of truth</p>

   <div className="children-container">
    {/* Step 2.2 & 4.1: Passing state and callbacks as props */}
    <Display text={sharedState} />
    <Child onUpdateState={handleStateUpdate} />
   </div>
  </div>
 );
};

export default Parent;
