import "./CampoTexto.css";

const CampoTexto = (props) => {
	// let valor = '';

	const aoDigitado = (evento) => {
		props.aoAlterado(evento.target.value);
	};

	return (
		<div className="campo-texto">
			<label>{props.label}</label>
			{/* concatenando string com props usando javascript (TemplateString) */}
			<input
				// validação html
				required={props.required}
				onChange={aoDigitado}
				value={props.valor}
				placeholder={`${props.placeholder} ...`}
			/>
		</div>
	);
};

export default CampoTexto;
