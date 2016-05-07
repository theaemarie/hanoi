var hanoi = [
  [5,4,3,2,1],
  [],
  []
];

function move (source, target) {
  var value = hanoi[source].pop();
  hanoi[target].push(value);
}


//document.getElementById('pile1').innerHTML = hanoi[0];

// if (hanoi[1] !== null) {
//   document.getElementById('pile2').innerHTML = hanoi[1];
// }
// if (hanoi[2] !== null) {
//   document.getElementById('pile2').innerHTML = hanoi[2];
// }