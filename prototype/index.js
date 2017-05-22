function Person(n, d) {
    this.name = n;
    this.dob = new Date(d);
}

Person.prototype.showAge = function() {
    var now = new Date();
    return now.getUTCFullYear() - this.dob.getUTCFullYear()
}

var me = new Person('Tandi Sunarto', '1/17/1971')
var wife = new Person('Suyenti Sunarto', '10/25/1978')

document.write('My Age: ' + me.showAge())
document.write('</br>')
document.write('Wife\'s Age: '  + wife.showAge())
document.write('</br>')
document.write('Dad\'s Age: '  + new Person('Amran', '3/18/1945').showAge())
