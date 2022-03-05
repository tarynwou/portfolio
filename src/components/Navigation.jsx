import * as React from "react";
import Logo from "../images/tw-logo-1.png";

const Navigation = () => {
	return (
		// header
		<div>
			{/* //image */}
			<img className="logo" src={Logo} alt="Taryn Wou Logo" />
			{/* //navlinks */}
			<div>
				<row>
					{/* //About */}
					<div className="navlink">
						<a href="">About</a>
					</div>
					{/* //Portfolio */}
					<div className="navlink">
						<a href="">Portfolio</a>
					</div>
					{/* //Experience */}
					<div className="navlink">
						<a href="">Experience</a>
					</div>
					{/* //Resume */}
					<div className="navlink">
						<a href="">Resume</a>
					</div>
					{/* //Contact */}
					<div className="navlink" id="contact-button">
						<a href="mailto:tarynwou@gmail.com">Contact</a>
					</div>
				</row>
			</div>
		</div>
	);
};

export default Navigation;
