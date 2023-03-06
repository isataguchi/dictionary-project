import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="Player">
          <ReactAudioPlayer src={props.phonetic.audio} controls />{" "}
        </span>
        {"  "}
        <p className="Phonetic-text">{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
