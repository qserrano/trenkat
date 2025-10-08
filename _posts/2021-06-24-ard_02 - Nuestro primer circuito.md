---
layout: post
title: "02 - El nostre primer circuit"
author: "qode66"
description: "Fixar algunes idees bàsiques sobre electrònica, muntar un circuit amb LED i resistència i comprendre l'esquema elèctric, aprendre com utilitzar la protoboard i instal·lar el programa «Blinking LED»"
date: 2021-06-24 00:45:00 +0200
categories: arduino basic
excerpt: "Fixar algunes idees bàsiques sobre electrònica, muntar un circuit amb LED i resistència i comprendre l'esquema elèctric, aprendre com utilitzar la protoboard i instal·lar el programa «Blinking LED»"
tags: ["arduino", "LED", "resistència", "protoboard", "esquema elèctric"]
---

[img1]: /assets/imatges/ard/ard_02_01.png "Esquema elèctric"
[img2]: /assets/imatges/ard/ard_02_02.jpg "Esquema de muntatge"

## Objetivos

El objectiu de aquesta sessió és fixar algunes idees bàsiques sobre electrònica, muntar un circuit amb LED i resistència i comprendre l'esquema elèctric, aprendre com utilitzar la protoboard i instal·lar el programa «Blinking LED»

## Material requerido

|                                 Imagen                                 | Descripción               |
| :--------------------------------------------------------------------: | :----------------------- |
|   <img src="/assets/imatges/mat/mat_unor3.png" width="50" height="50">    | Arduino Uno o compatible |
| <img src="/assets/imatges/mat/mat_protoboard.png" width="50" height="50"> | Una protoboard           |
|   <img src="/assets/imatges/mat/mat_cables.png" width="50" height="50">   | Cables de conexió       |
|    <img src="/assets/imatges/mat/mat_led.png" width="50" height="50">     | Un diode led             |
|  <img src="/assets/imatges/mat/mat_resis330.png" width="50" height="50">  | Una resistència 330 Ohms |

## Algunes idees bàsiques sobre electrònica

Quan deixem fluir aigua d'un lloc alt a un altre més baix, l'aigua corre lliurement mentre no li ho impedim, i sempre de dalt a baix. Diem que les diferents altures suposen una diferència de potencial entre tots dos punts que pot ser transformada en treball útil.

Quan existeix una diferència de tensió elèctrica (o diferència de potencial) entre dos punts amb connexió, l'electricitat flueix del positiu (o de mes càrrega) cap al negatiu o menys, i també podem obtindre treball útil d'aquest principi.

Encara que la física darrere d'aquests dos exemples és diferent, conceptualment són bastant semblants i per això parlem de:

- Corrent d'aigua / Corrent elèctrica.
- Cabal d'aigua / Intensitat de corrent.
- Resistència al flux / Resistència elèctrica.
- Capacitat d'una reserva d'aigua / Capacitat d'un condensador.

La idea és que el corrent elèctric flueix del positiu al negatiu perquè hi ha una diferència de tensió (que mesurem en Volts de símbol V) però això no és una mesura absoluta sinó la diferència que hi ha entre els punts en què ho mesurem.

- De la mateixa manera, la diferència d'altura entre dos punts només representa això, una **_diferència_** i no indica a quina altura es troben respecte a una referència més o menys arbitrària.

Hi ha components que s'oposen a a la lliure circulació del corrent. Els diem **resistències** , el seu valor es mesura en Ohms i el seu símbol és Ω .

La **llei d'Ohm**, lliga tots aquests valors d'una forma precisa: **V = R x I**

On **V** és la tensió en volts, **R** la resistència i **I** la intensitat elèctrica que flueix.

- _En el món de Arduino la tensió és quasi sempre 5V, que és la tensió al fet que funciona i la que és capaç de posar en les seues eixides digitals._

Una altra manera d'escriure aquesta llei d'Ohm és **I = V / R**

