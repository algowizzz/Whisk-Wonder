import headerImg from '../assets/header.png'
import { RiFacebookFill, RiTwitterFill, RiPinterestLine, RiPhoneFill } from 'react-icons/ri'
import '../index.css';

function Header() {
  return (
    <header id="home">
      <div className="header__image">
        <img src={headerImg} alt="header" />
      </div>
      <div className="header__content">
        <h1>WELCOME TO OUR <span>ICE CREAM</span> WORLD</h1>
        <p className="section__description">
          Indulge in a delightful journey of flavors! Discover creamy, delicious
          ice creams crafted to bring joy to every scoop. Welcome to your sweet
          escape!
        </p>
        <div className="header__btn">
          <button className="btn">Buy Now</button>
        </div>
        <ul className="socials">
          <li><a href="#"><RiFacebookFill /></a></li>
          <li><a href="#"><RiTwitterFill /></a></li>
          <li><a href="#"><RiPinterestLine /></a></li>
          <li><a href="#"><RiPhoneFill /></a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;