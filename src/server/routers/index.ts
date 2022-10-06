import express from 'express';
import { Home } from '../controllers/home';

let router = express.Router();
let home = new Home();

router.get('/', home.index);

export = router;