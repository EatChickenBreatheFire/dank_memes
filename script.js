var myNumber = 0

function myFunction() {
var text= document.getElementById('myText').value;

myNumber = myNumber + 1;

document.getElementById('output').innerHTML = myNumber + text
}

var newOutput = '';

newText("boots and");

function newText(thing) {

  newOutput = newOutput + thing;

  document.getElementById('output').innerHTML = newOutput;
}
