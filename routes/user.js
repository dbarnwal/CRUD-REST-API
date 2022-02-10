import express from "express";
const router = express.Router();
import {v4 as uuidv4 } from 'uuid';
import {getUsers , createUser, searchUser, deleteUser, updateUser} from '../controllers/user.js'

 

// Show all user
router.get('/' , getUsers);

// Inset a User
router.post('/' , createUser);

// Search a User.
router.get('/:id' , searchUser);

// Delete a User.
router.delete('/:id' , deleteUser);

// Update a User
router.patch('/:id' , updateUser);
export default router;