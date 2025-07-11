---
layout: post
title: "20 - Módulo LDR (fotorresistencia)"
author: "qode66"
description: "Módulo LDR (fotorresistencia)"
date: 2021-07-11 11:00:00 +0200
categories: arduino sensores
excerpt: "Módulo LDR (fotorresistencia)"
tags: ["arduino", "sensores", "KY-018"]
---

[img1]: /assets/imatges/ard/ard_20_01.png "Montaje módulo KY-018"

## Objetivo

En este ejemplo, este módulo leerá el valor de la resistencia y
lo imprimirá en el monitor serial. Estos valores pueden reflejar la
intensidad de la luz ambiental.

## Material

|                               Imagen                               | Descripción                      |
| :----------------------------------------------------------------: | :------------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.       |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión              |
| <img src="/assets/imatges/mat/mat_KY-018.png" width="50" height="50"> | Módulo fotorresistencia (KY-018) |

## Descripción

La resistencia dependiente de la luz, también llamada fotorresistencia,
son dispositivos sensibles a la luz que se utilizan con mayor
frecuencia para indicar la presencia o ausencia de luz, o para
medir la intensidad de la luz.

## Especificaciones

- Voltaje de funcionamiento: 3,3 - 5 V
- Tipo de salida: Analógica
- Dimensiones: 28 x 15 mm
- Peso: 2 g

## Configuración de pines

| Identificación | Pin                                                               |
| :-----------: | ----------------------------------------------------------------- |
|       S       | Pin de salida analógica, señal de voltaje de salida en tiempo real |
|       +       | + 5V                                                              |
|       -       | GND                                                               |

## Montaje

![Montaje módulo KY-018][img1]{: .centered}

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD020
* Fecha: 01.11.2021
* Descripción: Módulo LDR - fotorresistencia
* Nota:
*
*/

int sensorPin = A0; // define la entrada para la fotorresistencia
int ledPin = 13; // define el pin led
int sensorValue = 0; // variable para guardar el valor del sensor

void setup()
{
  pinMode(ledPin, OUTPUT);
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
