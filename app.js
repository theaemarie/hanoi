var hanoi = [
  [5,4,3,2,1],
  [],
  []
];

function move (source, target) {
  var value = hanoi[source].pop();
  hanoi[target].push(value);
}


document.getElementById('tower').innerHTML = hanoi;
