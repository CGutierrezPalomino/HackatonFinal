import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('/api/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto._id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => addToCart(producto)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
