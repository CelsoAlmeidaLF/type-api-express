import express from 'express';
import { Home } from '../controllers/home';
import { Login } from '../controllers/login';

let router = express.Router();
let home = new Home();
let login = new Login();

router.get('/', home.index);
router.post('/login/add', login.index);
router.get('/login', login.get);

export = router;