import { useState } from 'react'
import RoundImg from './RoundImg.jsx'
import '../style/subMain.css'
import greyBg from '../assets/subMainGreyBg.png'
import man1 from '../assets/persona/man1.png'
import man2 from '../assets/persona/man2.png'
import woman1 from '../assets/persona/woman1.png'
import woman2 from '../assets/persona/woman2.png'


function SubMain() {
  /*const [bg, setBg] = useState('white');

  function changeBg() {
    if (bg === 'white') setBg('red');
    else setBg('white');
  }*/

  var subMainStyle = {
    backgroundImage: `url(${greyBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <div id='subMain' style={subMainStyle}>
      <h1 className='subMainTitle'>Join thousand of user!</h1>

      <div id='subMainContent'>
        <div className='profilPictures'>
          <div className='profilPictureLine'>
            <RoundImg src={man1} />
          </div>
          <div className='profilPictureLine'>
            <RoundImg src={man2} />
            <RoundImg src={woman1} />
          </div>
          <div className='profilPictureLine'>
            <RoundImg src={woman2} />
          </div>
        </div>
        <div className='subMainPlaylists'>
          <h1>Gazoil</h1>
          <p>Playlist saved:</p>
          <div className='profilPictureLine'>
            <RoundImg src={man1} />
          </div>
          <div className='profilPictureLine'>
            <RoundImg src={man1} />
            <RoundImg src={man1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubMain
