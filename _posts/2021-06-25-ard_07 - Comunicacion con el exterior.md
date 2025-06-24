---
layout: post
title: "07 - Comunicación con el exterior"
author: "qode66"
description: "Comprender la comunicación vía puerto serie, para lo cual hay que utilizar la librería Serial. Veremos también operaciones con enteros, los tipos String y char. Entenderemos cómo operar con Strings y la instrucción while."
date: 2021-06-25 01:00:00 +0200
categories: arduino basic
excerpt: "Comprender la comunicación vía puerto serie, para lo cual hay que utilizar la librería Serial. Veremos también operaciones con enteros, los tipos String y char. Entenderemos cómo operar con Strings y la instrucción while."
tags: ["arduino", "comunicación", "puerto serie", "String", "char", "while"]
---

[img1]: /assets/imatges/ard/ard_07_01.png "Monitor serie"
[img2]: /assets/imatges/ard/ard_07_02.png "Velocidad de conexión"
[img3]: /assets/imatges/ard/ard_07_03.png "Final de línea"

## Objetivos

El objetivo de la lección es comprender la comunicación vía puerto serie, para
lo cual hay que utilizar la librería Serial. Veremos también operaciones con
enteros, los tipos String y char. Entenderemos cómo operar con Strings y la
instrucción while.

## Material requerido

| Imagen                                                               | Descripción               |
| -------------------------------------------------------------------- | ------------------------ |
| <img src="/assets/imatges/mat/mat_portatil.jpg" width="50" height="50"> | PC                       |
| <img src="/assets/imatges/mat/mat_cableusb.png" width="50" height="50"> | Cable USB                |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">    | Arduino UNO o compatible |

## Comunicación Serie con el mundo exterior

Más antes que después, necesitaremos comunicar nuestro Arduino con nuestro
PC. Las razones son varias, enviarle órdenes o recibir información o
señales por ejemplo.

Los PCs disponen de teclados, pantallas y adaptadores de red, pero con
Arduino tenemos que usar el puerto USB que establecerá una **conexión en serie**
con nuestro PC.

La comunicación en serie es muy sencilla, bastan dos hilos para enviar
una diferencia de tensión entre ellos y poder marcar niveles alto (5V) y
bajo (0V) y con esto podemos transmitir información digital. Ahora solo nos
falta pactar dos cosas entre quien envía y quien recibe:

- Un **código común** para codificar los caracteres que enviamos.
- Un **acuerdo de velocidad** para saber a qué ritmo hay que leer los datos.

El código común que usaremos con Arduino se llama **código ASCII** y es estándar
en todos los PCs. Es una manera de codificar las letras mediante
números que representan estos caracteres. Recordad que solo podemos
transmitir unos y ceros.

Así por ejemplo la letra A se representa por el número 65, la B el 66, C
el 67... Prácticamente todos los PCs actuales utilizan este código y esto
incluye a Windows, Mac y Linux (y por eso podemos leer emails enviados
desde diferentes plataformas), pero es importante comprender que este
es uno más entre diversos códigos de caracteres posibles (EBCDIC por
ejemplo).

- Actualmente, en realidad, se suele usar una extensión del **código ASCII** (llamada **Unicode**) que permite el uso de caracteres no incluidos en la tabla original, y que permite representar caracteres como las Ñ, o acentos para el español, pero también alfabetos diferentes como el Kanji chino o el alfabeto cirílico. Y este es el motivo por el cual podéis leer las letras chinas o rusas en las páginas de internet de estos países.

El otro factor a pactar para realizar una comunicación serie es la
velocidad. Dado que solo disponemos de dos hilos para transmitir,
necesitamos saber cuándo hay que leer la línea y esto se hace estableciendo un
acuerdo de velocidad. Si la velocidad de envío es diferente de la
velocidad de lectura, el mensaje final será irreconocible.

Buena parte de los errores de comunicación serie programando con Arduino se
suelen deber a una diferencia de velocidad entre el emisor y el
receptor.

Esta velocidad se mide en bits por segundo (baudios) y veremos que
Arduino soporta diferentes velocidades de comunicación serie.

## Estableciendo la comunicación Serie

Arduino dispone de una librería serie incluida llamada Serial, que nos
permite enviar información al PC y para usarla simplemente tenemos que
pedirle en nuestro **setup()** que la incluya. La instrucción que
se encarga es:

```Arduino
Serial.begin( velocidad ) ;
```

- _Notad que Serial tiene la S mayúscula y que C++ diferencia entre mayúsculas y minúsculas_

La velocidad es un valor entre 300 y 115.200 bits por segundo. Y suele ser
costumbre establecerla en 9600 (el valor por defecto) pero no hay ninguna razón
para esto y esta no es una velocidad especialmente alta.

