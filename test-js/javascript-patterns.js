// Example Object Literal Pattern

var myModule = {
  name: 'Will',
  age: 30,
  sayName: function () {
    alert(this.name);
  },
  setName: function (newName) {
    this.name = newName;
  }
};
myModule.setName('Amy');
myModule.sayName();

// Revealing Module Pattern:
  // create private variables within the scope
  // only expose methods you chose to expose, here sayName()
  // private methods usually prefixed with _
var myModule = (function() {
  var name = 'Will';

  function _render () {
    // example private render method
  }

  function sayName () {
    alert(name);
  }

  return {
    sayName: sayName
  };
})();
