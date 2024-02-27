import React from 'react';

interface GreetProps {
  name: string
}

export const Greet: React.FC<GreetProps> = ({ name }) => {
  return (
    <div className="App">
      <h2>Welcome {name}</h2>
    </div>
  );
  }