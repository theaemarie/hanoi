QUnit.config.reorder = false;

QUnit.test('Should exist', function (assert) {
  assert.strictEqual(typeof hanoi, 'object')
})

QUnit.test('Ensure the Hanoi is an Array', function (assert) {
  assert.strictEqual(Array.isArray(hanoi), true)
})

QUnit.test('Ensure the Hanoi PILE is an Array', function (assert) {
  hanoi.forEach(function (pile) {
    assert.strictEqual(Array.isArray(pile), true)
  })
});


QUnit.test('Ensure no piece in each pile is underneath a bigger piece', function (assert) {
  hanoi.forEach(function (pile) {
    for (i=0; i< pile.length; i++){
      assert.strictEqual(pile[i] < pile[i+1], false)
    }
  });
});