El que implica que si la resistència del circuit és nul·la (o quasi, com en el cas d'un cable de coure) la intensitat del corrent es dispara i pot arribar a fondre el cable o component que trobe.

- _Això es coneix com a curtcircuit o curt simplement i ha de ser evitat decididament ja que sol acabar amb olor a cremat i algun esglai, en el millor cas._

## El nostre primer circuit electrònic

En la sessió anterior programem el LED connectat al pin 13 del nostre Arduino. Hui duplicarem aquest circuit en l'exterior muntant-lo des del principi amb components discrets. El seu esquema elèctric seria:

![Esquema elèctric][img1]{: .centered}

Veiem a l'esquerra el símbol del **díode LED** que és emissor de llum i per això té aqueixes fletxes sortints per a indicar-ho (LED ve del anglés Light Emitting Diode, o díode emissor de llum).

La resistència es representa per aqueix segon símbol indicant un nom R1 i el seu valor 330Ω.

Al seu torn veiem a l'esquerra les lletres GND per a indicar que és el negatiu. Té molts noms: Massa, El símbol --, Terra( encara que no és el mateix), Ground, Negatiu, càtode.

Finalment a la dreta el símbol de +5V indica l'extrem de tensió positiva o positiu i a vegades es representa com Vcc. Les línies rectes i negres indiquen connexió elèctrica mitjançant cables conductors.

- _Un díode, és un component electrònic que només permet passar el corrent en una adreça. En la direcció del positiu al negatiu (la part ampla del triangle) al negatiu, la punta del triangle (que indica la direcció)._
- _Per a indicar quin de les potes d'un díode LED és el positiu, aquest sol ser de major longitud._
- _Si es connecta al revés, tallarà el flux de corrent molt eficaçment i no s'il·luminarà en absolut._
- _Les resistències en canvi no diferencien un extrems de l'altre, diem que no tenen polaritat._

És important entendre els esquemes electrònics perquè permeten comprendre amb rapidesa qualsevol circuit. Val la pena dedicar-li una mica d'esforç perquè són el llenguatge de l'electrònica.

Una vegada comprés l'esquema elèctric del circuit, vegem la connexió en la Protoboard:

![Esquema de muntatge][img2]{: .centered}

Aquest esquema segueix una pauta de marcar els cables que van _a positiu en roig_ i els que van _a GND en negre_. _Recomanem encaridament_ se seguisca aquesta norma en la pràctica perquè ajuda a identificar possibles problemes i evita errors.

- _La Protoboard uneix els punts de la línia blava entre si i els de damunt de la línia roja entre si, (se'n diu raïls), però no connecta el raïl roig positiu amb el raïl negre negatiu._
- _Al seu torn existeixen dues zones de línies verticals en la Protoboard. Aquestes línies verticals estan unides entre si internament, per a facilitar la connexió dels components, però no s'uneixen les línies paral·leles._

Les claus per a muntar el circuit amb èxit, són:

- Connectem el pin 13 de Arduino a la línia roja de la Protoboard: Positiu.
- Connectem el GND de Arduino a la línia blava de la Protoboard: Negatiu.
- Usem el raïl positiu (els pins de la línia roja) per a connectar a la resistència.
- L'altre extrem de la resistència es connecta al positiu del LED perquè estan en la mateixa vertical de la Protoboard (i aquesta els connecta elèctricament).
- _Note's que el positiu del LED està clarament marcat com de major longitud mitjançant un xicotet angle prop de la base_.
- _Un díode LED quasi no presenta resistència pròpia, per la qual cosa sempre ha d'usar-se una resistència addicional que limite el pas de corrent, i evite que es creme. (Una resistència entre 220 i 330 Ω sol ser adequada)._
- El circuit es tanca amb un cable des del negatiu del LED al raïl de negatiu.
- Quan el nostre programa pose un valor de HIGH (5V) en el pin 13 permetrà el flux de corrent pel circuit il·luminant el LED. Amb LOW senzillament el circuit estarà apagat, sense tensió.

Podem ara bolcar el programa que vam fer en la lliçó anterior (_O simplement carregar l'exemple Blink_), seguint el procediment que definim allí, i veurem com aquesta vegada, a més del LED propi de Arduino, el nostre LED exterior parpelleja seguint el mateix cicle d'encesa i apagat.

## Resum de la lliçó

- Hem vist alguns conceptes bàsics d'electrònica: la llei d'Ohm, que relaciona la tensió la resistència.
- Hem identificat dos components bàsics en electrònica, resistències i els díodes.
- Hem aprés a desxifrar els primers esquemes electrònics.
- Hem muntat el nostre primer circuit amb aquests components.