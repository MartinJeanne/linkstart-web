import { useState } from 'react'
import loopIcon from './assets/loop.png'
import linkstartAndDiscord from './assets/linkstartAndDiscord.png'
import './App.css'
import './page2.css'
import './imported.css'

function App() {
  //const [count, setCount] = useState(0);

  /*function incrementCount() {
    setCount((count) => count + 1);
  }*/

  const inviteBot = () => {
    window.open(
      'https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot',
      '_blank'
    );
  };

  return (
    <>
      <header>
        <nav>
          <div id="title" onClick={inviteBot}>
            <h1>Linkstart</h1>
            <div className='underline'></div>
          </div>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </nav>

        <div id="rightNav">
          <input className="input" name="text" placeholder="Search..." type="search" />
          <button className="inviteButton" onClick={inviteBot}>Invite bot</button>
        </div>
      </header>

      <div id="main">
        <div>
          <h2>A bot designed<br />for <span className="textRed">you</span>!</h2>
          <p>Linkstart is a bot wich allow you to listen<br />to <span className="textRed">music </span>
            and view <span className="textRed">quote</span> of famous persons,<br /> and that is only the gist of it!</p>
        </div>
        <div>
          <img id="linkstartAndDiscord" src={linkstartAndDiscord} alt="" />
        </div>
      </div>

      <div className='page2'>

      </div>

      <footer>
        <p>© 2023 Garwalle - all rights reserved</p>
      </footer>
    </>
  )
}

export default App
