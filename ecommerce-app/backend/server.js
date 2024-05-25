const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const productosRouter = require('./routes/productos');
const carritoRouter = require('./routes/carrito');
const culqiRouter = require('./routes/culqi');

const app = express();
const mongoURI = 'mongodb+srv://cristhiangutierrezpalomino06:iojQrjiub3p0je5u@cluster0.s6onttn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.json());

app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);
app.use('/api/culqi', culqiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 
