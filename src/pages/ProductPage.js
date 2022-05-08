import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

const ProductPage = () => {
	const location = useLocation();
	const { product } = location.state;
	console.log(product);
	return <div></div>;
};

export default ProductPage;
