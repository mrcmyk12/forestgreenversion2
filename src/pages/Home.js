import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Hero from "../components/Hero";
import { FaTree, FaMoneyBill } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

class Home extends Component {
	constructor(props) {
		super();

		this.state = {
			heroImage:
				"https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		};
	}
	render() {
		console.log(this.props.homeCollection);
		return (
			<div>
				<Hero image={this.state.heroImage} />
				<Row
					style={{
						background: "#050d01",
						width: "100%",
						margin: "0",
                        paddingTop:"25px"
					}}>
					<Col>
						<FaTree color="white" size="2em" />
						<p style={{color:"white", fontSize:"1.5rem"}} className="subtitle">Environmentally Conscious</p>
					</Col>
					<Col>
						<FaMoneyBill color="white" size="2em" />
						<p style={{color:"white", fontSize:"1.5rem"}} className="subtitle">Hassle-Free Refunds</p>
					</Col>
					<Col>
						<MdPerson color="white" size="2em" />
						<p style={{color:"white", fontSize:"1.5rem"}} className="subtitle">Friendly Customer Service</p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Home;
