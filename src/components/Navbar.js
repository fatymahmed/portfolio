import React from 'react';
import './style.css';
import { Link } from "react-scroll";

function Navbar(){
	function handleClick(e) {
		e.preventDefault();
		var x = document.getElementById("navbar-list");
		if (x.className === "nav-items") {
		  x.className += " responsive";
		} else {
		  x.className = "nav-items";
		}
	}

	function closeMenu(e) {
		e.preventDefault();
		var x = document.getElementById("navbar-list");
		if (x.className === "nav-items responsive") {
		  x.className = "nav-items";
		}
	}
  return(
		<nav id="navbar">
			<button type="button" onClick={handleClick} className="icon"><i className="fa fa-bars"></i></button>
			<div className="navbar-container">
				<div className="name active nav-item">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={-70}
						duration= {500} 
						onClick={closeMenu}>
							Fatima Ahmed
					</Link>
				</div>
				<div className="navbar-container">
					<ul className="nav-items" id="navbar-list">
						<li className="active nav-item">
							<Link
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}
								onClick={closeMenu}>
									Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="portfolio"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}
								onClick={closeMenu}>
									Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}
								onClick={closeMenu}>
									About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}
								onClick={closeMenu}>
									Contact
							</Link>
						</li>
				</ul>
			</div>
		</div>	
		</nav>
	)	
}

export default Navbar;