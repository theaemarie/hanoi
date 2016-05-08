var hanoi = [
  [5,4,3,2,1],
  [],
  []
];

var move = function (tower, source, target) {

  source = source | $('#source').val();
  target = target | $('#target').val();
  tower = tower || hanoi;

  if (source > 2 || source < 0 || target > 2 || target < 0) {
    return false;
  }

  var value = tower[source].pop();
  tower[target].push(value);

  $('#source').val('');
  $('#target').val('');
}

function setTowers () {
  $('#pile_1').html(hanoi[0]);
  $('#pile_2').html(hanoi[1]);
  $('#pile_3').html(hanoi[2]);
}

$(document).ready(function(){
	
  setTowers();

  $('#move').on('click', function() {
    move();
    setTowers();
  });

});