---
layout: post
title: "28 - Módulo Joystick"
author: "qode66"
description: "Módulo Joystick"
date: 2021-07-13 12:30:00 +0200
categories: arduino actuadores
excerpt: "Módulo Joystick"
tags: ["arduino", "actuadores", "KY-023"]
---

[img1]: /assets/imatges/ard/ard_28_01.png "Pines del módulo KY-023"
[img2]: /assets/imatges/ard/ard_28_02.png "Esquema eléctrico módulo KY-023"
[img3]: /assets/imatges/ard/ard_28_03.png "Cableado módulo KY-023"

## Descripción general

Igual que un joystick en la consola de juegos, se puede controlar la entrada de
dimensiones x, y y z mediante este módulo de joystick. Se puede
considerar como una combinación de potenciómetros y un botón. El tipo de
datos de las dimensiones x, y son señales de entrada analógicas y la
dimensión z es una señal de entrada digital. Por lo tanto, los puertos x e y se
conectan a los pines analógicos del módulo, mientras que el puerto z se conecta
al pin digital.

## Módulo joystick

Un joystick analógico de 2 ejes con 2 potenciómetros de 10K ohms y
función de pulsador. Las descripciones de los pines del conector están
impresas en la PCB. Se incluye una perilla de operación a presión con el
módulo.

![Pines del módulo KY-023][img1]

## Material

|                               Imagen                               | Descripción                |
| :----------------------------------------------------------------: | :------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión        |
| <img src="/assets/imatges/mat/mat_KY-023.png" width="50" height="50"> | Un módulo joystick KY023   |

## Descripción de los componentes

### Sensor joystick

Muchos proyectos de robots necesitan joystick. Este módulo proporciona
una solución asequible. Simplemente conectándolo a dos entradas
analógicas, el robot está a sus órdenes con control X, Y. También tiene
un interruptor que está conectado a un pin digital. Este módulo de
joystick se puede conectar fácilmente a Arduino.

### Especificaciones

- Voltaje de suministro: 3.3V a 5V
- Interfaz: Analógica x2, Digital x1
- Tamaño: 40x28mm
- Peso: 12g

El módulo tiene 5 pines: Vcc, GND, X, Y, Key. Ten en cuenta que las
etiquetas pueden ser ligeramente diferentes, dependiendo de dónde hayas obtenido
el módulo. El joystick es analógico y debería proporcionar lecturas más
precisas que los simples joysticks "direccionales" que usan algunas
formas de botones o interruptores mecánicos. Además, puedes presionar el
joystick hacia abajo para activar un botón de "presionar para
seleccionar".

Debemos usar pines analógicos de Arduino para leer los datos de los pines
X/Y y un pin digital para leer el botón. El pin clave está conectado a
tierra cuando se presiona el joystick, y está flotante en caso contrario. Para
obtener lecturas estables del pin Key/Select, debe conectarse a
Vcc a través de una resistencia pull-up.

## Montaje

![Esquema eléctrico módulo KY-023][img2]
![Cableado módulo KY-023][img3]

## Programación

Los joysticks analógicos son básicamente potenciómetros, por lo que
devuelven valores analógicos. Cuando el joystick está en la posición de reposo
o neutral, debe devolver un valor de aproximadamente 512, con valores que
van de 0 a 1023.

Además; SW (eje Z) es una señal de entrada digital, conectada al puerto
digital, y habilita la resistencia pull-up. Valor de SW: 1 significa no
presionado, 0 significa presionado.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD028
* Fecha: 22/01/2022
* Descripción: Lectura de los valores del joystick
* Nota:
*
*/

const int SW_pin = 2; // pin digital para botón
const int X_pin = A1; // pin analógico para X
const int Y_pin = A0; // pin analógico para Y

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Botón: ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("Eje-X: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Eje-Y: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n");
  delay(500);
}
```
