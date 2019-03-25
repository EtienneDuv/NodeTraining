var counter = function(arr) {
    return `There are ${arr.length} elements in this array`;
};

var add = function(a, b){
    if (!isNaN(a) && !isNaN(b))
    {
        return `${a + b}`;
    }
    else {
        return console.log(`Not number. ${a}:${typeof a}  -  ${b}:${typeof b}`);
    }
};

module.exports = {
    counter: counter, 
    add: add,
};