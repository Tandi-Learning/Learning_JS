// Polyfill for Object.create
if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error ('Object.create implementation only accept 1 parameter');
        }
        function F() {}
        F.prototype = o;
        return new F();
    }
}

var person = {
    firstname: 'default',
    lastname: 'default',
    greet: function() {
        return 'Hi ' + this.firstname + ' ' + this.lastname
    }
}

// this pure prototypical inheritance
var tandi = Object.create(person);
tandi.firstname = 'Tandi';
tandi.lastname = 'Sunarto';

document.write(tandi.greet() + '</br>')
