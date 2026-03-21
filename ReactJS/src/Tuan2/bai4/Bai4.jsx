import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
StatusBadge;
function Bai4() {
  const [status, setCurrentStatus] = useState("offline");
  return (
    <div>
      <h3>Trạng thái: </h3>
      <StatusBadge status={status}></StatusBadge>
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setCurrentStatus("online")}
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          Online
        </button>
        <button
          onClick={() => setCurrentStatus("offline")}
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          Offline
        </button>
        <button
          onClick={() => setCurrentStatus("busy")}
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          Busy
        </button>
      </div>
    </div>
  );
}

export default Bai4;
