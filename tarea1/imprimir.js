const triaje = require('./datos');

//Impresion por forEach

triaje.forEach((i) => {
    console.log(i)
});

//Impresion por for in

for (let index = 0; index < triaje.length; index++) {
    const element = triaje[index];
    console.log(element);
}

//Impresion por for of

for (const iterator of triaje) {
    console.log(iterator);
}
