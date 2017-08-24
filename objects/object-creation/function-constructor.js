var animal = function(name, family, sound) {
    this.name = name;
    this.family = family;
    this.sound = sound;
}

animal.prototype.getFamily = function() {
    console.log(this.name + ' is a ' + this.family);
}

animal.prototype.makeSound = function() {
    console.log(this.sound)
}

var poodle = new animal('colby', 'dog', 'woof');
poodle.getFamily();
poodle.makeSound();

var lion = new animal('makhulu', 'lion', 'roar');
lion.getFamily();
lion.makeSound();