import "./CampoTexto.css";

const CampoTexto = (props) => {
	return (
		<div className="campo-texto">
			<label>{props.label}</label>
			{/* concatenando string com props usando javascript (TemplateString) */}
			<input placeholder={`${props.placeholder} ...`} />
		</div>
	);
};

export default CampoTexto;
