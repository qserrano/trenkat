---
layout: post
title: "24 - Módulo de sensor magnético lineal"
author: "qode66"
description: "Módulo de sensor magnético lineal"
date: 2021-07-13 11:50:00 +0200
categories: arduino sensores
excerpt: "Módulo de sensor magnético lineal"
tags: ["arduino", "sensores", "KY-024"]
---

[img1]: /assets/imatges/ard/ard_24_01.png "Conexiones del módulo KY-024"
[img2]: /assets/imatges/ard/ard_24_02.png "Especificaciones"
[img3]: /assets/imatges/ard/ard_24_03.png "Tensión de salida del efecto Hall"
[img4]: /assets/imatges/ard/ard_24_04.png "Mecanismos de detección"
[img5]: /assets/imatges/ard/ard_24_05.png "Conexionado"
[img6]: /assets/imatges/ard/ard_24_06.png "Esquema eléctrico"
[img7]: /assets/imatges/ard/ard_24_07.png "Gráfica"

## Finalidad

En este experimento, aprenderemos a usar el módulo de sensor de corredor
lineal (KY024). Este sensor es una herramienta fundamental para detectar campos magnéticos y puede ser utilizado en diversos proyectos como sistemas de posicionamiento, detección de movimiento o control de dispositivos. A través de este tutorial, entenderemos cómo funciona el sensor, cómo conectarlo correctamente a Arduino y cómo programarlo tanto para obtener lecturas analógicas como digitales.

## Módulo de sensor de corredor magnético lineal

El Módulo Sensor magnético lineal KY024 puede detectar la presencia de un
campo magnético cerca del sensor. Variables como la intensidad del campo, la
polaridad y la posición del imán en relación con el sensor afectarán el
punto en el que la salida 'DO' cambia a un nivel alto (es decir, alto
activo). La sensibilidad del circuito se puede ajustar con un potenciómetro.

Una señal de salida analógica del sensor está disponible en el pin
'AO'.

![Conexiones del módulo KY-024][img1]

## Material

|                               Imagen                               | Descripción                          |
| :----------------------------------------------------------------: | :---------------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.           |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión                  |
| <img src="/assets/imatges/mat/mat_KY-028.png" width="50" height="50"> | Módulo sensor magnético lineal KY-024 |

## Sensor Hall

_Especificaciones_

![Especificaciones][img2]

_Tensión de salida del efecto Hall_

![Output Hall-effect voltage][img3]

_Mecanismos de detección_

![Mecanismo de detección][img4]

## Factores de diseño: tipos magnéticos

**Unipolar**: Solo un polo sur operará el sensor. El sensor se enciende con
el polo sur (+) y se apaga cuando se quita el polo sur.

**Bipolar**: la salida del sensor depende de los polos. Un polo sur (+) está
diseñado para activar el sensor; un polo norte (-) está diseñado para
desactivarse. Es posible que el sensor se apague y aún esté dentro
de un nivel de Gauss positivo.

**Enganche**: Las especificaciones son más estrictas en
el enganche. A veces está diseñado para asegurarse de que cuando se
quita el polo sur (+) del sensor, permanecerá encendido hasta que vea el polo
opuesto (-).

**Omnipolar**: El sensor está diseñado para operar con radiométrico
lineal: la salida es proporcional a la intensidad del campo magnético. El
rango de sensibilidad de salida es de 2,5 a 3,75 mV por unidad de Gauss.

## Conexionado

![Conexionado][img5]
![Esquema eléctrico][img6]

## Programación

**Código ARD24a -- Salida analógica**

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD024a
* Fecha: 11.11.2021
* Descripción: Módulo sensor magnético lineal
* Nota: Salida analógica
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

_Ejemplo de gráfica_

![Gráfica][img7]

**Código ARD24b -- Salida digital**

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD024b
* Fecha: 11.11.2021
* Descripción: Módulo sensor magnético lineal
* Nota: salida digital
*
*/

int Led=13;
int buttonpin=3;
int val;

void setup()
{
    pinMode(Led,OUTPUT);
    pinMode(buttonpin,INPUT);
}

void loop()
{
    val=digitalRead(buttonpin);
    if(val==HIGH)
    {
        digitalWrite(Led,HIGH);
    }
    else
    {
        digitalWrite(Led,LOW);
    }
}
```
