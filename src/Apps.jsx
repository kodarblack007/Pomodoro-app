// 


import React, { useState, useEffect } from "react";
import TimerDisplay from "./Pomodoro project/TimerDisplay";
import ModeButton from "./Pomodoro project/ModeButton";
import "./App.css";
// import Page from "./Pomodoro project/Page";
 

const MODES = {
  focus: { time: 25 * 60, background: "#ffffff" },
  shortBreak: { time: 5 * 60, background: "#ffffff" },
  longBreak: { time: 10 * 60, background: "#ffffff" },
};

function App() {
  const [mode, setMode] = useState("focus");
  const [time, setTime] = useState(MODES["focus"].time);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, time]);

  const switchMode = (newMode) => {
    setMode(newMode);
    setTime(MODES[newMode].time);
    setIsActive(false);
  };

  return (
    <div className="app" style={{ backgroundColor: MODES[mode].background }}>

      {/* <Page/> */}
      <div className="container">
        <h2 className="title">Pomodoro Timer</h2>
        <TimerDisplay time={time} />
        <ModeButton
          mode={mode}
          switchMode={switchMode}
          isActive={isActive}
          toggleActive={() => setIsActive((prev) => !prev)}
        />
      </div>
       
    </div>

    
    
  );
}

export default App;
