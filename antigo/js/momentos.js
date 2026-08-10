let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

const audio = document.querySelector('#audio');
const botoes = document.querySelectorAll('.audioNetflix');

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {

        if (audio.paused) {
            audio.play();

            // TODOS viram PAUSE
            botoes.forEach(b => b.innerHTML = 'PAUSE ||');

        } else {
            audio.pause();

            // TODOS viram PLAY
            botoes.forEach(b => b.innerHTML = 'PLAY ▶');
        }

let autoSlide = setInterval(nextSlide, 7000)

    function nextSlide() {
        moveSlider('next')
    }

    // reset quando clicar
    nextBtn.onclick = function() {
        moveSlider('next')
        resetAutoSlide()
    }

    prevBtn.onclick = function() {
        moveSlider('prev')
        resetAutoSlide()
    }

    function resetAutoSlide() {
        clearInterval(autoSlide)
        autoSlide = setInterval(nextSlide, 7000)
    }

        });
});

