import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='d-flex header '>
      <Link to={"/"}>
      <div>
        <p className='logo'>EPHTALYA'S MOVIES</p>
      </div>
      </Link>
      <div>
        <ul className='menu'>
          <li>Ana Sayfa</li>
          <li>Filmler</li>
          <li>Diziler</li>
          <li>Yorumlar</li>

        </ul>
      </div>
    </header>
  )
}

export default Header