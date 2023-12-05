(function (){

let button = document.querySelectorAll("input");   //Elemento do dom onde estão os botões da calculadora.
let result = document.querySelector(".resultP");   //Elemento do dom referente ao visor da calculadora.

button.forEach(btn =>{
    btn.addEventListener("click", function(){           // Evento criado após algum botão ser clicado.
        if(btn.value === "="){                          // ------> Quando o usuário apertar o botão "=" a função eval() será chamada passando todos os valores que estão                             
        result.textContent = eval(result.textContent)   // -----> no visor, retornando ao visor o resultado.
        }
        else if(btn.value === "c"){        // ---> Quando o usuário apertar no botão "C" todos os valores do visor serão deletados.
        result.textContent = "";
        }
        
        else if (btn.value === "+") {             
           
        if (!result.textContent.includes("+")) {    // Impede que o usuário adicione dois "+" um ao lado do outro.
                result.textContent += btn.value;
        }}

        else if (btn.value === "-") {
           
        if (!result.textContent.includes("-")) {      // Impede que o usuário adicione dois "-" um ao lado do outro.
                    result.textContent += btn.value;
                }}

        else if (btn.value === "/") {               // Impede que o usuário adicione dois "/" um ao lado do outro.
           
        if (!result.textContent.includes("/")) {
                        result.textContent += btn.value;
                    }}

        else if (btn.value === "*") {
           
        if (!result.textContent.includes("*")) {               // Impede que o usuário adicione dois "*" um ao lado do outro.
                            result.textContent += btn.value;
                        }}

        else if (btn.value === "%") {               
           
        if (!result.textContent.includes("%")) {          // Impede que o usuário adicione dois "%" um ao lado do outro.
        result.textContent += btn.value;
        }}


        else if (btn.value === ".") {
           
            if (!result.textContent.includes(".")) {      // Impede que o usuário adicione dois "." um ao lado do outro.
                result.textContent += btn.value;
            }}

         else if(btn.value === "x"){                      // Quando o usuário clicar no "X", apenas o último valor do visor será removido.
                result.textContent= result.textContent.toString().slice(0, -1);
                }
        
        else{
            result.textContent += btn.value;     // Adiciona os botões apertados no visor.
        }

    })
})


})()
