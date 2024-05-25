const axios = require('axios');
const config = require('../config');

exports.generarCargo = async (req, res) => {
  const { email, monto, token } = req.body;
  
  try {
    const response = await axios.post('https://api.culqi.com/v2/charges', {
      amount: monto,
      currency_code: 'PEN',
      email,
      source_id: token,
      description: 'Pago de compra en mi tienda'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.culqiPrivateKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
};
