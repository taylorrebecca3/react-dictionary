import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              {phonetic.text}{" "}
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
