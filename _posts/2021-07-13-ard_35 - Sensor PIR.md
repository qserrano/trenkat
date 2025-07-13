---
layout: post
title: "35 - Módulo sensor PIR HC-SR501"
author: "qode66"
description: "Módulo sensor PIR HC-SR501"
date: 2021-07-13 13:40:00 +0200
categories: arduino sensores
excerpt: "Módulo sensor PIR HC-SR501"
tags: ["arduino", "sensores", "HC-SR501"]
---

[img1]: /assets/imatges/ard/ard_35_01.png "Partes del módulo"
[img2]: /assets/imatges/ard/ard_35_02.jpeg "Funcionamiento"
[img3]: /assets/imatges/ard/ard_35_03.jpeg "Área de detección"
[img4]: /assets/imatges/ard/ard_35_04.jpeg "Ajuste del rango PIR"
[img5]: /assets/imatges/ard/ard_35_05.jpeg "Ajuste de retardo de tiempo"
[img6]: /assets/imatges/ard/ard_35_06.png "Esquema eléctrico"
[img7]: /assets/imatges/ard/ard_35_07.png "Cableado"

## Descripción general

En esta lección aprenderá a utilizar un detector de movimiento PIR con un
Arduino UNO.

El Arduino UNO es el corazón de este proyecto. 'Escucha' al sensor PIR y
cuando detecta movimiento, indica al LED que se encienda o se apague.

## Material

|                                Imagen                                | Descripción                |
| :------------------------------------------------------------------: | :------------------------ |
|  <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">   | Arduino Uno o equivalente. |
|  <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">  | Cables de conexión        |
| <img src="/assets/imatges/mat/mat_HC-SR501.png" width="50" height="50"> | Módulo sensor PIR HC-SR501 |

## Introducción a los componentes

![Partes del módulo][img1]

### Sensor PIR

Los sensores PIR son más complicados que muchos de los otros sensores
explicados en este tutorial (como fotocélulas, interruptores
de inclinación, ...) porque existen múltiples variables que afectan
la entrada y salida de los sensores.

El sensor PIR en sí tiene dos ranuras. Cada ranura está hecha de un
material especial que es sensible a IR. La lente utilizada aquí realmente
no está haciendo mucho, por lo que vemos que las dos ranuras pueden
'ver' más allá de una cierta distancia (básicamente, la sensibilidad
del sensor). Cuando el sensor está inactivo, ambas ranuras detectan la
misma cantidad de IR, la cantidad ambiental radiada desde
la habitación, las paredes o el exterior. Cuando pasa un cuerpo caliente como un
ser humano o un animal, primero intercepta la mitad del sensor PIR, lo
que provoca un cambio diferencial positivo entre las dos partes.
Cuando el cuerpo caliente sale del área de detección, ocurre lo contrario, por lo
que el sensor genera un cambio diferencial negativo. Estos pulsos
de cambio son los que se detectan.

![Funcionamiento][img2]

| Pin del módulo            | Función                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| Ajuste de retardo          | Establece cuánto tiempo permanece alta la salida después de detectar movimiento.... Entre 5 segundos y 5 minutos. |
| Ajuste de sensibilidad    | Establece el rango de detección... de 3 metros a 7 metros                                               |
| Puente de selección de disparo | Juego de puentes para disparos simples o repetibles.                                                        |
| GND                      | GND                                                                                                   |
| Pin de salida             | LOW cuando no se detecta movimiento. HIGH cuando se detecta movimiento.                                       |
| Vcc                      | Alimentación                                                                                           |

## HC SR501 PIR Descripción funcional

El SR501 detectará cambios infrarrojos y, si se interpreta como movimiento,
establecerá su salida en un nivel alto. Lo que se interpreta o no como
movimiento depende en gran medida de la configuración y los ajustes del
usuario.

### Inicialización del dispositivo

