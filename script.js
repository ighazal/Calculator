function mosavi(){
var x = document.getElementById("monster").value;
var numbers = [];
var amalgars = ["-","+","*","/"];
var number = "";
var operator = "";
var result = 0;    
    for (var i = 0; i < x.length; i++){
        if (amalgars.includes(x[i]) == false){
            number += x[i];
        }
        else if (amalgars.includes(x[i])){
            if (operator!==""){
                switch(operator){
                    case "+":
                        result += parseInt(number); 
                        break;
                    case "-":
                        result -= parseInt(number);
                        break;
                    case "*":
                        result *= parseInt(number);
                        break;
                    case "/":
                        result /= parseInt(number);
                        break;            
                } 
                number = "";
                operator = x[i];
            }
            else {
                result = parseInt(number);
                number = "";
                operator = x[i];
            }
        }
        if (i == x.length-1){
            switch(operator){
                case "+":
                    result += parseInt(number); 
                    break;
                case "-":
                    result -= parseInt(number);
                    break;
                case "*":
                    result *= parseInt(number);
                    break;
                case "/":
                    result /= parseInt(number);
                    break;            
            } 
            number = "";
        }
    }
document.getElementById("result").value = result;
}
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
String.prototype.removeCharAt =
function (i){
    var tmp = this.split("");
    tmp.splice(i-1 , 1);
    return tmp.join("");
}
function Clittle(){
    var x = document.getElementById("monster").value;
    x = x.removeCharAt(x.length - 1);
    document.getElementById("monster").value = x;
}


