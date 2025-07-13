---
layout: post
title: "36 - Módulo sensor de detección de nivel de agua"
author: "qode66"
description: "Módulo sensor de detección de nivel de agua"
date: 2021-07-13 13:50:00 +0200
categories: arduino sensores
excerpt: "Módulo sensor de detección de nivel de agua"
tags: ["arduino", "sensores", "HC-SR501"]
---

[img1]: /assets/imatges/ard/ard_36_01.png "Pines del módulo"
[img2]: /assets/imatges/ard/ard_36_02.png "Esquema eléctrico"
[img3]: /assets/imatges/ard/ard_36_03.png "Cableado"

## Descripción general

En esta lección, aprenderá a usar un módulo de sensor de detección de
nivel de agua. Este módulo puede percibir la profundidad del agua y
el componente central es un circuito amplificador que se compone de un
transistor y varias rutas de PCB pectinadas. Cuando se colocan en
el agua, estas rutas presentarán una resistencia que puede cambiar
junto con el cambio de la profundidad del agua. Después, la señal
de la profundidad del agua se convierte en señal eléctrica y podemos
conocer el cambio de la profundidad del agua a través de la función
ADC de UNO R3.

![Pines del módulo][img1]

## Material

|                                  Imagen                                  | Descripción                       |
| :----------------------------------------------------------------------: | :------------------------------- |
|    <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">     | Arduino Uno o equivalente.        |
|    <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">    | Cables de conexión               |
| <img src="/assets/imatges/mat/mat_sensoraigua.jpeg" width="50" height="50"> | Módulo sensor de detección de agua |

## Introducción de componentes

### Sonda de agua:

Este bloque está diseñado para la detección de agua, y puede ser
ampliamente utilizado para detectar la lluvia, el nivel del agua e
incluso la fuga de líquido. El bloque se compone principalmente de tres
partes: un conector de bloque electrónica, una resistencia de 1 MΩ y
varias líneas de conductores desnudos.

Este sensor tiene una serie de pistas expuestas conectadas a tierra, y
alternadas entre las líneas de tierra están las pistas sensibles.

Las líneas del sensor tienen una resistencia pull-up de 1 MΩ. Esta
resistencia pondrá el valor de la salida del sensor a HIGH hasta que
el agua haga cortocircuito la pista del sensor con la pista conectada a
tierra. Lo crea o no, este circuito funcionará con los pines de E/S
digital de su placa UNO R3 o puede usarlo con los pines analógicos para
detectar la cantidad de contacto inducido por agua entre las líneas
del sensor y la conexión a tierra.

Tiene bajo consumo de energía y alta sensibilidad.

### Características:

- Voltaje de funcionamiento: 5V
- Corriente de trabajo: <20ma
- Interfaz: Analógica
- Ancho de detección: 40 mm × 16 mm
- Temperatura de trabajo: 10 ℃ ~ 30 ℃ 6
- Señal de voltaje de salida: 0 ~ 4.2V

## Conexión

![Esquema eléctrico][img2]
![Cableado][img3]

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD036
* Fecha: 07/02/2022
* Descripción: Prueba del sensor detector de agua
* Nota:
*
*/

int adc_id = 0;
int HistoryValue = 0;
char printBuffer[128];

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value = analogRead(adc_id);
    if(((HistoryValue >= value) && ((HistoryValue - value) > 10)) || ((HistoryValue < value) && ((value - HistoryValue) > 10)))
    {
        sprintf(printBuffer,"ADC%d level is %d\n",adc_id, value);
        Serial.print(printBuffer);
        HistoryValue = value;
    }
}
```
