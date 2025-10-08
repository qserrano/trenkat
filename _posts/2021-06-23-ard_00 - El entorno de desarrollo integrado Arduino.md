---
layout: post
title: "00 - L'entorn de desenvolupament integrat Arduino (IDE)"
author: "qserrano"
description: "Presentem l'entorn de desenvolupament integrat Arduino (IDE), el programari que ens permet programar les plaques Arduino i cal conèixer-lo per treure tot el profit de la seva potència i característiques."
date: 2021-06-23 13:15:00 +0200
categories: arduino basic
excerpt: "Presentem l'entorn de desenvolupament integrat Arduino (IDE), el programari que ens permet programar les plaques Arduino i cal conèixer-lo per treure tot el profit de la seva potència i característiques."
tags: ["arduino", "IDE", "entorn de desenvolupament", "esborrany", "sketch"]
---

[img01]: /assets/imatges/ard/ard-00-01.png "IDE Arduino"
[img02]: /assets/imatges/ard/ard-00-02.png "Barra d'eines"
[img03]: /assets/imatges/ard/ard-00-03.png "Barra de menú"

Presentarem l'entorn de desenvolupament integrat Arduino (IDE, nom generat per les seves sigles en anglès). És el programari que ens permet programar les plaques Arduino i cal conèixer-lo per treure tot el profit de la seva potència i característiques.

L'entorn de desenvolupament integrat Arduino (IDE) conté:

1. un editor de text per escriure codi,
2. una àrea de missatges,
3. una consola de text,
4. una barra d'eines amb botons per a funcions habituals
5. una sèrie de menús.

Es connecta a les plaques Arduino per carregar programes i comunicar-s'hi.

![IDE Arduino][img01]{: .centered}

## Escriure esborranys (sketch)

Els programes escrits amb el programari Arduino (IDE) s'anomenen esborranys o «sketches». Aquests esborranys s'escriuen a l'editor de text i es guarden amb l'extensió de fitxer **.ino**. L'editor té funcions per copiar/enganxar i per cercar/substituir text.

L'àrea de missatges proporciona comentaris mentre es desa i s'exporta i també mostra errors. La consola mostra la sortida de text del programari Arduino (IDE), inclosos missatges d'error complets i altra informació.

A l'extrem inferior dret de la finestra es mostra la placa configurada i el port sèrie.

Els botons de la barra d'eines permeten verificar i pujar programes, crear, obrir i desar esborranys i obrir el monitor sèrie.

### Els botons de la barra d'eines

![Barra de herramientas][img02]{: .centered}

- **Verificar**. Comprova el codi per si hi ha errors abans de compilar-lo.
- **Pujar**. Compila el codi i el puja a la placa configurada.
- **Nou**. Crea un esborrany nou.
- **Obrir**. Mostra un menú amb tots els esborranys de l'sketchbook. Si feu clic en un, s'obrirà en una finestra nova.
- **Desar**. Desa el vostre esborrany.
- **Monitor sèrie**. Obre el monitor sèrie.

Hi ha ordres addicionals als cinc menús: **Fitxer, Editar, Programa, Eines, Ajuda**. Els menús són sensibles al context, cosa que significa que només estan disponibles els elements rellevants per a la feina que s'està fent actualment.

![Barra de menú][img03]{: .centered}

### Fitxer

- **Nou.** Obre una finestra nova de l'editor, amb l'estructura mínima d'un esborrany ja instal·lada.
- **Obrir.** Permet carregar un fitxer d'esborrany navegant per les unitats i carpetes de l'ordinador.
- **Obrir recents.** Ofereix una llista breu dels esborranys més recents, a punt per obrir-se.
- **Sketchbook.** Mostra els esborranys actuals dins de l'estructura de l'Sketchbook; en fer clic en qualsevol nom s'obrirà l'esborrany corresponent en una finestra nova de l'editor.
- **Exemples.** Qualsevol exemple proporcionat pel programari Arduino (IDE) o la biblioteca apareix en aquest element del menú. Tots els exemples s'estructuren en un arbre que permet un accés fàcil per tema o biblioteca.
- **Tancar.** Tanca la finestra del programari Arduino des de la qual es fa clic.
- **Desar.** Desa l'esborrany amb el nom actual. Si el fitxer no s'ha anomenat abans, es proporcionarà un nom a la finestra "Desa com...".
- **Desa com...** Permet desar l'esborrany actual amb un nom diferent.
- **Configurar pàgina.** Mostra la finestra de configuració de la pàgina per imprimir.
- **Imprimir.** Envia l'esborrany actual a la impressora segons els paràmetres definits a Configurar pàgina.
- **Preferències.** Obre la finestra Preferències, on es poden personalitzar alguns paràmetres de l'IDE, com l'idioma de la interfície de l'IDE.
- **Sortir.** Tanca totes les finestres de l'IDE. Els mateixos esborranys oberts quan es va triar _Sortir_ es tornaran a obrir automàticament la pròxima vegada que inicieu l'IDE.

### Editar

