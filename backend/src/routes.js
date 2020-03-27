const exprees = require('express');

//Controllers
const OngController = require('./controllers/ongController');//ONGS
const IncidentsController = require('./controllers/incidentsController');//Casos
const ProfileController = require('./controllers/ProfileController');//Perfil de uma ONG
const SessionController = require('./controllers/SessionController');//Longin

const routes = exprees.Router();

//Routes
//ONG
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Profile
routes.get('/profile', ProfileController.index);

//Session
routes.post('/sessions', SessionController.create);

//Incidents
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


module.exports = routes;
