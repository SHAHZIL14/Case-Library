import express from "express";
import cors from "cors";
import search from "./controllers/search.controller.js";

const app = express();
const PORT = 8000;

app.use(cors());

app.get("", function(request, response) {
  response.send("Case library");
});

app.get("/search", function(request, response) {
  search(request, response);
});

app.listen(PORT, function() {
  console.log("App starts listening on port " + PORT);
});
