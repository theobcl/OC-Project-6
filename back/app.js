const express = require("express"); 
const mongoose = require('mongoose');
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

// Connexion à la base de donnée MongoDB
mongoose.connect(process.env.MONGODB_CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Lancement du frameword Express JS 
const app = express(); 
    
// Middleware CORS - Ajout de headers à l'objet "response"
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Package body-parser
app.use(express.json());

// Enregistrement des routes dans l'application
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

// Rendre le dossier "images" statique
app.use("/images", express.static(path.join(__dirname, "images")))

module.exports = app; 