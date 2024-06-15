const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const queryRoutes = require("./routes/queryRoutes");
const imageRoutes = require("./routes/imageRoutes");
const chatRoutes = require("./routes/chatRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const programRoutes = require("./routes/programRoutes");

const authRoutes = require("./routes/authRoutes");

//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("API is running");
});

//API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/programs", programRoutes);

//listen server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
      .white
  );
});
