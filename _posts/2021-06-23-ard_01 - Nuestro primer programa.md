---
layout: post
title: "01 - El nostre primer programa"
author: "qode66"
description: "En aquesta lliçó aprendrem a programar el nostre primer programa en Arduino."
date: 2021-06-23 14:45:00 +0200
categories: arduino basic
excerpt: "En aquesta lliçó aprendrem a programar el nostre primer programa en Arduino."
tags: ["arduino", "programació", "boceto", "sketch", "IDE"]
---

[img1]: /assets/imatges/ard/ard-01-01.jpg "Compilador"
[img2]: /assets/imatges/ard/ard_01_02.png "Entradas y salidas"
[img3]: /assets/imatges/ard/ard_01_03.png "Verifica"
[img4]: /assets/imatges/ard/ard_01_04.png "Sube"

## Objectius

La idea d'aquesta lliçó és fixar algunes idees bàsiques sobre
programació. Hem de comprendre l'estructura d'un programa arduino
(sketch), hem de definir les estructures de blocs i conèixer les
primeres instruccions.

## Algunes idees bàsiques sobre programació

Un **programa d'ordinador** és bàsicament l'equivalent a una _recepta
de cuina_... però destinat a un públic diferent.

Mentre que les persones som raonablement bones _interpretant_ les
instruccions, generalment vagues, d'una recepta de cuina, quan
programem qui ha d'entendre'ns és un ordinador que espera instruccions
precises respecte al que ha de fer i que a més manca completament de la
imaginació o capacitat d'improvisació humana.

Per això es desenvolupen els llenguatges d'ordinador, per donar
instruccions a una màquina de forma:

- Precisa: Sense ambigüitats inherents a la comunicació humana.
- Unívoca: Només es pot interpretar d'una manera.
- Concisa: Preferiblement ordres curtes.

L'IDE d'Arduino es programa en una variant de C++, que és un
llenguatge molt estès per les seves característiques, encara que no és
un llenguatge senzill. C++, que fixa regles estrictes de com escriure
aquestes instruccions.

Un programa és una sèrie d'instruccions que s'executen en seqüència (
llevat que indiquem expressament condicions precises en les quals
dita seqüència s'alteri).

Un programa intern comprova que la sintaxi del nostre programa és
conforme a la norma de C++, i si hi ha qualsevol cosa que no li convenci
donarà un error i finalitzarà la comprovació obligant-nos a revisar el
que hem escrit.

Quan el comprovador accepta el nostre programa, invoca a un altre programa
que tradueix el que hem escrit a instruccions comprensibles per al
processador del nostre Arduino. A aquest nou programa se l'anomena
compilador.

![Compilador][img1]{: .centered}

El compilador converteix les nostres instruccions (codi font) en
instruccions del processador (codi màquina).

## Estructura d'un programa Arduino

Un programa o Sketch d'Arduino consisteix en dues seccions o funcions
bàsiques:

- _Setup: Les seves instruccions s'executen només una vegada, quan
  s'arrenca el programa en encendre Arduino o quan premen el botó de
  reset. Generalment inclou definicions i inicialitzacions d'aquí
  el seu nom._
- _Loop: Les seves instruccions es van executant en seqüència fins al
  final.... I quan acaba, torna a començar des del principi fent un
  bucle sense fi._

Quan obrim l'**IDE d'Arduino** (o fem Menú\Arxiu\nou) ell ens escriu ja aquestes dues funcions (en color coure):

Noti's que el principi de cada funció ve indicat per l'obertura de
clau " { " i el final de la mateixa correspon al símbol de tancar claus " }
".

De fet el conjunt d'instruccions contingudes entre una obertura i
tancament de claus s'anomena **bloc** i és de capital importància a l'hora
que el nostre **Arduino** interpreti d'una o altra manera les
instruccions que li donem.

És imperatiu que a cada obertura d'una clau li correspongui un tancament de
clau. En successius capítols ampliarem aquest concepte.

Per ara ressaltar les línies que apareixen dins dels blocs
principals:

// put your setup code here, to run once

// put your main code here, to run repeatedly

Qualsevol cosa que escrivim precedit per " // " són comentaris, i seran
ignorats. És a dir podem deixar-nos missatges dins del codi, (que d'
altra manera donarien errors). El compilador ignorarà qualsevol cosa
entre // i el final de línia.

## Primes instruccions en Arduino C++

Sembla obligat en el món **Arduino**, que el primer programa que fem
sigui el blinking LED, i està bé perquè il·lustra algunes idees
interessants pel que fa a les seves possibilitats:

- La capacitat d'Arduino per interactuar amb el món extern. Una
  cosa bastant inusitada per a qui estiguin acostumats a la
  informàtica tradicional, on la potència de càlcul ha crescut de
  manera espectacular, però segueix sent impossible (o gairebé),
  influir en el món exterior.
- La senzillesa de l'entorn de treball. En contraposició a un sistema
  tradicional d'editor/compilador/linker.

Arduino pot relacionar-se de diferents maneres amb el món que l'
envolta, Començarem pels pins digitals que poden usar-se com:

- Entrades: Per llegir informació digital del món exterior.
- Sortides: Per activar un senyal al món exterior.

![Entrades i sortides][img2]{: .centered}

Arduino disposa de 14 pins que poden ser usats d'aquesta manera,
numerats del 0 al 13.

En la lliçó anterior carreguem un programa d'exemple que fa
parpellejar un LED a la placa amb una cadència definida. Vegem com
programar això.

Demanarem a Arduino que activi el seu pin 13 com de sortida digital i
després encendrem i apagarem aquest senyal el que farà que el LED que té
connectat de sèrie s'encengui o s'apagui al ritme que li marquem.

Per indicar al sistema que desitgem usar el pin 13 com a sortida
digital utilitzem la instrucció:

```Arduino
pinMode ( 13, OUTPUT ) ;
```

El primer paràmetre indica el pin a usar i "OUTPUT" és per usar-lo com a
sortida, i també podria usar-se el valor "INPUT" per indicar que
llegirem d'aquest pin.

Aquestes definicions es faran només una vegada al principi, en la funció
setup(). La nostra quedarà, amb una única instrucció que declara que
usarem el pin 13 com a sortida digital:

```Arduino
void setup()
{
// inicialitza el pin 13 com a sortida digital
pinMode( 13, OUTPUT) ;
}
```

- És important fixar-se que malgrat ser una única instrucció, hem
  delimitat el bloc d'aquesta funció mitjançant obrir i tancar claus.
- Observi's que la instrucció finalitza en " ;" . C++ obliga a
  acabar les instruccions amb un punt i coma que delimiti l'ordre. Si
  s'omet generarà un error.

Per encendre el LED usarem la instrucció:

```Arduino
digitalWrite( 13 , HIGH) ;
```

I una altra instrucció similar que li ordena apagar-lo:

```Arduino
digitalWrite( 13 , LOW) ;
```

El 13 indica el pin a utilitzar i HIGH, LOW indiquen el valor que
desitgem posar en aquesta sortida, que en Arduino corresponen a 5V per a
HIGH i 0V per a LOW.

- Si en la funció loop() escrivíssim aquestes dues instruccions
  seguides, Arduino canviaria aquests valors tan de pressa que no
  percebríem canvis, així que necessitem frenar-lo una mica perquè
  puguem percebre el canvi.

Per fer aquest retard de, diguem-ne, un segon, utilitzarem:

```Arduino
delay(1000) ; //delay(n) "congela" Arduino n mil·lisegons
```

Per tant per programar una llum que s'encén i s'apaga, hauríem de
generar una seqüència d'ordres (_Com en una recepta de cuina_) que
fessin:

1. Informar a Arduino que anem a utilitzar el pin13 per escriure valors (en el setup).
2. Encendre el LED : Posar valor alt ( 5V) en aquest pin.
3. Esperar un segon.
4. Apagar el LED: Posar valor baix (0V) en aquest pin.
5. Tornar a esperar un segon.

   - _Si ometéssim aquest segon retard, apagaria la llum i tornaria a començar trobant-se l'ordre de tornar a encendre. No apreciaríem que s'havia apagat.(No espero que em cregueu. Comproveu-ho)._
   - _El processador d'Arduino UNO és molt lent des del punt de vista electrònic, però és capaç de commutar la llum (passar d'encès a apagat i tornada a encendre) unes 15.000 vegades per segon._

