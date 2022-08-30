import "./Banner.css";

import banner from "/Curso Alura/alura-organo/Alura-Organo/src/assets/imagens/banner.png";

const Banner = () => {
	//JSX
	return (
		<header className="banner">
			<img src={banner} alt="O banner principal da pg do Organo" />;
		</header>
	);
};

export default Banner;
