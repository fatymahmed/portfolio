import React from 'react';
import './style.css';
import { Link, animateScroll as scroll } from "react-scroll";

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
  return(
		<nav id="navbar">
			<button type="button" onClick={handleClick} className="icon"><i className="fa fa-bars"></i></button>
			<div className="nav-content">
					<ul className="nav-items" id="navbar-list">
						<li className="active nav-item">
							<Link
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}>
									Fatima Ahmed
							</Link>
						</li>
						<li className="active nav-item">
							<Link
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}>
									Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}>
									About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="portfolio"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}>
									Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="blog"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}>
									Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration= {500}>
									Contact
							</Link>
						</li>
				</ul>
			</div>
		</nav>
	)	
}

export default Navbar;