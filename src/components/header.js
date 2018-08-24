import React from 'react'
import { Link } from 'gatsby'
import Media from 'react-media'

import Logo from '../images/logo.svg';
import './header.scss';

const Header = () => (
	<header>
		<Link to="/" className="logo"><Logo /></Link>
		<nav id="menu">
			<Link to="/about">About</Link>
			<Link to="/weddings">Weddings</Link>
			<Link to="/funerals">Funerals</Link>
			<Link to="/other-services">Other Services</Link>
			<Link to="/faq">FAQ</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	</header>
)

export default Header
