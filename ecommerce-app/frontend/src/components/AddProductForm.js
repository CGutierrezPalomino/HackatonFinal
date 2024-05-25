import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ onProductAdded }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidadDisponible, setCantidadDisponible] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = {
        nombre,
        precio: parseFloat(precio),
        cantidadDisponible: parseInt(cantidadDisponible, 10)
      };

      const res = await axios.post('/api/productos', newProduct);
      onProductAdded(res.data);
      setNombre('');
      setPrecio('');
      setCantidadDisponible('');
    } catch (error) {
      console.error('Error al añadir producto', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cantidad Disponible:</label>
        <input
          type="number"
          value={cantidadDisponible}
          onChange={(e) => setCantidadDisponible(e.target.value)}
          required
        />
      </div>
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default AddProductForm;
