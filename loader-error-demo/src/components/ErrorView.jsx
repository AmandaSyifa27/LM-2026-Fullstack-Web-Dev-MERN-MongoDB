import "react";
import "../App.css";

const ErrorView = ({ message, onRetry }) => {
 return (
  <div className="error-box">
   <h3>⚠️ Oops, something went wrong!</h3>
   <p>{message}</p>
   <button className="retry-btn" onClick={onRetry}>
    Try Again
   </button>
  </div>
 );
};

export default ErrorView;
