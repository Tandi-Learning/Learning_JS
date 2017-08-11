// using function constructor to create object using the "new" keyword to mimic other languages that 
// do not implement prototypical inheritance

var Person = function(n, d) {
    this.name = n;
    this.dob = new Date(d);
};

Person.prototype.showAge = function() {
    var now = new Date();
    return now.getUTCFullYear() - this.dob.getUTCFullYear();
};

var me = new Person('Tandi Sunarto', '1/17/1971');
var wife = new Person('Suyenti Sunarto', '10/25/1978');

console.log('My Age: ' + me.showAge());
console.log('Wife\'s Age: '  + wife.showAge());
console.log('Dad\'s Age: '  + new Person('Amran', '3/18/1945').showAge());