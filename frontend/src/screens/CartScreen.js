import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelect } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { getProductDetails, reset } from '../features/productDetails/productDetailsSlice'

function CartScreen({ match }) {

	const params = useParams()
	const dispatch = useDispatch()
	const [searchParams] = useSearchParams();
	const qty = searchParams.get('qty') // number string 

	useEffect(() => {
		dispatch(getProductDetails(params))
	}, [params])

	return (
		<div>
			labas screencard
		</div>
	)
}
export default CartScreen