import React, { useState } from 'react';
import axios from 'axios';

const CheckoutForm = ({ total }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    const [expMonth, expYear] = expirationDate.split('/');

    Culqi.createToken({
      card_number: cardNumber,
      cvv,
      expiration_month: expMonth,
      expiration_year: expYear,
      email
    }, async (response) => {
      if (response.object === 'token') {
        try {
          const res = await axios.post('/api/culqi/charge', {
            email,
            monto: total * 100, // Culqi trabaja con céntimos
            token: response.id
          });
          alert('Pago exitoso!');
        } catch (error) {
          alert('Error en el pago');
        }
      } else {
        alert('Error al crear el token');
      }
    });
  };

  return (
    <form onSubmit={handlePayment}>
      <h2>Checkout</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Número de Tarjeta:</label>
        <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required />
      </div>
      <div>
        <label>CVV:</label>
        <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} required />
      </div>
      <div>
        <label>Fecha de Expiración (MM/YY):</label>
        <input type="text" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} required />
      </div>
      <button type="submit">Pagar</button>
    </form>
  );
};

export default CheckoutForm;
