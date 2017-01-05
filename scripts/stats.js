var stats = (function () {
  var people = 0;

  //cache DOM
  var $stats = $('#statsModule');
  var template = $('#stats-template').html();

  //bind event to the pubsub event 'peopleChanged'
  events.on('peopleChanged', setPeople);
  _render();

  function _render() {
     $stats.html(Mustache.render(template, {people: people}));
  }

  function setPeople(newPeople) {
      people = newPeople;
      _render();
  }

  function destroy () {
      $stats.remove();
      events.off('peopleChanged', setPeople);
  }

  return {
    destroy: destroy
  };
})();
