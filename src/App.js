import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Bamboo from "./pages/Bamboo";
import Grocery from "./pages/Grocery";
import ProductPage from "./pages/ProductPage";

class App extends Component {
	constructor() {
		super();

		this.state = {
			isCartOpen: false,
			isMenuOpen: false,
			checkout: { lineItems: [] },
			products: [],
			product: {},
			bambooCollection: [],
			homeCollection: [],
			collections: []
		};
	}

	componentDidMount() {
		if (localStorage.checkout_id) {
			this.props.client.checkout
				.fetch(localStorage.checkout_id)
				.then((res) => {
					this.setState({
						checkout: res
					});
				});
		} else {
			this.props.client.checkout.create().then((res) => {
				this.setState({
					checkout: res
				});
			});
		}

		this.props.client.product.fetchAll().then((res) => {
			this.setState({
				products: res
			});
			console.log(this.state.products);
		});

		this.props.client.collection.fetchAllWithProducts().then((res) => {
			this.setState({
				collections: res
			});
			console.log(this.state.collections);
		});

		const bambooCollectionId = "gid://shopify/Collection/388931682561";
		const homeCollectionId = "gid://shopify/Collection/388849533185";

		this.props.client.collection
			.fetchWithProducts(bambooCollectionId)
			.then((res) => {
				this.setState({
					bambooCollection: res
				});
				console.log(this.state.bambooCollection);
			});

		this.props.client.collection
			.fetchWithProducts(homeCollectionId, { productsFirst: 3 })
			.then((res) => {
				this.setState({
					homeCollection: res
				});
				console.log(this.state.homeCollection);
			});
	}

	addVariantToCart(variantId, quantity) {
		this.setState({
			isCartOpen: true
		});

		const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
		const checkoutId = this.state.checkout.id;

		return this.props.client.checkout
			.addLineItems(checkoutId, lineItemsToAdd)
			.then((res) => {
				this.setState({
					checkout: res
				});
			});
	}

	updateQuantityInCart(lineItemId, quantity) {
		const checkoutId = this.state.checkout.id;
		const lineItemsToUpdate = [
			{ id: lineItemId, quantity: parseInt(quantity, 10) }
		];

		return this.props.client.checkout
			.updateLineItems(checkoutId, lineItemsToUpdate)
			.then((res) => {
				this.setState({
					checkout: res
				});
			});
	}

	handleCartClose() {
		this.setState({
			isCartOpen: false
		});
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Navigation />
					<Routes>
						<Route
							path="/"
							element={<Home client={this.props.client} />}
						/>
						<Route path="/products/:handle" element={<ProductPage />} />
            <Route path='/collections/bamboo-collection' element={<Bamboo client={this.props.client} />}/>
            <Route path='/collections/grocery-collection' element={<Grocery client={this.props.client} />}/>
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
