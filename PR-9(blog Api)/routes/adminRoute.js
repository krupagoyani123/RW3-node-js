const express = require('express');

const routes = express.Router();

const { blogDetails, commentDetails } = require('../controllers/adminController');

const { tokenVerify, Admin } = require('../middleware/Auth');

routes.get('/allblogshow', tokenVerify, Admin, blogDetails);
routes.get('/allcommentshow', tokenVerify, Admin, commentDetails);

module.exports = routes;