---
layout: post
title: "17 - Módulo LED RGB SMD y módulo LED RGB"
author: "qode66"
description: "Aprender a utilizar el módulo LED RGB SMD y el módulo LED RGB"
date: 2021-06-28 20:30:00 +0200
categories: arduino sensores leds
excerpt: "Aprender a utilizar el módulo LED RGB SMD y el módulo LED RGB"
tags: ["arduino", "leds", "KY-009", "KY-016"]
---

[img1]: /assets/imatges/ard/ard_17_01.jpeg "Módulo led rgb smd"
[img2]: /assets/imatges/ard/ard_17_02.jpeg "Módulo led rgb"
[img3]: /assets/imatges/ard/ard_17_03.png "Montaje led rgb"
[img4]: /assets/imatges/ard/ard_17_04.png "Esquema eléctrico led rgb"
[img5]: /assets/imatges/ard/ard_17_05.png "Montaje led rgb smd"
[img6]: /assets/imatges/ard/ard_17_06.png "Esquema eléctrico led rgb smd"

## Objetivo

- Aprender a utilizar el módulo LED RGB SMD y el módulo LED RGB
- Conocer el funcionamiento de los módulos LED RGB SMD y LED RGB
- Conocer las características de los módulos LED RGB SMD y LED RGB
- Conocer las especificaciones de los módulos LED RGB SMD y LED RGB

## Material

|                               Imagen                               | Descripción                 |
| :----------------------------------------------------------------: | :------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.  |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión         |
| <img src="/assets/imatges/mat/mat_KY-009.png" width="50" height="50"> | Módulo LED RGB SMD (KY-009) |
| <img src="/assets/imatges/mat/mat_KY-016.png" width="50" height="50"> | Módulo LED RGB (KY-016)     |

## Introducción

En realidad, la función del módulo LED SMD RGB (KY-009) y del módulo LED
RGB (KY-016) es casi la misma, pero podemos elegir la forma que nos
guste o que necesitemos.

El módulo LED SMD RGB y el módulo LED RGB están hechos por tres LEDs (rojo,
verde y azul). Al ajustar el voltaje de entrada de los pines R (rojo), G
(verde), B (azul), podemos ajustar la intensidad de los tres colores primarios
(rojo / azul / verde) para obtener todos los colores.

## Características

### Módulo LED RGB SMD (KY-009)

![Módulo led rgb smd][img1]{: .centered}

#### Descripción

Módulo LED RGB a todo color para Arduino, emite una gama de colores
mezclando luz roja, verde y azul. La cantidad de cada color se ajusta
mediante modulación por control de pulsos (PWM).

#### Especificaciones

El módulo LED SMD a todo color RGB consta de un LED SMD 5050, que
**se utiliza** **con resistencias limitadoras** para evitar que se
queme. Compatible con plataformas electrónicas populares como Arduino,
Raspberry Pi y ESP8266.

- Voltaje de funcionamiento: 5 V máx.
  - Rojo: 1.8V ~ 2.4V
  - Verde: 2.8V ~ 3.6V
  - Azul: 2.8V ~ 3.6V
- Corriente directa: 20mA ~ 30mA
- Temp. de funcionamiento: -25 °C a 85 °C
- Dimensiones: 18,5 mm x 15 mm

### Módulo LED RGB (KY-016)

![Módulo led rgb][img2]{: .centered}

#### Descripción

LED RGB de 5 mm a todo color para Arduino, se pueden obtener diferentes colores
mezclando los tres colores primarios.

#### Especificaciones

Este módulo consta de un LED RGB de 5 mm y tres resistencias
limitadoras de 150 Ω para evitar que se queme. El ajuste de la señal PWM
en cada pin de color dará como resultado diferentes colores.

- Voltaje de funcionamiento: 5 V
- Control: Método de cátodo común
- Diámetro del LED: 5 mm
- Dimensiones: 15 mm x 19 mm

## Montaje

### Módulo LED RGB SMD

![Montaje led rgb][img3]{: .centered}
![Esquema eléctrico led rgb][img4]{: .centered}

