import React, { useState } from 'react'
import './App.css';
import { Greet } from "./components/Greet"
import { Person } from "./components/Person"
import { Status } from "./components/Status"

interface Name {
  first: string,
  last: string
}

const App: React.FC = () => {

  const names: Name[] = [
    {
      first: "Ryan",
      last: "Freas"
    }
  ]


  return (
    <div className="App">
      <Greet name={"Ryan"} />
      <Person names={names} />
      <Status status="loading" />
    </div>
  );
}

export default App;

