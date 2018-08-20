import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.svg';
import './header.scss';

const Header = () => (
  <header>
      <Link to="/"><img src={logo} alt="Logo for Janne Martin which is a graphic of a small purple flower" /></Link>
      <Link to="/about">About</Link>
      <Link to="/weddings">Weddings</Link>
      <Link to="/funerals">Funerals</Link>
      <Link to="/other-services">Other Services</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
  </header>
)

export default Header
