var express = require("express");
var apiRoutes = require("./routes/apiroutes");
var htmlRoutes = require("./routes/htmlroutes");
var app = express();
var PORT = process.env.PORT||3002;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});