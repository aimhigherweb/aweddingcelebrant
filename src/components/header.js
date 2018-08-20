import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/weddings">Weddings</Link>
      <Link to="/funerals">Funerals</Link>
      <Link to="/other-services">Other Services</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
  </header>
)

export default Header
