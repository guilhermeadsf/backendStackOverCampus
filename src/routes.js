const express = require('express');
const ThemeController = require('./controllers/ThemeController');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const AcademicWorkController = require('./controllers/AcademicWorkController');

const routes = express.Router();

routes.post('/createTheme', ThemeController.store);

routes.post('/createUser', UserController.store);

routes.post('/createPost', PostController.store);

routes.get('/getThemes', ThemeController.getThemes);

routes.post('/login', UserController.login);

routes.post('/createAcademicWork', AcademicWorkController.store);

module.exports = routes;
