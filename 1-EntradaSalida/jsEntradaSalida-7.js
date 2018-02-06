/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    var suma = parseInt(num1) + parseInt(num2);
    alert("La suma es: " +suma);
	
}

function restar()
{
    var num1;
    var num2;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    var resta = parseInt(num1) - parseInt(num2);
    alert("La resta es: " +resta);
	
}

function multiplicar()
{ 
    var num1;
    var num2;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    var multiplicar = parseInt(num1) * parseInt(num2);
    alert("La multiplicacion es: " +multiplicar);
	
}

function dividir()
{
    var num1;
    var num2;
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    var dividir = parseInt(num1) / parseInt(num2);
    alert("La division es: " +dividir);
	
}

