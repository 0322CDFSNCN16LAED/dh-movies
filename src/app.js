const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const moviesRoutes = require("./routes/moviesRoutes");
const genresRoutes = require("./routes/genresRoutes");
const app = express();

const methodOverride = require("method-override");
const dayjs = require("dayjs");

app.locals.getInputDateFormat = (date) => {
    // YYYY-MM-DD
    return dayjs(date).format("YYYY-MM-DD");
};

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen("3000", () => console.log("Servidor corriendo en el puerto 3000"));
