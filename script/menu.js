const btns = document.querySelectorAll('.btn')
const menu =document.querySelector('.menu')
const meusPlanos =document.querySelector('.meus-planos')
const leia =document.querySelector('.leia')


//meus planos
btns[0].addEventListener('click',()=>{
    menu.style.display = 'none'
    meusPlanos.style.display = 'block'
})

//Leia
btns[1].addEventListener('click',()=>{
    menu.style.display = 'none'
    leia.style.display = 'block'
})


// jogo
btns[2].addEventListener('click',()=>{
    window.location.href = '../page/jogo.html'
})
console.log(btns)