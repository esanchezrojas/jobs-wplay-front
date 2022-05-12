// /src/assets/configurar-tooltip.js

function configurarTooltips() {
    // $('[data-toggle="tooltip"]').tooltip();

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    
}