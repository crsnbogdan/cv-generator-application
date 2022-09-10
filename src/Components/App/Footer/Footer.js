import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex align-center justify-center p-10">
      <div className="inline-flex flex-col">
        <p className="footer--text text-lg">
          <span className="text-blue-400">© {new Date().getFullYear()}</span> -
          Crisan Bogdan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