Para enviar un mensaje desde Arduino a nuestro PC podemos usar las
funciones `Serial.print()` y `Serial.println()`. Veamos un ejemplo:

```Arduino
int LED = 10 ; int boton = 6 ;
bool estado = false ;

void setup()
{
    Serial.begin(9600) ; // Inicializa el Puerto serie a 9600 bits por segundo
}

void loop()
{
    int i = 54 ;
    Serial.println( i );
}
```

El `Serial.println()` enviará el valor de i al puerto serie de Arduino
(_repetidamente_). Para leerlo en nuestro PC necesitamos un monitor
de puerto serie. El IDE de Arduino incluye uno muy sencillo, pero suficiente
que se invoca con el botón del monitor:

![Botón del monitor serie][img1]{: .centered}

Necesitamos además asegurarnos de que la velocidad de conexión es la
misma en ambos extremos. Fijaos en la parte inferior derecha del
monitor serie:

![Velocidad de conexión][img2]{: .centered}

Normalmente la velocidad por defecto son los 9600 bits por segundo o
**baudios** en los cuales hemos programado nuestra puerta serie, y si lo
desplegáis, veréis las diferentes velocidades aceptables para Arduino.

- _Estrictamente hablando, bits por segundo y baudios no son exactamente lo mismo excepto bajo ciertas condiciones particulares que en Arduino se cumplen, por lo cual aquí podemos usarlos como sinónimos._
- _En el mundo Arduino parece haber un acuerdo de usar velocidades bajas como 9600 en lugar de más altas como 115200, para evitar problemas. Esto es algo que hace años estaba justificado por problemas de transmisión, pero con la tecnología actual no hay motivo para esto. Es más, cuando necesitamos utilizar dispositivos de comunicaciones como adaptadores Ethernet o BlueTooth para comunicarnos, la velocidad tendrá que subir necesariamente._

Ahora que sabemos enviar información y resultados al PC, veremos cómo podemos
operar con enteros y mostrar el resultado en la puerta serie. En C++ los
operadores numéricos son los normales en cálculo (y algunos menos frecuentes):

- Adición: +
- Resta: -
- Multiplicación: *
- División entera: / Cociente sin decimales (ya que operamos con enteros)
- Resto: % Retorna el resto de una división.

En C++ tenemos que expresar las operaciones matemáticas en una sola línea y
utilizar paréntesis para garantizar que se opera como necesitamos. Vamos con
algunos ejemplos:

| Operación           | Resultado     | Comentario                                                |
| ------------------ | ------------ | -------------------------------------------------------- |
| int i = 4 * 2     | resultado = 8 |                                                          |
| int i = 4 * 2 / 3 | resultado = 2 | Porque desprecia los decimales al ser entero              |
| int i = 14 % 3      | resultado = 2 | El resto de 14 dividido entre 3                           |
| int i = 2 + 8 / 2  | resultado = 6 | Calcula primero la división.                               |
| int i = (2+8) / 2  | resultado = 5 | El paréntesis fuerza a que se realice primero la suma |

Dada una expresión, la precedencia de operadores indica qué operaciones
se realizarán antes y cuáles después en función de su rango. Para los
que se inician en C++ no es fácil saber qué operadores tienen
preferencia, por lo cual es más seguro que ante la duda uséis
paréntesis.

Los paréntesis fuerzan las operaciones de una forma clara y conviene
utilizarlos ante la duda porque de otra manera, detectar los
errores de operación puede volverse muy difícil especialmente cuando uno
empieza a programar.

El operador resto es más útil de lo que parece a primera vista porque nos
permite saber si un número es múltiplo de otro. Supongamos que queremos
saber si un número dado es par.

Podríamos escribir un programa como este:

```Arduino
void setup()
{
    Serial.begin(9600) ; // Inicializa el Puerto serie
}

void loop()
{
    int i = 27 ; //El número en cuestión
    if ( i % 2 == 0)
    {
        Serial.println("Es par.") ;
    }
    else
    {
        Serial.println("Es impar");
    }
}
```

Dando a i diferentes valores podemos comprobar cómo funciona el operador
resto %. Volveremos sobre esto cuando veamos algunos ejemplos de cómo calcular
números primos.

En este programa hemos usado de una manera diferente el
`Serial.println()` pasándole una **String** de texto entre comillas.
`Serial.print()` envía el texto (entre comillas) que le ponemos pero no
hace salto de línea cuando acaba. En cambio `Serial.println()` hace lo mismo
e incluye al final ese salto de línea.

```Arduino
void setup()
{
    Serial.begin(9600) ; // Inicializa el Puerto serie
}

void loop()
{
    Serial.print("Buen ") ;
    Serial.print("Día ") ;
    Serial.println("a todos.") ;
}
```

