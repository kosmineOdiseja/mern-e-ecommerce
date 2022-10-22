import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelect } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { getProductDetails, reset } from '../features/productDetails/productDetailsSlice'

function CartScreen({ match, Location, history }) {

	const params = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	//https://stackoverflow.com/questions/73262988/react-router-v6-history-location-search-replacement
	// const productId = 1
	// console.log(productId, 'this productId')
	const qty = Location.search
	console.log(qty, 'this qty')

	useEffect(() => {
		console.log(getProductDetails(params, 'this params getProducts'))
		dispatch(getProductDetails(params))
		console.log(params.id, 'this is params id')
	}, [params])

	return (
		<div>
			Labas CartScreen
		</div>
	)
}
export default CartScreen