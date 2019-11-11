import React, { useState } from 'react';
import './App.css';
import Display from './components/display';
import Dashboard from './components/dashboard';

function App() {

  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  const handleCount = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'hit') {
      setStrikes(0)
      setBalls(0)
    }

    if (e.target.value === 'ball') {
      if (balls === 3) {
        setStrikes(0)
        setBalls(0)
      } else {
        setBalls( balls + 1)
      }
    }
    if (e.target.value === 'strike') {
      if (strikes === 2) {
        setStrikes(0)
        setBalls(0)
      } else {
        setStrikes(strikes + 1)
      }
    }

    if (e.target.value === 'foul') {
      if (strikes > 1) {
        return null
      } else {
        setStrikes( strikes + 1)
      }
    }

   
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard handleCount={handleCount} balls={balls} strikes={strikes} />
    </div>
  );
}

export default App;
