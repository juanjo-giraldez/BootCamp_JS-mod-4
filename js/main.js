const valueNum = (id) => parseInt(document.getElementById(id).value);

const sum = () => valueNum("num-1") + valueNum("num-2");
const subtract = () => valueNum('num-1') - valueNum('num-2')
const multiply = () => valueNum('num-1') * valueNum('num-2')
const divide = () => valueNum('num-1') / valueNum('num-2')

const result = (result) =>
  (document.getElementById("result").innerHTML =
    "¡¡Resultado: " + result + "!!");
const erroMessage = (document.getElementById("result").innerHTML =
  "Incluye números en el campo");


const sumResolution = () => isNaN(valueNum("num-1")) || isNaN(valueNum("num-2")) ? erroMessage : result(sum());
const subtractResolution = () => isNaN(valueNum("num-1")) || isNaN(valueNum("num-2")) ? erroMessage : result(subtract());
const multiplyResolution = () => isNaN(valueNum("num-1")) || isNaN(valueNum("num-2"))  ? erroMessage : result(multiply());
const divideResolution = () => isNaN(valueNum("num-1")) || isNaN(valueNum("num-2")) ? erroMessage : result(divide());

document.getElementById("sum").addEventListener("click", sumResolution);
document.getElementById("subtract").addEventListener("click", subtractResolution);
document.getElementById("multiply").addEventListener("click", multiplyResolution);
document.getElementById("divide").addEventListener("click", divideResolution);
