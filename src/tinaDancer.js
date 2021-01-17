var makeTinaDancer = function(top, left, timeBetweenSteps) {
  TinaDancer = makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="tinaDancer" id = "test"></span>');
  this.step();
  this.setPosition(top, left);
};

makeTinaDancer.prototype = Object.create(makeDancer.prototype);
makeTinaDancer.prototype.constructor = makeTinaDancer;


makeTinaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //this.$node.toggle();
};