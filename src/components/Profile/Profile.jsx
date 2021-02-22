import React from "react";
import { Typography } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";

import "./Profile.css";
import CustomTimeline, { CustomLineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resumeData from "../../utlis/resumeData";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Btn from "../Button/Button.js";
import GetAppIcon from "@material-ui/icons/GetApp";
import profilePic from "../../assets/images/pic.jpg";
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomLineSeparator />
    <TimelineContent className={"timelineItem_content"}>
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title} : </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className={"timelineItem_text"}>
          <span>{title} : </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={profilePic} alt="Cant load image" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title={"Name"} text={resumeData.name} />
          <CustomTimelineItem title={"Birthday"} text={resumeData.birthday} />
          <CustomTimelineItem title={"Email"} text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className="btn_container">
          <Btn text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
