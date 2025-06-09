console.log("INICIANDO EN JS")
    /*-----------VALORES PRIMITIVOS--------------*/
    /*NUMEROS*/
    (3 + 2 * 3 + 1);   //devuelve 10

    /* STRING */
//TODO LO QQUE ESTE ENTRE COMILLAS "" VA HACER UN STRING

("Hola como estas?");
("123");

//BOOLLEANS
true;
false;

/*VALORES VACIOS*/
null;
undefined;

//-----------VALORES--------------/
/*  lents*/
let numero = 300;
console.log(numero, "{-----esto es la variable numero");
let nombre = "rosario"; //declarado la variable
console.log(nombre, "{-----primer valor de nombre");

nombre = "martina"; //modificado el valor 
console.log(nombre, "{------segundo valor de nombre");

/* conts*/
const PI = 3.14; //no se puede modificar el valor de una constante
console.log(PI, "{-----esto es la constante PI");   

const fija = "esto n se puede mofidicar";
console.log(fija, "{---primer valor")

// fija = "otro valor";
// console.log(fija, "{---segundo valor") //esto no se puede hacer, porque fija es una constante

//-----------CONCADENACIO--------------//
 
let nombreCompleto = "Tiziana Gomez";
console.log("Hola" + nombreCompleto);

let primerNum = "14";
let segundoNum = 16;
console.log = (primerNum + segundoNum); //devuelve  //"1416" porque es un string

let edad = 20;
let apellido = "Gomez";
let primerNombre = "Tiziana";


console.log("Hola mi nombre es " +primerNombre+ " y mi apellido es "+apellido+ " y tengo " +edad+ " años de edad");

//-----------TEMPLATE LITERALS--------------//
//es una forma de concatenar mas facil, se usa el simbolo ``
console.log(
    `Hola mi nombre es ${primerNombre} y mi apellido es ${apellido} y tengo ${edad} años de edad`
);

let nombreCom = `${primerNombre} ${apellido}`
let nombreCom2 = primerNombre + " " + apellido;
console.log(nombreCom, "{---nombreCom");
