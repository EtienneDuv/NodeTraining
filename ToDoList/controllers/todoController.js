const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

// MongoDB Management
// Connect
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Adalon:Dagoba74@cluster0-07q8b.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
        .then(res => console.log("Connected to DB"))
        .catch(err => console.log(err));
// Create schema
const todoSchema = new mongoose.Schema({
    item: String
})
const Todo = mongoose.model("Todo", todoSchema);


module.exports = function(app){
    app.get("/todo", (req, res) => {
        res.status(200);
        res.setHeader("Content-type", "text/html");
        //GET data from mongo
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render("todo", { title: "Todo List", list: data });
        })
    });

    app.post("/todo", urlEncodedParser, (req, res) => {
        //GET data from view (post request) and save it in Mongo
        const newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete("/todo/:item", function (req, res) {
        itemToDelete = req.params.item;
        //delete the item from Mongo
        Todo.find({item: req.params.item.replace(/-/g, " ")}).deleteOne(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });
}
