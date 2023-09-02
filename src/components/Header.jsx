import '../style/header.css'
import '../style/imported.css'

function Header() {
  const inviteBot = () => {
    window.open(
      'https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot',
      '_blank'
    );
  };

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <header>
      <nav>
        <div id="title" onClick={inviteBot}>
          <h1>Linkstart</h1>
          <div id='titleUnderline'></div>
        </div>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </nav>

      <div id="rightNav">
        <input className="input" name="text" placeholder="Search..." type="search" />
        <button className="inviteButton" onClick={inviteBot}>Invite bot</button>
      </div>
    </header>
  )
}

export default Header
