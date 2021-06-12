const express = require("express");
const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/front.html');
});


app.listen(port, (error) => {
    if (error) {
        console.log("There is an error starting the server:", error);
    }
    console.log("Server is running on port:", port);
});
