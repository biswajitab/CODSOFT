var inputBox=document.getElementById("txtInput");
var button=document.querySelectorAll("button");

var string=""
button.forEach(function(element){
    element.addEventListener("click",(b)=>{
        if(b.target.innerHTML=="="){
            string=String(eval(string))
            inputBox.value=string;
        }else if(b.target.innerHTML=="AC"){
            string=""
            inputBox.value=string;
        }else if(b.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1)
            inputBox.value=string;
        }
        else{
            string +=b.target.innerHTML
            inputBox.value=string;
        }
    })
})