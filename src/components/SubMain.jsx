import { useState } from 'react'
import RoundImg from './RoundImg.jsx'
import '../style/subMain.css'
import greyBg from '../assets/subMainGreyBg.jpg'

function SubMain() {
  /*const [bg, setBg] = useState('white');

  function changeBg() {
    if (bg === 'white') setBg('red');
    else setBg('white');
  }*/

  return (
    <div id='subMain'>
      <img src="https://www.pngall.com/wp-content/uploads/2016/03/Rat-PNG-Picture.png" alt="Grey background"></img>
      <img className="subMainGreyBg" src={greyBg} alt="Grey background"></img>
      
      <RoundImg />
    </div>
  )
}

export default SubMain
