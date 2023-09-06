import { useState } from 'react'
import RoundImg from './RoundImg'
import '../style/subMain.css'
import greyBg from '../assets/subMainGreyBg.png'
import man1 from '../assets/persona/man1.png'
import man2 from '../assets/persona/man2.png'
import woman1 from '../assets/persona/woman1.png'
import woman2 from '../assets/persona/woman2.png'


function SubMain() {
  const subMainStyle = {
    backgroundImage: `url(${greyBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  const json = [
    {
      index: 0, src: man1, playlists: [
        { src: 'https://www.just-gregory.net/uploads/5e9d7f115187f/gregory-lemarchal-discographie-mobile.jpeg' },
        { src: 'https://yt3.googleusercontent.com/LedJrAbyRmdXaeQ5pApSraBi73H-Hey5VnprPOivU2guuKlg2yx528skC7rzRADcyqVGlBfBxA=s900-c-k-c0x00ffffff-no-rj' },
        { src: 'https://media.senscritique.com/media/media/000007086520/1200x600/cover.jpg' },
      ]
    },
    {
      index: 1, src: man2, playlists: [
        { src: 'https://static.fnac-static.com/multimedia/Images/FR/NR/40/69/60/6318400/1540-1/tsp20141002130326/Motion.jpg' },
        { src: 'https://img.nrj.fr/vAvIQHqBXrspahJQ6GmGYDO0sqE=/800x450/smart/https%3A%2F%2Fmedia.nrj.fr%2F436x327%2F2014%2F05%2Fkyo_1779.jpg' },
        { src: 'https://static.fnac-static.com/multimedia/Images/FR/NR/2c/d8/06/448556/1540-1/tsp20161011114552/Sauver-l-amour.jpg' },
      ]
    },
    {
      index: 2, src: woman1, playlists: [
        { src: 'https://harpersbazaar.com.au/wp-content/uploads/2023/06/353220414_1518255062314634_8458670024613668421_n.jpg' },
        { src: 'https://m.media-amazon.com/images/I/61TiNLdUZnL._SL1500_.jpg' },
        { src: 'https://img.nrj.fr/ZlrStW9SdgYcMeUg-7SUchsXldc=/800x450/smart/medias%2F2022%2F10%2F633e863bbec7e_633e864099b74.jpg' },
      ]
    },
    {
      index: 3, src: woman2, playlists: [
        { src: 'https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/9/2/2/0886971020229/tsp20120921123756/The-Fray.jpg' },
        { src: 'https://m.media-amazon.com/images/I/81iC+O0ec2L._UF894,1000_QL80_.jpg' },
        { src: 'https://media.nrj.fr/436x327/2013/10/james-arthur-bio-jpg.jpg' },
      ]
    },
  ];

  const solo =  { margin: '0 30%' };

  const [personaIndex, setpersonaIndex] = useState(0);
  const handleClick = (index) => {
    setpersonaIndex(index);
  }

  return (
    <div id='subMain' style={subMainStyle}>
      <h1 className='subMainTitle'>Join thousand of user!</h1>

      <div id='subMainContent'>
        <div className='profilPictures'>
          <div className='imgBlock'>
            {json.map((img, i) => {
              if (i % 3 == 0) return <RoundImg key={img.index} src={img.src} onClick={() => handleClick(img.index)}
                style={solo} />
              return <RoundImg key={img.index} src={img.src} onClick={() => handleClick(img.index)} />
            })}
          </div>
        </div>
        <div className='subMainPlaylists'>
          <h1>Enguerrand</h1>
          <p>Playlist saved:</p>
          <div className='imgBlock'>
            {json[personaIndex].playlists.map((img, i) => {
              if (i % 3 == 0) return <RoundImg key={img.id} src={img.src} style={solo} />
              return <RoundImg key={img.id} src={img.src} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubMain
