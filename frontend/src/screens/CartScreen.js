import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelect } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import addToCart from '../features/cart/cartService'
import { getCartItems } from '../features/cart/cartSlice'

function CartScreen({ match }) {

	const params = useParams()
	const productId = params.id
	const dispatch = useDispatch()
	const [searchParams] = useSearchParams();
	const qty = searchParams.get('qty'); // number string 

	useEffect(() => {
		if (productId) {
			// getCartItems
			dispatch(getCartItems(productId, qty))
			// dispatch(addToCart(productId, qty))
		}
	}, [params])

	return (
		<div>
			labas screencard
		</div>
	)
}
export default CartScreen