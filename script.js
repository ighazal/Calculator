/*var x = document.getElementById("monster").value;
var numbers = [];
var amalgars = ["-","+","*","/"];
if (var i = 0; i <= x.length; i++){
     if (amalgars.includes(x[i]) == false){
          numbers.push(x.split());
     }
}*/
function display(value) {
        document.getElementById("monster").value += value;
}
function amalgar(value) {
        document.getElementById("monster").value += value;
}
function clearScreen(){
     document.getElementById("monster").value = "";
     document.getElementById("result").value = "";
}