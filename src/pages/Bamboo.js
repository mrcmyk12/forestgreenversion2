import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

class Bamboo extends Component {
	constructor() {
		super();

		this.state = {
			bambooCollection: [],
			products: [],
			image: {}
		};
	}

	componentDidMount() {
		const bambooCollectionId = "gid://shopify/Collection/388931682561";
		this.props.client.collection
			.fetchWithProducts(bambooCollectionId)
			.then((res) => {
				this.setState({
					bambooCollection: res,
					image: res.image,
					products: res.products
				});
				console.log(this.state.bambooCollection);
				console.log(res.products);
			});
	}

	render() {
		console.log(this.state.image);
		return (
			<div>
				<Hero
					button="false"
					description={this.state.bambooCollection.description}
					title={this.state.bambooCollection.title}
					image={this.state.image.src}
				/>
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
							<Col md="4" style={{marginTop:"24px"}}>
								<Link
									style={{ textDecoration: "none", color: "black" }}
									to={`/products/${product.handle}`}
									key={product.id}
									state={{ product: product }}>
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
			</div>
		);
	}
}

export default Bamboo;
