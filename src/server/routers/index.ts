import express from 'express';
import { Home } from '../controllers/home';
import { Login } from '../controllers/login';

let router = express.Router();
let home = new Home();
let login = new Login();

// Home
router.get('/', home.index);

// Login
router.post('/login/add', login.add);
router.get('/login/list', login.list);

export default router;