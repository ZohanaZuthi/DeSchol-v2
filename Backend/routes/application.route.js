import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { applyScholarship, getUserApplications } from '../controllers/application.controller.js';
const router = express.Router();

router.post('/apply', isAuthenticated, applyScholarship);
router.get('/my', isAuthenticated, getUserApplications);

export default router;