El dispositivo requiere casi un minuto para inicializarse. Durante
este período, puede emitir señales de detección falsas, y con frecuencia
lo hará. La lógica del circuito o del controlador debe tener en cuenta
este período de inicialización.

### Área de detección del dispositivo

El dispositivo detectará movimiento dentro de un cono de 110 grados con un
alcance de 3 a 7 metros.

![Área de detección][img3]

### HC SR501 Área de visualización

Ajuste del rango PIR (Sensibilidad) como se mencionó, el rango ajustable
es de aproximadamente 3 a 7 metros. La siguiente tabla muestra este ajuste.

|                                Giro                                 | Descripción                                                                                                      |
| :----------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------- |
| <img src="/assets/imatges/ard/ard_35_04.jpeg" width="50" height="50"> | Hacia la derecha. Disminuir la sensibilidad. Totalmente a la derecha y el alcance será de aproximadamente 3 metros.       |
| <img src="/assets/imatges/ard/ard_35_05.jpeg" width="50" height="50"> | Hacia la izquierda. Aumenta la sensibilidad. Completamente a la izquierda y el alcance será de aproximadamente 7 metros. |

### HC SR501 Ajuste de retardo de tiempo

El ajuste de retardo de tiempo determina cuánto tiempo permanecerá alta
la salida del módulo del sensor PIR después de la detección de movimiento.
El rango es de aproximadamente 3 segundos a cinco minutos.

|                                Giro                                 | Descripción                                                                                                        |
| :----------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------- |
| <img src="/assets/imatges/ard/ard_35_04.jpeg" width="50" height="50"> | Hacia la derecha. Aumentar el retardo. Totalmente a la derecha y el retardo será de aproximadamente 5 min.                |
| <img src="/assets/imatges/ard/ard_35_05.jpeg" width="50" height="50"> | Hacia la izquierda. Aumenta la sensibilidad. Completamente a la izquierda y el retardo será de aproximadamente 3 segundos. |

**IMPORTANTE**: son necesarios 3 segundos de inactividad después de que se complete
el tiempo de retardo.

La salida de este dispositivo pasará a BAJO (o apagado) durante
aproximadamente 3 segundos después de que finalice el tiempo de retardo. En
otras palabras, toda la detección de movimiento se bloquea durante este
período de tres segundos.

Por ejemplo:

Imagina que estás en el modo de disparo único y tu tiempo de retardo está
establecido en 5 segundos. El PIR detectará movimiento y lo configurará alto
durante 5 segundos. Después de cinco segundos, el PIR establecerá su salida
baja durante unos 3 segundos. Durante los tres segundos, el PIR no detectará
movimiento. Después de tres segundos, el PIR detectará movimiento nuevamente y
el movimiento detectado establecerá una vez más la salida alta.

### Puente de selección de modo de disparo

El puente de selección de modo de disparo le permite seleccionar entre disparos
simples y repetibles. El efecto de esta configuración de puente es
determinar cuándo comienza el retardo de tiempo.

- **DISPARADOR ÚNICO**: el tiempo de retardo comienza inmediatamente cuando se
  detecta movimiento por primera vez.
- **DISPARADOR REPETIBLE**: cada movimiento detectado reinicia el retardo de
  tiempo. Así, el retardo de tiempo comienza con el último movimiento
  detectado.

## Conexión

![Esquema eléctrico][img6]
![Cableado][img7]

## Programación

**Código:ARD035**

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD035
* Fecha: 07/02/2022
* Descripción: Prueba del sensor HC SR501
* Nota:
*
*/

const int LEDPin= 13;
const int PIRPin= 2;

void setup()
{
  pinMode(LEDPin, OUTPUT);
  pinMode(PIRPin, INPUT);
}

void loop()
{
  int value= digitalRead(PIRPin);
  if (value == HIGH)
  {
    digitalWrite(LEDPin, HIGH);
    delay(50);
    digitalWrite(LEDPin, LOW);
    delay(50);
  }
  else
  {
    digitalWrite(LEDPin, LOW);
  }
}
```
