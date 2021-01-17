var makeDynamiteDancer = function(top, left, timeBetweenSteps) {
  var DynamiteDancer = makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dynamiteDancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDynamiteDancer.prototype = Object.create(makeDancer.prototype);
makeDynamiteDancer.prototype.constructor = makeDynamiteDancer;


makeDynamiteDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};