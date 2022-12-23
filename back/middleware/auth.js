const jwt = require('jsonwebtoken');

// Protége les routes sélectionnées et permet de vérifier si l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes //
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_AUTH);
    const userId = decodedToken.userId;
    req.auth = {
        userId: userId
    };
    next();
  } catch(error) {
    res.status(401).json({ error });
  }
};