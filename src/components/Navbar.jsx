import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiShoppingCartLine, RiNotification3Fill } from 'react-icons/ri';
import '../index.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <Link to="/" className="logo">Whisk&<span>Wonder</span></Link>
        </div>
        <div className="nav__menu__btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
      <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
        <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
        <li><button onClick={() => scrollToSection('categories')}>Categories</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact Us</button></li>
      </ul>
      <div className="nav__btns">
        <Link to="/cart" className="btn"><RiShoppingCartLine /></Link>
        <button className="btn"><RiNotification3Fill /></button>
      </div>
    </nav>
  );
}

export default Navbar;