---
title: "El entorno de desarrollo integrado Arduino (IDE)"
description: "Presentamos el entorno de desarrollo integrado Arduino (IDE), el software que nos permite programar las placas Arduino y es necesario conocerlo para sacar todo el provecho de su potencia y características."
date: 2025-06-23 13:15:00 +0200
categories: arduino basic iniciacion
excerpt: "Presentamos el entorno de desarrollo integrado Arduino (IDE), el software que nos permite programar las placas Arduino y es necesario conocerlo para sacar todo el provecho de su potencia y características."
tags: ["arduino", "IDE", "entorno de desarrollo", "boceto", "sketch"]
---

# El entorno de desarrollo integrado Arduino (IDE)

[img01]: /assets/imatges/ard/ard-00-01.png "IDE Arduino"
[img02]: /assets/imatges/ard/ard-00-02.png "Barra de herramientas"
[img03]: /assets/imatges/ard/ard-00-03.png "Barra de menú"

Vamos a presentar el entorno de desarrollo integrado Arduino (IDE, nombre generado por su sigla en inglés). Es el software que nos permite programar las placas Arduino y es necesario conocerlo para sacar todo el provecho de su potencia y características.

El entorno de desarrollo integrado Arduino (IDE) contiene:

1. un editor de texto para escribir código,
2. un área de mensajes,
3. una consola de texto,
4. una barra de herramientas con botones para funciones habituales
5. una serie de menús.

Se conecta a las placas Arduino para cargar programas y comunicarse con ellos.

![IDE Arduino][img01]

## Escribir bocetos (sketch)

Los programas escritos con el software Arduino (IDE) se denominan bocetos o «sketches». Estos bocetos se escriben en el editor de texto y se guardan con la extensión de archivo **.ino**. El editor tiene funciones para copiar/pegar y para buscar/reemplazar texto.

El área de mensajes proporciona comentarios mientras se guarda y se exporta y también muestra errores. La consola muestra la salida de texto del software Arduino (IDE), incluidos mensajes de error completos y otra información.

En el extremo inferior derecho de la ventana se muestra la placa configurada y el puerto serie.

Los botones de la barra de herramientas le permiten verificar y subir programas, crear, abrir y guardar bocetos y abrir el monitor serie.

### Los botones de la barra de herramientas

![Barra de herramientas][img02]

- **Verificar**. Comprueba el código por si hay errores antes de compilarlo.
- **Subir**. Compila el código y lo sube a la placa configurada.
- **Nuevo**. Crea un boceto nuevo.
- **Abrir**. Presenta un menú con todos los bocetos del sketchbook. Si hace clic en uno, se abrirá en una nueva ventana.
- **Guardar**. Guarda su boceto.
- **Monitor Serie**. Abre el monitor serie.

Se encuentran órdenes adicionales en los cinco menús: **Archivo, Editar, Programa, Herramientas, Ayuda**. Los menús son sensibles al contexto, lo que significa que solo están disponibles los elementos relevantes para el trabajo que se está realizando actualmente.

![Barra de menú][img03]

### Archivo

- **Nuevo.** Abre una nueva ventana del editor, con la estructura mínima de un boceto ya instalada.
- **Abrir.** Permite cargar un archivo de boceto navegando por las unidades y carpetas del ordenador.
- **Abrir Recientes.** Ofrece una lista breve de los bocetos más recientes, listos para abrirse.
- **Sketchbook.** Muestra los bocetos actuales dentro de la estructura del Sketchbook; al hacer clic en cualquier nombre se abrirá el boceto correspondiente en una nueva ventana del editor.
- **Ejemplos.** Cualquier ejemplo proporcionado por el software Arduino (IDE) o la biblioteca aparece en este elemento del menú. Todos los ejemplos se estructuran en un árbol que permite un fácil acceso por tema o biblioteca.
- **Cerrar.** Cierra la ventana del software Arduino desde el que se hace clic.
- **Guardar.** Guarda el boceto con el nombre actual. Si el archivo no se ha nombrado antes, se proporcionará un nombre en la ventana "Guardar como...".
- **Guardar como...** Permite guardar el boceto actual con un nombre diferente.
- **Configurar Página.** Muestra la ventana de configuración de la página para imprimir.
- **Imprimir.** Envía el boceto actual a la impresora según los parámetros definidos en Configurar Página.
- **Preferencias.** Abre la ventana Preferencias, donde se pueden personalizar algunos parámetros del IDE, como el idioma de la interfaz del IDE.
- **Salir.** Cierra todas las ventanas del IDE. Los mismos bocetos abiertos cuando se eligió _Salir_ se volverán a abrir automáticamente la próxima vez que inicie el IDE.

### Editar

