let add = document.getElementById("add");
let input = document.getElementById("input");

let result = document.getElementById("result");
function addValue(str) {

  input.innerHTML += str;
}

function endResult() {
  input.innerHTML = eval(input.innerHTML);
}
function clearScreen(){
input.innerText="";
}