window.addEventListener('load', () =>{

    //buttons
    const left = document.querySelector('.btn-left');
    const right = document.querySelector('.btn-right');

    //carusel

    const slider = document.querySelector('.carusel__slide');
    const images = document.querySelectorAll('.carusel__slide img');

    //counter 

    let counter = 0;
    const stepSize = images[0].clientWidth;

    slider.style.transform = 'translateX(' + `${-stepSize * counter}px`;


    //btn

    right.addEventListener('click', () => {
        if(counter >= images.length - 1) counter = - 1;
        slider.classList.add('transformAnimation')
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px`;
    });

    left.addEventListener('click', () => {
        if(counter <= 0) counter = images.length;
        slider.classList.add('transformAnimation')
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px`;
    });


});