import { Router } from "express";
import { UserController } from "../controller/UserController";

export const userRouter = Router();
export const userController = new UserController();

userRouter.post("/login", userController.login);
userRouter.get("/", userController.findUsers);
userRouter.get("/active", userController.findActiveUsers);
userRouter.get("/inactive", userController.findInactiveUsers);