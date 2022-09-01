import "./Banner.css";

import banner from "/Curso Alura/alura-organo/Alura-Organo/src/assets/imagens/banner.png";

const Banner = () => {
	//JSX
	return (
		<header className="banner">
			<img src={banner} alt="BannerPrincipalOrgano" />
		</header>
	);
};

export default Banner;