C++ dispone de un tipo de variables llamadas **Strings**, capaces de
contener textos. Podemos operar con ellas simplemente definiéndolas como
cualquier otro tipo de C++:

```Arduino
void loop()
{
    int resultado = 25 ;
    String s = " El resultado es: " ; // Notad que la S de String es mayúsc.
    Serial.print( s) ;
    Serial.println( resultado);
}
```

Un tipo **String** se define simplemente poniendo entre comillas dobles
un texto, y se puede operar con ellas de una forma similar a como operamos con
enteros. Prueba:

```Arduino

void loop()
{
    String a = "hola " ;
    String b = "a todos." ;
    Serial.println( a + b);
}
```

Y también podemos construir un **String** sobre la marcha así:

```Arduino

void loop()
{
    int resultado = 25 ;
    String s = "El resultado es: ";
    Serial.println( s + String( resultado ));
}
```

Donde imprimimos el resultado de concatenar s String, y la conversión de un int
a String (El operador + añade un String al final de otro).

## Recibiendo mensajes a través del puerto Serie

Hasta ahora solo hemos enviado mensajes desde Arduino hacia el PC, ¿Pero cómo
recibimos mensajes en Arduino?

En primer lugar disponemos de una función llamada `Serial.parseInt()`
que nos entrega lo que se escribe en el monitor serie convertido a entero:

```Arduino

void loop()
{
    if (Serial.available() > 0)
    {
        int x = Serial.parseInt();
        Serial.println ( x) ;
    }
}
```

Este programa simplemente recibe en x los números que nos teclean en la
consola (cuando pulsamos intro) y si es un texto, lo interpreta como cero.

Hemos utilizado otra función `Serial.available()` que es un booleano.
Conviene por costumbre comprobar que antes de leer el puerto serie hay
algo que nos han enviado. Si lo hay, available() es True y en
caso contrario es False.

Para leer un **String** del puerto serie tenemos que complicarnos un poco
más y hablar del tipo **char**.

Uno de los mayores quebraderos de cabeza al iniciarse en C++ es comprender la
diferencia, antiintuitiva, entre **char** y **String**. **Char** es un
tipo que representa un único carácter y se define con comillas simples,
a diferencia de String que necesita comillas dobles:

```Arduino
char c = 'a' ;

String s ="a" ;
```

Aunque parezca lo mismo para C++ son muy diferentes.

Para leer una cadena desde el puerto serie necesitamos leer un carácter
cada vez y después montar un String a partir de ellos, pero antes,
aseguraos de seleccionar ambos NL & CR en la parte inferior del
monitor serie, para garantizar que se envía el carácter de fin de línea:

![Final de línea][img3]{: .centered}

Un programa para leer la consola sería algo así:

```Arduino

void setup()
{
    Serial.begin(9600);
}

void loop ()
{
    char c = ' ' ;
    String mensaje ="" ;
    if (Serial.available()) //Comprobamos si hay algo esperando
    {
        while( c != '\n') //Si lo hay, lo leemos hasta el intro
        {
            mensaje = mensaje + c ; // Añadimos el leído al mensaje
            c = Serial.read(); //Leer 1 carácter
            delay(25);
        }
        Serial.println( mensaje); //Al salir imprimir el mensaje
        mensaje = "" ; //Lo borramos para la próxima vez
    }
}
```

Aquí usamos otra instrucción de C++ llamada **while**. Es similar a
**if**, Ejecuta repetidamente el bloque que le sigue mientras se cumpla
la condición que le pasamos entre paréntesis:

```Arduino
while ( condición)

{ ......... }
```

Cuando lee el intro final de lo que escribimos, La condición c != '\n' se
vuelve falsa y sale del **while**.

Por otra parte, comprobamos si hay algo disponible en la puerta serie
y en este caso montamos el mensaje leyendo un **char** cada vez y
sumándoselo a mensaje para construir un **String** que podamos
imprimir al salir.

- _El motivo del delay(25) es que a una velocidad tan lenta, enviar un char de 8 bits por la puerta serie, tarda mucho más de lo que tarda Arduino a ejecutar las instrucciones del while y volver a empezar. Por eso si se suprime el delay (y os recomiendo la prueba) leerá un carácter bueno (de la palabra escrita y como 10 caracteres más para un Arduino UNO o Mega)._
- _Si subimos la velocidad de comunicación a 115200 bits por segundo, comprobaréis que no hay este problema ya que al multiplicar la velocidad de envío por más de 10 Arduino ya no tiene tiempo de volver por más caracteres antes de que lleguen._

## Resumen de la sesión

- Hemos visto cómo establecer la comunicación con el PC externo, tanto para enviar como para recibir mensajes enteros y de texto.
- Hemos presentado los tipos String y char.
- Hemos visto las reglas básicas para operar con enteros y con Strings.
- Presentamos una nueva instrucción: while.
