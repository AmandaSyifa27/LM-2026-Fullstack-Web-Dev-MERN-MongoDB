import React from "react";

const withLoading = (WrappedComponent) => {
 return function WithLoadingComponent({ isLoading, ...props }) {
  if (isLoading) {
   return <div>Loading data... Please wait.</div>;
  }
  return <WrappedComponent {...props} />;
 };
};

export default withLoading;
