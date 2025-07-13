---
layout: post
title: "27 - Módulo LED flash de siete colores"
author: "qode66"
description: "Módulo LED flash de siete colores"
date: 2021-07-13 12:20:00 +0200
categories: arduino leds
excerpt: "Módulo LED flash de siete colores"
tags: ["arduino", "leds", "KY-034"]
---

[img1]: /assets/imatges/ard/ard_27_01.png "Pines del módulo KY-034"
[img2]: /assets/imatges/ard/ard_27_02.png "Esquema eléctrico módulo KY-034"
[img3]: /assets/imatges/ard/ard_27_03.png "Cableado módulo KY-034"

## Descripción general

En este experimento, aprenderemos a usar el módulo LED de flash de siete colores.

## Módulo LED flash de siete colores

LED transparente de 5 mm para funcionamiento directo desde 5V. El color del LED cambia automáticamente a través de una secuencia de siete colores. La alimentación de 5 V se conecta al pin 'S' y se conecta a tierra el pin central.

![Pines del módulo KY-034][img1]

## Material

|                               Imagen                               | Descripción                           |
| :----------------------------------------------------------------: | :----------------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.            |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión                   |
| <img src="/assets/imatges/mat/mat_KY-034.png" width="50" height="50"> | Un módulo LED flash de 7 colores KY034 |

## Componentes

### LED flash de siete colores

El módulo LED intermitente de 7 colores utiliza automáticamente un diodo emisor de luz redondo de alta luminosidad de 5 mm que tiene las siguientes características:

- Tipo de producto: LED
- Modelo del producto: YB-3120B4 Pn YG-PM
- Forma: LED redondo tipo DIP de 5 mm
- Color: rosa amarillo verde (alta luminosidad) Tipo de lente: niebla blanca
- Voltaje directo estándar: 3.0-4.5V

## Conexiones

![Esquema eléctrico módulo KY-034][img2]
![Cableado módulo KY-034][img3]

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD027
* Fecha: 20/01/2022
* Descripción: Uso del LED flash de 7 colores
* Nota: Enciende el LED y va repitiendo la secuencia
*/

void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
}
```
