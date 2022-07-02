import express, { urlencoded } from "express";
import IndexRoutes from "./routes/taskroutes.mjs";
import morgan from "morgan";
import cors from 'cors';

const app = express();




// usar log morgan
app.use(morgan("dev"));

app.use(cors());
// en tender json
app.use(express.json());
// entender html
app.use(express.urlencoded({extended: false}));

app.use(IndexRoutes);

app.set("port", process.env.port || 3000);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my challenged" });
});



export default app;
