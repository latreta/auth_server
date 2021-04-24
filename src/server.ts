import express, { response } from "express";
import { UsersController } from "@controllers/UsersController";

const app = express();

app.get("/", (request, response) => {
  return response.json("Hello world");
});

app.listen(3333);
