//Criação do Componente referente ao MENU do APP
import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo_TMOF.png'
import '../Menu/Menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button'

function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
				<img src={Logo} className="Logo"  alt="Todo Mundo Odeia o Flix"/>
			</Link>
			<Button as={Link} className="ButtonLink" to="cadastro/video">
				Novo Vídeo
			</Button>
		</nav>
	);
}

export default Menu;
