var makeMCHammerDancer = function(top, left, timeBetweenSteps) {
  MCHammerDancer = makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mchammerDancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeMCHammerDancer.prototype = Object.create(makeDancer.prototype);
makeMCHammerDancer.prototype.constructor = makeMCHammerDancer;


makeMCHammerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //this.$node.toggle();
};