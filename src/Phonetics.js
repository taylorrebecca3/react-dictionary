import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <span className="text">{phonetic.text}</span>{" "}
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                Listen
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
