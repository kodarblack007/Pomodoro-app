import React from "react";
import "./ControlPanel.css";

function ModeButton({ mode, switchMode, isActive, toggleActive }) {
  return (
    <div className="control-panel">
      <button
        className={`node-button ${mode === "focus" ? "active" : ""}`}
        onClick={() => switchMode("focus")}
      >
       <span className="panpan">Focus</span> <br /> <img src="https://www.istockphoto.com/sign-in/assets/static/clock-95551521dbc3c4145473.svg" alt="" className="design" /> <span className="spans">25 min</span>
      </button>
      <button
        className={`mode-button ${mode === "shortBreak" ? "active" : ""}`}
        onClick={() => switchMode("shortBreak")}
      >
       <span className="panpan"> Short Break </span> <br /> <span className="spans">5 min</span>
      </button>
      <button
        className={`mode-button ${mode === "longBreak" ? "active" : ""}`}
        onClick={() => switchMode("longBreak")}
      >
       <span className="panpan">Long Break </span>  <br /><span className="spans">10 min</span>
      </button>
      <button className="start-button" onClick={toggleActive}>
        {isActive ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default ModeButton;
