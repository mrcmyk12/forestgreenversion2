import React, {Component} from 'react';
import { Row, Col, Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

class Grocery extends Component {
	constructor() {
		super();

		this.state = {
			groceryCollection: [],
			products: [],
			image: {}
		};
	}

	componentDidMount() {
		const groceryCollectionId = "gid://shopify/Collection/389175640321";
		this.props.client.collection
			.fetchWithProducts(groceryCollectionId)
			.then((res) => {
				this.setState({
					groceryCollection: res,
					image: res.image,
					products: res.products
				});
				console.log(res);
				console.log(res.products);
			});
	}

	render() {
		console.log(this.state.groceryCollection);
		return (
			<div>
				<Hero
					button="false"
					description={this.state.groceryCollection.description}
					title={this.state.groceryCollection.title}
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

export default Grocery;
