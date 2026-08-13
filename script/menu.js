const btns = document.querySelectorAll('.btn')
const menu =document.querySelector('.menu')
const meusPlanos =document.querySelector('.meus-planos')
const leia =document.querySelector('.leia')

const btnVoltar = document.querySelectorAll('.btnVoltar')
const audioMeusPlanos = document.querySelector('.audioMeusPlanos')

console.log('comecou')
let posicaoKassio = 0

//meus planos 0
btns[0].addEventListener('click',()=>{
    posicaoKassio = 0
    menu.style.display = 'none'
    meusPlanos.style.display = 'block'
    parte1.style.display = 'block'
    parte2.style.display = 'none'
    audioMeusPlanos.currentTime = 29
    audioMeusPlanos.play()
    
})

//Leia 1
btns[1].addEventListener('click',()=>{
    menu.style.display = 'none'
    leia.style.display = 'block'
})


// jogo 2
btns[2].addEventListener('click',()=>{
    window.location.href = '../page/jogo.html'
})
console.log(btns)


// Site anterior
btns[3].addEventListener('click',()=>{
    window.location.href = '../antigo/page/inicio.html'
})



// btn bloqueado
btns[4].addEventListener('click',()=>{
    window.alert(
`╔══════════════════════╗
║   ACESSO BLOQUEADO  ║
╚══════════════════════╝
Este nível ainda está bloqueado.

Será desbloqueado somente
depois do nosso casamento.

♡ Aguarde... ♡`
)
})

//botão voltar para o menu
btnVoltar[0].addEventListener('click',voltar)
btnVoltar[1].addEventListener('click',voltar)

function voltar(){
    
    menu.style.display = 'block'
    meusPlanos.style.display = 'none'
    leia.style.display = 'none'
    audioMeusPlanos.pause()
}


const avancar = document.querySelector('.casarAvancar')
const voltarKassio = document.querySelector('.casarVoltar')
const kassioCasar = document.querySelector('.kassiocasar')
const jadnaCasar = document.querySelector('.jadnacasar')



const parte1 = document.querySelector('.parte1')
const parte2 = document.querySelector('.parte2')

avancar.addEventListener('click',()=>{
    const confimador = jadnaCasar.offsetLeft - jadnaCasar.offsetWidth/4
    posicaoKassio = posicaoKassio +5
    kassioCasar.style.left = `${posicaoKassio}px`
    if(posicaoKassio>confimador){
    posicaoKassio = 0
    parte1.style.display = 'none'
    parte2.style.display = 'block'
    
}

})

voltarKassio.addEventListener('click',()=>{
    
    posicaoKassio = posicaoKassio -20
    kassioCasar.style.left = `${posicaoKassio}px`

})



console.log(confimador)


