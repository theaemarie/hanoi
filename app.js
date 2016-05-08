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
  $('#pile_1').html('');
  $('#pile_2').html('');
  $('#pile_3').html('');

  $('#pile_1').html(buildPiles(0));
  $('#pile_2').html(buildPiles(1));
  $('#pile_3').html(buildPiles(2));
}

var buildPiles = function (pile_index) {
  $.each(hanoi[pile_index], function(index, value){
      var pileNum = pile_index + 1;
      $('#pile_' + pileNum).prepend('<div class="pile p_' + value + '">' + value +'</div>');
    });
}

$(document).ready(function(){
	
  setTowers();

  $('#move').on('click', function() {
    move();
    setTowers();
  });

});