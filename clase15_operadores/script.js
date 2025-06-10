/* --------------OPERADORES----------------*/

    /*---------------DE ASIGNACION------------*/
let letra = "a"
    letra = "b" // Asignación de un nuevo valor a la variable letra

                           /*---------------DE COMPARACION-----------*/
    
/*---------DE IGUALDAD---------*/
/* SIMPLE */
12 == 12 // true porque ambos valores son iguales

"hola" == "hola" // true porque ambas cadenas son iguales

"hola" == "Hola" // false porque las cadenas son diferentes (distingue mayúsculas y minúsculas)
 
"78" == 78 // true porque el valor de la cadena "78" se convierte a número para la comparación

/* ESTRICTA */
// Se fija en el VALOR y el TIPO DE DATO (si es un número, cadena, booleano, etc.) 
// Se usa TRES signos de igual
12 === 12 // true porque ambos son números y tienen el mismo valor
"78" === 78 // false porque el tipo de dato es diferente (cadena vs número)
"78" === "78" // true porque ambos son cadenas y tienen el mismo valor


/*---------DE DESIGUALDAD----*/
/* SIMPLE */
//es una comparación que verifica si dos valores son diferentes, sin importar el tipo de dato 
56 != 78 // true porque 56 y 78 son diferentes
56 != 56 // false porque ambos valores son iguales
"56" != 56 // false porque "56" se convierte a número y son iguales
"hola" != "Hola" // true porque las cadenas son diferentes (distingue mayúsculas y minúsculas)
"hola" != "hola" // false porque ambas cadenas son iguales

/* ESTRICTA*/
//se usa con un signo de exclamación y dos signos de igual
"56" !== 56 // true porque el tipo de dato es diferente (cadena vs número)
"hola" !== "Hola" // true porque las cadenas son diferentes (distingue mayúsculas y minúsculas)
"hola" !== "hola" // false porque ambas cadenas son iguales

/*---------ARTIMETICO--------*/
// Se usa para realizar operaciones matemáticas básicas

/* SUMA */
let numero = 0;
numero++;
0

numero++; // Incrementa el valor de numero en 1, ahora numero es 1
1

numero++; // Incrementa el valor de numero en 1, ahora numero es 2
2

numero; // Muestra el valor actual de numero, que es 2
2

/* RESTA */
let numero1 = 10;

numero1-- // Decrementa el valor de numero1 en 1, ahora numero1 es 9
9 

numero1--; // ahora numero1 8 su valor
8

numero1--; // ahora numero1 es 7
7

numero1; // Muestra el valor actual de numero1, que es 7
7

/* SUMA , RESTA , MULTIPLICACION EN BASE A VALOR DADO */

numero2 = 100 // Asigna el valor 100 a numero2
// Operaciones aritméticas con numero2
numero2 += 10 // Suma 10 a numero2, ahora numero2 es 110

numero2 -= 20 // Resta 20 a numero2, ahora numero2 es 90

numero2 *= 2 // Multiplica numero2 por 2, ahora numero2 es 180

numero2 /= 3 // Divide numero2 por 3, ahora numero2 es 30

numero2 %= 7 // Calcula el residuo de numero2 dividido por 7, ahora numero2 es 2

numero2; // Muestra el valor actual de numero2, que es 2

/*---------LOGICOS--------*/
// Se usan para combinar o invertir condiciones lógicas
/* AND (&&) */
//MIENTRAS AMBAS CONDICIONES SEAN VERDADERAS, EL RESULTADO ES VERDADERO
// Se usa para verificar si ambas condiciones son verdaderas 
true && true // true porque ambas condiciones son verdaderas
true && false // false porque una de las condiciones es falsa
false && false // false porque ambas condiciones son falsas
false && true // false porque una de las condiciones es falsa
/* OR (||) */
//MIENTRAS UNA DE LAS CONDICIONES SEA VERDADERA, EL RESULTADO ES VERDADERO
// Se usa para verificar si al menos una de las condiciones es verdadera
//
true || true // true porque al menos una condición es verdadera
true || false // true porque al menos una condición es verdadera
false || false // false porque ambas condiciones son falsas
false || true // true porque al menos una condición es verdadera

