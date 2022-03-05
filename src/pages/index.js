import * as React from "react";
import Navigation from "../components/Navigation";
import Logo from "../images/tw-logo-1.png";
import Headshot from "../images/Headshot.png";
import "bootstrap/dist/css/bootstrap.css";
import "../images/images.css";

// styles
const pageStyles = {
	color: "#232129",
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
};
const headingAccentStyles = {
	color: "#663399",
};
const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
};
const listStyles = {
	marginBottom: 96,
	paddingLeft: 0,
};
const listItemStyles = {
	fontWeight: 300,
	fontSize: 24,
	maxWidth: 560,
	marginBottom: 30,
};

const linkStyle = {
	color: "#8954A8",
	fontWeight: "bold",
	fontSize: 16,
	verticalAlign: "5%",
};

const docLinkStyle = {
	...linkStyle,
	listStyleType: "none",
	marginBottom: 24,
};

const descriptionStyle = {
	color: "#232129",
	fontSize: 14,
	marginTop: 10,
	marginBottom: 0,
	lineHeight: 1.25,
};

const docLink = {
	text: "Documentation",
	url: "https://www.gatsbyjs.com/docs/",
	color: "#8954A8",
};

const badgeStyle = {
	color: "#fff",
	backgroundColor: "#088413",
	border: "1px solid #088413",
	fontSize: 11,
	fontWeight: "bold",
	letterSpacing: 1,
	borderRadius: 4,
	padding: "4px 6px",
	display: "inline-block",
	position: "relative",
	top: -2,
	marginLeft: 10,
	lineHeight: 1,
};

// markup
// const IndexPage = () => {
function IndexPage() {
	return (
		// <main style={pageStyles}>
		<div style={pageStyles}>
			{/* <title>Taryn Wou</title> */}
			<div class="container">
				<div class="row">
					<Navigation></Navigation>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div class="row">
					<div class="col-lg-4">
						<img
							className="headshot"
							src={Headshot}
							alt="Taryn Wou Headshot"
						/>
					</div>
					<div class="col-lg-8">
						<p>Hi, my name is</p>
						<h1 style={headingStyles}>
							Taryn Wou.
							<br />
						</h1>
						<h1>I am a developer.</h1>
						<p>
							As a business and computer science student at the
							University of British Columbia, I am actively
							looking for opportunities to develop my technical
							abilities and drive value back into the community.
						</p>
					</div>
				</div>
			</div>
		</div>
		// </main>
	);
}

export default IndexPage;
