import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../images/images.css";
import "../components/components.css";

function SocialsBar() {
	return (
		<div className="socials-bar">
			{/* GitHub */}
			<div className="social-box">
				<img className="social-icon" src={GitHub} alt="GitHub Logo" />
			</div>
			{/* LinkedIn */}
			<div className="social-box">
				<img
					className="social-icon"
					src={LinkedIn}
					alt="LinkedIn Logo"
				/>
			</div>
			{/* Instagram */}
			<div className="social-box">
				<img
					className="social-icon"
					src={Instagram}
					alt="Instagram Logo"
				/>
			</div>
			{/* Email */}
			<div className="social-box">
				<img className="social-icon" src={Email} alt="Email Icon" />
			</div>
		</div>
	);
}

export default SocialsBar;
