---
layout: post
title: "11 - La pantalla LCD"
author: "qode66"
description: "Presentar la pantalla LCD, su conexión y la programación."
date: 2021-06-26 11:30:00 +0200
categories: arduino display
excerpt: "Presentar la pantalla LCD, su conexión y la programación."
tags: ["arduino", "display", "LCD", "16x02"]
---

[img1]: /assets/imatges/ard/ard_11_01.png "Pantalla LCD"
[img2]: /assets/imatges/ard/ard_11_02.png "Esquema de montaje"
[img3]: /assets/imatges/ard/ard_11_03.png "Esquema de conexión"
[img4]: /assets/imatges/ard/ard_11_04.png "Esquema de conexión con adaptador I2C"

## Objetivos

- Montaje de una pantalla LCD de 16x02
- Enviar información a la pantalla LCD
- Cómo definir caracteres especiales

## Materiales

|                                  Imagen                                   | Descripción                                                           |
| :-----------------------------------------------------------------------: | :------------------------------------------------------------------- |
|     <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">     | Arduino Uno o compatible con S4A y con el firmware para S4A cargado. |
|  <img src="/assets/imatges/mat/mat_protoboard.png" width="50" height="50">   | Una protoboard                                                       |
|    <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">     | Cables de conexión                                                   |
| <img src="/assets/imatges/mat/mat_potenciometre.png" width="50" height="50"> | Un potenciómetro                                                     |
|   <img src="/assets/imatges/mat/mat_LCD16x02.png" width="50" height="50">    | Una pantalla LCD 16x02                                               |

## Descripción del material

La pantalla LCD-1602 es una pantalla de cristal líquido de 16 caracteres de 2 líneas de baja potencia, con interfaz serie. Puedes descargar la hoja de características (en inglés)
[aquí](https://mega.nz/file/M7V11CSB#WuCGVn1zI_Y1i6FhWDUIpYCBVKdodnHh8_vniDY5FgA).

![pantalla-lcd][img1]{: .centered}

Las pantallas LCD (Liquid Crystal Display) son una de las formas más sencillas y económicas de dotar de un display a un autómata.

El Hitachi HD44780 es uno de los controladores de LCDs más ampliamente extendidos por su sencillez y bajo precio. El HD44780 está diseñado para controlar LCDs monocromos de hasta 80 caracteres alfanuméricos y símbolos. También dispone de una pequeña memoria RAM para configurar nuestros propios caracteres o dibujos.

Las pantallas LCD con el controlador HD44770 se fabrican en diferentes tamaños, siendo comunes 16x02 (2 líneas de 16 caracteres), 20x02, 20x04 y 40x02.

Las pantallas LCD disponen de retroiluminación posterior en azul o en verde. El contraste puede ser variado conectando un potenciómetro al LCD.

Conectar directamente un LCD a Arduino requiere una gran cantidad de pines. Suele ser aconsejable emplear un **adaptador a bus I2C**, como veremos en la próxima entrada.

## Montaje

![esquema-montaje][img2]{: .centered}
![esquema-electric][img3]{: .centered}

Como podéis ver son necesarios un buen número de cables para hacer las conexiones, así que es muy fácil equivocarse. Por eso se recomienda utilizar un módulo I2C, que simplifica muchísimo el montaje.

La relación de los pines y su conexión tanto para el arduino como para la pantalla es la siguiente:

|          | LCD                                        | Arduino              |
| :------- | :----------------------------------------- | :------------------- |
| 01 - GND | negativo pantalla                           | GND                  |
| 02 - Vcc | positivo pantalla                           | 5V                   |
| 03 - V0  | ajuste del contraste                        | Pot 10K pin variable |
| 04 - RS  | registro de señal de selección             | Pin 12               |
| 05 - R/W | señal de selección de lectura / escritura  | GND                  |
| 06 - E   | señal de activación de operación           | Pin 11               |
| 07 - D0  |                                            |                      |
| 08 - D1  |                                            |                      |
| 09 - D2  |                                            |                      |
| 10 - D3  |                                            |                      |
| 11 - D4  | Transferencia de datos                     | Pin 05               |
| 12 - D5  | Transferencia de datos                     | Pin 04               |
| 13 - D6  | Transferencia de datos                     | Pin 03               |
| 14 - D7  | Transferencia de datos                     | Pin 02               |
| 15 - A   | iluminación de fondo                       | 5V                   |
| 16 - K   | iluminación de fondo                       | GND                  |

---

## Programación

Para este montaje subiremos el ejemplo contenido en «Archivo>Ejemplos>LiquidCrystal>Hello world».

La librería necesaria para controlar la pantalla LCD se llama «LiquidCrystal» y puedes consultar la referencia en el enlace <https://www.arduino.cc/en/Reference/LiquidCrystal>

```Arduino

/******************************************
  qode66 (www.qserrano.es)
  ARD_11.ino
  Tutorial ARduino - Lección 11: La pantalla LCD
  25.02.2021

 ******************************************/

#include <LiquidCrystal.h>  // incluye el código de la biblioteca

// inicializa la biblioteca asociando cualquier pin de interfaz LCD necesario al número de pin arduino al que esté conectado

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup()
{

  lcd.begin(16, 2);  // configura el número de columnas y filas de la pantalla LCD
  lcd.print("hello, world!");  // Escribe un mensaje en la pantalla LCD

}

void loop()
{

  lcd.setCursor(0, 1);  // posiciona el cursor en la columna 0, línea 1 (Nota: la línea 1 es la segunda fila, ya que el conteo comienza por 0)
  lcd.print(millis() / 1000);  // imprime el número de segundos desde el reinicio

}
```

## Definiendo tus propios caracteres

Definiremos un carácter propio, el símbolo de grados centígrados, por ejemplo.

Lo primero que debes saber, es que los caracteres se definen con un array de 8×8, como si los dibujaras en una cuadrícula de ese tamaño, y rellenando el cuadradito pertinente.

Así por ejemplo para el símbolo del grado sería:

![figura-grado][img4]{: .centered}

Antes del setup(), en las declaraciones y definiciones es donde creamos los caracteres personales.

```Arduino

byte grado[8] =
{
  0b00001100, // _Los definimos como binarios_ 0bxxxxxxx
  0b00010010,
  0b00010010,
  0b00001100,
  0b00000000,
  0b00000000,
  0b00000000,
  0b00000000
};
```

Para montar los caracteres definidos usamos:

```Arduino

lcd.createChar(0, euro);
lcd.createChar(1, grado);
```

Y ahora ya están disponibles. Ten en cuenta que solo podemos definir 8 caracteres especiales en un momento dado

Aquí tenemos un ejemplo de código:

```Arduino

#include <LiquidCrystal.h>
LiquidCrystal lcd(_12_, _11_, _5_, _4_, _3_, _2_);

byte grado[8] =
{
  0b00001100,
  0b00010010,
  0b00010010,
  0b00001100,
  0b00000000,
  0b00000000,
  0b00000000,
  0b00000000
};

void setup()

{
  lcd.begin(16, 2); // inicializar el LCD
  lcd.createChar(1, grado); // crea el carácter grado
  lcd.setCursor(0, 0); // posiciona el cursor
  lcd.print("Estamos a 25 "); // mensaje
  lcd.write(1); // escritura del carácter personal
}

void loop()

{

}
```

## Conceptos importantes

- Conocer las pantallas LCD
- Comprender la conexión con arduino
- Aprender a crear nuestros propios caracteres.
