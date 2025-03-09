import express from 'express'

import { isAuthenticated } from '../middlewares/auth.js';

const lostPerson = express.Router();


export default lostPerson;