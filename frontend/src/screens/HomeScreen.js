import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from '../components/Message'
import Loader from '../components/Loader'
// for the data
import { getProducts } from '../features/products/productSlice'
import { useSelector, useDispatch } from 'react-redux'


function HomeScreens() {

  const { products, isLoading, isSuccess, message, isError } = useSelector((state) => state.products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

  }, [dispatch])

  return (
    <>
      <h1> Latest Products</h1>

      {isLoading ?
        (<Loader />)
        : isError ? (<Message> {message}</Message>)
          : (<Row> {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          </Row>)
      }
    </>
  );
}

export default HomeScreens;
