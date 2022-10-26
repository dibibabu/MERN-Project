import express from "express";
import { deleteUser, followUser, getuser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
const router =express.Router();
router.get('/:id',getuser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)

export default router;