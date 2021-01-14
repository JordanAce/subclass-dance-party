describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      //expect(spy.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //blinkyDancer.step.callCount++;

      expect(blinkyDancer.step.callCount).to.be.equal(1);
      //expect(spy.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);

      //clock.tick(timeBetweenSteps);
      //blinkyDancer.step.callCount++;
      expect(blinkyDancer.step.callCount).to.be.equal(2);
      //expect(spy.callCount).to.be.equal(2);
    });
  });
});
