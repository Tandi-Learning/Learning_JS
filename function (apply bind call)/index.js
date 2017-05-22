var me = {
    name: 'Tandi Sunarto',
    dob: new Date(1971, 1, 17)
}

var wife = {    
    name: 'Suyenti Sunarto',
    dob: new Date(1978, 10, 25)
}

function calculateAge(gender) {
    var today = new Date();
    return (gender == 'M' ? 'Mr.' : 'Mrs.') + this.name + ' is ' + (today.getFullYear() - this.dob.getFullYear()).toString()
}


// apply
document.write('<strong><u>Apply</u></strong></br>')
document.write(calculateAge.apply(me, ['M']) + '</br>')
document.write(calculateAge.apply(wife, ['M']) + '</br></br>')

// bind 
document.write('<strong><u>Bind</u></strong></br>')
var myAge = calculateAge.bind(me, 'M');
document.write('My Age : ' + myAge() + '</br>')

var myAge = calculateAge.bind(me);
document.write('My Age : ' + myAge('M') + '</br>')

var myWifeAge = calculateAge.bind(wife, 'F');
document.write('My Wife Age : ' + myWifeAge() + '</br>')

var myWifeAge = calculateAge.bind(wife);
document.write('My Wife Age : ' + myWifeAge('F') + '</br></br>')

// call
document.write('<strong><u>Call</u></strong></br>')
document.write(calculateAge.call(me, 'M') + '</br>')
document.write(calculateAge.call(wife, 'M') + '</br></br>')

// IIFE
document.write('<strong><u>IIFE</u></strong></br>')
document.write(
    (function(gender) {
        var today = new Date();
        return (gender == 'M' ? 'Mr.' : 'Mrs.') + this.name + ' is ' + (today.getFullYear() - this.dob.getFullYear()).toString()
    }).call(me, 'M') 
    + '</br>');
document.write(
    (function(gender) {
        var today = new Date();
        return (gender == 'M' ? 'Mr.' : 'Mrs.') + this.name + ' is ' + (today.getFullYear() - this.dob.getFullYear()).toString()
    }).call(wife, 'M') 
    + '</br>');