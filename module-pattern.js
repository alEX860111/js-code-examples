// Module pattern:
// objectMaker is a maker-function that returns a new object.
// The properties of the new object are public.
// Variables defined in the maker-function are private.
// Note: publicMethod is a closure
var objectMaker = function() {
    var privateVariable = 'private';

    var privateMethod = function() {
        return privateVariable;
    }

    return {
        publicVariable: 'public',

        publicMethod: function() {
            return privateMethod();
        }
    };
};

var object = objectMaker();