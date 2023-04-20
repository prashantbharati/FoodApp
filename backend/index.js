import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import { seedDB } from "./seed.js";
import PostMessage from "./models/postMessage.js";
import foodRoutes from "./routes/posts.js";
// import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/foods", foodRoutes);
// app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello reached");
});

const CONNECTION_URL =
  "mongodb+srv://prashant123:prashant1234@cluster0.otmjbkr.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

const Dummy_foods = [
  {
    name: "Burger",
    price: 10,
    desc: "Extra Cheese and Spice",
  },
  {
    name: "Panner Tikka",
    price: 22.25,
    desc: "Smooth and Delicious Paneer grilled to Perfection",
  },
  {
    name: "Pizza",
    price: 19.25,
    desc: "Smooth and Delicious Pizza grilled to Perfection",
  },
  {
    name: "Pasta",
    price: 15.99,
    desc: "Smooth and Delicious Pasta grilled to Perfection",
  },
  {
    name: "Noodles",
    price: 15.99,
    desc: "Smooth and Delicious Pasta grilled to Perfection",
  },
];

const seedDB = async () => {
  await PostMessage.deleteMany({});

  await PostMessage.insertMany(Dummy_foods);
  console.log("DB Seeded");
};
seedDB();

// seedDB();
// mongoose.set("useFindAndModify", false);

/*
prashant123
prashant123

*/

// mongodb+srv://prashant123:<password>@cluster0.otmjbkr.mongodb.net/?retryWrites=true&w=majority
