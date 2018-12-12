var button = document.getElementById("convert");
var celsius = document.getElementById("celsius");
var farenheit = document.getElementById("farenheit");

function convert() {
    var temperature = Number(celsius.value);
    farenheit.value = 9 / 5 * temperature + 32;
}

button.addEventListener("click", convert);