El primer concepte que heu de fixar, és que els ordinadors processen les
ordres en seqüència, una instrucció després d'una altra i en l'ordre
en què se les doneu. _El nostre programa instruïu a l'ordinador perquè
executi aquestes instruccions i fixa l'ordre en què s'executen._

La manera d'escriure un programa en Arduino C++ que faci el
anteriorment descrit és una cosa semblant a això :

```Arduino
//Codi: ARD_01.ino

void setup()
{
    pinMode( 13 , OUTPUT); // Usarem el pin 13 com a sortida
}

void loop()
{
    digitalWrite(13 , HIGH); // Encendre el LED
    delay(1000); // Esperar un segon
    digitalWrite(13 , LOW); // Apagar el LED
    delay(1000); // Esperar un altre segon
}
```

- Noti's el sagnat de les línies per destacar els blocs de codi. Això es considera bona pràctica i us ho recomanem encaridament, perquè facilita molt la comprensió del programa.
- Quan us equivoqueu ( i creieu-me, us equivoqueu) el sagnat ajuda, i molt, a visualitzar el programa.
- Només hi ha dos tipus de programadors. Els que s'equivoquen i els que s'equivocaran

Només ens falta ja, comprovar si hi ha errors i per això premen l'icona en blanc:

![Verifica][img3]{: .centered}
Si
tot va bé, ( si no hi ha errors en vermell) podem compilar i bolcar amb la
següent fletxa, En cas contrari ( i creieu-me que us passarà amb
freqüència) haurà de revisar els possibles errors i corregir-los. Tornarem
sobre això en el futur.

![Puja][img4]{: .centered}

La fletxa en blanc bolcarà el nostre programa a l'Arduino i podrem
comprovar que la llum del pin 13 parpelleja amb un retard d'un segon
entre encès i apagat.

- Suggeriment: Si modifiquem els valors del delay, modifiquem la
  cadència del parpelleig.
- Nota: Això no funcionarà amb cap altre Pin de l'Arduino UNO, perquè
  només el 13 té un LED connectat.

## Resum de la lliçó

En aquesta lliçó hem après diverses coses importants:

- El concepte clau d'un programa, com a seqüència d'instruccions que s'executa en l'ordre marcat.
- Hi ha dues funcions bàsiques en tot programa Arduino: setup() i loop()..
- Per delimitar un bloc d'instruccions usem obertura i tancament de claus.
- Totes les instruccions acaben en punt i coma (Encara que hi ha excepcions).
- Podem usar comentaris usant //
- Hem après algunes instruccions inicials de l'Arduino C++.

Felicitats per completar el teu primer projecte en Arduino! Ara que entens els conceptes bàsics, t'animem a seguir explorant. Intenta modificar el codi per canviar la velocitat del parpelleig, o investiga com usar altres components. L'experimentació és la clau per dominar la programació i l'electrònica. Segueix creant i divertint-te!
