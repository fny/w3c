var triggers = document.getElementById("triggers");
var value = document.getElementById("value");
var min = document.getElementById("min");
var max = document.getElementById("max");
var numTriggers = 0;
function callback(event){
  triggers.innerHTML = numTriggers++;
  min.innerHTML = event.min;
  max.innerHTML = event.max;
  value.innerHTML = event.value;
}
window.addEventListener('deviceproximity', callback);
