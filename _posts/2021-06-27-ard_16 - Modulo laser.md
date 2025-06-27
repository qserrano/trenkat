---
layout: post
title: "16 - Módulo láser"
author: "qode66"
description: "Aprender a utilizar el módulo láser"
date: 2021-06-27 21:30:00 +0200
categories: arduino sensores actuadores
excerpt: "Aprender a utilizar el módulo láser"
tags: ["arduino", "actuadores", "KY-008"]
---

[img1]: /assets/imatges/ard/ard_16_01.png "Módulo láser"
[img2]: /assets/imatges/ard/ard_16_02.png "Partes y funcionamiento del láser"
[img3]: /assets/imatges/ard/ard_16_03.png "Diagrama de montaje módulo láser"
[img4]: /assets/imatges/ard/ard_16_04.png "Esquema eléctrico módulo láser"

## Objetivo

- Aprender a utilizar el módulo láser
- Conocer el funcionamiento de un láser
- Conocer las partes de un láser
- Conocer las especificaciones de un láser

## Material

|                               Imagen                               | Descripción                 |
| :----------------------------------------------------------------: | :------------------------- |
| <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">  | Arduino Uno o equivalente.  |
| <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50"> | Cables de conexión         |
| <img src="/assets/imatges/mat/mat_KY-008.png" width="50" height="50"> | Un módulo láser KY-008      |

## Descripción

El módulo transmisor láser, 650 nm (rojo), emite un haz pequeño e
intenso. Aunque este módulo es seguro para su proyecto, no mire
directamente al rayo.

**Advertencia**: este láser de clase 3B puede causar lesiones oculares, evite
exponerse al rayo.

![Módulo láser][img1]{: .centered}  

Especificaciones:

- Voltaje de funcionamiento: 5 V
- Longitud de onda: 650 nm Color de la luz: roja
- Tamaño: 27 x 15 mm
- Tipo: Clase 3B

## Qué es y cómo funciona un láser

![Partes y funcionamiento del láser][img2]{: .centered}  

## Los componentes del láser

Un láser tiene tres partes básicas:

1. Una carga de átomos (un sólido, líquido o gas) con electrones a estimular alrededor del núcleo, como hemos visto. Esto se conoce como el **medio láser** o, a veces, el **medio de amplificación** o «ganancia» (porque "ganancia" es otra manera de referirse a la amplificación).
2. Una cosa con la que estimular los átomos, como un tubo de flash (como
   el flash de xenón en una cámara) u otro láser. Esto se
   denomina **sistema de bombeo**.
3. Una cavidad óptica o **resonador.**

## Cómo funciona un láser

1. Un suministro eléctrico hace que una fuente de alimentación luminosa
   se encienda y apague intermitentemente.
2. Cada vez que la luz parpadea, «bombea» energía al medio láser.
   Los flashes hacen que se inyecte energía en el cristal de rubí en
   forma de fotones.
3. Los átomos en el medio absorben esta energía en un proceso
   llamado absorción. Los átomos absorben energía cuando sus electrones saltan a un nivel de energía más alto (círculos con cruz),
   como hemos visto anteriormente. Después de unos pocos milisegundos, los electrones vuelven a su nivel de energía original (estado
   fundamental) emitiendo un fotón de luz (flechas onduladas). Esto se llama
   emisión espontánea.
4. Los fotones emitidos por los átomos se acercan y alejan dentro del cristal
   de rubí, viajando a la velocidad de la luz.
5. En algunos momentos, uno de estos fotones estimula un átomo ya excitado.
   Cuando esto sucede, el átomo excitado emite un fotón y recuperamos también
   nuestro fotón original. Esto se llama emisión estimulada. En ese
   momento, un fotón de luz ha producido dos fotones de luz, así que
   esta se ha amplificado (aumentado en fuerza). En otras palabras,
   la «amplificación de luz» (un aumento en la cantidad de luz) ha
   sido causada por «emisión estimulada de radiación». De ahí el nombre
   "láser" (_acrónimo inglés de Light Amplification by Stimulated
   Emission of Radiation «amplificación de luz por emisión estimulada
   de radiación»)_.
6. Un espejo en un extremo del tubo láser mantiene los fotones rebotando hacia
   adelante y hacia atrás dentro del cristal.
7. Un espejo parcial en el otro extremo del tubo hace rebotar algunos
   fotones en el cristal, pero deja escapar a algunos.
8. Los fotones que escapan forman un haz muy concentrado de luz láser
   muy potente, que es el que se usa, por ejemplo, para cortar un tubo
   metálico.

Pero todos estos procesos y componentes están dentro del pequeño
encapsulado del módulo, por lo tanto la única cosa que nosotros veremos será el
rayo de luz.

## Montaje

En primer lugar haremos que el láser se encienda y se apague alternativamente,
después un nuevo código nos permitirá variar la intensidad del láser.

![Diagrama de montaje módulo láser][img3]{: .centered}  
![Esquema eléctrico módulo láser][img4]{: .centered}  

## Programación

Aquí tenéis dos programas muy sencillos para probar este sensor, que
podéis descargar aquí:

- [ARD_16a.ino](https://drive.google.com/file/d/1pCOO_AEN38eGd4omei5IUisHmrGPqtZt/view?usp=share_link)
- [ARD_16b.ino](https://drive.google.com/file/d/1YsyZ0doSccj-J1inmuhwv7s9aYoz8JwE/view?usp=share_link)

**Código: ARD_16a**

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_16a.ino
  Tutorial Arduino - Lección 16: Módulo láser
  27.06.2021
  Descripción: Módulo láser
 ******************************************/

void setup ()
{
    pinMode (_9_, OUTPUT); // define el pin _9_ como salida digital
}

void loop ()
{
    digitalWrite (_9_, HIGH); // _activa el láser_
    delay (1000); // _espera 1 seg_
    digitalWrite (_9_, LOW); // _apaga el láser_
    delay (1000); // _espera 1 seg_
}
```

**Código: ARD_16b**

```Arduino
/******************************************
  qode66 (www.qserrano.es)
  ARD_16b.ino
  Tutorial Arduino - Lección 16: Módulo láser
  27.06.2021
  Descripción: Módulo láser
 ******************************************/
int laser = 0; //define la variable laser

void setup()
{
    pinMode(9,OUTPUT); //configura el pin 9 como salida
}

void loop()
{
    for (laser = 0; laser <= 255; laser += 1)
    {
        analogWrite(9,laser); //escribe en el pin 9 el valor de laser
        delay(5); //espera 5 milisegundos
    }
    for (laser = 255; laser >= 0; laser -= 1)
    {
        analogWrite(9,laser);
        delay(5);
    }
}
```

## Conclusión

- Sabemos cómo funciona un láser y cómo está construido
- Hemos conocido el módulo láser (KY-008)
- Vemos que podemos regular la intensidad del rayo

