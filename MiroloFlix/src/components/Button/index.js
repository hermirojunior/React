import styled from "styled-components";

const Button = styled.a`
	color: var(--white);
	background-color: rgb(22, 80, 162);
	box-shadow: 0 4px 8px 0 rgb(255, 255, 255), 0 4px 20px 0 rgba(255, 255, 255, 0.19);
	border: 1px solid var(--white);
	box-sizing: border-box;
	cursor: pointer;
	padding: 16px 24px;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
	display: inline-block;
	transition: opacity .3s;

 	&:hover,
 	&ButtonLink:focus {
	opacity: .5;
 }
`;

export default Button;