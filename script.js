const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultadoDiv = document.getElementById('resultado');

function sumar(){
    console.log( typeof num1.value)
	// el parseFloat() se usa para convertir los elementos obtenidos del .html de string a number
	const resultado = parseFloat(num1.value) + parseFloat(num2.value);
	resultadoDiv.textContent = `Resultado: ${resultado}`;
}

function restar(){
	const resultado = parseFloat(num1.value) - parseFloat(num2.value);
	resultadoDiv.textContent = `Resultado: ${resultado}`;
};
function incrementar(){
	const resultado = Number(num1.value++);
	resultadoDiv.textContent = `Resultado: ${resultado}`;
};

function multiplicar(){
	const resultado = parseFloat(num1.value) * parseFloat(num2.value);
	resultadoDiv.textContent = `Resultado: ${resultado}`;
};

function dividir(){
	const resultado = parseFloat(num1.value) / parseFloat(num2.value);
	resultadoDiv.textContent = `Resultado: ${resultado}`;
};

function resto() {
	const resultado = parseFloat(num1.value) % parseFloat(num2.value);
	resultadoDiv.textContent = `Resultado: ${resultado}`;
};

// ${resultado} es una forma de incluir el valor de la variable resultado dentro de una cadena de texto (string) en JavaScript utilizando lo que se conoce
//  como template strings o plantillas de cadenas.
// Esto se logra mediante la utilización de los símbolos de dolar y llaves (${}), que permiten incluir variables y expresiones dentro de una cadena de texto
//  sin necesidad de concatenarlas con el operador +.
