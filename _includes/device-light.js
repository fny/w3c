var triggers = document.getElementById("triggers");
var value = document.getElementById("value");
var numTriggers = 0;
function callback(event){
  triggers.innerHTML = numTriggers++;
  value.innerHTML = event.value;
}
window.addEventListener('devicelight', callback);
