import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardLink,
	CardImg,
	CardImgOverlay
} from "reactstrap";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { FaTree, FaMoneyBill } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

class Home extends Component {
	constructor() {
		super();

		this.state = {
			heroImage:
				"https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			homeCollection: [],
			products: [],
            description:"Eco-Friendly Products for Conscious Consumers"
		};
	}

	componentDidMount() {
		const homeCollectionId = "gid://shopify/Collection/388849533185";
		this.props.client.collection
			.fetchWithProducts(homeCollectionId, { productsFirst: 3 })
			.then((res) => {
				this.setState({
					homeCollection: res,
					products: res.products
				});
				console.log(this.state.homeCollection);
				console.log(res.products);
			});
	}

	render() {
		return (
			<div>
				<Hero title="Forest Green" image={this.state.heroImage} description={this.state.description} button='true'/>
				<Row
					style={{
						background: "#050d01",
						width: "100%",
						margin: "0",
						paddingTop: "25px",
						paddingBottom: "25px"
					}}>
					<Col md="4">
						<FaTree color="white" size="2em" />
						<p
							style={{ color: "white", fontSize: "1.5rem", margin: "0" }}
							className="subtitle">
							Environmentally Conscious
						</p>
						<p
							style={{
								textTransform: "capitalize",
								fontSize: "1rem",
								color: "white",
								fontWeight: "200"
							}}>
							so that you can feel guilt-free doing your part to keep our
							earth clean
						</p>
					</Col>
					<Col md="4">
						<FaMoneyBill color="white" size="2em" />
						<p
							style={{ color: "white", fontSize: "1.5rem", margin: "0" }}
							className="subtitle">
							Hassle-Free Refunds
						</p>
						<p
							style={{
								textTransform: "capitalize",
								fontSize: "1rem",
								color: "white",
								fontWeight: "200"
							}}>
							if you're not 100% satsified, don't worry, get your money
							back
						</p>
					</Col>
					<Col md="4">
						<MdPerson color="white" size="2em" />
						<p
							style={{ color: "white", fontSize: "1.5rem", margin: "0" }}
							className="subtitle">
							Friendly Customer Service
						</p>
						<p
							style={{
								textTransform: "capitalize",
								fontSize: "1rem",
								color: "white",
								fontWeight: "200"
							}}>
							i am here to help, just let me know what the problem is and
							we can figure it out
						</p>
					</Col>
				</Row>
				<Row style={{ marginTop: "24px", width: "100%" }}>
					<Col>
						<p className="h2">Latest Products</p>
					</Col>
				</Row>
				<Container>
					<Row
						style={{
							paddingTop: "25px",
							alignContent: "center",
							textAlign: "center",
							display: "flex",
							width: "100%"
						}}>
						{this.state.products.map((product) => {
							return (
								<Col md="4">
									<Link
										style={{ textDecoration: "none", color: "black" }}
										to={`/products/${product.handle}`} key={product.id} state={{product: product}}>
										<Card>
											<CardImg
												alt={product.title}
												src={product.images[0].src}
											/>
											<CardBody>
												<p className="body">{product.title}</p>
												<p className="body-bold">
													{product.variants[0].price}
												</p>
											</CardBody>
										</Card>
									</Link>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Home;
