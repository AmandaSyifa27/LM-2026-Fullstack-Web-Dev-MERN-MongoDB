import { useState } from "react";
import Loader from "./Loader";
import ErrorView from "./ErrorView";
import "../App.css";

const fetchMockData = () => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (Math.random() > 0.5) {
    reject(new Error("Server timeout. Failed to fetch user data."));
   } else {
    resolve({
     name: "Amanda",
     major: "Information Systems",
     role: "Fullstack Developer",
    });
   }
  }, 2000);
 });
};

const UserProfile = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 const handleFetch = () => {
  setIsLoading(true);
  setError(null);

  fetchMockData()
   .then((response) => {
    setData(response);
    setIsLoading(false);
   })
   .catch((err) => {
    setError(err.message);
    setIsLoading(false);
   });
 };

 if (isLoading) return <Loader />;

 if (error) return <ErrorView message={error} onRetry={handleFetch} />;

 if (data) {
  return (
   <div className="profile-card">
    <h2>User Profile</h2>
    <p>
     <strong>Name:</strong> {data.name}
    </p>
    <p>
     <strong>Major:</strong> {data.major}
    </p>
    <p>
     <strong>Role:</strong> {data.role}
    </p>
   </div>
  );
 }

 return (
  <div className="initial-view">
   <h2>Welcome to User Dashboard</h2>
   <button className="fetch-btn" onClick={handleFetch}>
    Load My Profile
   </button>
  </div>
 );
};

export default UserProfile;
