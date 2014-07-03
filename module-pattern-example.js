//unsafe is an object defined by an object-literal: all properties are public
var unsafe = {
    name: 'unsafe',
    getName: function() {
        return this.name;
    }
};

// define a maker-function, that returns an object: name is a private property
var safeMaker = function() {
    var name = 'safe';

    var res = {};
    res.getName = function() {
        return name;
    };
    return res;
};
var safe = safeMaker();