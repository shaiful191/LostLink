import express from 'express'
import { createItem, deleteItem, getItem, getItems, updateItem  } from '../controllers/item.js';
import { isAuthenticated } from '../middlewares/auth.js';

const itemRouter = express.Router();

itemRouter.post('/', isAuthenticated, createItem);
itemRouter.patch('/:id', isAuthenticated, updateItem);
itemRouter.delete('/:id', isAuthenticated, deleteItem);
itemRouter.get('/', getItems);
itemRouter.get('/:id', getItem);

export default itemRouter;