const moto = document.querySelector('.moto')
const dog = document.querySelector('.dog')
const start = document.querySelector('.start')
const pular = document.querySelector('.pular')
const pontos = document.querySelector('.pontos')
const memorias = document.querySelector('.memorias')
const gameOver = document.querySelector('.game-over')
const atualizar = document.querySelector('.atualizar')
const win = document.querySelector('.win')
const audioPulo = document.querySelector('.pulo-moto')
let contador = 0

start.addEventListener('click',()=>{
    start.style.display = 'none'
    pular.style.display = 'block'
    setTimeout(()=>{
        dog.classList.add('correr')
    },1500)
})
const jump = ()=>{
    moto.classList.add('jump')
    setTimeout(()=>{
        moto.classList.remove('jump')
    },500)
    audioPulo.currentTime =0
    audioPulo.play()
    contador++
    pontos.textContent = contador

    if(contador==10){
        dog.style.display='none'
        moto.classList.add('end')
        pular.style.display ='none'
        
        win.style.display ='block'
        setInterval(()=>{
            memorias.style.display ='block'
        },3000)

    }
}
const loop = setInterval(() => {

    const dogPosition = dog.offsetLeft
    const motoPosition = +window.getComputedStyle(moto).bottom.replace('px','')

    if(dogPosition<=75 && dogPosition>0 && motoPosition <50){
        dog.style.animation = 'none'
        dog.style.left = `${dogPosition}px`
        moto.style.bottom = `${motoPosition}px`
        contador= 0
        pontos.textContent = contador
        dog.src ='../img/sepultura.png'
        gameOver.style.display ='block'
        moto.classList.add('sair')
        pular.style.display ='none'
        atualizar.style.display= 'block'
        clearInterval(loop)
    }
    
}, 10);

function reload(){
    location.reload()
}

atualizar.addEventListener('click', reload)
pular.addEventListener('click',jump)
memorias.addEventListener('click',()=>{
    window.location.href ="../page/memorias.html"
})