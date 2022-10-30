import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating';
// import { getProduct, reset } from '../features/products/productSlice'
import { getProductDetails, reset } from '../features/productDetails/productDetailsSlice'

// function ProductScreen({ history }) {
function ProductScreen() {
	const [qty, setQty] = useState(1)
	const { productDetails, isLoading, isSuccess, isError, message } = useSelector(
		(state) => state.productDetails
	);
	const params = useParams()
	const dispatch = useDispatch();
	const navigate = useNavigate()

	// console.log(productId, 'this is a productID from product screen')
	useEffect(() => {
		dispatch(getProductDetails(params))
	}, [params])

	const addToCartHandler = () => {
		// react router history object 
		// history.push(`/cart/${params.id}?qty=${qty}`)

		// history.push(`/cart/${params.id}?qty=${qty}`)
		navigate(`/cart/${params.id}?qty=${qty}`) // navigates to that url link, where we can get the product
	}

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
					<Image src={productDetails.image} alt={productDetails.name} fluid />
				</Col>
				<Col>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>{productDetails.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={productDetails.rating} text={`${productDetails.numReviews} reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>
							Price: ${productDetails.price}
						</ListGroup.Item>
						<ListGroup.Item>
							Description: ${productDetails.description}
						</ListGroup.Item>

					</ListGroup>
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col>Price:</Col>
								<Col>
									<strong>${productDetails.price}</strong>
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col>Status:</Col>
								<Col>
									{productDetails.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
								</Col>
							</Row>
						</ListGroup.Item>
						{productDetails.countInStock > 0 && (
							<ListGroup.Item>
								<Row>
									<Col> Qty</Col>
									<Col xs='auto' className='my-1'>
										< Form.Control
											as='select'
											value={qty}
											onChange={(e) => setQty(e.target.value)}
										>
											{
												[...Array(productDetails.countInStock).keys()].map(x => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))
											}
										</Form.Control>
									</Col>
								</Row>
							</ListGroup.Item>)}
						<ListGroup>
							<Button onClick={addToCartHandler} className='btn-block' type='button' disabled={productDetails.countInStock === 0}> Add To Card </Button>
						</ListGroup>
					</ListGroup>
				</Col>
			</Row>
		</>
	)
}

export default ProductScreen