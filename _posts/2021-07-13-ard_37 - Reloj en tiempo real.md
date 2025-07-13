---
layout: post
title: "37 - Módulo de reloj en tiempo real"
author: "qode66"
description: "Módulo de reloj en tiempo real"
date: 2021-07-13 13:50:00 +0200
categories: arduino sensores
excerpt: "Módulo de reloj en tiempo real"
tags: ["arduino", "sensores", "HC-SR501"]
---

[img1]: /assets/imatges/ard/ard_37_01.jpeg "Pines del módulo"
[img2]: /assets/imatges/ard/ard_37_02.png "Esquema eléctrico"
[img3]: /assets/imatges/ard/ard_37_03.png "Cableado"

## Descripción general

## ¿Qué es un reloj de tiempo real RTC?

Un reloj de tiempo real (RTC) es un dispositivo electrónico que permite
obtener mediciones de tiempo en las unidades temporales que empleamos de
manera cotidiana.

El término RTC se creó para diferenciar este tipo de relojes
de los relojes electrónicos habituales, que simplemente miden el tiempo
contabilizando pulsos de una señal, sin existir relación directa con
unidades temporales. Por el contrario, los RTC son más similares a los relojes y
calendarios que usamos habitualmente, y que funcionan con segundos, minutos,
horas, días, semanas, meses y años.

Los RTC normalmente están formados por un resonador de cristal integrado
con la electrónica necesaria para contabilizar de manera correcta el
paso del tiempo. La electrónica de los RTC tiene en cuenta las peculiaridades
de nuestra manera de medir el tiempo, como por ejemplo el sistema
sexagesimal, los meses con diferentes días, o los años bisiestos.

Los RTC aportan la ventaja de reducir el consumo de energía, aportar
mayor precisión y liberar a Arduino de tener que realizar la
contabilización del tiempo. Además, a menudo los RTC incorporan algún tipo
de batería que permite mantener el valor del tiempo en caso de pérdida
de alimentación.

En el mundo de la electrónica casera y Arduino existen dos RTC
habituales: el DS1307 y el DS3231, ambos fabricados por Maxim
(anteriormente Dallas Semiconductor). El DS3231 tiene una precisión mucho
superior y puede considerarse sustituto del DS1307.

En el modelo DS1307 las variaciones de temperatura que afectan al
medición del tiempo de los cristales resonadores se traducen en errores
en un desfase acumulado. Esto hace que el DS1307 padezca de un
desfase temporal, que puede llegar a ser 1 o 2 minutos al día.

Para solucionarlo, el DS3231 incorpora medición y compensación de la
temperatura garantizando una precisión de al menos 2ppm, lo que equivale
a un desfase máximo de 172ms/día o un segundo cada 6 días. En el mundo real
normalmente consiguen precisiones superiores, equivalentes a desfases
de 1-2 segundos al mes.

![Pines del módulo][img1]

La comunicación en ambos modelos se realiza a través del bus I2C, por
lo que es sencillo obtener los datos medidos. La tensión
de alimentación es de 4.5 a 5.5V para el DS1307, y de 2.3 a 5.5V para el DS3231.

A menudo estos módulos también incorporan una pequeña EEPROM AT24C32, que
puede ser empleada para almacenar registros y mediciones. En el caso
del DS3231, la medición de temperatura también está disponible, aunque
tiene una precisión baja de ±3 °C, y el tiempo de adquisición puede durar hasta
1 segundo.

También incorporan una batería CR2032 para mantener el dispositivo en
hora al retirar la alimentación. Esta batería debería ser capaz de
mantener alimentado durante varios años al DS1307, y durante meses al
DS3231. La tensión de alimentación de batería es de 2.0 a 3.5V para el
DS1307 y de 2.3 a 5.0V para el DS3231.

Los RTC son dispositivos ampliamente utilizados en electrónica. Todos los
ordenadores personales, servidores, tablets y teléfonos inteligentes
incorporan uno. También son muy frecuentes en sistemas embebidos y, en
general, en multitud de dispositivos que requieren realizar un
registro del tiempo.

En nuestros proyectos de electrónica a menudo necesitaremos un RTC. Por
ejemplo, podemos temporizar el encendido de luces o sistemas de riego,
realizar un datalogger, o incluso encender y apagar el propio Arduino
para ahorrar batería.

# Material

|                               Imagen                               | Descripción                |
| :----------------------------------------------------------------: | :------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión        |
|  <img src="/assets/imatges/mat/mat_RTC.png" width="50" height="50">   | Módulo RTC                 |

