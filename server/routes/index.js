var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var qcms = require('./qcms.js');
var user = require('./users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/qcms', qcms.getAll); // Liste de tous les qcms
router.get('/api/v1/qcm/:id', qcms.getOne); //Récupère un qcm
router.post('/api/v1/qcm/', qcms.create); // Crée un qcm
router.put('/api/v1/qcm/:id', qcms.update); // Met à jour un qcm
router.delete('/api/v1/qcm/:id', qcms.delete); // Supprime un qcm

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;
