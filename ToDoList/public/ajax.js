var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


module.exports = {
     submitAjax : function () {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (function () {
            return callback(xhr);
        });
        if (method && method.toUpperCase() == 'POST') {
            xhr.open(method, url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(data);
        } else {
            xhr.open(method, url);
            xhr.send();
        }
    }
}
