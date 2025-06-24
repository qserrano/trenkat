---
layout: post
title: "02 - Nuestro primer circuito"
author: "qode66"
description: "Fijamos algunas ideas básicas sobre electrónica, montamos un circuito con LED y resistencia y comprender el esquema eléctrico, aprender cómo utilizar la protoboard e instalar el programa «Blinking LED»"
date: 2021-06-24 00:45:00 +0200
categories: arduino basic
excerpt: "Fijamos algunas ideas básicas sobre electrónica, montamos un circuito con LED y resistencia y comprender el esquema eléctrico, aprender cómo utilizar la protoboard e instalar el programa «Blinking LED»"
tags: ["arduino", "LED", "resistencia", "protoboard", "esquema eléctrico"]
---

[img1]: /assets/imatges/ard/ard_02_01.png "Esquema eléctrico"
[img2]: /assets/imatges/ard/ard_02_02.jpg "Esquema de montaje"

## Objetivos

El objetivo de esta sesión es fijar algunas ideas básicas sobre electrónica, montar un circuito con LED y resistencia y comprender el esquema eléctrico, aprender cómo utilizar la protoboard e instalar el programa «Blinking LED»

## Material requerido

|                                 Imagen                                 | Descripción               |
| :--------------------------------------------------------------------: | :----------------------- |
|   <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">    | Arduino Uno o compatible |
| <img src="/assets/imatges/mat/mat_protoboard.png" width="50" height="50"> | Una protoboard           |
|   <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">   | Cables de conexión       |
|    <img src="/assets/imatges/mat/mat_led.png" width="50" height="50">     | Un diodo led             |
|  <img src="/assets/imatges/mat/mat_resis330.png" width="50" height="50">  | Una resistencia 330 Ohms |

## Algunas ideas básicas sobre electrónica

Cuando dejamos fluir agua de un lugar alto a otro más bajo, el agua corre libremente mientras no se lo impedimos, y siempre de arriba abajo. Decimos que las diferentes alturas suponen una diferencia de potencial entre ambos puntos que puede ser transformada en trabajo útil.

Cuando existe una diferencia de tensión eléctrica (o diferencia de potencial) entre dos puntos con conexión, la electricidad fluye del positivo (o de más carga) hacia el negativo o menos, y también podemos obtener trabajo útil de este principio.

Aunque la física detrás de estos dos ejemplos es diferente, conceptualmente son bastante similares y por eso hablamos de:

- Corriente de agua / Corriente eléctrica.
- Caudal de agua / Intensidad de corriente.
- Resistencia al flujo / Resistencia eléctrica.
- Capacidad de una reserva de agua / Capacidad de un condensador.

La idea es que la corriente eléctrica fluye del positivo al negativo porque hay una diferencia de tensión (que medimos en Voltios de símbolo V) pero esto no es una medida absoluta sino la diferencia que hay entre los puntos en que lo medimos.

- De la misma manera, la diferencia de altura entre dos puntos solo representa esto, una **_diferencia_** y no indica a qué altura se encuentran respecto a una referencia más o menos arbitraria.

Hay componentes que se oponen a la libre circulación de la corriente. Los llamamos **resistencias**, su valor se mide en Ohms y su símbolo es Ω.

La **ley de Ohm**, liga todos estos valores de una forma precisa: **V = R x I**

Donde **V** es la tensión en voltios, **R** la resistencia e **I** la intensidad eléctrica que fluye.

- _En el mundo de Arduino la tensión es casi siempre 5V, que es la tensión a la que funciona y la que es capaz de poner en sus salidas digitales._

Otra manera de escribir esta ley de Ohm es **I = V / R**

Lo que implica que si la resistencia del circuito es nula (o casi, como en el caso de un cable de cobre) la intensidad de la corriente se dispara y puede llegar a fundir el cable o componente que encuentre.

- _Esto se conoce como cortocircuito o corto simplemente y debe ser evitado decididamente ya que suele acabar con olor a quemado y algún susto, en el mejor caso._

## Nuestro primer circuito electrónico

En la sesión anterior programamos el LED conectado al pin 13 de nuestro Arduino. Hoy duplicaremos este circuito en el exterior montándolo desde el principio con componentes discretos. Su esquema eléctrico sería:

