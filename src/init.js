$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $('.topbar').height() + $('.ceiling').height() + $('.danceFloor').height() * Math.random(),
      $('.danceFloor').width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer.constructor.name);
    window.dancers.push(dancer);
    console.log(window.dancers);
    $('.danceFloor').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    console.log(window.dancers.length);
    var incr = $('.danceFloor').height() / (window.dancers.length);
    var base = $('.topbar').height() + $('.ceiling').height();
    for (var i = 0; i < window.dancers.length; i++) {
      if (i % 2 === 1) {
        window.dancers[i].setPosition(base + i * incr, $('.danceFloor').width() * .1);
      } else {
        window.dancers[i].setPosition(base + i * incr, $('.danceFloor').width() * .75);
      }

    }
  });
  $(document).on('mouseover', '.mchammerDancer', function() {
    for (var i = 0; i < window.dancers.length; i++ ) {
      if ( window.dancers[i].constructor.name === 'makeMCHammerDancer' ) {
        window.dancers[i].setPosition( $('.topbar').height() + $('.ceiling').height() + $('.danceFloor').height() * Math.random(),
          $('.danceFloor').width() * Math.random());
      }
    }
  });

});

