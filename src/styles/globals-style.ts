import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import BannerBg from "@/styles/assets/images/banner-bg.png";

export const GlobalStyle = createGlobalStyle`
${normalize}

/************ Default Css ************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}

body {
  font-weight: 400;
  
  overflow-x: hidden;
  position: relative;
  background-color: #121212 !important;
  font-family: 'Centra', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  line-height: normal;

  
}

div {
  font-size: 1.0rem;
}

p, a, li, button, ul {
  margin: 0;
  padding: 0;
  line-height: normal;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}

button {
  border: 0;
  background-color: transparent;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

@media (min-width:1700px) {
	main .container {
		max-width: 100%;
		padding: 0 150px;
	}
}

p.success {
	color: green;
}

p.danger {
	color: red;
}

/************ Banner Css ************/
.banner {
  margin-top: 0;
  padding: 260px 0 100px 0;
  height: calc(100vh - 60px);
  background-image: url(${BannerBg.src});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner .tagline {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
}
.banner h1 {
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
.banner p {
  color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
}
.banner button {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.banner button svg {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}
.banner button:hover svg {
  margin-left: 25px;
}
.banner img {
  animation: updown 3s linear infinite;
}
@keyframes updown {
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
}
.txt-rotate > .wrap {
  border-right: 0.08em solid #666;
}

/************ Skills Css ************/
.skill {
  padding: 0 0 50px 0;
  position: relative;
}
.skill-bx {
  background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
}
.skill h2 {
	font-size: 45px;
	font-weight: 700;
}
.skill p {
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
}
.skill-slider {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.skill-slider .item img {
  width: 50%;
  margin: 0 auto 15px auto;
}
.background-image-left {
  top: 10%;
  position: absolute;
  bottom: 20%;
  width: 40%;
  z-index: -4;
}


`;
