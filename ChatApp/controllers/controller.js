module.exports = function(app, io){
    app.get("/", (req, res) => {
        res.render("index");
    });
    
    app.post("/", (req, res) => {
        res.redirect("/");
    });


    //SOCKET observer
    io.on('connection', function (socket) {
        console.log('User connected');
        socket.on('disconnect', function () {
            console.log('User disconnected');
        });
        socket.on("chat_message", function(message){
            console.log("New message :", message);
        });
    });
}
