import React from "react";
import { Navbar } from "react-bootstrap";

interface LogoProps {
  fontSize: string;
}

const Logo: React.FC<LogoProps> = ({ fontSize }) => {
  return (
    <div className="Logo pt-2">
      <link href="https://fonts.googleapis.com/css?family=Kalam" rel="stylesheet" />
      <Navbar.Brand
        className="text"
        style={{
          fontFamily: "Kalam",
          fontSize: fontSize,
        }}
      >
        <b>
          <span
            className="text"
            style={{
              color: "#A60321",
            }}
          >
            Present
          </span>
          <span
            className="text"
            style={{
              color: "#A67c63",
            }}
          >
            ly
          </span>
        </b>
      </Navbar.Brand>
    </div>
  );
};

export default Logo;
