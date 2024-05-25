import React from 'react';

const Cart = ({ carrito, realizarPago }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map(producto => (
          <li key={producto._id}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
      <button onClick={realizarPago}>Pagar</button>
    </div>
  );
};

export default Cart;
