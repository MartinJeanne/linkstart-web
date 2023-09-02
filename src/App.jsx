import { useState } from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import './style/page2.css'

function App() {
  //const [count, setCount] = useState(0);

  /*function incrementCount() {
    setCount((count) => count + 1);
  }*/

  return (
    <>
      <Header />
      <Main />
      <div className='page2'>
      </div>
      <Footer />
    </>
  )
}

export default App
