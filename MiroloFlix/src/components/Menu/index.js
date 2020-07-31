//Criação do Componente referente ao MENU do APP
import React from 'react';
import Logo from '../../assets/images/logo_TMOF.png'
import '../Menu/Menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button'

function Menu() {
	return (
		<nav className="Menu">
			<a href="/">
				<img src={Logo} className="Logo"  alt="Todo Mundo Odeia o Flix"/>
			</a>
			<Button ahref="/" className="ButtonLink">
				Novo Vídeo
			</Button>
		</nav>
	);
}

export default Menu;
