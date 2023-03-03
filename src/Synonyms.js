import React from "react";

export default function Synonyms(props) {
  if (props.meaning.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        {props.meaning.synonyms.map(function (synonym, index) {
          return (
            <div>
              <li key={index}> {synonym} </li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
