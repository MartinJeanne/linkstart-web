import { useState } from 'react'
import loopIcon from './assets/loop.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <header>
        <nav>
          <h1>Linkstart</h1>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </nav>
        <div id="rightNav">
          <img id="loopIcon" src={loopIcon} alt="loop icon" />
          <button>Invite</button>
        </div>
      </header>
      <div className="card">
        <button onClick={incrementCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
