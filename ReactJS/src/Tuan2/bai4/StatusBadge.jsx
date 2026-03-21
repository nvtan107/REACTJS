import React from "react";

function StatusBadge({ status }) {
  let statusColor = "gray";
  let text = "Offline";
  if (status === "online") {
    statusColor = "green";
    text = "Online";
  } else if (status === "busy") {
    statusColor = "red";
    text = "Busy";
  }
  return <div style={{ backgroundColor: statusColor }}>{text}</div>;
}

export default StatusBadge;
