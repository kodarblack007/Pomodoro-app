import React from "react";
import ModeButton from "./ModeButton";

const ControlPanel = ({ mode, switchMode, isActive, setIsActive }) => {
  return (
    <div className="control-panel">
      <ModeButton 
        isActive={mode === "focus"}
        onClick={() => switchMode("focus")}
        label="Focus"
        time = "25 min"
      />
      <ModeButton
        isActive={mode === "shortBreak"}
        onClick={() => switchMode("shortBreak")}
        label="Short Break"
        time="5 min"
      />
      <ModeButton
        isActive={mode === "longBreak"}
        onClick={() => switchMode("longBreak")}
        label="Long Break"
        time="10 min"
      />
       
       
       
    </div>
  );
};

export default ControlPanel;
