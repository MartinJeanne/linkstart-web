import { useState } from 'react'
import '../style/roundImg.css'

function RoundImg() {
  /*const [bg, setBg] = useState('white');

  function changeBg() {
    if (bg === 'white') setBg('red');
    else setBg('white');
  }*/

  return (
    <div className='roundImg'>
      <img src="https://www.pngall.com/wp-content/uploads/2016/03/Rat-PNG-Picture.png" alt="" />
    </div>
  )
}

export default RoundImg
