document.addEventListener("DOMContentLoaded", function () {
    var mapContainer = document.getElementById("map"); // Vérifie si l'élément existe
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div class="embed-map-responsive">
                <iframe 
                    src="https://maps.google.com/maps?hl=en&q=La%20Carri%C3%A8re%20Bioul&t=&z=11&ie=UTF8&iwloc=B&output=embed"
                    frameborder="0" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        `;
    }
});
