import React from "react";
import { Typography } from "@material-ui/core";
import "./Footer.css";
import resumeData from "../../utlis/resumeData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target="_blank">
            {resumeData.name}
          </a>
          <br />
          Cloned from
          <a href="https://themeforest.net/user/tavonline" target="_blank">
            Travonline's
          </a>{" "}
          Idea
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
