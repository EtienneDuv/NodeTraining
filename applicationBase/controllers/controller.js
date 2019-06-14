module.exports = function(app){
    app.get("/index", (req, res) => {
        res.status(200);
        res.setHeader("Content-type", "text/html");
        res.render("index");
    });
}
