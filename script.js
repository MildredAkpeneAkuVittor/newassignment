const Calculator = require('./calculator')

const simplecalc = new Calculator()

const calc = document.getElementById("btn")

calc.addEventListener("click",function(){
    
    let number1 = document.getElementById("firstnumber").Value;
    let number2 = document.getElementById("secondnumber").Value;

    newanswer =  number1 + number2;
    const simplecalc = new Calculator(number1, number2);
     
    let answer = document.getElementById("answer");
    answer.innerHTML = "your answer is "+newanswer
})
