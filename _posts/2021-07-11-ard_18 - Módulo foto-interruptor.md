---
layout: post
title: "18 - Módulo foto-interruptor"
author: "qode66"
description: "Módulo foto-interruptor"
date: 2021-07-11 10:45:00 +0200
categories: arduino sensores
excerpt: "Módulo foto-interruptor"
tags: ["arduino", "sensores", "KY-010", "KY-012"]
---

[img1]: /assets/imatges/ard/ard_18_01.jpeg "Funcionamiento foto-interruptor"
[img2]: /assets/imatges/ard/ard_18_02.png "Diagrama de montaje foto-interruptor"
[img3]: /assets/imatges/ard/ard_18_03.png "Esquema eléctrico foto-interruptor"

## Objetivos

- Conocer el módulo foto-interruptor

## Material

|                               Imagen                               | Descripción                      |
| :----------------------------------------------------------------: | :------------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.       |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión              |
| <img src="/assets/imatges/mat/mat_KY-010.png" width="50" height="50"> | Módulo foto-interruptor (KY-010) |
| <img src="/assets/imatges/mat/mat_KY-012.png" width="50" height="50"> | Módulo zumbador activo (KY-012)  |

## Descripción

### Funcionamiento

El módulo de foto-interruptor para Arduino activará una señal cuando se
bloquee la luz entre el espacio del sensor.

![Funcionamiento foto-interruptor][img1]{: .centered}

### Especificaciones

El módulo de foto-interruptor consta de un emisor / detector óptico en la
parte delantera y dos resistencias (1 kΩ y 33 Ω) en la parte posterior.
El sensor utiliza un haz de luz entre el emisor y el detector para
comprobar si la trayectoria entre ambos está bloqueada por un
objeto opaco.

- Voltaje de funcionamiento: 3.3 ~ 5V
- Dimensiones: 18,5 mm x 15 mm

## Conexión

Conecte la línea de alimentación (en medio) y tierra (izquierda) a + 5V y GND
respectivamente. Conecte la señal (S) al pin 3 del Arduino.

| Módulo        | Arduino |
| ------------ | ------- |
| - (izquierda) | GND     |
| + (en medio)    | + 5V    |
| S (derecha)    | Pin 3   |

![Diagrama de montaje foto-interruptor][img2]{: .centered}

Como podéis ver utilizamos un zumbador activo para emitir un sonido cuando el
módulo se active.

![Esquema eléctrico foto-interruptor][img3]{: .centered}

## Programación

**Código: ARD_18**

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD018
* Fecha: 20.10.2021
* Descripción: Funcionamiento del módulo foto-interruptor
* Nota:
*
*/

int Led = 13; // define el pin del avisador
int buttonpin = 3; // define el pin de señal del foto-interruptor
int val; //define una variable numérica

void setup()
{
  pinMode(Led, OUTPUT); // LED pin como salida
  pinMode(buttonpin, INPUT); //Foto-interruptor pin como entrada
}

void loop()
{
  val=digitalRead(buttonpin); //lee el valor del sensor
  if(val == HIGH) // activa el led/avisador cuando el sensor se bloquea
  {
    digitalWrite(Led,HIGH);
  }
  else
  {
    digitalWrite(Led,LOW);
  }
}
```
