// Classical Inheritance

// Inheritance function allows our children to inherit of the functionality from the parent
// Source: https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L634-L644
function inherits (ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
});

// Capitalize constructors (class)
// This constructor automatically creates an empty Person.prototype = {}
var Person = function (name) {
  this.name = name;
};

// Add a common sayName menthod to the Person prototype
Person.prototype.sayName = function () {
  console.log('Hi my name is', this.name);
};

Person.prototype.shoutName = function () {
  console.log('HI MY NAME IS ', this.name);
};

// Instantiate new copies of the class
var john = new Person("john"); // john.name = "john";
var bob = new Person("bob");

john.sayName(); // Hi my name is john

// Create another Constructor
var Musician = function (name, instrument) {
  // Use the .super_ property afforded to us by the inherits function. This has the effect of doing this.name = name, as we have in Person
  Musician.super_.call(this, name);
  this.instrument = instrument;
};

// Musician inherits all functionality from Person
inherits(Musician, Person);

Musican.prototype.getInstrument = function () {
  console.log(this.instrument);
};

Musican.prototype.shoutName = function () {
  console.log("HEY! My name is " + this.name + "!!!");
};

var julia = new Musician("julia", "violin");
julia.sayName();
julia.getInstrument();
julia.shoutName(); // Accesses child shoutName, not parent's
