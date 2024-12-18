import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; 
import helmet from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import projectRouter from './routes/projects.routes';
import taskRouter from "./routes/tasks.routes";


/*  CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);

/* SERVER */
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));