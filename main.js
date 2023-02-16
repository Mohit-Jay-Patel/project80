function getpara1(){
    var input=[];
    for (var i=1;i<=6;i++){
        input.push(document.getElementById("div1_para"+i).value);
    }
    document.getElementById("show_para1").innerHTML=input.join(". ");
}
function getpara2(){
    var input=[];
    for (var i=1;i<=6;i++){
        input.push(document.getElementById("div2_para"+i).value);
    }
    document.getElementById("show_para2").innerHTML=input.join(". ");
}