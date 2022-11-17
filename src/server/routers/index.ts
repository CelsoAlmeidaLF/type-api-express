import express from 'express';
import Home from '../controllers/controllerHome'
//import Login from '../controllers/controlllerLogin';

let router = express.Router();

// Home
router.get('/', Home.index);

// Login
//router.post('/login/add', Login.add);
//router.get('/login/list', Login.list);

export default router;