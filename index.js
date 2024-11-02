
var primernum = 0;
var segunnunm = 0;
var operacion = '';
var respuesta = 0;

if(operacion == ''){
    console.log(`ingrese una operacion`)
}
if(operacion != 'suma' && operacion != 'resta' && operacion && 'multiplicacion' && operacion != 'division'){
    console.log(`La operacion ${operacion} no es una valida`)
}


if(operacion == 'suma'){
    respuesta = primernum + segunnunm
    console.log(`Su operacion fue una ${operacion} y la respuesta es ${respuesta}`)
}
if(operacion == 'resta'){
    respuesta = primernum - segunnunm
    console.log(`Su operacion fue una ${operacion} y la respuesta es ${respuesta}`)
}
if(operacion == 'multiplicacion'){
    respuesta = primernum * segunnunm
    console.log(`Su operacion fue una ${operacion} y la respuesta es ${respuesta}`)
}
if(operacion == 'division'){
    respuesta = primernum / segunnunm
    console.log(`Su operacion fue una ${operacion} y la respuesta es ${respuesta}`)
}
