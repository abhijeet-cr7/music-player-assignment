import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls() {
  return (
    <div className="c-player--controls">
      <button className="skip-btn">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      &nbsp; &nbsp;
      <button className="skip-btn">
        <FontAwesomeIcon icon={faPlay} />
      </button>
      &nbsp; &nbsp;
      <button className="skip-btn">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
