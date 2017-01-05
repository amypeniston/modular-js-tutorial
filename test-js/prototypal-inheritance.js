// Prototypal Inheritance

var human = {
  species: "Human",
  saySpecies: function () {
    console.log(this.species);
  },
  sayName: function () {
    console.log(this.name);
  }
};

// create a new class that inherits everything from human
var musician = Object.create(human);
musician.playInstrument = function () {
  console.log("plays..." + instrument);
}

// create an instance of the musician class
var will = Object.create(musician);
will.name = "Will";
will.instrument = "Drums";

will.saySpecies(); // Human

human.species = "Homo Sapiens"; // Updates all children as well

---------

// To get around having to set individual properties we can add a create method
var human = {
  species: "Human",
  create: function (name) {
    var instance = Object.create(this);
    instance.name = name;
    return instance;
  },
  saySpecies: function () {
    console.log(this.species);
  },
  sayName: function () {
    console.log(this.name);
  }
};

var amy = human.create("amy");

---------

// Even more flexible, use a create method that automatically creates properties for values passed in
var human = {
  species: "Human",
  create: function (values) {
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key) {
      instance[key] = values[key];
    });
    return instance;
  },
  saySpecies: function () {
    console.log(this.species);
  },
  sayName: function () {
    console.log(this.name);
  }
};

// musician will inherit the create class from human
var musician = human.create({
  species: "musician",
  playInstrument: function () {
    console.log("I'm playing my " + this.instrument);
  }
})

// which enables us to create an instance of musician also using create
var fred = musician.create({
  name: "fred",
  age: 25,
  instrument: "trombone",
  talk: function () {
    console.log("hi I'm " + this.name);
  }
});
