<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="stylesheet.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
        <style>
        body {
    background-color: greenyellow;
}

button {
    width: 50px;
    height: 50px;
}

input {
    width: 90px;
}</style>
    <span>Dig1 : </span><input type="number" id="n1">
    <span>Dig2 : </span><input type="number" id="n2">
    <br>
    <button onclick="somar()">+</button>
    <button onclick="subtrair()">-</button>
    <br>
    <button onclick="multiplicar()">*</button>
    <button onclick="dividir()">/</button>
    <br>
    <span>Resultado : </span><input type="number" id="res">
</body>

<script type="text/javascript" src="javascript.js"></script>
<script>
function somar(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value

    var res = parseInt(n1) + parseInt(n2)

    document.getElementById("res").value = res
}

function dividir(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value

    var res = parseInt(n1) / parseInt(n2)

    document.getElementById("res").value = res
}

function multiplicar(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value

    var res = parseInt(n1) * parseInt(n2)

    document.getElementById("res").value = res
}

function subtrair(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value

    var res = parseInt(n1) - parseInt(n2)

    document.getElementById("res").value = res

}</script>
</html>
