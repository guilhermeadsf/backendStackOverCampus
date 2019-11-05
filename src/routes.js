const express = require('express');
const ThemeController = require('./controllers/ThemeController');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const AcademicWorkController = require('./controllers/AcademicWorkController');

const routes = express.Router();

routes.post('/createTheme', ThemeController.store);

routes.post('/createUser', UserController.store);

routes.post('/createPost', PostController.store);

routes.get('/getPosts/:theme', PostController.getPosts);

routes.get('/getThemes', ThemeController.getThemes);

routes.post('/login', UserController.login);

routes.post('/createAcademicWork', AcademicWorkController.store);

routes.post('/addComment', PostController.addComment);

module.exports = routes;
