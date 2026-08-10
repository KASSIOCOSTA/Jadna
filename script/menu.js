const btns = document.querySelectorAll('.btn')
const menu =document.querySelector('.menu')
const meusPlanos =document.querySelector('.meus-planos')
const leia =document.querySelector('.leia')

const btnVoltar = document.querySelectorAll('.btnVoltar')


//meus planos 0
btns[0].addEventListener('click',()=>{
    menu.style.display = 'none'
    meusPlanos.style.display = 'block'
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
}