document.addEventListener('DOMContentLoaded', function() {
    const tarjetas = document.querySelectorAll('.artista-card');
    
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            tarjetas.forEach(t => {
                if (t !== this) {
                    t.classList.remove('active');
                }
            });
            this.classList.toggle('active');
        });
    });
});