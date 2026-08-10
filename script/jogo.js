const moto = document.querySelector('.moto')
const dog = document.querySelector('.dog')
const start = document.querySelector('.start')
const pular = document.querySelector('.pular')
const pontos = document.querySelector('.pontos')
const memorias = document.querySelector('.memorias')
const gameOver = document.querySelector('.game-over')
const atualizar = document.querySelector('.atualizar')
const win = document.querySelector('.win')


const audioDragonball = document.querySelector('.dragonball')
const audioPulo = document.querySelector('.pulo-moto')
const audioGameOver = document.querySelector('.gameOver')

let contador = 0

start.addEventListener('click',()=>{
    audioDragonball.currentTime = 19
    audioDragonball.volume=0.5
    audioDragonball.play()
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
    
    audioPulo.currentTime =0.75
    audioPulo.play()
    if(contador ===10){
        dog.style.animation = 'dog 1s linear infinite';
    }
    if(contador ===17){
        dog.style.animation = 'dog 0.9s linear infinite';
    }
    
    
    if(contador==19){
        dog.style.display='none'
        moto.classList.add('end')
        pular.style.display ='none'
        
        win.style.display ='block'
        audioDragonball.volume =1
        setInterval(()=>{
            memorias.style.display ='block'
        },3000)

    }
}

let passou = false
const loop = setInterval(() => {

    const dogPosition = dog.offsetLeft
    const motoPosition = +window.getComputedStyle(moto).bottom.replace('px','')


    if(dogPosition<71 && !passou){
        contador++
        pontos.textContent =contador
        passou =true
    }
    if(dogPosition>71){
        passou=false
    }
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
        audioDragonball.pause()
        audioGameOver.play()
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