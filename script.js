var op_flag = true;
var n = 0;
var op = "";
var x = document.getElementById("monster").value;
function display(x){
    document.getElementById("monster").value += x;
    change_font();
    op_flag = false;
}
function amalgar(x){
    if (op_flag){
        op = x;
    }
    else{
    if(op === ""){ 
       n += parseFloat(document.getElementById("monster").value);
       document.getElementById("monster").value = "";
       op = x;
       op_flag = true;
    }
    else{
        switch(op){
            case "+":
                n += parseFloat(document.getElementById("monster").value);  
                break;
            case "-":
                n -= parseFloat(document.getElementById("monster").value);   
                break;
            case "*":
                n *= parseFloat(document.getElementById("monster").value);   
                break;
            case "/":
                n /= parseFloat(document.getElementById("monster").value);   
                break;
            case "√":
                n = Math.sqrt(parseFloat(document.getElementById("monster").value));
                break;    
        }
        document.getElementById("monster").value = "";
        op = x;
        op_flag = true;
    }
    }
}
function mosavi(){
      if(op === ""){ 
       n += parseFloat(document.getElementById("monster").value);
    }
    else{
        switch(op){
            case "+":
                n += parseFloat(document.getElementById("monster").value);  
                break;
            case "-":
                n -= parseFloat(document.getElementById("monster").value);   
                break;
            case "*":
                n *= parseFloat(document.getElementById("monster").value);   
                break;
            case "/":
                n /= parseFloat(document.getElementById("monster").value);   
                break;
            case "√":
                n = Math.sqrt(parseFloat(document.getElementById("monster").value));
                break;
        }
    }
    document.getElementById("monster").value = n;
    n = 0;
    op = "";
    op_flag = true;
}
function clearScreen(){
     document.getElementById("monster").value = "";
     n = 0;
     op = "";
}
String.prototype.removeCharAt =
function (i){
    var tmp = this.split("");
    tmp.splice(i-1 , 1);
    return tmp.join("");
}
function Clittle(){
    var x = document.getElementById("monster").value;
    x = x.removeCharAt(x.length);
    document.getElementById("monster").value = x;
    change_font();
}
function change_font(){
   var monster_value = document.getElementById("monster").value;
   if(monster_value.length>=8 && monster_value.length<=21){
      document.getElementById("monster").style.fontSize = "17px";   
   }
   else if(monster_value.length>21){
      document.getElementById("monster").style.fontSize = "15px";   
   }
   else{
      document.getElementById("monster").style.fontSize = "20px";  
    }
}