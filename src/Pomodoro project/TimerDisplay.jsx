// import React from "react";
// import "./TimerDisplay.css";

// function TimerDisplay({ time }) {
//   return (
//     <div className="timer-container">
//       <h2 className="timer-title">Pomodoro Timer</h2>
//       <div className="circular-timer">
//         <div className="time">{time}</div>
//       </div>
//     </div>
//   );
// }

// export default TimerDisplay;

import React from "react";
import "./TimerDisplay.css";

function TimerDisplay({ time }) {
  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="timer-container">
      <div className="dotted-circle">
        <div className="time">{formatTime(time)}</div>
      </div>
    </div>
  );
}

export default TimerDisplay;
