import React , {useRef} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';
import Login from './Login';
import Register from './Register';

const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    
		<header>
			<h3>My Account</h3>
			<nav ref={navRef}>
				
				
				<Link to='/myprofile'>My Profile</Link>
				<Link to='/'>SignIn</Link>
				<Link to='/register'>SignUp</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  )
}

export default Navbar
