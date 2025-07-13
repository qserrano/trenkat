---
layout: post
title: "38 - Módulo de teclado matricial"
author: "qode66"
description: "Módulo de teclado matricial"
date: 2021-07-13 13:55:00 +0200
categories: arduino actuadores
excerpt: "Módulo de teclado matricial"
tags: ["arduino", "actuadores", "teclado matricial"]
---

[img1]: /assets/imatges/ard/ard_38_01.png "Módulo de teclado matricial"
[img2]: /assets/imatges/ard/ard_38_02.png "Esquema eléctrico"
[img3]: /assets/imatges/ard/ard_38_03.png "Cableado"

## Descripción general

En este proyecto, veremos cómo integrar un teclado con una placa UNO R3
para que pueda leer las teclas que presiona un usuario.

Los teclados se utilizan en toda clase de dispositivos, incluyendo teléfonos
móviles, máquinas de fax, microondas, hornos, cerraduras de puertas, etc. Están
prácticamente en todas partes. Muchos dispositivos electrónicos los usan para
la entrada del usuario. Por lo tanto, saber cómo conectar un teclado a un
microcontrolador como una placa UNO R3 es muy valioso para construir
muchos tipos diferentes de productos comerciales.

Al final, cuando todo está correctamente conectado y programado, cuando se
presiona una tecla, aparece en el monitor serial de su computadora.
Cada vez que presiona una tecla, aparece en el monitor serial. Para
simplificar, comenzamos simplemente mostrando la tecla presionada en la
computadora.

Para este proyecto, el tipo de teclado que usaremos es un teclado
matricial. Este es un teclado que sigue un esquema de codificación que
le permite tener muchos menos pines de salida que teclas.

Por ejemplo, el teclado de matriz que estamos usando tiene 16 teclas (0-9,
A-D, *, #), pero solo 8 pines de salida. Con un teclado lineal, habría
que tener 17 pines de salida (uno para cada tecla y un pin de tierra)
para que funcione. El esquema de codificación matricial permite menos pines
de salida y, por lo tanto, muchas menos conexiones que deben realizarse
para que el teclado funcione. De esta manera, son más eficientes que los
teclados lineales, ya que tienen menos cableado.

![Módulo de teclado][img1]

## Material

|                               Imagen                               | Descripción                |
| :----------------------------------------------------------------: | :------------------------ |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente. |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión        |
| <img src="/assets/imatges/mat/mat_teclat.png" width="50" height="50"> | Módulo de teclado matricial |

## Conexión

![Esquema eléctrico][img2]
![Cableado][img3]

Para conectar los pines a la placa UNO R3, los conectamos a los pines
de salida digital, D9-D2. Conectamos el primer pin del teclado a D9, el
segundo pin a D8, el tercer pin a D7, el cuarto pin a D6, el quinto pin a D5, el sexto pin a D4, el séptimo pin a D3 y el octavo pin a D2.

Esta es la tabla de conexiones:

| Pin teclado | Pin arduino |
| :--------: | :---------: |
|     1      |     D9      |
|     2      |     D8      |
|     3      |     D7      |
|     4      |     D6      |
|     5      |     D5      |
|     6      |     D4      |
|     7      |     D3      |
|     8      |     D21     |

## Programación

```Arduino
/*
* qode66 (www.qserrano.es)
* Proyecto nº: ARD038
* Fecha: 11/02/2022
* Descripción: prueba del teclado matricial
* Nota:
*
*/

#include <Keypad.h>

const byte ROWS = 4; //cuatro filas
const byte COLS = 4; //cuatro columnas

//define los símbolos de los pulsadores del teclado
char hexaKeys[ROWS][COLS] =
{
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'\*','0','\#','D'}
};
byte rowPins[ROWS] = {9, 8, 7, 6}; //conéctelos a los pines de fila del teclado
byte colPins[COLS] = {5, 4, 3, 2}; //conéctelos a los pines de columna del teclado

//inicializa una instancia de la clase Newkepad
Keypad customKeypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  char customKey = customKeypad.getKey();
  if (customKey)
  {
    Serial.println(customKey);
  }
}
```

## Descarga

- [Código ARD038](https://mega.nz/folder/2KoSwaTa#AxDfZl3717MrwnJ2LUacew)
- [Fritzing parte keypad 4x4](https://mega.nz/file/LXgWTI6I#fNptqZc9mlxgrD5jFckcs6ne6uef0DAioNTZ8yscEWs)
