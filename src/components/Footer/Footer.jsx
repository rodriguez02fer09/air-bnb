import "./Footer.css";
import {
	FaInstagram,
	FaTwitter,
	FaFacebook,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () =>
	<footer className="footer">
		<p>©2022 Digital Booking</p>
		<div className="social-media">
			<FaFacebook/>
			<FaLinkedinIn/>
			<FaTwitter/>
			<FaInstagram/>
		</div>
	</footer>

export default Footer;
