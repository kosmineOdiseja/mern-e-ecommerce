import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating';
import { getProduct, reset } from '../features/products/productSlice'

function ProductScreen() {

	const { product, isLoading, isSuccess, isError, message } = useSelector(
		(state) => state.products
	);
	console.log(product, 'this is a product')
	const params = useParams()
	console.log(params, 'this is param')
	const { productId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId))

	}, [productId])

	if (isLoading) {
		return <h1> Loading </h1>
	}
	if (isError) {
		return <h1>{message}</h1>
	}

	return (
		<>
			<Link className='btn btn-dark my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>{product.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={product.rating} text={`${product.numReviews} reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>
							Price: ${product.price}
						</ListGroup.Item>
						<ListGroup.Item>
							Description: ${product.description}
						</ListGroup.Item>

					</ListGroup>
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col>Price:</Col>
								<Col>
									<strong>${product.price}</strong>
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col>Status:</Col>
								<Col>
									{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup>
							<Button className='btn-block' type='button' disabled={product.countInStock === 0}> Add To Card </Button>
						</ListGroup>
					</ListGroup>
				</Col>
			</Row>
		</>
	)
}

export default ProductScreen