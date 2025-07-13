---
layout: post
title: "31 - Módulo codificador rotatorio"
author: "qode66"
description: "Módulo codificador rotatorio"
date: 2021-07-13 13:00:00 +0200
categories: arduino actuadores
excerpt: "Módulo codificador rotatorio"
tags: ["arduino", "actuadores", "KY-040"]
---

[img1]: /assets/imatges/ard/ard_31_01.png "Pines del módulo KY-040"
[img2]: /assets/imatges/ard/ard_31_02.png "Tipo de codificador rotativo"
[img3]: /assets/imatges/ard/ard_31_03.png "Principio básico de salida"
[img4]: /assets/imatges/ard/ard_31_04.gif "Principio básico de salida"
[img5]: /assets/imatges/ard/ard_31_05.png "Esquema eléctrico módulo KY-040"
[img6]: /assets/imatges/ard/ard_31_06.png "Cableado módulo KY-040"

## Descripción general

El codificador rotatorio es un dispositivo de entrada rotatorio que
proporciona una indicación de cuánto se ha girado la perilla y en qué
dirección está girando.

Es un gran dispositivo para el control de motores paso a paso y servo. También
puede usarlo para controlar dispositivos como potenciómetros digitales.

![Pines del módulo KY-040][img1]

## Material

|                               Imagen                               | Descripción                       |
| :----------------------------------------------------------------: | :------------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.        |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión               |
| <img src="/assets/imatges/mat/mat_KY-040.png" width="50" height="50"> | Módulo codificador rotatorio KY040 |

## Especificaciones

- Voltaje de funcionamiento: 5V
- Ángulo mecánico: 360 grados
- Salida: código gris de 2 bits
- Posiciones por revolución: 30

## Funcionamiento

### Medición de posición rotatoria

Un codificador rotatorio o de "eje" es un dispositivo de medición
angular. Se utiliza para medir con precisión la rotación de los motores o
para crear controladores de rueda que pueden girar infinitamente (sin
tope final como lo tiene un potenciómetro). Algunos de ellos también están
equipados con un botón pulsador cuando presionas el eje (como los que
se usan para la navegación en muchos controladores de música). Vienen en
todo tipo de resoluciones, desde quizás 16 hasta al menos 1024 pasos por
revolución. Los codificadores industriales vienen de 1200PPR a 10000PPR
(Pulsos por revolución).

### Principio de medición

Los codificadores rotatorios tienen dos o tres salidas A, B y Z. A y B
se utilizan para determinar la dirección de rotación, y contar el
número de pulsos dará la posición de rotación. Z está disponible en
codificadores de grado industrial. Es pulso de posición cero. Solo da un
pulso en una revolución.

## Conceptos básicos del codificador rotatorio

Un codificador rotatorio tiene un número fijo de posiciones por revolución
(PPR). El módulo Keyes KY-040 tiene treinta de estas posiciones.

En un lado del interruptor hay tres pines. En el caso del KY-040,
están orientados como se muestra.

![Pines del módulo KY-040][img2]

Dentro del codificador hay dos interruptores. Un interruptor conecta el
pin 1 al pin 2, y el otro interruptor conecta el pin 1 al 3.

En cada posición del codificador, ambos interruptores están abiertos o
cerrados. Cada movimiento angular hace que estos interruptores cambien
de estado de la siguiente manera:

- Si ambos interruptores están cerrados, girar el codificador en
  sentido horario o antihorario una posición hará que ambos
  interruptores se abran
- Si ambos interruptores están abiertos, girar el codificador en
  sentido horario o antihorario una posición hará que ambos
  interruptores se cierren.

La siguiente ilustración es representativa de cómo se construye
el interruptor.

![Tipo de codificador rotativo][img3]

La medición del ángulo de rotación se calcula con la siguiente fórmula:

$$Angulo = \left(\frac{360}{ppr}\right)·pulsos$$

La salida A está conectada a la interrupción (ASCENSO) y cuando ocurre la
interrupción, dependiendo del estado de la salida B, el conteo de pulsos
se incrementa o disminuye.

Como podemos ver, la posición angular de la terminal A y la terminal B es
tal que:

- Girar el interruptor en el sentido de las agujas del reloj hará
  que el interruptor que conecta A y C cambie primero de estado.
- Girar el interruptor en sentido contrario a las agujas del reloj hará
  que el interruptor que conecta B y C cambie primero de estado.

Si tuviéramos que representar la apertura y el cierre de los interruptores
como formas de onda, se vería así:

![Principio básico de salida][img4]

Hay muchos codificadores disponibles en el mercado, todos tienen el
principio básico de salida A,B, como se muestra en la figura. Algunos de los
codificadores tienen GND, +V, SW, DT, CLK. La configuración de pines
de estos codificadores es:

- CLK = A
- DT = B
- SW = interruptor de presión
- VCC = (+) 5V
- GND = (-)

El módulo está diseñado para que la salida sea baja cuando los
interruptores están cerrados y alta cuando los interruptores están abiertos.

El nivel bajo se genera colocando una conexión a tierra en el pin C y
pasándola a los pines CLK y DT cuando los interruptores están cerrados.

El nivel alto se genera con una entrada de suministro de 5 V y
resistencias pull-up, de manera que CLK y DT están altos cuando los
interruptores están abiertos.

No se mencionó anteriormente la existencia de un interruptor de botón
que es parte integral del codificador. Si empuja el eje, un interruptor
normalmente abierto se cerrará. La función es útil si desea cambiar la
función del interruptor. Por ejemplo, es posible que desee tener la
capacidad de realizar ajustes gruesos y finos.

## Conexión

![Esquema eléctrico módulo KY-040][img5]
![Cableado módulo KY-040][img6]

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD031
* Fecha: 29/01/2022
* Descripción: Prueba del módulo encoder KY040
* Nota:
*
*/

//Define la conexión de pines

int CLK = 2;//CLK->D2
int DT = 3;//DT->D3
int SW = 4;//SW->D4
const int interrupt0 = 0;
int count = 0;//Define el contador
int lastCLK = 0;//Valor inicial de CLK

void setup()
{
    pinMode(SW, INPUT);
    digitalWrite(SW, HIGH);
    pinMode(CLK, INPUT);
    pinMode(DT, INPUT);
    attachInterrupt(interrupt0, ClockChanged, CHANGE);//Configura el manejador de interrupción 0, nivel de disparo cambio
    Serial.begin(9600);
}

void loop()
{
    if (!digitalRead(SW) && count != 0) //Lee la presión del botón y el valor del contador a 0 cuando se reinicia el contador
    {
        count = 0;
        Serial.print("contador:");
        Serial.println(count);
    }
}

//Los manejadores de interrupción

void ClockChanged()
{
    int clkValue = digitalRead(CLK);//Lee el nivel del pin CLK
    int dtValue = digitalRead(DT);//Lee el nivel del pin DT
    if (lastCLK != clkValue)
    {
        lastCLK = clkValue;
        count += (clkValue != dtValue ? 1 : -1);//CLK y DT inconsistentes, +1, en caso contrario -1
        Serial.print("contador:");
        Serial.println(count);
    }
}
```
