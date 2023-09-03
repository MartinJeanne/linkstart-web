import '../App.css'
import '../style/main.css'
import mainGreyBg from '../assets/mainGreyBg.jpg'
import discordImg from '../assets/discord.png'
import linkstartImg from '../assets/linkstart.png'
import musicIcon from '../assets/music.png'
import quoteIcon from '../assets/quote.png'
import confettisIcon from '../assets/confettis.png'

function Main() {

  return (
    <div id="main">
      <img className="mainGreyBg" src={mainGreyBg} alt="Grey background"></img>
      <div>
        <h2>A bot designed<br />for <span className="textRed">you</span>!</h2>
        <p>Linkstart is a bot wich allow you to listen<br />to <span className="textRed">music</span>,
          view <span className="textRed">quote</span> of famous persons and<br />have <span className="textRed">fun</span>, but that is only the gist of it!</p>
        <div className='icons'>
          <img className='icon' id='musicIcon' src={musicIcon} alt="" />
          <img className='icon' id='quoteIcon' src={quoteIcon} alt="" />
          <img className='icon' id='confettisIcon' src={confettisIcon} alt="" />
        </div>
      </div>

      <div className='imgs'>
        <img className="img" id="linkstartImg" src={linkstartImg} alt="" />
        <img className="img" id="discordImg" src={discordImg} alt="" />
      </div>

    </div>
  )
}

export default Main