- **Desfer / Refer.** Retrocede un o més passos que heu fet mentre editeu; quan retrocediu, podeu avançar amb Refer.
- **Tallar.** Elimina el text seleccionat de l'editor i el col·loca al porta-retalls.
- **Copiar.** Duplica el text seleccionat a l'editor i el col·loca al porta-retalls.
- **Copiar per al fòrum.** Copia el codi del vostre esborrany al porta-retalls en un format adequat per publicar-lo al fòrum, amb color de sintaxi.
- **Copiar com a HTML.** Copia el codi del vostre esborrany al porta-retalls com a HTML, adequat per inserir-lo en pàgines web.
- **Enganxar.** Posa el contingut del porta-retalls a la posició del cursor, a l'editor.
- **Seleccionar tot.** Selecciona i ressalta tot el contingut de l'editor.
- **Anar a la línia...** Demana i posiciona el cursor a la línia indicada.
- **Comentar/Descomentar.** Posa o suprimeix el marcador de comentaris **//** al començament de cada línia seleccionada.
- **Augmentar / Disminuir sagnat.** Afegeix o resta un espai al principi de cada línia seleccionada, movent el text un espai a la dreta o eliminant un espai al principi.
- **Augmentar / Reduir mida de la lletra.** Fa més gran / més petita la mida de la lletra de l'esborrany.
- **Cercar.** Obre la finestra _Cercar i substituir_ on podeu especificar text per cercar dins l'esborrany actual segons diverses opcions.
- **Cercar següent.** Destaca la següent ocurrència (si n'hi ha) de la cadena especificada com a element de cerca a la finestra _Cercar_, en relació amb la posició del cursor.
- **Cercar anterior.** Destaca l'ocurrència anterior (si n'hi ha) de la cadena especificada com a element de cerca a la finestra _Cercar_ en relació amb la posició del cursor.

### Programa

- **Verificar / Compilar.** Comprova el vostre esborrany cercant errors en compilar-lo; informarà de l'ús de memòria per al codi i les variables a l'àrea de la consola.
- **Pujar.** Compila i carrega el fitxer binari a la placa configurada a través del port configurat.
- **Pujar amb programador.** Això sobreescriurà el gestor d'arrencada a la placa; haureu d'utilitzar _Eines > Gravar bootloader_ per restaurar-lo i poder tornar a carregar pel port sèrie USB. Tot i això, us permet utilitzar tota la capacitat de la memòria Flash per al vostre esborrany. Tingueu en compte que aquesta ordre NO cremarà els fusibles. Per fer-ho, s'ha d'executar una ordre _Eines > Gravar bootloader_.
- **Exportar binari compilat.** Desa un fitxer **.hex** que es pot conservar com a fitxer o enviar-lo a la placa mitjançant altres eines.
- **Mostrar la carpeta de l'sketch.** Obre la carpeta d'esborranys actual.
- **Incloure biblioteca.** Afegeix una biblioteca al vostre esborrany inserint declaracions _#include_ al començament del codi. A més, des d'aquest element de menú podeu accedir al gestor de biblioteques i importar biblioteques noves des d'arxius **.zip**.
- **Afegir fitxer...** Afegeix un fitxer font a l'esborrany (es copiarà des de la seva ubicació actual). El fitxer nou apareix en una pestanya nova a la finestra de l'esborrany. Els fitxers es poden suprimir de l'esborrany mitjançant el menú de pestanyes accessible fent clic a la icona de petit triangle que hi ha sota el monitor sèrie al costat dret de la barra d'eines.

### Eines

- **Autoformat.** Això formata molt bé el vostre codi: és a dir, el fa sagnar de manera que l'obertura i el tancament de les claus s'alineïn i que les declaracions dins de les claus quedin més sagnades.
- **Arxivar sketch.** Arxiva una còpia de l'esborrany actual en format .**zip**. L'arxiu es col·loca al mateix directori que l'esborrany.
- **Arreglar codificació i recarregar.** Corregeix possibles discrepàncies entre la codificació de mapes de caràcters de l'editor i altres mapes de sistemes operatius.
- **Monitor sèrie.** Obre la finestra del monitor sèrie i inicia l'intercanvi de dades amb qualsevol placa connectada al port seleccionat actualment. Normalment, es reinicia la placa, si la placa admet _Reinici per obertura del port sèrie._
- **Serial Plotter.** Aplicació que ens permet dibuixar gràfiques.
- **Placa:** Seleccioneu la placa que utilitzeu.
- **Port.** Aquest menú conté tots els dispositius en sèrie (reals o virtuals) del vostre equip. S'actualitzarà automàticament cada vegada que obriu el menú d'eines.
- **Informació de la placa.** Dóna informació de la placa connectada.
- **Programador.** Per seleccionar un programador de placa quan es programa una placa o un xip i no s'utilitza la connexió sèrie USB integrada. Normalment no necessitareu això.
- **Gravar bootloader.** Els elements d'aquest menú us permeten gravar un gestor d'arrencada al microcontrolador d'una placa Arduino. Això no és necessari per a l'ús normal d'una placa Arduino o Genuino, però és útil si adquiriu un microcontrolador ATmega nou (que normalment no inclou un gestor d'arrencada). Assegureu-vos que heu seleccionat la placa correcta al menú Placa abans de gravar el gestor d'arrencada a la placa de destinació. Aquesta ordre també estableix els fusibles adequats.

### Ajuda

Aquí hi trobareu accés fàcil a diversos documents que inclouen el
programari Arduino (IDE). Teniu accés a Introducció, Referència, una
guia de l'IDE i altres documents localment, sense connexió a Internet.
Els documents són una còpia local dels documents en línia i poden
enllaçar al nostre lloc web en línia.

**Cercar a la referència.** Aquesta és l'única funció interactiva del
menú Ajuda: selecciona directament la pàgina pertinent a la còpia local
de la referència per a la funció o l'ordre que hi ha sota el cursor.

Esperem que aquesta guia t'hagi proporcionat una base sòlida per comprendre l'IDE d'Arduino. Ara que estàs familiaritzat amb les eines i els menús principals, t'animem que exploris pel teu compte, provis els exemples inclosos i comencis a escriure els teus propis sketches. L'experimentació és clau per dominar qualsevol eina, així que no tinguis por d'equivocar-te i aprendre sobre la marxa!

