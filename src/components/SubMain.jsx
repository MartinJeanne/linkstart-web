import { useState } from 'react'
import RoundImg from './RoundImg.jsx'
import '../style/subMain.css'
import greyBg from '../assets/subMainGreyBg.png'

function SubMain() {
  /*const [bg, setBg] = useState('white');

  function changeBg() {
    if (bg === 'white') setBg('red');
    else setBg('white');
  }*/

  const src = "https://www.pngall.com/wp-content/uploads/2016/03/Rat-PNG-Picture.png";

  var subMainStyle = {
    backgroundImage: `url(${greyBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <div id='subMain' style={subMainStyle}>
      <div className='profilPictures'>
        <div className='profilPictureLine'>
          <RoundImg src={src} />
        </div>
        <div className='profilPictureLine'>
          <RoundImg src={src} />
          <RoundImg src={src} />
        </div>
        <div className='profilPictureLine'>
          <RoundImg src={src} />
        </div>
      </div>
      <div className='subMainPlaylists'>
        <h1>Gazoil</h1>
        <p>Playlist saved:</p>
        <div className='profilPictureLine'>
          <RoundImg src={src} />
        </div>
        <div className='profilPictureLine'>
          <RoundImg src={src} />
          <RoundImg src={src} />
        </div>
      </div>
    </div>
  )
}

export default SubMain
