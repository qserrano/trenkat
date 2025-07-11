---
layout: post
title: "21 - Módulos de detección de sonido"
author: "qode66"
description: "Módulos de detección de sonido"
date: 2021-07-11 11:10:00 +0200
categories: arduino sensores
excerpt: "Módulos de detección de sonido"
tags: ["arduino", "sensores", "KY-037", "KY-038"]
---

[img1]: /assets/imatges/ard/ard_21_01.png "Módulo micrófono KY-037"
[img2]: /assets/imatges/ard/ard_21_02.png "Módulo micrófono KY-038"
[img3]: /assets/imatges/ard/ard_21_03.png "Sensor de sonido"
[img4]: /assets/imatges/ard/ard_21_04.png "Cubierta del sensor de sonido"
[img5]: /assets/imatges/ard/ard_21_05.png "Conexionado módulo de micrófono"

## Visión general

En este experimento, aprenderemos a utilizar el sensor de voz de alta
sensibilidad. Hay dos tipos: el módulo de micrófono grande y el módulo de
micrófono pequeño.

## Material

|                               Imagen                               | Descripción                      |
| :----------------------------------------------------------------: | :------------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.       |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión              |
| <img src="/assets/imatges/mat/mat_KY-037.png" width="50" height="50"> | Módulo micrófono grande (KY-037)    |
| <img src="/assets/imatges/mat/mat_KY-038.png" width="50" height="50"> | Módulo micrófono pequeño (KY-038) |

## Módulo de micrófono grande

Un módulo de micrófono con una cápsula de electret de gran formato de alta
sensibilidad.

Es un módulo de detección de sonido que tiene dos pines de señal de salida. Un
pin digital (D0), cuando detecta algún sonido hasta un cierto umbral, puede
emitir un nivel alto o bajo. Un pin analógico (A0), puede dar en tiempo real la señal de voltaje de salida del micrófono.

Un potenciómetro permite ajustar el nivel.

![Módulo micrófono KY-037][img1]{: .centered}

## Módulo de micrófono pequeño

Un módulo de micrófono con una pequeña cápsula electret.

La salida "DO" (activa alta) cambia cuando el nivel de sonido excede
un nivel preestablecido. Un potenciómetro permite ajustar el nivel.

Excepto por el tamaño más pequeño de la cápsula y su menor
sensibilidad, el módulo es idéntico al módulo "Micrófono grande"

![Módulo micrófono KY-038][

## Sensor de sonido

El módulo del sensor de sonido proporciona una manera fácil de detectar el sonido
y generalmente se usa para detectar la intensidad del sonido. Este módulo
se puede utilizar para aplicaciones de seguridad, conmutación y
supervisión. Su precisión se puede ajustar fácilmente para la
conveniencia de uso.

Utiliza un micrófono que suministra la entrada a un amplificador,
detector de picos y buffer.

Cuando el sensor detecta un sonido, proporciona un voltaje de señal
de salida que se envía a un microcontrolador que realiza el
procesamiento necesario.

![Sensor de sonido][img3]{: .centered}

Estos micrófonos se utilizan ampliamente en circuitos electrónicos para
detectar sonidos menores o vibraciones del aire que a su vez se
convierten en señales eléctricas para su uso posterior. Las dos
patas, como se muestra en la imagen de arriba, se utilizan para realizar
la conexión eléctrica con el circuito.

![Cubierta del sensor de sonido][img4]{: .centered}

Un cuerpo de metal conductor sólido encapsula las diferentes partes del
micrófono. La cara superior se cubre con un material poroso con la ayuda
de cola. Actúa como filtro de las partículas de polvo. Las señales de sonido/vibraciones del aire pasan a través del material poroso y caen sobre
el diafragma a través del orificio que se muestra en la imagen de arriba.

## Conexionado

Se muestra el cableado para el módulo de micrófono grande, pero es idéntico si
utilizamos el módulo de micrófono pequeño.

![Conexionado módulo de micrófono][img5]{: .centered}

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: **ARD021**
* Fecha: 06.11.2021
* Descripción: Módulo detección sonido
* Nota:
*
*/

int sensorAnalogPin = A0;
int sensorDigitalPin = 7;
int analogValue = 0;
int digitalValue;
int Led = 13;

void setup()
{
  Serial.begin(9600);
  pinMode(sensorDigitalPin,INPUT);
  pinMode(Led,OUTPUT);
}

void loop()
{
  analogValue = analogRead(sensorAnalogPin);
  digitalValue=digitalRead(sensorDigitalPin);
  Serial.println(analogValue);
  if(digitalValue==HIGH)
  {
    digitalWrite(Led,HIGH);
  }
  else
  {
    digitalWrite(Led,LOW);
  }
  delay(50); // Pausa para no sobrecargar la interfaz serie
}
```
