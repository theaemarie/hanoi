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

QUnit.test('Move function should take a piece off the top of source pile', function (assert) {
  var tower = [
    [5,4,3,2,1],
    [],
    []
  ];
  var currPile = tower[0].length
  move(tower, 0,1);
  assert.strictEqual(tower[0].length === (currPile - 1), true );
});

QUnit.test('Move function should place a piece on the target pile', function (assert) {
  var tower = [
    [5,4,3,2,1],
    [],
    []
  ];
  var targetPile = tower[1].length
  move(tower,0,1);
  assert.strictEqual(tower[1].length === (targetPile + 1), true );
});

QUnit.test('Move should have both source and target defined', function (assert) {
  assert.throws(move(target))
  assert.throws(move(target, 0))
});

QUnit.test('Source/Target should be restricted to pile 1, 2, or 3', function (assert) {
  var tower = [
    [5,4,3,2,1],
    [],
    []
  ];
  assert.strictEqual(move(tower, 4,1), false);
  assert.strictEqual(move(tower, -1,1), false);
  assert.strictEqual(move(tower, 1,4), false);
  assert.strictEqual(move(tower, 1,-1), false);
});
  
QUnit.test('After move, target/source values should be blank', function(assert) {
  var tower = [
    [5,4,3,2,1],
    [],
    []
  ];
  move(tower,0,1);
  assert.strictEqual($('#target').val() == '', true);
  assert.strictEqual($('#source').val() == '', true);
});

QUnit.test('Towers on page should represent hanoi array', function(assert) {
  $(document).ready(function(){
    assert.strictEqual($('#pile_1').html() === hanoi[0].join(''), true);
    assert.strictEqual($('#pile_2').html() === hanoi[1].join(''), true);
    assert.strictEqual($('#pile_3').html() === hanoi[2].join(''), true);
  });

});