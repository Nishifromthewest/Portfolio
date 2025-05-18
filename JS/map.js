// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the map container element
    const mapElement = document.getElementById('map');
    
    // Only initialize the map if the element exists
    if (mapElement) {
        // Initialize the map with Groenplaats coordinates
        const map = L.map('map', {
            center: [51.2175, 4.4021], // Groenplaats coordinates
            zoom: 15,
            zoomControl: true,
            scrollWheelZoom: false // Disable scroll wheel zoom to prevent accidental zooming
        });

        // Add the OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker at Groenplaats
        const marker = L.marker([51.2175, 4.4021]).addTo(map);
        
        // Add a popup to the marker
        marker.bindPopup(`
            <div style="text-align: center;">
                <strong>Groenplaats</strong><br>
                Antwerp, Belgium
            </div>
        `).openPopup();

        // Add a circle to highlight the area
        const circle = L.circle([51.2175, 4.4021], {
            color: '#ff4444',
            fillColor: '#ff4444',
            fillOpacity: 0.1,
            radius: 100
        }).addTo(map);

        // Ensure the map is properly sized
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
}); 