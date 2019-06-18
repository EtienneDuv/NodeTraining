var messages = [],
    date = new Date()
module.exports = function(app, io){
    app.get("/", (req, res) => {
        console.log('messages: ', messages)
        res.render("index", { messages: messages });
    });
    
    app.post("/", (req, res) => {
        res.redirect("/");
    });


    //SOCKET observer
    io.on('connection', function (socket) {
        console.log('User connected');
        socket.broadcast.emit("New user joined")
        socket.on('disconnect', function () {
            console.log('User disconnected');
        });
        socket.on("chat_message", function(message){
            messages.push({'time': date.getTime(), 'message': message });
        });
    });
}
