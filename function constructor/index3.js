var animal = {
    type: '',
    sound: '',
    constructor: function(type, sound) {
        this.type = type;
        this.sound = sound;
    },
    makeSound: function() {
        console.log(this.type + ' ' + this.sound);
    }
};

var dog = Object.create(animal);
dog.constructor('poodle', 'woof');
dog.makeSound();