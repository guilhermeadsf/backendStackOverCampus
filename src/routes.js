const express = require('express');
const ThemeController = require('./controllers/ThemeController');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');

const routes = express.Router();

routes.post('/createTheme', ThemeController.store);

routes.post('/createUser', UserController.store);

routes.post('/createPost', PostController.store);

routes.get('/getThemes', ThemeController.getThemes);

routes.post('/login', UserController.login);

module.exports = routes;
