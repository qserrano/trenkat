---
layout: post
title: "26 - Módulo de sensor táctil"
author: "qode66"
description: "Módulo de sensor táctil"
date: 2021-07-13 12:10:00 +0200
categories: arduino sensores
excerpt: "Módulo de sensor táctil"
tags: ["arduino", "sensores", "KY-036"]
---

[img1]: /assets/imatges/ard/ard_26_01.png "Pines del módulo KY036"
[img2]: /assets/imatges/ard/ard_26_02.png "Esquema eléctrico"
[img3]: /assets/imatges/ard/ard_26_03.png "Cableado"

## Descripción general

En este experimento, aprenderemos a usar el módulo de sensor táctil.

## Material

|                               Imagen                               | Descripción                      |
| :----------------------------------------------------------------: | :------------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.       |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión              |
| <img src="/assets/imatges/mat/mat_KY-036.png" width="50" height="50"> | Un módulo de sensor táctil KY036 |

## Módulo sensor táctil

Interruptor sensible al tacto. Tocar el pin del sensor produce una
salida en el pin 'DO'. La salida no es una señal limpia, porque incluye
señales inducidas por la red de 50 Hz ("zumbido de red"). La señal
de salida es "activa alta" y la sensibilidad del circuito se puede
ajustar con un potenciómetro. Una señal de salida analógica del sensor
está disponible en el pin 'AO'.

![Pines del módulo KY036][img1]

## Montaje

![Esquema eléctrico][img2]
![Cableado][img3]

## Programación

Código ARD026a

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD026a
* Fecha: 19/01/2022
* Descripción: Uso de la salida analógica del sensor táctil
* Nota:
*
*/

int sensorPin = A0; // pin de entrada del potenciómetro
int ledPin = 13; // pin para el LED
int sensorValue = 0; // variable valor del sensor

void setup()
{
  pinMode(ledPin,OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  sensorValue = analogRead(sensorPin);
  digitalWrite(ledPin, HIGH);
  delay(sensorValue);
  digitalWrite(ledPin, LOW);
  delay(sensorValue);
  Serial.println(sensorValue, DEC);
}
```

Código ARD026b

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD026b
* Fecha: 19/01/2022
* Descripción: Uso de la salida digital del sensor táctil
* Nota:
*
*/

int Led=13;//pin para el LED
int buttonpin=3; //salida DO del sensor
int DOval;//variable digital

void setup()
{
  pinMode(Led,OUTPUT);//define LED como puerto de salida
  pinMode(buttonpin,INPUT);//define interruptor como puerto de entrada
}

void loop()
{
  DOval=digitalRead(buttonpin);
  if(DOval==HIGH)//cuando el sensor interruptor tiene señal, LED parpadea
  {
    digitalWrite(Led,HIGH);
  }
  else
  {
    digitalWrite(Led,LOW);
  }
}
```
