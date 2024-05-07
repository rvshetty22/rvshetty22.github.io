/* Rishi Shetty - May 5, 2024*/

const images = document.querySelectorAll('.enlarge');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('enlarge');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('enlarge');
    });
});
