import React from "react";

const Footer = (props) => {
  return props.isForCV === true ? (
    <footer className="cv__footer flex align-center justify-center mb-4">
      <p className="text-lg">
        <span className="text-blue-400">© {new Date().getFullYear()}</span> -
        Crisan Bogdan
      </p>
    </footer>
  ) : (
    <footer className="footer flex align-center justify-center p-10">
      <div className="inline-flex flex-col">
        <p className="text-lg">
          <span className="text-blue-400">© {new Date().getFullYear()}</span> -
          Crisan Bogdan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
