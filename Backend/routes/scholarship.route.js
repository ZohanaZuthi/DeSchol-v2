// scholarship.route.js

import express from 'express';
import { filterScholarships, createScholarship } from '../controllers/scholarship.controller.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.get('/filter', filterScholarships);
router.post('/', isAuthenticated, createScholarship);

export default router;
