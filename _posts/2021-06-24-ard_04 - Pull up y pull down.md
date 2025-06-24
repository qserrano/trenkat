---
layout: post
title: "04 - Pull-up y pull-down"
author: "qode66"
description: "Montaje pull-up y pull-down"
date: 2021-06-24 18:00:00 +0200
categories: arduino basic
excerpt: "Montaje pull-up y pull-down"
tags: ["arduino", "pull-up", "pull-down", "resistencia", "protoboard", "esquema eléctrico", "pulsador"]
---

[img1]: /assets/imatges/ard/ard_04_01.png "Pull-up"
[img2]: /assets/imatges/ard/ard_04_02.png "Pull-down"

Pull-up y pull-down es un montaje mediante el cual aseguramos un valor alto o bajo (HIGH o LOW) en la salida del circuito. Se utiliza necesariamente con los interruptores y contactos para no dejar nunca una entrada sin conectar a ningún lugar.

## Pull-up

![Pull-up][img1] {: .centered}

Las resistencias pull-up son resistencias que se utilizan en circuitos lógicos para garantizar un nivel lógico bien definido en un pin en todas las condiciones. Como recordatorio, los circuitos
lógicos digitales tienen tres estados lógicos: alto, bajo y flotante (o alta impedancia). El estado de alta impedancia se produce cuando el pin no se arrastra a un nivel lógico alto o bajo, sino que se deja "flotando". Una buena ilustración de esto es un pin de entrada no conectado de un microcontrolador. No se encuentra ni en un estado lógico alto ni bajo, y un microcontrolador podría interpretar de manera imprevisible el valor de entrada como máximo lógico o bajo lógico. Si no hubiera la resistencia de tracción, la entrada flotaría cuando el interruptor esté abierto y bajaría solo cuando el interruptor esté cerrado.

## Pull-down

![Pull-down][img2] {: .centered}

Las resistencias pull-down funcionan de la misma manera que las resistencias pull-up, excepto que llevan el pin hasta un valor lógico bajo. Se conectan entre tierra y el pin correspondiente de un
dispositivo. En la figura se puede ver un ejemplo de resistencia desplegable en un circuito digital. Un interruptor de pulsador está conectado entre la tensión de alimentación y un pin del microcontrolador. En este circuito, cuando el interruptor está cerrado, la entrada del microcontrolador tiene un valor lógico elevado, pero cuando el interruptor está abierto, la resistencia desplegable hace bajar la tensión de entrada a tierra (valor cero lógico), evitando estado indefinido en la entrada. La resistencia desplegable debe tener una resistencia más grande que la impedancia del circuito lógico, o bien podría ser capaz de bajar demasiado la tensión y la señal de entrada al pin se mantendría en un valor lógico constante, independientemente de la posición del conmutador.

## Conclusión

Las resistencias pull-up no son un tipo especial de resistencias; son simples resistencias de valor fijo conectadas entre la alimentación de tensión (generalmente + 5V) y el pin adecuado, lo que resulta en definir la tensión de entrada o salida en ausencia de una señal de conducción.
