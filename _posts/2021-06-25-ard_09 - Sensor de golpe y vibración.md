---
layout: post
title: "09 - Sensor de golpe y de vibración"
author: "qode66"
description: "Presentar el sensor de golpe y de vibración (KY-002 y KY-031), además de continuar trabajando las entradas digitales para saber detectar señales muy breves."
date: 2021-06-25 22:30:00 +0200
categories: arduino sensores
excerpt: "Presentar el sensor de golpe y de vibración (KY-002 y KY-031), además de continuar trabajando las entradas digitales para saber detectar señales muy breves."
tags: ["arduino", "sensor", "golpe", "vibración", "KY-002", "KY-031"]
---

[img1]: /assets/imatges/ard/ard_09_01.png "Esquema electrónico"
[img2]: /assets/imatges/ard/ard_09_02.png "Esquema de montaje"

## Finalidad

Presentar el sensor de golpe y de vibración (KY-002 y KY-031), además de continuar trabajando las entradas digitales para saber detectar señales muy breves.

## Material

|                                 Imagen                                 | Descripción                                                           |
| :--------------------------------------------------------------------: | :------------------------------------------------------------------- |
|   <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">    | Arduino Uno o compatible con S4A y con el firmware para S4A cargado. |
| <img src="/assets/imatges/mat/mat_protoboard.png" width="50" height="50"> | Una protoboard                                                       |
|   <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">   | Cables de conexión                                                   |
|   <img src="/assets/imatges/mat/mat_KY-002.png" width="50" height="50">   | Un módulo KY-002, sensor de golpe                                       |
|   <img src="/assets/imatges/mat/mat_KY-031.png" width="50" height="50">   | Un módulo KY-031, detector de vibración                                |

## ¿Cómo funcionan los módulos?

El módulo del conmutador de vibración KY-002 (vibration switch module) exteriormente presenta una forma cilíndrica. Las dos partes activas en el interior del sensor son un muelle conductor en el centro rodeado por una placa también conductora. Esta configuración hace que cuando se aplica
cualquier tipo de choque al módulo, el muelle entra en contacto con la cubierta cilíndrica y el circuito se cierra.

El módulo sensor de golpe KY-031 es similar al módulo de vibración. La diferencia principal entre estos dos es su sensibilidad. El sensor de vibración detecta incluso un choque pequeño, mientras que el sensor de golpes requiere un golpe potente o una sacudida para activarlo.

Los dos módulos llevan una resistencia de 10 K Ohm incorporada entre el pin central y el pin "S" para ser usado como montaje **pull up o pull down** según se requiera. Los contactos del interruptor conectan los dos pins externos.

Ambos módulos cambian el estado del conector de salida cuando detectan el golpe o vibración y lo mantienen únicamente mientras dura la perturbación, es decir, se obtiene una señal de una duración muy breve. Si hacemos el montaje habitual tendremos una configuración pull up, la salida estará en estado alto hasta que el sensor se active que pasará a estado bajo.

## Montaje

El esquema electrónico es muy sencillo, como que tenemos una señal digital la recogeremos por la entrada 2 y aprovecharemos el led de la placa arduino, conectado al pin 13 para ver la salida.

![Esquema-electrónico][img1]{: .centered}
![esquema-montaje][img2]{: .centered}

## Programación

```Arduino
/******************************************
  qode66 (www.qode66.com)
  ARD_09.ino
  Tutorial ARduino - Lección 09: Sensor de golpe y de vibración
  25.02.2021

 ******************************************/

int Led = 13; //asigna a la variable Led el valor de 13

int buttonpin = 2; //asigna a la variable buttonpin el valor 2

int val; //define val como entero

void setup()
{
  pinMode(Led, OUTPUT); //define el pin 13 como salida
  pinMode(buttonpin, INPUT); //define el pin 2 como entrada digital
}

void loop()
{
  val = digitalRead(buttonpin); //lee el valor de la entrada 2 y lo asigna a la variable val
  if (val == HIGH) //comprueba si el sensor se ha activado, recordad que si detecta la entrada 2 pasará a estado bajo
  {
    digitalWrite(Led, LOW);
  }

else //cuando el sensor envía señal, el led 13 //se enciende durante 2 segundos
  {
    digitalWrite(Led, HIGH);
    delay(2000);
  }
}
```

## Conceptos importantes

- Detección de señales muy breves
- Montaje pull-up y pull-down

