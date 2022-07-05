import express from "express";
import bodyParser from "body-Parser";
import usersRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use("/users", usersRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Restfull APIs");
});

app.listen(port, () =>
  console.log(`Server Running on port: http://localhost:${port}`)
);

/// for the setup of the server.
