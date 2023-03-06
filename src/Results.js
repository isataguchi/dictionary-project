import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>{" "}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <h4>
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              </h4>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
                <Meaning meaning={meaning} />

                <Synonyms meaning={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
