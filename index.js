// function calculator() {

//     var value1 = Number(document.getElementById("v1").value);
//     var value2 = Number(document.getElementById("v2").value);
//     var operator = document.getElementById("op").value;
//     var result = document.getElementById("opt");

//     //result.value = "";


//     console.log(typeof (value1));
//     console.log(value2 + value1);
//     console.log(operator);

//     switch (operator) {
//         case "+":
            
//             result.value= value1 + value2;
//             break;

//         case "-":

//             result.value= value1 - value2;
//             break;
        
//         case "*":
//             result.value= value1 * value2;
//             break;

//         case "/":

//             result.value= value1 / value2;
//             break;


//         case "**":

//             result.value= value1 ** value2;
//             break;

    
//     }
// }

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));


buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});