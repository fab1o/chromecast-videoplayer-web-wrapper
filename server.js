var express = require("express");
var http = require("http");
var port = process.env.port || 3000;

var app = express();

app.set("port", port);
app.use("/", express.static(__dirname + "/public"));

app.get("*", function (req, res) {
    res.sendFile("index.html", { root: "./public" });
});

var httpServer = http.createServer(app);

httpServer.listen(app.get("port"), function () {

    console.log("Express server listening on port " + app.get("port"));

});