/* NOT (!)  NEGACION*/
// Se usa para invertir el valor de una condición
// Si la condición es verdadera, se convierte en falsa, y viceversa
!true // false porque invierte el valor de true a false
!false // true porque invierte el valor de false a true
!0 // true porque 0 es considerado falso en JavaScript, al negarlo se convierte en verdadero
!1 // false porque 1 es considerado verdadero en JavaScript, al negarlo se convierte en falso
!"" // true porque una cadena vacía es considerada falsa en JavaScript, al negarla se convierte en verdadero
!null // true porque null es considerado falso en JavaScript, al negarlo se convierte en verdadero
!undefined // true porque undefined es considerado falso en JavaScript, al negarlo se convierte en verdadero


/*-----------------ALERTAS----------------*/
// Se usan para mostrar mensajes al usuario
alert("Deseo saludarte") //se muestra ese mensaje con alerta
confirm("¿Puedes decirme tu nombre?") //se muestra un mensaje de confirmación con dos opciones: Aceptar o Cancelar

let nombre = prompt("Genial,¿Como te llamas ? ") //se almacena el valor ingresado por el usuario en la variable nombre
alert(`Hola, ${nombre} bienvenidx`) //se muestra un mensaje de bienvenida al usuario con su nombre


/*-----------------EJERCICIO----------------*/
// ejercicio de operadores lógicos

let a = 5;
let b = "5";

    let resultado  = !(a === b) ||
false // porque a y b son iguales en valor, pero diferentes en tipo de dato, y la segunda parte es falsa porque b no es igual a 0

        (a < 10 && b == 0);
 false // porque a es menor que 10, pero b no es igual a 0 y true y false es = a false dentro de un AND

let usuario = "admin"; 
let password = "1234";
let acceso =
    !(usuario === "admin" && clave === "1234") // 
    // es falso porque ambas condiciones son verdaderas,
    // pero el operador NOT (!) invierte el resultado a falso
    ||
    password.length < 4 
// es falso porque la longitud de la contraseña es 4,
// por lo tanto, el resultado final es falso    
false; // porque ambas condiciones son falsas, y el operador OR (||) requiere al menos una verdadera para ser verdadero
    
let x = 4;
let y = 10;
let respuesta = !(x > 2 && y < 15) && !(x === 4 || y !== 10)
// es falso porque la primera parte es verdadera (x > 2 y y < 15),
// pero el operador NOT (!) invierte el resultado a falso, y falso y flaso en el AND (&&) es falso
// la segunda parte es verdadera (x === 4 y y !== 10), hacindo que el resultado final sea falso



/* ejercicios de alarmas*/
//1-Declara una varibable y mediante prompt pide al usuario que ingrese su nombre y apellido y mostra por consola el resultado
let nombreCom = prompt(`¿Cual es su nombre compelto?`)
console.log(`Su nombre completo es: ${nombreCom}`)
alert(`Su nombre completo es: ${nombreCom}`) // Muestra el nombre completo en una alerta
//2-Declara variables y mediante prompts nombre,color preferido, comida favorita,mejor pelicula
// y trabajo actual y luego armar un parrafo de presentacion utiulizando templane literals mostrando
// el resultado por consola

let nombre1 = prompt("¿Cual es tu nombre?");
let color = prompt("¿Cual es tu color preferido?")
let comida = prompt("¿Cual es tu comida favorita?")
let peliculas = prompt("¿Cual es tu mejor pelicula?")
let trabajo = prompt("¿Cual es tu trabajo actual?")
console.log(`Hola, mi nombre es ${nombre1}, mi color preferido es ${color}, mi comida favorita es ${comida}, 
    mi mejor película es ${peliculas} y actualmente trabajo como ${trabajo}.`)
alert(`Hola, mi nombre es ${nombre1}, mi color preferido es ${color}, mi comida favorita es ${comida}, 
    mi mejor película es ${peliculas} y actualmente trabajo como ${trabajo}.`)

//3-Con la varibale nombre da una alarte con el nombre del usuario 
alert(`Hola ${nombre1}, Bienvenido`)
console.log(`Hola ${nombre1}, Bienvenido`)
