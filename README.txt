ARCHIVOS A MIRAR
general
--
    script.js
    index.php
front
--
    1.-mapa_interactivo



FRONTEND (mapa clicable con temperatura y lugar exacto)
---------------------------------------------------------
<img>

En este aspecto el cambio esta en poner un mapamundi que te da la temperatura y el lugar exacto donde cliques del mapa.
PASOS:
1.- crearemos un div con un id map y un  ancho para poder enseñar el mapa 
2.- importaremos una biblioteca de js llamada Leaflet.js para poder tener un iframe de este mapa 
3.- crearemos un archivo js (mapa_interactivo), para llamar a la api y que te de la temperatura 
y el lugar donde clicas, en el mapa a partir de la id del div del index.php.
4.- En nuestro js lo que haremos sera, tener diferentes funciones para poder enseñar y hacer funcionar el mapa:
    -  crear el mapamundi con la libreria de js 

    -  utilizar openstreetmap para tener una base de como va a ser nuestro mapamundi

    -  haremos una varible para el marcador (saber donde clicamos en el mapa)

    -  agregaremos un evento click en el mapa para que se pueda clicar en este

    -  crearemos una funcion para que cuando cliques te diga el lugar exacto y la llamaremos 

    -  eliminaremos el ultimo clic que hemos hecho para cunado cliques otravez en otro lugar y agregaremos otro nuevo con nuevos datos

    -  En nuestra funcion para obtener el nombre exacto del lugar clicado haremos que llame a opestreetmap,
    hacer un get de esta url,haremos que la respuesta la formatee en json, llamara a la funcion que da la temperatura y un manejo de errores.
    -  Para nuestra ultima funcion para obtener la temperatura del lugar clicado haremos los siguiente: a la funcion le pasaremos,
    las coordenadas el nombre del lugar,pondremos la url de la  api i le haremos un get,una vez hecho el get haremos lo mismo que en la anterior function.

    -  Por ultimo crearemos un a ultima funcion que sera para mostrar un popup en el marcador con el nombre del lugar y la temperatura, lo que haremos 
    sera verificar si hay un marcador y Asociar un popup al marcador con el nombre del lugar y la temperatura.

5.- Una vez tenemos nuestro js en el index.php lo que haremos sera un contenedor para enseñar el mapamundi y importar la biblioteca de js (Leaflet.js).


