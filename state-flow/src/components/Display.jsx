import "react";

const Display = ({ text }) => {
 return (
  <div className="box display-box">
   <h2>Display Component</h2>
   <p>
    <strong>Current State:</strong> <span className="highlight">{text}</span>
   </p>
  </div>
 );
};

export default Display;
