import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import router from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());

app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(5000, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Listening on port " + PORT);
});
