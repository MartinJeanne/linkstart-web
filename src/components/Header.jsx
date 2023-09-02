import '../style/header.css'
import '../style/imported.css'

function Header() {
  const inviteBot = () => {
    window.open(
      'https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot',
      '_blank'
    );
  };

  return (
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
  )
}

export default Header
