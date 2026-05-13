import "react";

const Footer = () => {
 return (
  <footer className="app-footer">
   <p>
    &copy; {new Date().getFullYear()} User Dashboard Inc. All rights reserved.
   </p>
  </footer>
 );
};

export default Footer;
