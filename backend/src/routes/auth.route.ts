import { Router } from "express";
import { loginController, RegisterController } from "../controllers/auth_controller";

const authroutes=Router();
authroutes.post("/register",RegisterController);
authroutes.post("/login",loginController);

export default authroutes;