// Initialize Leaflet Map
document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Initialize the map
        const map = L.map('map').setView([51.2175, 4.4021], 15); // Groenplaats coordinates

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker at Groenplaats
        const marker = L.marker([51.2175, 4.4021]).addTo(map);
        marker.bindPopup("<b>Groenplaats</b><br>Antwerp, Belgium").openPopup();

        // Add a circle to highlight the area
        const circle = L.circle([51.2175, 4.4021], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: 100
        }).addTo(map);
    }
}); 