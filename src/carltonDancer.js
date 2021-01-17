var makeCarltonDancer = function(top, left, timeBetweenSteps) {
  var CarltonDancer = makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="carltonDancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;


makeCarltonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
};

