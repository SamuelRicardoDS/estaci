import { Request, Response } from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const express = require('express');
const app = express();
app.use(express.json())

app.use(categoriesRoutes)

const port = 3333;
app.listen(port, () => console.log(`listening on port ${port}!`));

