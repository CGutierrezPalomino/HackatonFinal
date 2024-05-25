import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.precio);
  };

  const realizarPago = () => {
    document.querySelector('.culqi-open').click();
  };

  return (
    <div>
      <h1>Mi Tienda</h1>
      <ProductList addToCart={addToCart} />
      <Cart carrito={carrito} realizarPago={realizarPago} />
      <CheckoutForm total={total} />
    </div>
  );
};

export default App;
