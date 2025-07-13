---
layout: post
title: "25 - Módulo sensor de llama"
author: "qode66"
description: "Módulo sensor de llama"
date: 2021-07-13 12:00:00 +0200
categories: arduino sensores
excerpt: "Módulo sensor de llama"
tags: ["arduino", "sensores", "KY-026"]
---

[img1]: /assets/imatges/ard/ard_25_01.png "Pines del módulo KY-026"
[img2]: /assets/imatges/ard/ard_25_02.png "Montaje KY-026"
[img3]: /assets/imatges/ard/ard_25_03.png "Esquema eléctrico KY-026"
[img4]: /assets/imatges/ard/ard_25_04.png "Uso salida digital"
[img5]: /assets/imatges/ard/ard_25_05.png "Uso salida analógica"

## Descripción general

En este experimento, aprenderemos a usar el módulo sensor de llama.

Este módulo es sensible a la llama y la radiación. También puede detectar
fuentes de luz ordinarias en el rango de longitud de onda de 760nm-1100nm.
La distancia de detección es de hasta 100 cm.

El sensor de llama puede emitir una señal digital o analógica. Se puede
utilizar como alarma de llama o en robots de extinción de incendios.

## Módulo sensor de llama

Un módulo sensor para detectar llamas. La sensibilidad espectral del
sensor está optimizada para detectar emisiones de llamas visibles. La
señal de salida 'DO' se eleva (HIGH) cuando se detecta una llama. El
umbral de conmutación se puede ajustar a través de un potenciómetro
preestablecido. Una señal de salida analógica del sensor está disponible en
el pin 'AO'.

- Sensibilidad espectral típica: 720-1100 nm
- Ángulo de detección típico: 60°

![Pines del módulo KY-026][img1]

# Material

|                               Imagen                               | Descripción                  |
| :----------------------------------------------------------------: | :-------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.   |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión          |
| <img src="/assets/imatges/mat/mat_KY-026.png" width="50" height="50"> | Módulo sensor de llama KY026 |

## Especificaciones

Módulo sensor de llama:

- Detecta una llama o una fuente de luz de una longitud de onda en el
  rango de 760nm-1100nm
- Distancia de detección: 20 cm (4,8 V) ~ 100 cm (1 V)
- Ángulo de detección de unos 60 grados, es sensible al espectro de la
  llama.
- El chip comparador LM393 hace que las lecturas del módulo sean
  estables.
- Rango de detección ajustable.
- Voltaje de funcionamiento 3,3 V-5 V
- Salidas digitales DO de conmutación (0 y 1) y AO salida de tensión
  analógica
- Indicador de alimentación e indicador de salida de interruptor
  digital

## Conexiones

![Montaje KY-026][img2]
![Esquema eléctrico KY-026][img3]

## Código

### Uso de la salida digital del sensor (DO)

![Uso salida digital][img4]

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD025a
* Fecha: 16/01/2022
* Descripción: Activa led si detecta llama
* Nota: Uso salida digital
*
*/

int Led = 13; //define puerto LED
int buttonpin = 3; //define puerto interruptor
int val; //define variable digital val

void setup()
{
    pinMode(Led, OUTPUT); //define LED como puerto de salida
    pinMode(buttonpin, INPUT); //define interruptor como puerto de entrada
}

void loop()
{
    val = digitalRead(buttonpin);
    if (val == HIGH) //cuando el sensor interruptor tiene señal, LED parpadea
    {
        digitalWrite(Led, HIGH);
    }
    else
    {
        digitalWrite(Led, LOW);
    }
}
```

### Uso de la salida analógica del sensor (AO)

![Uso salida analógica][img5]

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD025b
* Fecha: 16/01/2022
* Descripción: Lee valor analógico del sensor
* Nota:
*
*/

int sensorPin = A0;
int ledPin = 13;
int sensorValue = 0;

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

