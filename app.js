(function (){

let button = document.querySelectorAll("input");
let result = document.querySelector(".resultP");

button.forEach(btn =>{
    btn.addEventListener("click", function(){
        if(btn.value === "="){
        result.textContent = eval(result.textContent)
        }
        else if(btn.value === "c"){
        result.textContent = "";
        }
        
        else if (btn.value === "+") {
           
        if (!result.textContent.includes("+")) {
                result.textContent += btn.value;
        }}

        else if (btn.value === "-") {
           
        if (!result.textContent.includes("-")) {
                    result.textContent += btn.value;
                }}

        else if (btn.value === "/") {
           
        if (!result.textContent.includes("/")) {
                        result.textContent += btn.value;
                    }}

        else if (btn.value === "*") {
           
        if (!result.textContent.includes("*")) {
                            result.textContent += btn.value;
                        }}

        else if (btn.value === "%") {
           
        if (!result.textContent.includes("%")) {
        result.textContent += btn.value;
        }}


        else if (btn.value === ".") {
           
            if (!result.textContent.includes(".")) {
                result.textContent += btn.value;
            }}

         else if(btn.value === "x"){
                result.textContent= result.textContent.toString().slice(0, -1);
                }
        
        else{
            result.textContent += btn.value;
        }

    })
})


})()