---
layout: post
title: "12 - El módulo de pulsador"
author: "qode66"
description: "Cómo utilizar los pulsadores"
date: 2021-06-26 11:45:00 +0200
categories: arduino actuadores
excerpt: "Cómo utilizar los pulsadores"
tags: ["arduino", "actuadores", "pulsador", "KY-004"]
---

[img1]: /assets/imatges/ard/ard_12_01.png "Pulsador y esquema"
[img2]: /assets/imatges/ard/ard_12_02.png "Módulo pulsador"
[img3]: /assets/imatges/ard/ard_12_03.png "Esquema eléctrico"
[img4]: /assets/imatges/ard/ard_12_04.png "Montaje"

## Objetivos

- Cómo utilizar los pulsadores

## Materiales

|                                 Imagen                                 | Descripción                                                           |
| :--------------------------------------------------------------------: | :------------------------------------------------------------------- |
|   <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">    | Arduino Uno o compatible con S4A y con el firmware para S4A cargado. |
| <img src="/assets/imatges/mat/mat_protoboard.png" width="50" height="50"> | Una protoboard                                                       |
|   <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">   | Cables de conexión                                                   |
|   <img src="/assets/imatges/mat/mat_KY-004.png" width="50" height="50">   | Un módulo pulsador (KY-004)                                           |

## Descripción del material

**Pulsadores**

Los conmutadores son componentes realmente simples. Cuando presionas un botón o giras una palanca, conectan dos contactos juntos para que la electricidad pueda circular por ellos. Un _pulsador_ es un conmutador que vuelve a la posición de reposo cuando dejamos de actuar sobre él.

Los pequeños interruptores táctiles que se utilizan en esta lección tienen cuatro conexiones, lo que puede ser un poco confuso.

![Pulsador y esquema][img1]{: .centered}

En realidad, solo hay realmente dos conexiones eléctricas, ya que dentro del paquete de interruptores los pines B y C están conectados juntos, igual que A y D.

**Módulo pulsador**

Una resistencia de 10 K ohm incorporada está conectada entre el pin central y el pin "S" y se puede utilizar como resistencia de pull-up o pull-down. El pulsador conecta los dos pines externos.

![Módulo pulsador][img2]{: .centered}

## Montaje

Vamos a hacer que el LED integrado en la placa Arduino y conectado al pin 13 parpadee cuando pulsemos el botón. Para conseguirlo hay que cablear la «output» del módulo al pin 3 de Arduino, la Vcc con 5V y Gnd con Gnd. Como veis el montaje es muy sencillo.

![Esquema eléctrico][img3]{: .centered}
![Montaje][img4]{: .centered}

## Programación

```Arduino

/******************************************
  qode66 (www.qserrano.es)
  ARD_12.ino
  Tutorial Arduino - Lección 12: El módulo de pulsador
  25.02.2021
  Descripción: Leer un pulsador y hacer parpadear el LED del pin 13

 ******************************************/

int Led = 13; //Asigna el pin Led
int pols = 3; //Asigna el pin al pulsador
int val; //Define una variable

void setup()
{
    pinMode(Led, OUTPUT); //Configura el pin 13 (Led) como salida
    pinMode(pols, INPUT); //Configura el pin 3 (puls) como entrada
}

void loop()
{
    val = digitalRead(pols); //lee el valor de la entrada 3 y lo asigna a val
    if (val == HIGH)
    {
        digitalWrite (Led,LOW);
    }
    else
    {
        digitalWrite (Led,HIGH);
        delay(200);
        digitalWrite (Led,LOW);
        delay(200);
    }
}
```

## Conceptos importantes

- Seguimos utilizando las resistencias pull-up o pull-down cuando usamos pulsadores
- Hemos aprovechado parte del código del blinking led en este programa.

