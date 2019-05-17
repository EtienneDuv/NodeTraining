module.exports = {
    xhr: xhr,
};

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    // console.log("readyState = " + this.readyState + ", status = " + this.status);
    // if (this.readyState == 4 && this.status == 200) {
    //     var result = this.responseText;
    //     console.log(result);
    // }
};

