import React, { useState } from 'react'
import './App.css';
import {Greet} from "./components/Greet"
import { Person } from "./components/Person"

interface Name {
  first: string,
  last: string
}

const App: React.FC = () => {

  const names: Name[] = [
    {
      first: "Ryan",
      last:"Freas"
    }
  ]


  return (
    <div className="App">
      <Greet name={"Ryan"} />
      <Person names={names} />
    </div>
  );
}

export default App;
