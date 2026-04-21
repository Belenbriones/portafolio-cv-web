let currentPhotoIndex = 0;

function moveGallery(direction) {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide-photo');
    const totalSlides = slides.length;

    currentPhotoIndex += direction;

    // Si llega al final, vuelve al principio y viceversa
    if (currentPhotoIndex >= totalSlides) currentPhotoIndex = 0;
    if (currentPhotoIndex < 0) currentPhotoIndex = totalSlides - 1;

    const offset = -currentPhotoIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}