import express from 'express';
import Home from '../controllers/controllerHome'

let router = express.Router();

// Home
router.get('/', Home.index);

export default router;