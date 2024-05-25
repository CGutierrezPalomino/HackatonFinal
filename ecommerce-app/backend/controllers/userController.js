const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controlador para registrar un nuevo usuario
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // Generar token de autenticación
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    // Enviar respuesta con el token
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Controlador para iniciar sesión
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generar token de autenticación
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    // Enviar respuesta con el token
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Controlador para obtener información del usuario autenticado
exports.getUserProfile = async (req, res) => {
  try {
    // El usuario ya está disponible en el objeto de solicitud (req) después de pasar por el middleware de autenticación
    const user = req.user;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error getting user profile', error: error.message });
  }
};

// Otros controladores relacionados con la gestión de usuarios, como actualizar información de usuario, eliminar usuario, etc.
