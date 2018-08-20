import React from 'react'
import { Link } from 'gatsby'

import aimhigherLogo from '../images/aimhigher.svg';

import './footer.scss';

const Footer = () => (
    <footer>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <nav>
            <a href="https://www.facebook.com/JanneMartinCelebrant/" target="_blank" rel="nofollow noreferrer noopener">Facebook</a>
        </nav>
        <img src={aimhigherLogo} alt="Logo for AimHigher Web Design" />
  </footer>
)

export default Footer
