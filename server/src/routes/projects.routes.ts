import { Router } from "express";
import { createProject, getProjects } from "../controllers/ProjectController";

const projectRouter = Router();

projectRouter.get("/", getProjects);
projectRouter.post("/", createProject);

export default projectRouter;