ARCHIVOS A MIRAR FRONTEND
general
--
    script.js
    index.php
front
--
    1.-mapa_interactivo

ARCHIVOS A MIRAR BACKEND
favorites.js
favorites.php


FRONTEND (mapa clicable con temperatura y lugar exacto)
---------------------------------------------------------
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

BACKEND 
---------------------------------------------------------
En el Backend cambiaremos cosas del carrusell de fotografias lo primero que cambiaremos sera:
* Poner el nombre del usuario debajo de cada foto
  - Backend: Inner join con la tabla "user" para añadir el nombre
    Entraremos en el archivo de favorites.js, en la function refreshPhotos, despues de crear el carrusell, creamos un elemento div con una variable llamada nameUser
    a este div se le añade un texto by recojiendo el nombre del usuario a partir de la  bd en la tabla photo cogiendo la fila user
  - Frontend: Añadido un nuevo elemento "div" al item de la foto



* Usuario puede borrar una foto (solo sus propias fotos)
 - Backend: Nueva funcionalidad para borrar fotos (base de datos y fichero) 
En el archivo favorites.js ,en la misma funcion anterior se crea otro div con la variable llamada botonBorrar
a este div se le añade un texto de borrar
despues se le asigna el atributo id para poder encontrar la foto y a parte se le añade una clase para poder poner este texto en color rojo y tambien se registra un evento click 
que cuando este boton se clique se ejecute  la funcion de deletephoto.


Una vez tenemos el boton creado con sus clases y de mas nos iremos al archivo favorites.php y crearemos una funcio que haga la accion de eliminar las fotos ya sea de l apguina y de la parte local 
Lo que haremos despues de conectarnos a la bd del weatherapi, haremos una consulta a la url de la tabla photo mediante la variable  photoId
se ejcuta la consulta recojiendo la url de la url de la foto 
y se elimina el archivo del servidor utilizando unlink.

Despues tambien borraremos la foto de la base de datos haciendo otra conslta a la tabla photo mediende la variabe donde se recoje el id de la foto

 - Frontend: Boton que dispara la funcionalidad para borrar la foto