import React from 'react';


export const NavBar: React.FunctionComponent = () => {
	return (  
	<nav>
		<div className="nav-wrapper purple">
		<a href="#" className="brand-logo">React + Typescript</a>
		<ul className="right hide-on-med-and-down">
			<li><a href="#">Список дел</a></li>
			<li><a href="#">Информация</a></li>
		</ul>
		</div>
	</nav>);
}