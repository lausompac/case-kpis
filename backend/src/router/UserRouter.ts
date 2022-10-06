import { Router } from "express";
import { UserController } from "../controller/UserController";

export const userRouter = Router();
export const userController = new UserController();

userRouter.get("/", userController.findUsers);