## Conexión

![Esquema eléctrico][img2]
![Cableado][img3]

## Programación

Para hacer funcionar el código de ejemplo es necesario instalar la
biblioteca «DS3231» disponible en la sección de descarga.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD037
* Fecha: 09/02/2022
* Descripción: Prueba del módulo RTC
* Nota:
*
*/

#include <Wire.h>
#include <DS3231.h>

DS3231 clock;
RTCDateTime dt;

void setup()
{
    Serial.begin(9600);
    Serial.println("Inicializa el módulo RTC");
    clock.begin();

    // Manual (YYYY, MM, DD, HH, II, SS
    // clock.setDateTime(2016, 12, 9, 11, 46, 00);
    // Envía el tiempo de compilación de sketch a Arduino

    clock.setDateTime(__DATE__, __TIME__);

    /*
    Consejos: esta orden se ejecutará cada vez que se reinicie Arduino.
    Comenta esta línea para almacenar la memoria del módulo DS3231
    */
}

void loop()
{
    dt = clock.getDateTime();
    Serial.print("Datos raw: ");
    Serial.print(dt.year); Serial.print("-");
    Serial.print(dt.month); Serial.print("-");
    Serial.print(dt.day); Serial.print(" ");
    Serial.print(dt.hour); Serial.print(":");
    Serial.print(dt.minute); Serial.print(":");
    Serial.print(dt.second); Serial.println("");

    delay(1000);
}
```

## Otros ejemplos de código

Para realizar la lectura del DS1307 y del DS3231 usaremos la librería
desarrollada por [Adafruit](https://github.com/adafruit/RTClib) válida
para ambos modelos, disponible en la sección descarga. La librería
proporciona ejemplos de código, que resulta aconsejable revisar.

### Obtener la fecha y hora

El primer ejemplo emplea el RTC para obtener los datos de fecha y hora
actual. Posteriormente se emplean estos valores para mostrarlos por
puerto serie. También se muestra cómo fijar la fecha y la hora, y detectar la
pérdida de energía.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD037a
* Fecha: 09/02/2022
* Descripción: Prueba del módulo RTC
* Nota:
*
*/

#include <Wire.h>
#include "RTClib.h"

// RTC_DS1307 rtc;
RTC_DS3231 rtc;

String daysOfTheWeek[7] = { "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" };
String monthsNames[12] = { "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" };

void setup()
{
    Serial.begin(9600);
    delay(1000);
    if (!rtc.begin())
    {
        Serial.println(F("No se pudo encontrar el RTC"));
        while (1);
    }

    // Si se ha perdido la corriente, fijar fecha y hora
    if (rtc.lostPower())
    {
        // Fijar a fecha y hora de compilación
        rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));

        // Fijar a fecha y hora específica. En el ejemplo, 21 de Enero de 2016 a
        las 03:00:00
        // rtc.adjust(DateTime(2016, 1, 21, 3, 0, 0));

    }
}

void printDate(DateTime date)
{
    Serial.print(date.year(), DEC);
    Serial.print('/');
    Serial.print(date.month(), DEC);
    Serial.print('/');
    Serial.print(date.day(), DEC);
    Serial.print(" (");
    Serial.print(daysOfTheWeek[date.dayOfTheWeek()]);
    Serial.print(") ");
    Serial.print(date.hour(), DEC);
    Serial.print(':');
    Serial.print(date.minute(), DEC);
    Serial.print(':');
    Serial.print(date.second(), DEC);
    Serial.println();
}

void loop()
{
    // Obtener fecha actual y mostrar por Serial
    DateTime now = rtc.now();
    printDate(now);
    delay(3000);
}
```

## Encendido y apagado programado

El siguiente ejemplo es un proyecto habitual, emplear un RTC para activar o
desactivar un dispositivo en un horario y fechas determinados. Por ejemplo,
puede servir para controlar el riego de un jardín, encender las luces, la
calefacción, desplegar un tendedero, o controlar cualquier otro dispositivo
mediante un relé.

La función **IsScheduledON** controla el encendido o apagado. En el ejemplo,
está programado el encendido los miércoles, sábados y domingos de 09:30 a
11:30 y de 21:00 a 23:00. Modificando el cuerpo de esta función, puedes
programar la condición de encendido y apagado que necesites.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD037b
* Fecha: 09/02/2022
* Descripción: Prueba del módulo RTC
* Nota:
*
*/

#include <Wire.h>
#include "RTClib.h"

