---
layout: post
title: "34 -- Módulo GY-521"
author: "qode66"
description: "Módulo GY-521"
date: 2021-07-13 13:30:00 +0200
categories: arduino sensores
excerpt: "Módulo GY-521"
tags: ["arduino", "sensores", "GY-521"]
---

[img1]: /assets/imatges/ard/ard_34_01.jpeg "Pines del módulo GY-521"
[img2]: /assets/imatges/ard/ard_34_02.png "Funcionamiento de un acelerómetro"
[img3]: /assets/imatges/ard/ard_34_03.png "Ejes espaciales"
[img4]: /assets/imatges/ard/ard_34_04.png "Funcionamiento de un giroscopio"
[img5]: /assets/imatges/ard/ard_34_05.png "Esquema eléctrico"
[img6]: /assets/imatges/ard/ard_34_06.png "Cableado"

## Descripción general

En esta lección, aprenderemos a usar el módulo GY-521 (MPU-6050), que es uno
de los mejores sensores de medición de inercia IMU (Inertia Measurement
Unit), compatible con Arduino.

Los sensores IMU como el GY-521 (MPU-6050) se utilizan en robots
auto-equilibrados, vehículos aéreos no tripulados, teléfonos inteligentes,
etc.

![Pines del módulo GY-521][img1]

## Material

|                               Imagen                               | Descripción                |
| :----------------------------------------------------------------: | :------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión        |
| <img src="/assets/imatges/mat/mat_GY-521.png" width="50" height="50"> | Módulo GY-521              |

## Introducción de componentes

### Sensor GY-521

El sensor InvenSense GY-521 contiene un acelerómetro MEMS y un giroscopio
MEMS en un solo chip (MEMS = MicroElectroMechanic System). Es muy preciso,
ya que contiene hardware de conversión de analógico a digital de 16 bits por
cada canal. Por lo tanto, captura el canal x, y y z al mismo tiempo. El
sensor utiliza el bus I2C para interactuar con el Arduino.

El GY-521 no es caro, especialmente considerando que combina un acelerómetro y un
giroscopio.

Los sensores IMU son uno de los tipos de sensores más inevitables que
se utilizan hoy día en toda clase de dispositivos electrónicos.

Se ven en teléfonos inteligentes, dispositivos portátiles, controladores
de juegos, etc. Los sensores IMU nos ayudan a obtener la posición de un
objeto adjunto al sensor en un espacio tridimensional. Estos valores
suelen estar en ángulos, lo que nos ayuda a determinar su posición. Por lo tanto, se utilizan en teléfonos inteligentes para detectar
su orientación. Y también, en dispositivos portátiles como la "fit band",
que usan sensores IMU para rastrear el movimiento.

### ¿Cómo funciona?

Los sensores IMU generalmente constan de dos o más partes. Enumerándolos
por prioridad, son: **acelerómetro, giroscopio, magnetómetro y altímetro.** El GY-521 es un sensor IMU de 6 grados de libertad (DOF =
Degrees Of Freedom) o de seis ejes, lo que significa que da seis
valores como salida. Tres valores del acelerómetro y tres del
giroscopio. El GY-521 es un sensor basado en tecnología MEMS (Micro
Electro Mechanical Systems). Tanto el acelerómetro como el giroscopio
están integrados dentro de un solo chip. Este chip utiliza el protocolo I2C
(Inter Integrated Circuit) para la comunicación.

### ¿Cómo funciona un acelerómetro?

![Funcionamiento de un acelerómetro][img2]

Un acelerómetro funciona según el principio del efecto piezoeléctrico.
Aquí, imagina una caja con forma de cubo, con una pequeña bola dentro, como
en la imagen de arriba. Las paredes de esta caja están hechas con
cristales piezoeléctricos.

Cada vez que inclinas la caja, la bola se ve obligada a moverse en
la dirección de la inclinación, a causa de la gravedad.

La pared con la que choca la bola crea pequeñas corrientes piezoeléctricas.
Hay en total, tres pares de paredes opuestas en un paralelepípedo.
Cada par corresponde a un eje en el espacio 3D: ejes X, Y y Z. Dependiendo
de la corriente producida por las paredes piezoeléctricas, podemos determinar
la dirección de inclinación y su magnitud.

![Ejes espaciales][img3]

