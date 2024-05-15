    // Variable para almacenar el marcador actual
    var marker;
    
function cargarMapa() {

    // Crear un mapa utilizando Leaflet.js y establecer la vista inicial
    var map = L.map('map').setView([0, 0], 2);

    // Agregar una capa de mapa base proporcionada por OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar un evento de clic al mapa
    map.on('click', function (e) {
        // Obtener las coordenadas del lugar donde se hizo clic
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;

        // Llamar a la función para obtener el nombre del lugar
        obtenerNombreLugar(lat, lon);

        // Eliminar el marcador anterior (si existe)
        if (marker) {
            map.removeLayer(marker);
        }

        // Agregar un nuevo marcador en la ubicación del clic
        marker = L.marker([lat, lon]).addTo(map);
    }); 
}

        // Función para obtener el nombre del lugar basado en las coordenadas de latitud y longitud
        function obtenerNombreLugar(lat, lon) {
            // URL para la geocodificación inversa utilizando el servicio de OpenStreetMap
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

            // Realizar una solicitud GET a la URL
            fetch(url)
                // Convertir la respuesta a formato JSON
                .then(response => response.json())
                // Procesar los datos de respuesta
                .then(data => {
                    // Extraer el nombre del lugar de los datos de respuesta
                    const nombreLugar = data.display_name;
                    // Llamar a la función para obtener la temperatura con el nombre del lugar y las coordenadas
                    obtenerTemperatura(lat, lon, nombreLugar);
                })
                // Capturar y manejar errores
                .catch(error => {
                    console.error('Error al obtener el nombre del lugar:', error);
                });
        }

        // Función para obtener la temperatura del lugar utilizando las coordenadas y el nombre del lugar
        function obtenerTemperatura(lat, lon, nombreLugar) {
            // URL para obtener los datos climáticos utilizando la API de Open Meteo
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

            // Realizar una solicitud GET a la URL
            fetch(url)
                // Convertir la respuesta a formato JSON
                .then(response => response.json())
                // Procesar los datos de respuesta
                .then(data => {
                    // Extraer la temperatura actual de los datos de respuesta
                    const temperatura = data.current.temperature_2m;
                    // Llamar a la función para mostrar el popup con el nombre del lugar y la temperatura
                    mostrarPopup(nombreLugar, temperatura);
                })
                // Capturar y manejar errores
                .catch(error => {
                    console.error('Error al obtener la temperatura:', error);
                });
        }

        // Función para mostrar un popup en el marcador con el nombre del lugar y la temperatura
        function mostrarPopup(nombreLugar, temperatura) {
            // Verificar si existe un marcador
            if (marker) {
                // Asociar un popup al marcador con el nombre del lugar y la temperatura
                marker.bindPopup(`Sitio: ${nombreLugar} - Temperatura: ${temperatura}°C`).openPopup();
            }
        }

        export { cargarMapa }

  