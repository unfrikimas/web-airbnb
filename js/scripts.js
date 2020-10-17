

document.addEventListener('DOMContentLoaded', () => {

    // Movimiento imagen Hero
    const imagenHero = document.querySelector('.hero');

    let i = 0;
    let tiempo = 0;
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval(() => {
        imagenHero.style.backgroundPositionY = '-'+tiempo+'px';

        if(tiempo > 40) {
            tiempo = 0;
            imagenHero.style.transition = "all .3s ease-in-out";
            imagenHero.style.backgroundImage = "url(img/"+imagenes[i]+")";

            if(i === imagenes.length - 1) {
                i = 0;
            } else {
                i++
            }
        }
        tiempo++;

    }, 100);


    // Footer flotante
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', e => {
        e.preventDefault();

        const footer = document.querySelector('#footer');

        if(footer.classList.contains('activo')) {
            
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerHTML = 'Idioma y moneda';
        
        } else {
        
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerHTML = 'X Cerrar';
        
        }
    })

});