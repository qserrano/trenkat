---
layout: post
title: "22 - Módulo de interruptor magnético KY-025"
author: "qode66"
description: "Módulo de interruptor magnético KY-025"
date: 2021-07-13 11:30:00 +0200
categories: arduino sensores
excerpt: "Módulo de interruptor magnético KY-025"
tags: ["arduino", "sensores", "KY-025"]
---

[img1]: /assets/imatges/ard/ard_22_01.png "Módulo interruptor magnético"
[img2]: /assets/imatges/ard/ard_22_02.png "Pins módulo KY-025"
[img3]: /assets/imatges/ard/ard_22_03.png "Inducción"
[img4]: /assets/imatges/ard/ard_22_04.png "Flujo"
[img5]: /assets/imatges/ard/ard_22_05.png "Campo de acción"
[img6]: /assets/imatges/ard/ard_22_06.png "Esquema eléctrico KY-025"
[img7]: /assets/imatges/ard/ard_22_07.png "Montaje KY-025"

## Material

|                               Imagen                               | Descripción                          |
| :----------------------------------------------------------------: | :---------------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.           |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión                  |
| <img src="/assets/imatges/mat/mat_KY-025.png" width="50" height="50"> | Módulo interruptor magnético (KY-025) |

## Descripción

El interruptor magnético es una especie de componente electrónico pasivo de
conmutación con contactos con una estructura simple, tamaño pequeño y
fácil de controlar. Consiste en un envoltorio de vidrio sellado donde hay
dos lengüetas elásticas ferrosas y está lleno de un gas inerte llamado
rodio.

![Módulo interruptor magnético][img1]

Normalmente, las dos lengüetas están separadas en el envoltorio. Cuando una
sustancia magnética se acerca al envoltorio de vidrio, las lengüetas
se unirán debido al campo magnético completando así un circuito eléctrico.
Cuando el campo magnético externo desaparece, las dos lengüetas se separarán
debido a su elasticidad, el circuito también se desconecta.

Por lo tanto, como dispositivo de conmutación de circuitos controlado por
señales de campo magnético, el interruptor de láminas también se puede
utilizar como sensor para contar y limitar, etc. (aplicado en los
sistemas de seguridad, utilizado principalmente para la producción
de imanes de puertas y ventanas), y también es ampliamente utilizado en una
variedad de dispositivos de comunicación. En la práctica, es común
utilizar los dos imanes permanentes para controlar la conexión de dos
láminas de metal, por lo que también se denomina "magnetrón".

## Especificaciones

- Voltaje de operación: 5 V
- Pin de salida digital y analógica
- Sensibilidad ajustable
- Tamaño: 42,5 x 15 mm
- Peso: 2.964g

## Configuración de pins

![Pins módulo KY-025][img2]

Este interruptor de lengüeta ofrece una interfaz analógica y
digital. El pin "G" conectado a GND, el pin "+" a 5 Vcc, el pin
"AO" ofrece la salida analógica mientras que el "DO" ofrece
la salida digital. Se utiliza un potenciómetro como resistencia de
pull-up.

## Funcionamiento

Aunque un interruptor magnético se puede activar colocándolo dentro
de una bobina eléctrica, muchos interruptores y sensores magnéticos
se utilizan para la detección de proximidad y se activan mediante un
imán. Cuando el imán se acerca al sensor/interruptor, el dispositivo
se activa. A medida que el imán se aleja de la proximidad del sensor/interruptor, el dispositivo se desactiva. Sin embargo, la interacción
magnética involucrada en la activación de los contactos del interruptor
no es necesariamente obvia. Una forma de pensar en la interacción es que
el imán induce polos magnéticos en las partes metálicas del
interruptor y la atracción resultante entre los contactos eléctricos hace
que se active.

![Inducción][img3]

Otra forma igualmente válida de pensar envoltorio la interacción entre un
imán y un interruptor magnético es que el imán induce un flujo magnético
a través de los contactos eléctricos. Cuando el flujo magnético es suficientemente alto,
la atracción magnética entre los contactos hace que el interruptor se
cierre.

![Flujo][img4]

## Campo de acción

![Campo de acción][img5]

Como se puede ver, la orientación magnética y la ubicación respecto al
interruptor magnético juegan un papel importante en las distancias
de activación. Además, el tamaño de las regiones activadas (lóbulos)
variará según la fuerza del imán y la sensibilidad del interruptor.
La orientación adecuada del imán respecto al sensor/interruptor
magnético es una consideración importante para cumplir con los requisitos
de la aplicación en todo el rango de tolerancia para los sistemas mecánicos,
la fuerza magnética y el sensor de láminas o la sensibilidad del
interruptor.

## Conexión

![Esquema eléctrico KY-025][img6]
![Montaje KY-025][img7]

## Programación

Este primer código lee el valor analógico del módulo mediante una
entrada analógica del arduino, presenta el valor leído por el monitor
serie y hace parpadear el led de la placa según el valor obtenido.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD022a
* Fecha: 11.11.2021
* Descripción: Módulo interruptor magnético
* Nota:
*
*/

int sensorPin = A0; // define la entrada analógica del sensor
int ledPin = 13; // salida led para ver la activación
int sensorValue = 0; // variable para guardar el valor del sensor

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

El siguiente código activa el led de la placa cuando el sensor envía señal
alta por la salida digital del módulo.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD022b
* Fecha: 11.11.2021
* Descripción: Módulo interruptor magnético
* Nota:
*
*/

int Led=13; //define el puerto LED
int buttonpin=3; //define el puerto del interruptor
int val; //define la variable digital val

void setup()
{
    pinMode(Led,OUTPUT);//define LED como pin de salida
    pinMode(buttonpin,INPUT);//define la entrada digital del interruptor
}

void loop()
{
    val=digitalRead(buttonpin);//asigna el valor de la entrada 3 a val
    if(val==HIGH)//cuando el sensor envía señal, LED se enciende
    {
        digitalWrite(Led,HIGH);
    }
    else
    {
        digitalWrite(Led,LOW);
    }
}
```
