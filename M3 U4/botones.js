const container = document.getElementById("container")
const cuad1 = document.getElementById("cuad1")
const cuad2 = document.getElementById("cuad2")
const cuad3 = document.getElementById("cuad3")

cuad1.addEventListener('click', function() {
    container.style.backgroundColor = 'rgb(0, 185, 145)'
}, false);

cuad2.addEventListener('click', function() {
    container.style.backgroundColor = 'rgb(0, 126, 126)'
}, false);

cuad3.addEventListener('click', function() {
    container.style.backgroundColor = 'rgb(38, 0, 82)'
}, false);