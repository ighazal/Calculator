var op_flag = true;
var num_flag = false;
var n = 0;
var op = "";
var x = document.getElementById("monster").value;
function display(x){
    from_tavan_10();
    if(num_flag){
        document.getElementById("monster").value = "";
        num_flag = false;
    }
    document.getElementById("monster").value += x;
    change_font();
    tavan_10();
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
       num_flag = true;
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
        document.getElementById("monster").value = n;
        tavan_10(x);
        op = x;
        num_flag = true;
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
    tavan_10(x);
    op = "";
    num_flag = true;
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
    tavan_10(x);
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
function tavan_10(){
   var power_value = document.getElementById("monster").value;
   if(power_value.length>=10){
       x = parseFloat(power_value);
       let y = (x/Math.pow(10,(power_value.length-1))).toFixed(2);
       let e = "e"+(power_value.length-1);
       let f = y+e;
       document.getElementById("monster").value = f;
   }
}
function from_tavan_10(){
    var from_value = document.getElementById("monster").value;
    if(from_value.includes("e")){
        var w = from_value.split("e");
        var a = parseFloat(w[0]);
        var b = parseInt(w[1]);
        var c = Math.ceil(a*(Math.pow(10,b)));
        document.getElementById("monster").value = c;
    }
}