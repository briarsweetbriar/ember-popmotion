import motion from 'ember-popmotion';
import { module, test } from 'qunit';

module('Unit | popmotion');

test('popmotion is present', function(assert) {
  assert.expect(7);

  assert.ok(motion, 'motion is present');

  assert.ok(motion.physics, 'physics is present');
  assert.ok(motion.stagger, 'stagger is present');
  assert.ok(motion.timeline, 'timeline is present');
  assert.ok(motion.track, 'track is present');
  assert.ok(motion.tween, 'tween is present');

  assert.ok(motion.calc, 'calculators are present');
});