**Importante:** este módulo debe funcionar con resistencias para limitar
la intensidad. Si no tienen los valores indicados pueden utilizar tres
resistencias de 220Ω.

Nota: En mi montaje he tenido que intercambiar el cable rojo y el
verde. O bien el sensor está mal indicado, o bien tiene un error de fabricación.

### Módulo LED RGB

![Montaje led rgb smd][img5]{: .centered}
![Esquema eléctrico led rgb smd][img6]{: .centered}

Este montaje no necesita resistencias. Tampoco se necesita una protoboard
porque podemos conectar el sensor directamente con los cables.

## Programación

Presentamos dos códigos como ejemplo. El primero varía la intensidad de cada
componente de color (rojo, verde y azul) por separado y luego la unión de
dos de los componentes. El segundo código muestra colores aleatorios por
combinación de los tres canales.

Código: ARD_17a

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_17a.ino
  Tutorial Arduino - Lección 17: Módulo LED RGB SMD y módulo LED RGB
  28.06.2021
  Descripción: Módulo LED RGB SMD y módulo LED RGB
 ******************************************/

int redpin = 11; //selecciona el pin para LED rojo
int greenpin = 10; // selecciona el pin para LED verde
int bluepin = 9;// selecciona el pin para LED azul
int val;

void setup()
{
  pinMode(redpin, OUTPUT);
  pinMode(bluepin, OUTPUT);
  pinMode(greenpin, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  for(val = 0; val < 255; val++) //enciende progresivamente el led rojo
  {
    analogWrite(redpin, val);
    analogWrite(bluepin, 0);
    analogWrite(greenpin, 0);
    Serial.println(val);
    delay(10);
  }
  for(val = 0; val < 255; val++) //enciende progresivamente el led azul
  {
    analogWrite(redpin, 0);
    analogWrite(bluepin, val);
    analogWrite(greenpin, 0);
    Serial.println(val);
    delay(10);
  }
  for(val = 0; val < 255; val++) //enciende progresivamente el led verde
  {
    analogWrite(redpin, 0);
    analogWrite(bluepin, 0);
    analogWrite(greenpin, val);
    Serial.println(val);
    delay(10);
  }
  for(val = 0; val < 255; val++) //enciende progresivamente el led rojo y azul
  {
    analogWrite(redpin, val);
    analogWrite(bluepin, val);
    analogWrite(greenpin, 0);
    Serial.println(val);
    delay(10);
  }
  for(val = 0; val < 255; val++) //enciende progresivamente el led rojo y verde
  {
    analogWrite(redpin, val);
    analogWrite(bluepin, 0);
    analogWrite(greenpin, val);
    Serial.println(val);
    delay(10);
  }
  for(val = 0; val < 255; val++) //enciende progresivamente el led azul y verde
  {
    analogWrite(redpin, 0);
    analogWrite(bluepin, val);
    analogWrite(greenpin, val);
    Serial.println(val);
    delay(10);
  }
}
```

Código: ARD_17b

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_17b.ino
  Tutorial Arduino - Lección 17: Módulo LED RGB SMD y módulo LED RGB
  28.06.2021
  Descripción: Módulo LED RGB SMD y módulo LED RGB
 ******************************************/

int redpin = 11; //selecciona el pin para LED rojo
int greenpin = 10; // selecciona el pin para LED verde
int bluepin = 9;// selecciona el pin para LED azul
int randomRed;
int randomGreen;
int randomBlue;

void setup()
{
  pinMode(redpin, OUTPUT);
  pinMode(bluepin, OUTPUT);
  pinMode(greenpin, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  randomRed = random(1,127);
  randomGreen = random(1,127);
  randomBlue = random(1,127);
  analogWrite(redpin, randomRed);
  analogWrite(greenpin, randomGreen);
  analogWrite(bluepin, randomBlue);
  delay(1000);
}
```

## Resumen

- Presentación de los módulos LED RGB y LED RGB SMD
- Utilidad y funcionamiento de los pines del módulo

