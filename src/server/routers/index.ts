import express from 'express';
import { Home } from '../controllers/home';

let router = express.Router();

let controllers = new Home();

router.get('/', controllers.index);

export = router