const int outputPin = LED_BUILTIN;
bool state = false;

// RTC_DS1307 rtc;
RTC_DS3231 rtc;

void setup()
{
    Serial.begin(9600);
    delay(1000);
    if (!rtc.begin())
    {
        Serial.println(F("No se pudo encontrar el RTC"));
        while (1);
    }
    if (rtc.lostPower())
    {
        rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
    }
}

// Comprobar si está programado el encendido
bool isScheduledON(DateTime date)
{
    int weekDay = date.dayOfTheWeek();
    float hours = date.hour() + date.minute() / 60.0;

    // De 09:30 a 11:30 y de 21:00 a 23:00
    bool hourCondition = (hours > 9.50 && hours < 11.50) || (hours > 21.00 && hours < 23.00);

    // Miércoles, Sábado o Domingo
    bool dayCondition = (weekDay == 3 || weekDay == 6 || weekDay == 0);

    if (hourCondition && dayCondition)
    {
        return true;
    }
    return false;
}

void loop()
{
    DateTime now = rtc.now();
    if (state == false && isScheduledON(now)) // Apagado y debería estar encendido
    {
        digitalWrite(outputPin, HIGH);
        state = true;
        Serial.print("Activado");
    }
    else if (state == true && !isScheduledON(now)) // Encendido y debería estar apagado
    {
        digitalWrite(outputPin, LOW);
        state = false;
        Serial.print("Desactivado");
    }
    delay(3000);
}
```

## Datalogger con RTC

El siguiente ejemplo muestra otro caso muy habitual, el uso de un RTC
para generar un **Datalogger**, es decir, un dispositivo que
periódicamente registra la medición de un sensor. En el ejemplo, usaremos
una tarjeta SD para guardar los valores.

Simplemente, obtenemos la fecha, hora y valor del sensor, que en el ejemplo
simulamos con la función **readSensor()**, y guardamos los datos en la
tarjeta con la función **logValue(,,)**.

En un proyecto real podríamos guardar una o varias mediciones,
separadas por comas, por ejemplo. También podríamos variar el momento de la
medición, que en el ejemplo se realiza cada 10 segundos a, por ejemplo,
cuando ocurra un evento, o en ciertas horas del día empleando el
propio RTC.

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD037c
* Fecha: 09/02/2022
* Descripción: Prueba del módulo RTC
* Nota:
*
*/

#include <SPI.h>
#include <SD.h>
#include <Wire.h>
#include "RTClib.h"

File logFile;
// RTC_DS1307 rtc;
RTC_DS3231 rtc;

void setup()
{
    Serial.begin(9600);
    Serial.print(F("Iniciando SD ..."));
    if (!SD.begin(4))
    {
        Serial.println(F("Error al iniciar"));
        return;
    }
    Serial.println(F("Iniciado correctamente"));
}

// Función que simula la lectura de un sensor
int readSensor()
{
    return 0;
}

void logValue(DateTime date, int value)
{
    logFile.print(date.year(), DEC);
    logFile.print('/');
    logFile.print(date.month(), DEC);
    logFile.print('/');
    logFile.print(date.day(), DEC);
    logFile.print(" ");
    logFile.print(date.hour(), DEC);
    logFile.print(':');
    logFile.print(date.minute(), DEC);
    logFile.print(':');
    logFile.print(date.second(), DEC);
    logFile.print(" ");
    logFile.println(value);
}

void loop()
{
    // Abrir archivo y escribir valor
    logFile = SD.open("datalog.txt", FILE_WRITE);

    if (logFile)
    {
        int value = readSensor();
        DateTime now = rtc.now();
        logValue(now, value);
        logFile.close();
    }
    else
    {
        Serial.println(F("Error al abrir el archivo"));
    }
    delay(10000);
}

```

## Descarga

- [Código ARD037](https://mega.nz/folder/ee4UharQ#wf_KDJsDrr8pQQlBTt8TEA)
- [Fritzing part Real Time Clock Module - DS1307 RTC Breakout Board](https://mega.nz/file/mDhG3YzR#SxeFgBbHX91ffjRCZkSOqI1vkHtydJynLVofyOY31Bs)
- [Librería DS3231.zip](https://mega.nz/file/nehSTYTC#D3vGWMlD7JKl5dYlAQXs0UOWuh6Ry2Fk-7mGsqJERfA)
- [Librería Adafruit RTClib](https://mega.nz/file/WXgwDAKZ#SCBhuhfib79dAgiHLheFRjpoQD3xmajfFhTInhglVHM)

