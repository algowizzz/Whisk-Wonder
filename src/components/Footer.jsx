import { RiFacebookFill, RiTwitterFill, RiPinterestLine, RiPhoneFill } from 'react-icons/ri'
import '../index.css';

function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#" className="logo">Whisk&<span>Wonder</span></a>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="socials">
            <li><a href="#"><RiFacebookFill /></a></li>
            <li><a href="#"><RiTwitterFill /></a></li>
            <li><a href="#"><RiPinterestLine /></a></li>
            <li><a href="#"><RiPhoneFill /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 Whisk&Wonder. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;