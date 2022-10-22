import react from 'react'
import { Container } from 'react-bootstrap'
import Header from "./components/Header"
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            {/* // <HomeScreen /> */}

            {/*this is workd around because it should work: /cart/:id? but not working */}
            <Route path='/cart' element={<CartScreen />} />
            {/* Question-mark means optional, because we don't need always send an id */}
            <Route path='/cart/:id' element={<CartScreen />} />
            {/* <Route path='/cart/:id?' element={<CartScreen />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
