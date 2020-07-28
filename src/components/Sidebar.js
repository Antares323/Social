import React from 'react';

const Sidebar = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<a href="#" className="nav__link">Profile</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">News</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">Message</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">Menu</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">Setting</a>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;