![Esquema eléctrico][img1]{: .centered}

Vemos a la izquierda el símbolo del **diodo LED** que es emisor de luz y por eso tiene esas flechas salientes para indicarlo (LED viene del inglés Light Emitting Diode, o diodo emisor de luz).

La resistencia se representa por ese segundo símbolo indicando un nombre R1 y su valor 330Ω.

A su vez vemos a la izquierda las letras GND para indicar que es el negativo. Tiene muchos nombres: Masa, El símbolo --, Tierra (aunque no es lo mismo), Ground, Negativo, cátodo.

Finalmente a la derecha el símbolo de +5V indica el extremo de tensión positiva o positivo y a veces se representa como Vcc. Las líneas rectas y negras indican conexión eléctrica mediante cables conductores.

- _Un diodo, es un componente electrónico que solo permite pasar la corriente en una dirección. En la dirección del positivo al negativo (la parte ancha del triángulo) al negativo, la punta del triángulo (que indica la dirección)._
- _Para indicar cuál de las patas de un diodo LED es el positivo, esta suele ser de mayor longitud._
- _Si se conecta al revés, cortará el flujo de corriente muy eficazmente y no se iluminará en absoluto._
- _Las resistencias en cambio no diferencian un extremo del otro, decimos que no tienen polaridad._

Es importante entender los esquemas electrónicos porque permiten comprender con rapidez cualquier circuito. Vale la pena dedicarle un poco de esfuerzo porque son el lenguaje de la electrónica.

Una vez comprendido el esquema eléctrico del circuito, veamos la conexión en la Protoboard:

![Esquema de montaje][img2]{: .centered}

Este esquema sigue una pauta de marcar los cables que van _a positivo en rojo_ y los que van _a GND en negro_. _Recomendamos encarecidamente_ se siga esta norma en la práctica porque ayuda a identificar posibles problemas y evita errores.

- _La Protoboard une los puntos de la línea azul entre sí y los de arriba de la línea roja entre sí, (se llaman raíles), pero no conecta el raíl rojo positivo con el raíl negro negativo._
- _A su vez existen dos zonas de líneas verticales en la Protoboard. Estas líneas verticales están unidas entre sí internamente, para facilitar la conexión de los componentes, pero no se unen las líneas paralelas._

Las claves para montar el circuito con éxito, son:

- Conectamos el pin 13 de Arduino a la línea roja de la Protoboard: Positivo.
- Conectamos el GND de Arduino a la línea azul de la Protoboard: Negativo.
- Usamos el raíl positivo (los pins de la línea roja) para conectar a la resistencia.
- El otro extremo de la resistencia se conecta al positivo del LED porque están en la misma vertical de la Protoboard (y esta los conecta eléctricamente).
- _Nótese que el positivo del LED está claramente marcado como de mayor longitud mediante un pequeño ángulo cerca de la base_.
- _Un diodo LED casi no presenta resistencia propia, por lo que siempre debe usarse una resistencia adicional que limite el paso de corriente, y evite que se queme. (Una resistencia entre 220 y 330 Ω suele ser adecuada)._
- El circuito se cierra con un cable desde el negativo del LED al raíl de negativo.
- Cuando nuestro programa ponga un valor de HIGH (5V) en el pin 13 permitirá el flujo de corriente por el circuito iluminando el LED. Con LOW simplemente el circuito estará apagado, sin tensión.

Podemos ahora volcar el programa que hicimos en la lección 1.02 (_O simplemente cargar el ejemplo Blink_), siguiendo el procedimiento que definimos allí, y veremos cómo esta vez, además del LED propio de Arduino, nuestro LED exterior parpadea siguiendo el mismo ciclo de encendido y apagado.

## Resumen de la lección

- Hemos visto algunos conceptos básicos de electrónica: la ley de Ohm, que relaciona la tensión la resistencia.
- Hemos identificado dos componentes básicos en electrónica, resistencias y los diodos.
- Hemos aprendido a descifrar los primeros esquemas electrónicos.
- Hemos montado nuestro primer circuito con estos componentes.
