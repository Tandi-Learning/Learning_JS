function Animal(type) {
    var animalType = type;
}

Animal.prototype.whatAmI = function() {
    return this;
}

var dog = new Animal('dog');

document.write(dog.animalType);