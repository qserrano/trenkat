---
layout: post
title: "14 - Módulo de zumbador activo"
author: "qode66"
description: "Aprender a utilizar el zumbador"
date: 2021-06-27 15:20:00 +0200
categories: arduino actuadores
excerpt: "Aprender a utilizar el zumbador"
tags: ["arduino", "actuadores", "KY-012"]
---

[img1]: /assets/imatges/ard/ard_14_01.png "Montaje"
[img2]: /assets/imatges/ard/ard_14_02.png "Esquema eléctrico"

## Objetivo

- Aprender a utilizar el zumbador
- Incluir avisos sonoros en nuestros circuitos

## Material

|                               Imagen                               | Descripción                |
| :----------------------------------------------------------------: | :------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión        |
| <img src="/assets/imatges/mat/mat_KY-012.png" width="50" height="50"> | Un zumbador activo KY012  |

## Descripción del material

Los zumbadores electrónicos funcionan con corriente continua y están
equipados con un circuito integrado. Se utilizan ampliamente en ordenadores,
impresoras, fotocopiadoras, alarmas, juguetes electrónicos,
dispositivos electrónicos de automoción, teléfonos, temporizadores y otros
productos electrónicos para generar avisos. Los zumbadores se pueden
clasificar como activos y pasivos.

El módulo de zumbador activo KY-012 produce un sonido de un solo tono cuando la
señal es alta. Para producir diferentes tonos se utiliza el módulo de
zumbador pasivo KY-006.

El módulo KY-012 consiste en un zumbador piezoeléctrico activo, que
genera un sonido de aproximadamente 2,5 kHz cuando la señal es alta.

| Característica               | Valor                                 |
| ---------------------------- | ------------------------------------- |
| Voltaje de funcionamiento     | 3,5V ~ 5,5V                           |
| Corriente máxima             | 30mA / 5VDC                           |
| Frecuencia de resonancia     | 2500Hz ± 300Hz                        |
| Salida mínima de sonido      | 85Db @ 10cm                           |
| Temperatura de trabajo       | -20 °C ~ 70 °C [-4 °F ~ 158 °F]   |
| Temperatura de almacenamiento | -30 °C ~ 105 °C [-22 °F ~ 221 °F] |
| Dimensiones                  | 18,5 mm x 15 mm                       |

## Montaje

Conecte la señal (S) al pin 8 del Arduino y el negativo (-) a GND.
Tenga en cuenta que algunos módulos están mal etiquetados. Pruebe
de invertir los cables si no escucha ningún sonido mientras ejecuta el código.

![Montaje][img1]{: .centered}
![Esquema eléctrico][img2]{: .centered}

## Programación

Puede descargar el código
[aquí](https://drive.google.com/file/d/13Mxdfbo0VG3rP-PNCun1Ep957xYQfdPR/view?usp=share_link).

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_14.ino
  Tutorial Arduino - Lección 14: Módulo de zumbador activo
  27.06.2021
  Descripción: Módulo de zumbador activo
 ******************************************/

int buzzerPin = 8;

void setup()
{
  pinMode(buzzerPin, OUTPUT);
}

void loop()
{
  digitalWrite(buzzerPin, HIGH);
  delay(500);
  digitalWrite(buzzerPin, LOW);
  delay(500);
}
```

## Conclusión

En este experimento, hemos aprendido a utilizar el módulo de zumbador activo.
