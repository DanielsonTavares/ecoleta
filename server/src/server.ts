import express, { response } from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";

const app = express();

//Define quais endereços terão acesso a nossa API.
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
