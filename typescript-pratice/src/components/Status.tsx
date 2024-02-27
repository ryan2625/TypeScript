import React from 'react';

interface StatusProps {
  status: "loading" | "success"
}

export const Status: React.FC<StatusProps> = ({ status }) => {
    let message
    if (  status === "loading") {
        message = "Loading..."
    } else {
        message = "Error or sucess"
    }
  return (
    <div className="App">
      <h2>{message}</h2>
    </div>
  );
}