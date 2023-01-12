import React from "react";
import close from "./images/icon-remove.svg";
import "../styles/Header.css";

const Header = ({ keywords, removekeywords, removeAllKeywords }) => {
  return (
    <>
      <div className="header-container">
        <ul>
          {keywords.map((key, id) => {
            return (
              <li key={id}>
                {key}
                <button className="close" onClick={() => removekeywords(key)}>
                  <img src={close} alt="close icon" />
                </button>
              </li>
            );
          })}
          <a href="/" onClick={() => removeAllKeywords()}>
            Clear Filters
          </a>
        </ul>
      </div>
    </>
  );
};

export default Header;
