const aprobacion = document.getElementById("aprobacion")
const desaprobacion = document.getElementById("desaprobacion")

let alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

//Usando .filter y mostrando el resultado en la consola:

let aprobados = alumnos.filter(notaPiola => notaPiola.nota >= 7);
console.log(aprobados)

//Usando .map y mostrando el resultado en pantalla:

function prueba(array) {
    let ss = array.map(element => {
        if (element.nota > 6) {
            aprobacion.innerHTML += `<li style="color: lime">${element.nombre} aprobó!</li>`
        } else {
            desaprobacion.innerHTML += `<li style="color: red">${element.nombre} desaprobó</li>`
        }
    }); return ss
}

prueba(alumnos);