import { useState } from 'react'
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
      <img className="subMainGreyBg" src={greyBg} alt="Grey background"></img>
    </div>
  )
}

export default SubMain
