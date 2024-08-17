function display(val){
    document.getElementById('display').value += val
    return val
}
function del(){
    var input =document.getElementById('display')
    input.value=input.value.substring(0,input.value.length-1)
    return input
}
function clr(){
    document.getElementById("display").value = ' ';
}
function solve(){
    var a= document.getElementById("display").value;  
    var b=eval(a)
    document.getElementById("display").value=b; 
}