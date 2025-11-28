import dotenv from "dotenv";
import cors from "cors";
import "./config/passport";
import {HTTPSTATUS} from "./config/http_config";
import express, { NextFunction, Request, Response } from "express";
import { Env } from "./config/evn_config";
import { errorHandler } from "./middlewares/errorHandler.midlleware";
import { asyncHandler } from "./middlewares/async_handler";
import { BadRequestException } from "./utils/app_error";
import connctDatabase from "./config/database_config";
import authroutes from "./routes/auth.route";
import passport from "passport";
import { passportAuthenticateJwt } from "./config/passport";
import { initializeCrons } from "./crons";
import userRoutes from "./routes/user.routes";
import transactionRoutes from "./routes/transaction-routes";
import reportRoutes from "./routes/report.route";

const app=express();
dotenv.config();
const BASE_PATH=Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
  })
  
);
console.log("MONGO_URI =", process.env.MONGO_URI);
app.get(
  "/", (req: Request, res: Response, next: NextFunction) => {
    
    res.status(HTTPSTATUS.OK).json({
      message: "Hello Subcribe to the channel",
    });
  });



app.use(`${BASE_PATH}/auth`,authroutes);
app.use(`${BASE_PATH}/user`,passportAuthenticateJwt,userRoutes);
app.use(`${BASE_PATH}/transaction`,passportAuthenticateJwt,transactionRoutes);
app.use(`${BASE_PATH}/report`, passportAuthenticateJwt, reportRoutes);

app.use(errorHandler);


  app.listen(Env.PORT,async()=>{
    await connctDatabase();

     if (Env.NODE_ENV === "development") {
      await initializeCrons();
  }
    console.log(`server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
  })
