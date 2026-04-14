import React, { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setLapName("");
  };

  const handleAddLap = () => {
    setLaps([
      ...laps,
      {
        name: lapName || `Lap ${laps.length + 1}`,
        time: time,
      },
    ]);

    setLapName("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const pad = (num) => num.toString().padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: "20px" }}
    >
      <h1>⏱️ Stopwatch</h1>
      <h2 style={{ fontSize: "3rem", fontFamily: "monospace" }}>
        {formatTime(time)}
      </h2>

      <div style={{ marginBottom: "20px" }}>
        {!isRunning ? (
          <button onClick={handleStart} style={btnStyle("green")}>
            Start
          </button>
        ) : (
          <button onClick={handlePause} style={btnStyle("orange")}>
            Pause
          </button>
        )}
        <button onClick={handleReset} style={btnStyle("red")}>
          Reset
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Nhập tên Lap (VD: Vòng 1)"
          value={lapName}
          onChange={(e) => setLapName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleAddLap} style={btnStyle("blue")}>
          Add Lap
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        {laps.map((lap, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>{lap.name}</span>
            <span style={{ fontFamily: "monospace" }}>
              {formatTime(lap.time)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const btnStyle = (color) => ({
  padding: "10px 20px",
  margin: "0 5px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: color,
  color: "white",
  border: "none",
  borderRadius: "4px",
});
