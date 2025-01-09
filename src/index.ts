"USE SCRIPT";
import express from "express";
import homeController from "./controllers/home.controller"; // .js
("END");
const app = express();

app.get("/", homeController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
