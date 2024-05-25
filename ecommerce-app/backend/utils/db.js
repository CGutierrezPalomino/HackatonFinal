const MongoClient = require('mongodb').MongoClient;

// URL de conexión a MongoDB Atlas
const url = 'mongodb+srv://cristhiangutierrezpalomino06:iojQrjiub3p0je5u@cluster0.s6onttn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Opciones de conexión
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conectar a la base de datos
MongoClient.connect(url, options, (err, client) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conexión exitosa a MongoDB Atlas');
  
  // Aquí puedes realizar operaciones en la base de datos
});
