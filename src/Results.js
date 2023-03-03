import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="mt-3">
          <strong>{props.results.word}</strong> {props.results.phonetic}
        </h2>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />

              <Synonyms meaning={meaning} />
              <hr />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
