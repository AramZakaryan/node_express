import express from "express";
import {getVideosController} from "./getVideosController";
import {createVideoController} from "./createVideoController";


export const videosRouter = express.Router();

videosRouter
    .get('/', getVideosController)
    .post('/', createVideoController)




