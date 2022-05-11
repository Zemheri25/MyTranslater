import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footermain">
      <h1>Designed By Ömer Zemheri</h1>
      <div className="icons">
        <a href="https://www.linkedin.com/in/omerzemheri/" target={"_blank"}>
          {" "}
          <LinkedInIcon style={{ color: "white", fontSize: "2.5rem" }} />
        </a>

        <a href="https://github.com/Zemheri25" target={"_blank"}>
          {" "}
          <GitHubIcon style={{ color: "white", fontSize: "2.5rem" }} />
        </a>

        <a href="https://twitter.com/omerzemheri14" target={"_blank"}>
          {" "}
          <TwitterIcon style={{ color: "white", fontSize: "2.5rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
