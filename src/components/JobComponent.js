import React, { useEffect, useState } from "react";
import "../styles/JobComponent.css";

const JobComponent = (props) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,

    position,
    postedAt,
    role,
    tools,
  } = props.job;

  let keywords = [role, level, ...languages, ...tools];
  const [icons, setIcons] = useState("");

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      setIcons(d.default);
    });
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <>
      <div
        className={
          featured ? "job-container job-container borderLeft" : "job-container"
        }
      >
        <div className="logo">
          <img src={icons} alt="logo" />
        </div>
        <div className="part1">
          <div className="company">
            <span className="cname">{company}</span>
            {props.job.new && <span className="new">new!</span>}
            {props.job.featured && <span className="featured">featured!</span>}
          </div>

          <div className="position">{position}</div>

          <div className="details">
            <span>{postedAt}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{contract}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="part2">
          {keywords.map((key, id) => (
            <span
              className="part2span"
              onClick={() => {
                props.setKeywords(key);
              }}
              key={id}
            >
              {key}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobComponent;
