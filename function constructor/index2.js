var animal = (function() {

    var type;
    var color;
    var age;
    var sound;

    function animal() {
        var args = Array.prototype.slice.call(arguments);
        this.type = args[0];
        this.color = args[1];
        this.age = args[2];
        this.sound = args[3];
    }

    animal.prototype.makeSound = function() {
        console.log(this.color + ' ' + this.type + ' ' + this.sound);
    };

    return animal;
})();

var dog = new animal('poodle dog', 'black', 4, 'woof');
dog.makeSound();

var cat = new animal('persian cat', 'white', 1, 'meow');
cat.makeSound();