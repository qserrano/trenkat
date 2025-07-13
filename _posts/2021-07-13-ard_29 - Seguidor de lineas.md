---
layout: post
title: "29 - Módulo de seguimiento de líneas"
author: "qode66"
description: "Módulo de seguimiento de líneas"
date: 2021-07-13 12:40:00 +0200
categories: arduino sensores
excerpt: "Módulo de seguimiento de líneas"
tags: ["arduino", "sensores", "KY-033"]
---

[img1]: /assets/imatges/ard/ard_29_01.png "Pines del módulo KY-033"
[img2]: /assets/imatges/ard/ard_29_02.png "Esquema eléctrico módulo KY-033"
[img3]: /assets/imatges/ard/ard_29_03.png "Cableado módulo KY-033"

## Descripción

Con este módulo, tu coche o robot solo puede caminar por una línea. Cuando el detector se mueve de blanco a negro, emite una señal TTL. Así que si dibujas una línea negra entre las dos ruedas de tu coche, caminará a lo largo de tu carretera esperada.

![Pines del módulo KY-033][img1]

## Material

|                               Imagen                               | Descripción                            |
| :----------------------------------------------------------------: | :------------------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.             |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión                    |
| <img src="/assets/imatges/mat/mat_KY033.jpeg" width="50" height="50"> | Un módulo de seguimiento de líneas KY023 |

## Principio de trabajo

El sensor de infrarrojo TCRT5000 contiene un diodo emisor de infrarrojos que continuamente está emitiendo. Mientras no se refleje ningún rayo IR o la intensidad reflejada sea baja, el fototransistor se mantendrá en corte y la salida del módulo estará en ALTO (HIGH). Cuando un objeto entra en el rango de detección, o la superficie de reflexión cambia, la intensidad de los rayos infrarrojos reflejados es lo suficientemente grande y el fototransistor entra en saturación, por lo que la salida del módulo pasa a nivel BAJO (LOW), y el indicador LED se ilumina.

![Esquema eléctrico módulo KY-033][img2]

## Especificaciones técnicas

- Alimentación: 3.3V a 5V
- Consumo: 20mA @ 5V
- Rango de temperatura: 0°C ~ + 50°C
- Salida: Negro - BAJO(LOW), Blanco - ALTO(HIGH)
- Dimensiones: 48x10.5mm

## Configuración de pines

| Módulo | Arduino  |
| :---: | :------: |
|   S   | Ent.dig. |
|  V+   |   +5V    |
|   G   |   GND    |

## Ejemplo

El ejemplo muestra que cuando el sensor detecta el área negra, la señal de salida del pin "S" es BAJO(LOW), entonces el LED13 se apaga mientras la luz "L" en este módulo se activa. Por el contrario, LED13 se activa.

La conexión a continuación:

![Cableado del módulo KY-033][img3]

## Programación

```Arduino

/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD029
* Fecha: 22/01/2022
* Descripción: Módulo de seguimiento de líneas
* Nota:
*
*/

int Led=13;
int tracking =3;
int val;

void setup()
{
  pinMode(Led,OUTPUT);
  pinMode(tracking,INPUT);
}

void loop()
{
val=digitalRead(tracking);
  if(val==HIGH){
    digitalWrite(Led,HIGH);
  }
  else{
    digitalWrite(Led,LOW);
  }
}

```
