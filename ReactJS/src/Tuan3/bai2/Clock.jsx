import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h3>Đồng hồ: {time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default Clock;
