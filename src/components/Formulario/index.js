import { useState } from "react";
import Botao from "../Botão";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

import "./Formulario.css";

const Formulario = (props) => {
	//#Hooks
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");

	// Lista de times
	const times = [
		"Programação",
		"Front-End",
		"Data Science",
		"DevOps",
		"Ux e Design",
		"Mobile",
		"Inovação e Gestão",
	];

	const aoSalvar = (evento) => {
		//controlar reload automático do react
		evento.preventDefault();
		props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
	};

	return (
		<section className="formulario">
			{/*  função fica dentro do form e não no botão para que haja uma validação do form */}
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar um card personalizado</h2>
				<CampoTexto
					// validação html CampoTexto
					required={true}
					label="Nome"
					placeholder="Digite seu nome"
					valor={nome}
					aoAlterado={(valor) => setNome(valor)}
				/>
				<CampoTexto
					required={true}
					label="Cargo"
					placeholder="Digite seu cargo"
					valor={cargo}
					aoAlterado={(valor) => setCargo(valor)}
				/>
				<CampoTexto
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					valor={imagem}
					aoAlterado={(valor) => setImagem(valor)}
				/>
				<ListaSuspensa
					label="Time"
					itens={times}
					valor={time}
					aoAlterado={(valor) => setTime(valor)}
				/>
				<Botao>Criar Card</Botao>
			</form>
		</section>
	);
};

export default Formulario;
