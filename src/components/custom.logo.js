import React from "react";

function CustomLogo() {
  return (
      <h1>
        <a href="/">
          <img src="/logo/logo-white.png" alt="" />
          <img
            src="/logo/logo.png"
            alt=""
            className="img-responsive logo-collapse"
          />
        </a>
      </h1>
  );
}

export default CustomLogo;
