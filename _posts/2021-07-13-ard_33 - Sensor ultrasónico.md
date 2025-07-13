---
layout: post
title: "33 - Módulo sensor ultrasónico"
author: "qode66"
description: "Módulo sensor ultrasónico"
date: 2021-07-13 13:20:00 +0200
categories: arduino sensores
excerpt: "Módulo sensor ultrasónico"
tags: ["arduino", "sensores", "HC-SR04"]
---

[img1]: /assets/imatges/ard/ard_33_01.png "Módulo sensor ultrasónico HC-SR04"
[img2]: /assets/imatges/ard/ard_33_02.png "Funcionamiento del sensor ultrasónico"
[img3]: /assets/imatges/ard/ard_33_03.png "Esquema eléctrico conexión HC-SR04"
[img4]: /assets/imatges/ard/ard_33_04.png "Cableado HC-SR04"

## Descripción general

El sensor ultrasónico es excelente para todo tipo de proyectos que
necesitan mediciones de distancia, como evitar obstáculos por ejemplo.

El HC-SR04 es económico y fácil de usar, ya que disponemos de una biblioteca
diseñada específicamente para estos sensores.

![Módulo sensor ultrasónico HC-SR04][img1]

## Material

|                               Imagen                                | Descripción                |
| :-----------------------------------------------------------------: | :------------------------ |
|  <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">  | Cables de conexión        |
| <img src="/assets/imatges/mat/mat_HC-SR04.png" width="50" height="50"> | Módulo ultrasónico HC-SR04  |

## Introducción de componentes

### Sensor ultrasónico

Los sensores ultrasónicos funcionan emitiendo ondas de sonido con una frecuencia
que es demasiado alta para que un humano las escuche. Estas ondas sonoras
viajan por el aire a la velocidad del sonido, aproximadamente 343 m/s. Si hay
un objeto frente al sensor, las ondas sonoras se reflejan y el receptor del sensor
ultrasónico las detecta. Al medir cuánto tiempo pasó entre el envío y la recepción
de las ondas de sonido, se puede calcular la distancia entre el sensor y el objeto.

![Funcionamiento del sensor ultrasónico][img2]

A 20 °C, la velocidad del sonido es de aproximadamente 343 m/s o 0,034 cm/µs.
Digamos que el tiempo entre el envío y la recepción de las ondas sonoras
es de 2000 µs (microsegundos). Si multiplicas la velocidad del sonido por el
tiempo que recorrieron las ondas sonoras, obtienes la distancia que recorrieron
las ondas sonoras.

$$Distancia = Velocidad · Tiempo$$

Pero este no es el resultado que buscamos. La distancia entre el sensor
y el objeto es en realidad solo la mitad de esta distancia porque
las ondas sonoras viajaron del sensor al objeto y de vuelta del
objeto al sensor. Entonces necesitas dividir el resultado por dos.

$$Distancia (cm) = \frac{V_{sonido}(cm/\mu s) · T (\mu s)}{2}$$

Y así, para el ejemplo, esto se convierte en:

$$Distancia (cm) = \frac{0,0343(cm/\mu s) · 2000 (\mu s)}{2} = 34,3 cm$$

### Dependencia de la velocidad del sonido con la temperatura

La velocidad del sonido en realidad depende en gran medida de la temperatura y
en un grado mucho menor de la humedad del aire. Wikipedia afirma que
la velocidad del sonido aumenta aproximadamente 0,6 m/s por grado Celsius.
Para la mayoría de los casos a 20 °C, puede usar 343 m/s, pero si desea
obtener lecturas más precisas, puede calcular la velocidad del sonido con la
siguiente fórmula:

$$V_{sonido} (m/s) = 331,3 + (0,606 · T (ºC))$$

- V = Velocidad del sonido (m/s)
- T = Temperatura del aire (°C)

Esta fórmula no incluye la humedad ya que su efecto sobre la
velocidad del sonido es muy pequeño.

Podemos usar un sensor de temperatura y humedad DHT11 para calibrar la
velocidad del sonido y obtener una lectura de distancia más precisa con
el HC-SR04.

## Cómo funciona el HC-SR04

En la parte frontal del sensor HC-SR04, puede encontrar dos cilindros
plateados (transductores ultrasónicos), uno es el transmisor de las ondas
de sonido y el otro es el receptor. Para permitir que el sensor genere una
explosión sónica, debe configurar el pin Trig en alto durante al menos 10 µs.
Después, el sensor crea una ráfaga de ultrasonido de 8 ciclos a 40 kHz.

Esta explosión sónica viaja a la velocidad del sonido, rebota y es recibida por el
receptor del sensor. El pin Echo luego emite el tiempo que las ondas de
sonido viajaron en microsegundos.

Puede usar la función _pulseIn()_ en el código Arduino para leer la
longitud del pulso del pin Echo. Después de esto, puede usar la fórmula
mencionada anteriormente para calcular la distancia entre el sensor y el
objeto.

## Especificaciones

- Voltaje de funcionamiento: 5 V
- Corriente de funcionamiento: 15 mA
- Frecuencia: 40kHz
- Rango de medición: 2 -- 400 cm
- Resolución: 3mm
- Ángulo de medición: 15 grados
- Señal de entrada de disparo (trigger): 10 µs de pulso alto

## Conexiones

![Esquema eléctrico conexión HC-SR04][img3]
![Cableado HC-SR04][img4]

| HC-SR04 | Arduino |
| :-----: | :-----: |
|   VCC   |   5 V   |
|  Trig   |  Pin 2  |
|  Echo   | Pin 3   |
|   GND   |   GND   |

## Programación

El siguiente código prueba el funcionamiento del sensor haciendo uso de la
biblioteca «NewPing».

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD033
* Fecha: 01/02/2022
* Descripción: Prueba del HC-SR04 con biblioteca
* Nota:
*
*/

#include <NewPing.h>
#define TRIGGER_PIN 2
#define ECHO_PIN 3
#define MAX_DISTANCE 200

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  delay(500);
  unsigned int uS = sonar.ping();
  Serial.print("Ping: ");
  Serial.print(uS / US_ROUNDTRIP_CM);
  Serial.println("cm");
}
```

Este código no utiliza ninguna biblioteca.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD033b
* Fecha: 01/02/2022
* Descripción: Prueba de HC-SR04 sin biblioteca
* Nota:
*
*/

// Define pins Trig and Echo
#define trigPin 2
#define echoPin 3

// Define variables
long duration;
int distance;

void setup()
{
  // Define entradas y salidas
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  //Inicia comunicación serie a 9600 bps
  Serial.begin(9600);
}

void loop()
{
  // Limpia trigPin poniendo la salida a LOW
  digitalWrite(trigPin, LOW);
  delayMicroseconds(5);

  // Dispara el sensor estableciendo trigPin a HIGH por 10 microsegundos:
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Lee echoPin, pulseIn() devuelve la duración en microsegundos:
  duration = pulseIn(echoPin, HIGH);

  // Calcula la distancia
  distance = duration * 0.034 / 2;

  // Imprime la distancia en el monitor serie
  Serial.print("Distancia = ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(50);
}
```