### ¿Cómo funciona un giroscopio?

Los giroscopios funcionan según el principio de la aceleración de
Coriolis. Imagina que hay una estructura similar a un tenedor, que
está en constante movimiento hacia adelante y hacia atrás. Se mantiene en su
lugar mediante cristales piezoeléctricos. Cada vez que intenta
inclinar este arreglo, los cristales experimentan una fuerza en la
dirección de la inclinación. Esto se produce como resultado de la inercia
del tenedor en movimiento.

Los cristales producen así una corriente en consenso con el efecto
piezoeléctrico, y esta corriente se amplifica. Después, los valores son
refinados por el microcontrolador.

![Funcionamiento de un giroscopio][img4]

## Conexión

![Esquema eléctrico][img5]
![Cableado][img6]

## Programación

Los ejemplos siguientes son transcripción del artículo de Luis Llamas
(https://www.luisllamas.es/arduino-orientacion-imu-mpu-6050/).

Para realizar la lectura del MPU-6050 usaremos la librería
desarrollada por Jeff Rowberg disponible en [este
enlace](https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/MPU6050).
También emplearemos [la librería
I2Cdev](https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/I2Cdev)
desarrollada por el mismo autor, que mejora la comunicación I2C.

La librería proporciona ejemplos de código, que resulta aconsejable
revisar. Los siguientes ejemplos son modificaciones a partir de los
disponibles en la librería.

### Leer valores RAW

En el primer ejemplo, aprendemos a leer los valores directamente
proporcionados por el MPU-6050 (valores RAW) a través del bus I2C. Los valores
RAW tienen un rango de medición entre -32768 y +32767.

```Arduino

/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD034a
* Fecha: 03/02/2022
* Descripción: Leer valores RAW
* Nota: transcripción de Luis Llamas
*
*/

//GND - GND
//VCC - VCC
//SDA - Pin A4
//SCL - Pin A5

#include "I2Cdev.h"
#include "MPU6050.h"
#include "Wire.h"

const int mpuAddress = 0x68; //Puede ser 0x68 o 0x69

MPU6050 mpu(mpuAddress);

int ax, ay, az;
int gx, gy, gz;

void printTab()
{
    Serial.print(F("t"));
}

void printRAW()
{
    Serial.print(F("a[x y z] g[x y z]:t"));
    Serial.print(ax); printTab();
    Serial.print(ay); printTab();
    Serial.print(az); printTab();
    Serial.print(gx); printTab();
    Serial.print(gy); printTab();
    Serial.println(gz);
}

void setup()
{
    Serial.begin(9600);
    Wire.begin();
    mpu.initialize();
    Serial.println(mpu.testConnection() ? F("IMU iniciado correctamente") : F("Error al iniciar IMU"));
}

void loop()
{
    // Leer las aceleraciones y velocidades angulares
    mpu.getAcceleration(&ax, &ay, &az);
    mpu.getRotation(&gx, &gy, &gz);
    printRAW();
    delay(100);
}

```

### Leer valores en Sistema Internacional

En el siguiente ejemplo aplicamos una escala a los valores RAW para obtener
mediciones con significado físico. En el ejemplo, emplearemos valores G para
la aceleración, y º/s para la velocidad angular. Con facilidad podrás
modificar el código para que proporcione los valores en unidades del Sistema
Internacional. El escalado dependerá del rango de medición que
seleccionemos en el MPU-6050, que recordamos puede ser 2g/4g/8g/16g para
el acelerómetro y 250/500/1000/2000 (°/s) para el giroscopio.

```Arduino

/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD034b
* Fecha: 03/02/2022
* Descripción: Leer valores en SI
* Nota: transcripción de Luis Llamas
*
*/

//GND - GND
//VCC - VCC
//SDA - Pin A4
//SCL - Pin A5

#include "I2Cdev.h"
#include "MPU6050.h"
#include "Wire.h"

const int mpuAddress = 0x68; // Puede ser 0x68 o 0x69

MPU6050 mpu(mpuAddress);

int ax, ay, az;
int gx, gy, gz;

// Factores de conversión
const float accScale = 2.0 * 9.81 / 32768.0;
const float gyroScale = 250.0 / 32768.0;

void printTab()
{
    Serial.print(F("t"));
}

// Mostrar medidas en Sistema Internacional
void printRAW()
{
    Serial.print(F("a[x y z](m/s2) g[x y z](deg/s):t"));
    Serial.print(ax * accScale); printTab();
    Serial.print(ay * accScale); printTab();
    Serial.print(az * accScale); printTab();
    Serial.print(gx * gyroScale); printTab();
    Serial.print(gy * gyroScale); printTab();
    Serial.println(gz * gyroScale);
}

void setup()
{
    Serial.begin(9600);
    Wire.begin();
    mpu.initialize();
    Serial.println(mpu.testConnection() ? F("IMU iniciado correctamente") : F("Error al iniciar IMU"));
}

void loop()
{
    // Leer las aceleraciones y velocidades angulares
    mpu.getAcceleration(&ax, &ay, &az);
    mpu.getRotation(&gx, &gy, &gz);
    printRAW();
    delay(100);
}
```

## Leer inclinación con acelerómetro

En el siguiente ejemplo, calculamos la inclinación del MPU-6050 mediante la
proyección de la medición de la gravedad y las relaciones trigonométricas
que podemos ver en la entrada [Cómo usar un acelerómetro con
Arduino](https://www.luisllamas.es/como-usar-un-acelerometro-arduino/).

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD034c
* Fecha: 03/02/2022
* Descripción: Leer inclinación con acelerómetro
* Nota: transcripción de Luis Llamas
*
*/

//GND - GND
//VCC - VCC
//SDA - Pin A4
//SCL - Pin A5

#include "I2Cdev.h"
#include "MPU6050.h"
#include "Wire.h"

const int mpuAddress = 0x68; // Puede ser 0x68 o 0x69

MPU6050 mpu(mpuAddress);

int ax, ay, az;
int gx, gy, gz;

void setup()
{
    Serial.begin(9600);
    Wire.begin();
    mpu.initialize();
    Serial.println(mpu.testConnection() ? F("IMU iniciado correctamente") : F("Error al iniciar IMU"));
}

void loop()
{
    // Leer las aceleraciones
    mpu.getAcceleration(&ax, &ay, &az);

    //Calcular los ángulos de inclinación
    float accel_ang_x = atan(ax / sqrt(pow(ay, 2) + pow(az, 2)))*(180.0 / 3.14);
    float accel_ang_y = atan(ay / sqrt(pow(ax, 2) + pow(az, 2)))*(180.0 / 3.14);

    // Mostrar resultados
    Serial.print(F("Inclinación en X: "));
    Serial.print(accel_ang_x);
    Serial.print(F("Inclinación en Y:"));
    Serial.println(accel_ang_y);

    delay(10);
}
```

### Obtener orientación con giroscopio

En el siguiente ejemplo, realizamos la integración de la señal de la
velocidad del giroscopio para obtener la orientación del MPU-6050, como
podemos ver en la entrada [Cómo usar un giroscopio con
Arduino](https://www.luisllamas.es/como-usar-un-giroscopio-arduino/).

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD034d
* Fecha: 03/02/2022
* Descripción: Obtener orientación con giroscopio
* Nota: transcripción de Luis Llamas
*
*/

//GND - GND
//VCC - VCC
//SDA - Pin A4
//SCL - Pin A5

#include "I2Cdev.h"
#include "MPU6050.h"
#include "Wire.h"

const int mpuAddress = 0x68; // Puede ser 0x68 o 0x69

MPU6050 mpu(mpuAddress);

int ax, ay, az;
int gx, gy, gz;
long tiempo_prev, dt;
float girosc_ang_x, girosc_ang_y;
float girosc_ang_x_prev, girosc_ang_y_prev;

void updateGiro()
{
    dt = millis() - tiempo_prev;
    tiempo_prev = millis();
    girosc_ang_x = (gx / 131)*dt / 1000.0 + girosc_ang_x_prev;
    girosc_ang_y = (gy / 131)*dt / 1000.0 + girosc_ang_y_prev;
    girosc_ang_x_prev = girosc_ang_x;
    girosc_ang_y_prev = girosc_ang_y;
}

void setup()
{
    Serial.begin(9600);
    Wire.begin();
    mpu.initialize();
    Serial.println(mpu.testConnection() ? F("IMU iniciado correctamente ") :F("Error al iniciar IMU"));
}

void loop()
{
    // Leer las velocidades angulares
    mpu.getRotation(&gx, &gy, &gz);
    updateGiro();

    // Mostrar resultados
    Serial.print(F("Rotación en X: "));
    Serial.print(girosc_ang_x);
    Serial.print(F("Rotación en Y: "));
    Serial.println(girosc_ang_y);

    delay(10);
}
```

### Obtener la orientación con filtro complementario

Este ejemplo emplea un filtro complementario para combinar la señal
del acelerómetro y giroscopio para obtener una mejor medición de
la orientación del MPU-6050, como podemos ver en la entrada [Medir la
inclinación de un IMU con Arduino y filtro
complementario.](https://www.luisllamas.es/medir-la-inclinacion-imu-arduino-filtro-complementario/)

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD034e
* Fecha: 03/02/2022
* Descripción: Obtener la orientación con filtro complementario
* Nota: transcripción de Luis Llamas
*
*/

//GND - GND
//VCC - VCC
//SDA - Pin A4
//SCL - Pin A5

#include "I2Cdev.h"
#include "MPU6050.h"
#include "Wire.h"

const int mpuAddress = 0x68; // Puede ser 0x68 o 0x69

MPU6050 mpu(mpuAddress);

int ax, ay, az;
int gx, gy, gz;
long tiempo_prev;
float dt;
float ang_x, ang_y;
float ang_x_prev, ang_y_prev;

void updateFiltered()
{
    dt = (millis() - tiempo_prev) / 1000.0;
    tiempo_prev = millis();

    //Calcular los ángulos con acelerómetro
    float accel_ang_x = atan(ay / sqrt(pow(ax, 2) + pow(az, 2)))*(180.0 / 3.14);
    float accel_ang_y = atan(-ax / sqrt(pow(ay, 2) + pow(az, 2)))*(180.0 / 3.14);

    //Calcular ángulo de rotación con giroscopio y filtro complementario
    ang_x = 0.98*(ang_x_prev + (gx / 131)*dt) + 0.02*accel_ang_x;
    ang_y = 0.98*(ang_y_prev + (gy / 131)*dt) + 0.02*accel_ang_y;
    ang_x_prev = ang_x;
    ang_y_prev = ang_y;
}

void setup()
{
    Serial.begin(9600);
    Wire.begin();
    mpu.initialize();
    Serial.println(mpu.testConnection() ? F("IMU iniciado correctamente") :F("Error al iniciar IMU"));
}

void loop()
{
    // Leer las aceleraciones y velocidades angulares
    mpu.getAcceleration(&ax, &ay, &az);
    mpu.getRotation(&gx, &gy, &gz);
    updateFiltered();
    Serial.print(F("Rotación en X: "));
    Serial.print(ang_x);
    Serial.print(F(" Rotación en Y: "));
    Serial.println(ang_y);
    delay(10);
}
```

### Obtener la orientación mediante el DMP

En este último ejemplo empleamos el DMP integrado en el MPU-6050 para
realizar la combinación de la medición del acelerómetro y el
giroscopio, lo que proporciona mejores resultados que emplear un
filtro complementario, y además libera a Arduino del proceso de cálculo.

Para que el ejemplo funcione es necesario conectar el pin INT del MPU6050
a un pin con interrupciones (en el ejemplo, con Arduino UNO o Nano,
conectar al Pin 2).

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD034g
* Fecha: 03/02/2022
* Descripción: Obtener la orientación mediante el DMP
* Nota: transcripción de Luis Llamas    
*
*/

//GND - GND
//VCC - VCC
//SDA - Pin A4
//SCL - Pin A5
//INT - Pin 2

#include "I2Cdev.h"
#include "MPU6050_6Axis_MotionApps20.h"
#if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
#include "Wire.h"
#endif

// class default I2C address is 0x68
// specific I2C addresses may be passed as a parameter here
// AD0 low = 0x68
// AD0 high = 0x69

MPU6050 mpu;

//MPU6050 mpu(0x69); // <-- use for AD0 high
#define INTERRUPT_PIN 2
#define LED_PIN 13

bool blinkState = false;

// MPU control/status vars
bool dmpReady = false; // set true if DMP init was successful
uint8_t mpuIntStatus; // holds actual interrupt status byte from MPU
uint8_t devStatus; // return status after each device operation (0 = success, !0 = error)
uint16_t packetSize; // expected DMP packet size (default is 42 bytes)
uint16_t fifoCount; // count of all bytes currently in FIFO
uint8_t fifoBuffer[64]; // FIFO storage buffer
Quaternion q; // [w, x, y, z]
VectorInt16 aa; // [x, y, z]
VectorInt16 aaReal; // [x, y, z]
VectorInt16 aaWorld; // [x, y, z]
VectorFloat gravity; // [x, y, z]
float ypr[3]; // [yaw, pitch, roll]
volatile bool mpuInterrupt = false;

void dmpDataReady()
{
    mpuInterrupt = true;
}

void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
    Wire.begin();
    Wire.setClock(400000); // 400kHz I2C clock. Comment this line if having compilation difficulties
    #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
    Fastwire::setup(400, true);
    #endif
    Serial.begin(9600);

    // Iniciar MPU6050
    Serial.println(F("Initializing I2C devices..."));
    mpu.initialize();
    pinMode(INTERRUPT_PIN, INPUT);

    // Comprobar conexión
    Serial.println(F("Testing device connections..."));
    Serial.println(mpu.testConnection() ? F("MPU6050 connection successful") : F("MPU6050 connection failed"));

    // Iniciar DMP
    Serial.println(F("Initializing DMP..."));
    devStatus = mpu.dmpInitialize();

    // Valores de calibración
    mpu.setXGyroOffset(220);
    mpu.setYGyroOffset(76);
    mpu.setZGyroOffset(-85);
    mpu.setZAccelOffset(1688);

    // Activar DMP
    if (devStatus == 0)
    {
        Serial.println(F("Enabling DMP..."));
        mpu.setDMPEnabled(true);

        // Activar interrupción
        attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), dmpDataReady, RISING);
        mpuIntStatus = mpu.getIntStatus();
        Serial.println(F("DMP ready! Waiting for first interrupt..."));
        dmpReady = true;

        // get expected DMP packet size for later comparison
        packetSize = mpu.dmpGetFIFOPacketSize();
    }
    else
    {
        // ERROR!
        // 1 = initial memory load failed
        // 2 = DMP configuration updates failed
        // (if it's going to break, usually the code will be 1)
        Serial.print(F("DMP Initialization failed (code "));
        Serial.print(devStatus);
        Serial.println(F(")"));
    }
}

void loop()
{
    // Si falló al iniciar, parar programa
    if (!dmpReady) return;

    // Ejecutar mientras no hay interrupción
    while (!mpuInterrupt && fifoCount < packetSize)
    {
    // AQUI EL RESTO DEL CODIGO DE TU PROGRAMA
    }

    mpuInterrupt = false;
    mpuIntStatus = mpu.getIntStatus();

    // Obtener datos del FIFO
    fifoCount = mpu.getFIFOCount();

    // Controlar overflow
    if ((mpuIntStatus & 0x10) || fifoCount == 1024)
    {
        mpu.resetFIFO();
        Serial.println(F("FIFO overflow!"));
    }
    else if (mpuIntStatus & 0x02)
    {
        // wait for correct available data length, should be a VERY short wait
        while (fifoCount < packetSize) fifoCount = mpu.getFIFOCount();

        // read a packet from FIFO
        mpu.getFIFOBytes(fifoBuffer, packetSize);

        // track FIFO count here in case there is > 1 packet available (this lets us immediately read more without waiting for an interrupt)
        fifoCount -= packetSize;

        // Mostrar Yaw, Pitch, Roll
        mpu.dmpGetQuaternion(&q, fifoBuffer);
        mpu.dmpGetGravity(&gravity, &q);
        mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
        Serial.print("ypr");
        Serial.print(ypr[0] * 180/M_PI);
        Serial.print("\t");
        Serial.print(ypr[1] * 180/M_PI);
        Serial.print("\t");
        Serial.println(ypr[2] * 180/M_PI);

        // Mostrar aceleración
        mpu.dmpGetQuaternion(&q, fifoBuffer);
        mpu.dmpGetAccel(&aa, fifoBuffer);
        mpu.dmpGetGravity(&gravity, &q);
        mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
        Serial.print("areal\t");
        Serial.print(aaReal.x);
        Serial.print("\t");
        Serial.print(aaReal.y);
        Serial.print("\t");
        Serial.println(aaReal.z);
    }
}
```
