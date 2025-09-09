const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Configuración
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Inicializar dependencias (Inversión de Dependencias)
const database = require('../infrastructure/database');
const UserRepository = require('../adapters/out/user.repository');
const AuthService = require('../domain/services/auth.service');
const LoginUser = require('../../application/use-cases/login-user');

const userRepository = new UserRepository(database);
const authService = new AuthService(userRepository);
const loginUserUseCase = new LoginUser(authService);

// Configurar rutas
const setupAuthRoutes = require('../adapters/in/web/routes/auth.routes');
app.use('/api/auth', setupAuthRoutes(loginUserUseCase));

// Ruta de prueba
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

module.exports = app;