- **Deshacer / Rehacer.** Retrocede uno o más pasos que ha hecho mientras edita; cuando retrocede, puede avanzar con Rehacer.
- **Cortar.** Elimina el texto seleccionado del editor y lo coloca en el portapapeles.
- **Copiar.** Duplica el texto seleccionado en el editor y lo coloca en el portapapeles.
- **Copiar para el foro.** Copia el código de su boceto al portapapeles en un formato adecuado para publicarlo en el foro, con color de sintaxis.
- **Copiar como HTML.** Copia el código de su boceto al portapapeles como HTML, adecuado para insertarlo en páginas web.
- **Pegar.** Pone el contenido del portapapeles en la posición del cursor, en el editor.
- **Seleccionar todo.** Selecciona y resalta todo el contenido del editor.
- **Ir a la línea...** Pide y posiciona el cursor en la línea indicada.
- **Comentar/Descomentar.** Pone o suprime el marcador de comentarios **//** al comienzo de cada línea seleccionada.
- **Aumentar / Disminuir sangría.** Añade o resta un espacio al principio de cada línea seleccionada, moviendo el texto un espacio a la derecha o eliminando un espacio al principio.
- **Aumentar / Reducir tamaño de fuente.** Hace más grande / pequeña la mida de la letra del boceto.
- **Buscar.** Abre la ventana _Buscar y reemplazar_ donde puede especificar texto para buscar dentro del boceto actual según varias opciones.
- **Buscar siguiente.** Destaca la siguiente ocurrencia (si la hay) de la cadena especificada como elemento de búsqueda en la ventana _Buscar_, en relación con la posición del cursor.
- **Buscar anterior.** Destaca la ocurrencia anterior (si la hay) de la cadena especificada como elemento de búsqueda en la ventana _Buscar_ en relación con la posición del cursor.

### Programa

- **Verificar / Compilar.** Comprueba su boceto buscando errores al compilarlo; informará del uso de memoria para el código y las variables en el área de la consola.
- **Subir.** Compila y carga el fichero binario a la placa configurada a través del puerto configurado.
- **Subir usando Programador.** Esto sobrescribirá el gestor de arranque en la placa; tendrá que utilizar _Herramientas > Grabar bootloader_ para restaurarlo y poder volver a cargar en el puerto serie USB. Sin embargo, le permite utilizar toda la capacidad de la memoria Flash para su boceto. Tenga en cuenta que esta orden NO quemará los fusibles. Para hacerlo, se debe ejecutar una orden _Herramientas > Grabar bootloader_.
- **Exportar binario compilado.** Guarda un archivo **.hex** que se puede conservar como archivo o enviarlo a la placa mediante otras herramientas.
- **Mostrar la carpeta del Sketch.** Abre la carpeta de bocetos actual.
- **Incluir Librería.** Añade una librería a su boceto insertando declaraciones _#include_ al comienzo del código. Además, desde este elemento de menú puede acceder al gestor de librerías e importar librerías nuevas desde archivos **.zip**.
- **Añadir fichero...** Añade un fichero fuente al boceto (se copiará desde su ubicación actual). El fichero nuevo aparece en una nueva pestaña en la ventana de boceto. Los ficheros se pueden borrar del boceto mediante el menú de pestañas accesible haciendo clic en el icono de triángulo pequeño que hay debajo del monitor serie en el lado derecho de la barra de herramientas.

### Herramientas

- **Autoformato.** Esto formatea muy bien su código: es decir, sangrarlo de manera que la apertura y el cierre de las llaves se alineen y que las declaraciones dentro de las llaves queden más indentadas.
- **Archivar Sketch.** Archiva una copia del boceto actual en formato .**zip**. El archivo se coloca en el mismo directorio que el boceto.
- **Arreglar codificación y recargar.** Corrige posibles discrepancias entre la codificación de mapas de caracteres del editor y otros mapas de sistemas operativos.
- **Monitor Serie.** Abre la ventana del monitor serie e inicia el intercambio de datos con cualquier placa conectada al puerto seleccionado actualmente. Normalmente, se reinicia la placa, si la placa admite _Reinicio por apertura del puerto serie._
- **Serial Plotter.** Aplicación que nos permite dibujar gráficas.
- **Placa:** Seleccione la placa que utiliza.
- **Puerto.** Este menú contiene todos los dispositivos en serie (reales o virtuales) de su equipo. Se actualizará automáticamente cada vez que abra el menú de herramientas.
- **Información de la placa.** Da información de la placa conectada.
- **Programador.** Para seleccionar un programador de placa cuando se programa una placa o un chip y no se utiliza la conexión serie USB integrada. Normalmente no necesitará esto.
- **Grabar Bootloader.** Los elementos de este menú le permiten grabar un gestor de arranque en el microcontrolador de una placa Arduino. Esto no es necesario para el uso normal de una placa Arduino o Genuino, pero es útil si adquiere un microcontrolador ATmega nuevo (que normalmente no incluye un gestor de arranque). Asegúrese de que ha seleccionado la placa correcta en el menú Placa antes de grabar el gestor de arranque en la placa de destino. Esta orden también establece los fusibles adecuados.

### Ayuda

Aquí encontrará fácil acceso a varios documentos que incluyen el
software Arduino (IDE). Tiene acceso a Introducción, Referencia, una
guía del IDE y otros documentos localmente, sin conexión a Internet.
Los documentos son una copia local de los documentos en línea y pueden
enlazar a nuestro sitio web en línea.

**Buscar en la referencia.** Esta es la única función interactiva del
menú Ayuda: selecciona directamente la página pertinente en la copia local
de la referencia para la función o la orden que hay bajo el cursor.

Esperamos que esta guía te haya proporcionado una base sólida para comprender el IDE de Arduino. Ahora que estás familiarizado con las herramientas y menús principales, te animamos a que explores por tu cuenta, pruebes los ejemplos incluidos y comiences a escribir tus propios sketches. La experimentación es clave para dominar cualquier herramienta, ¡así que no temas equivocarte y aprender sobre la marcha!

