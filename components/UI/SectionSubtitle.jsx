import React from "react";
import classes from "../../styles/Subtitle.module.css";

const SectionSubtitle = () => {
  return <h5 className={`${classes.section__subtitle}`}>{props.subtitle}</h5>;
};

export default SectionSubtitle;
