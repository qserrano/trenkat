---
layout: post
title: "30 - Módulo sensor de evasión de obstáculos"
author: "qode66"
description: "Módulo sensor de evasión de obstáculos"
date: 2021-07-13 12:50:00 +0200
categories: arduino sensores
excerpt: "Módulo sensor de evasión de obstáculos"
tags: ["arduino", "sensores", "KY-032"]
---

[img1]: /assets/imatges/ard/ard_30_01.png "Pines del módulo KY-032"
[img2]: /assets/imatges/ard/ard_30_02.png "Detección infrarrojos"
[img3]: /assets/imatges/ard/ard_30_03.png "Esquema eléctrico módulo KY-032"
[img4]: /assets/imatges/ard/ard_30_04.png "Cableado módulo KY-032"

## Descripción

El módulo produce una onda cuadrada de 38 kHz. Este pulso de 38 kHz
se utiliza para encender/apagar el LED IR. Si hay un objeto frente
al LED IR, los pulsos infrarrojos se reflejan y parte del IR
reflejado es detectado por el receptor IR (HS0038BD). Esto indicaría al
módulo que hay un obstáculo y colocará el pin de señal S en LOW. Si
no hay obstáculo, el pin S estará en alto. El módulo tiene un rango de
detección de ~2-40 cm.

El pin EN y el puente EN se proporcionan para controlar la detección del
módulo. Ponga un puente en EN para tener el módulo siempre habilitado. Si
desea tener control sobre la habilitación/deshabilitación del módulo,
retire el puente y conecte el pin EN a HIGH para habilitar o LOW para
deshabilitar.

![Pines del módulo KY-032][img1]

El concepto básico de la detección de obstáculos por infrarrojos es
transmitir la señal IR (emisión) en una dirección y recibir una señal en
el receptor IR cuando los rayos rebotan en la superficie del objeto.

![Detección infrarrojos][img2]

Hay dos potenciómetros en el módulo, uno que controla la frecuencia
de operación (centrada en 38 kHz) y otro que controla la intensidad.
El detector fue diseñado para 38 kHz y el circuito oscilador
integrado se basa en un temporizador 555.

## Especificaciones

- Voltaje de funcionamiento: CC 3,3 V-5 V
- Corriente de trabajo: ≥20mA
- Temperatura de funcionamiento: -10 ℃ - +50 ℃
- Distancia de detección: 2-40 cm
- Interfaz I/O: 4 hilos (- / + / S /EN)
- Señal de salida: nivel TTL (LOW si hay un obstáculo, HIGH sin obstáculo)
- Ajuste: ajuste la resistencia de múltiples vueltas
- Ángulo efectivo: 35 °
- Tamaño: 28 mm × 23 mm
- Peso: 9g

## Material

|                               Imagen                               | Descripción                         |
| :----------------------------------------------------------------: | :--------------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.          |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión                 |
| <img src="/assets/imatges/mat/mat_KY-032.png" width="50" height="50"> | Módulo de evitación de obstáculos KY032 |

## Conexión

![Esquema eléctrico módulo KY-032][img3]
![Cableado módulo KY-032][img4]

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD030
* Fecha: 27/0º/2022
* Descripción: Prueba del sensor de evitar obstáculos
* Nota:
*/

int Led = 13;
int buttonpin = 3;
int val;

void setup()
{
    pinMode(Led, OUTPUT);
    pinMode(buttonpin, INPUT);
}

void loop()
{
    val = digitalRead(buttonpin);
    if (val == HIGH)
    {
        digitalWrite(Led, HIGH);
    }
    else
    {
        digitalWrite(Led, LOW);
    }
}
```
