---
layout: post
title: "13 - Módulos Transmisor y Receptor IR"
author: "qode66"
description: "Cómo utilizar el módulo transmisor
de infrarrojos y el receptor de infrarrojos."
date: 2021-06-27 15:10:00 +0200
categories: arduino sensores actuadores
excerpt: "Cómo utilizar el módulo transmisor
de infrarrojos y el receptor de infrarrojos."
tags: ["arduino", "actuadores", "IR", "KY-005", "KY-022"]
---

[img1]: /assets/imatges/ard/ard_13_01.png "Receptor IR"
[img2]: /assets/imatges/ard/ard_13_02.png "Emisor IR"
[img3]: /assets/imatges/ard/ard_13_03.png "Montaje receptor"
[img4]: /assets/imatges/ard/ard_13_04.png "Esquema eléctrico receptor"
[img5]: /assets/imatges/ard/ard_13_05.png "Montaje emisor"
[img6]: /assets/imatges/ard/ard_13_06.png "Esquema eléctrico emisor"

## Objetivo

En este experimento, aprenderemos a utilizar el módulo transmisor
de infrarrojos y el receptor de infrarrojos.
De hecho, en nuestra vida cotidiana juegan un papel importante en la
mayoría de los electrodomésticos que se utilizan en este tipo de
dispositivos, como aire acondicionado, TV, DVD, etc. En realidad se basa
en su teledetección sin hilos y es muy conveniente utilizarlos.

## Material

|                               Imagen                               | Descripción                                                           |
| :----------------------------------------------------------------: | :------------------------------------------------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o compatible con S4A y con el firmware para S4A cargado. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión                                                   |
| <img src="/assets/imatges/mat/mat_KY-022.png" width="50" height="50"> | Módulo receptor IR KY022                                              |
| <img src="/assets/imatges/mat/mat_KY-005.png" width="50" height="50"> | Módulo emisor IR KY005                                               |

## Descripción del material

### Receptor IR

Sensor de infrarrojos tipo 1838 para uso con señales IR de 38 KHz.

- Tensión de alimentación: 2,7 a 5,5 V
- Frecuencia: 37,9 KHz
- Alcance del receptor: 18 m (típico)
- Ángulo de recepción: 90 °

![Receptor IR][img1]{: .centered}

Los detectores IR son pequeños microchips con fotorresistencia que se ajustan para
escuchar la luz infrarroja. Casi siempre se utilizan para la detección
de control remoto: cada reproductor de TV y DVD tiene uno en la parte
frontal para leer la señal IR desde el mando a distancia. En el interior del
mando a distancia hay un LED IR coincidente, que emite impulsos IR
para decir al televisor que se encienda, se apague o cambie de canal. La luz
IR no es visible al ojo humano, por lo que se necesita un poco más
de trabajo para probar una configuración.

Los detectores IR están filtrados especialmente para la luz infrarroja, no son
buenos para detectar la luz visible. Por otro lado, las fotorresistencias son
buenas para detectar la luz visible de color amarillo/verde, no son buenas
para la luz IR.

- Los detectores IR tienen un desmodulador en el interior que busca IR
  modulados a 38 kHz. No se detectará el brillo de un LED de IR, sino que
  tendrá que parpadear a 38 kHz. Las fotorresistencias no tienen ningún tipo de
  desmodulador y pueden detectar cualquier frecuencia (incluida la CC) dentro
  de la velocidad de respuesta de la fotorresistencia (que es de unos 1 kHz).
- Los detectores IR son de salida digital: si detectan una señal IR de
  38 kHz, dan una salida baja (0V) o si bien no detectan ninguna,
  producen una salida alta (5V). Las fotorresistencias actúan como
  resistencias, la resistencia cambia en función de la cantidad de luz a
  la que están expuestas.

### Transmisor IR

Este módulo se utiliza generalmente junto con el módulo de receptor
IR, las aplicaciones de este módulo son muy amplias en nuestra vida
común. El LED-IR se puede utilizar para construir una barrera de luz o un
transmisor de señal de control remoto IR.

Este módulo es igual que un LED, pero el color de la luz no se puede
ver al ojo humano, sino que puedes ver la luz a través de la cámara
del teléfono.

![Emisor IR][img2]{: .centered}

## Montaje

Este montaje es muy sencillo, no necesitamos protoboard pero en
cambio necesitamos dos placas arduino.

Los cables de alimentación (5V y GND) tienen posiciones fijas en la placa,
los cables de datos los conectaremos en la entrada/salida correspondiente
según indicamos en el código

![Montaje receptor][img3]{: .centered}
![Montaje emisor][img5]{: .centered}

---

![Esquema eléctrico receptor][img4]{: .centered}
![Esquema eléctrico emisor][img6]{: .centered}

## Programación

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_13_IRe.ino
  Tutorial Arduino - Lección 13: Módulos Transmisor y Receptor IR
  27.06.2021
  Descripción: Módulos Transmisor y Receptor IR
  Notas: Subir a la placa del emisor
 ******************************************/

#include <IRremote.h>

IRsend irsend;

void setup()
{

}

void loop()
{
    digitalWrite(13,LOW);
    irsend.sendRC5(0x0, 8); //enviar código 0x0 (8 bits)
    delay(200);
    digitalWrite(13,HIGH);
    irsend.sendRC5(0x1, 8);
    delay(200);
}

```

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_13_IRr.ino
  Tutorial Arduino - Lección 13: Módulos Transmisor y Receptor IR
  27.06.2021
  Descripción: Módulos Transmisor y Receptor IR
  Notas: Subir a la placa del receptor
 ******************************************/

#include <IRremote.h>
#define RECV_PIN 11 //Pin de recepción de la señal IR
#define LED 13 //define LED pin

IRrecv irrecv(RECV_PIN); //crear el objeto irrecv para el receptor IR en el pin indicado

decode_results results; //declaramos la variable results (datos de la recepción)

void setup()
{
    pinMode(LED, OUTPUT); //inicializa LED como salida
    Serial.begin(9600);
    irrecv.enableIRIn(); //activa el objeto irrecv
}

void loop()
{
    if (irrecv.decode(&results)) //comprobamos si llegan datos
    {
        int state;
        if ( results.value == 1 )
        {
            state = HIGH;
        }
        else
        {
            state = LOW;
        }
    digitalWrite( LED, state );
    Serial.println(results.value);
    irrecv.resume(); // comenzamos una nueva recepción
    }
}

```

## Conclusión

En este experimento, hemos aprendido a utilizar el módulo transmisor
de infrarrojos y el receptor de infrarrojos.
