import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	Nav
} from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<Navbar
				dark
				color="black"
				expand="md"
				fixed="top"
				className="custom-navbar">
				<Link to="/">
					<NavbarBrand>Forest Green</NavbarBrand>
				</Link>
				<NavbarToggler />
				<Collapse navbar>
					<Nav style={{ width: "75%" }} className="mr-auto" navbar>
						<NavItem>
							<Link
								to="/collections/bamboo-collection"
								className="nav-text"
								style={{ color: "white" }}>
								Bamboo Collection
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/collections/home-essentials"
								className="nav-text"
								style={{ color: "white" }}>
								Home Essentials
							</Link>
						</NavItem>
						<NavItem href="">
							<Link
								to="/collections/grocery-collection"
								className="nav-text"
								style={{ color: "white" }}>
								Grocery Collection
							</Link>
						</NavItem>
					</Nav>
					<div style={{ width: "25%" }}></div>
					<div style={{ cursor: "pointer" }}>
						<AiOutlineShoppingCart
							style={{ marginLeft: "20px", marginRight: "0px" }}
							size="40px"
						/>
					</div>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
