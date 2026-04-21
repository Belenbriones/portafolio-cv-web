document.addEventListener('DOMContentLoaded', () => {
    const carruselInner = document.getElementById('carruselInner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const totalSlides = 2; // Tenemos dos grupos (slides)

    function updateCarrusel() {
        // Mueve el contenedor interior en múltiplos de -50% (porque hay 2 slides y el inner es 200% de ancho)
        const offset = currentIndex * -50;
        carruselInner.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        // Incrementa el índice, pero si llega al final, vuelve a 0 (carrusel infinito opcional, aquí solo va y vuelve)
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarrusel();
    });

    prevBtn.addEventListener('click', () => {
        // Decrementa el índice, volviendo al final si está en el principio
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarrusel();
    });
});