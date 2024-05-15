// Crear mapa utilizando Leaflet.js
//  var map = L.map('map').setView([0, 0], 2);

// // Agregar capa de mapa base
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Manejar clics en el mapa
// map.on('click', function(e) {
//     obtenerTemperatura(e.latlng.lat, e.latlng.lng);
// });

// // Función para obtener la temperatura de la API
// function obtenerTemperatura(lat, lon) {
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const temperatura = data.current.temperature_2m;
//             mostrarPopup(lat, lon, temperatura);
//         })
//         .catch(error => {
//             console.error('Error al obtener la temperatura:', error);
//         });
// }

// // Función para mostrar un marcador con la temperatura en un popup
// function mostrarPopup(lat, lon, temperatura) {
//     var marker = L.marker([lat, lon]).addTo(map);
//     marker.bindPopup(`Temperatura: ${temperatura}°C`).openPopup();
// }




