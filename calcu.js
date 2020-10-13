

function cal(val){
    document.getElementById("showValue").value+=val
 }
function solve(){
    let x = document.getElementById("showValue").value
    let y = eval(x)
    document.getElementById("showValue").value = y
}
function clr(){
    document.getElementById("showValue").value = ""
}
