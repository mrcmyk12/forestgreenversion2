import React from "react";
import { Row, Col, Button } from "reactstrap";

const Hero = (props) => {
	return (
		<div style={{ display: "flex", height:"100vh", width:"95%" }}>
			<img
				style={{ height: "100vh", width: "100%", padding: "0",position:"absolute" }}
				src={props.image}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "0",
					background: "rgb(0,0,0)",
					background: "rgba(0,0,0,0.5)",
					width: "100%",
					opacity: "1",
					color: "white",
					fontSize: "4rem",
					fontWeight: "900",
					textAlign: "center",
					height: "100vh",
					paddingTop: "15%",
					justifyContent: "center"
				}}>
				Forest Green
				<div className="subtitle">
					Eco-Friendly Products for Conscious Consumers
				</div>
				<Button className="brand-button-primary">
					Shop Our Collection
				</Button>
			</div>
		</div>
	);
};

export default Hero;
