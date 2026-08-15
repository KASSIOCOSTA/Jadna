const contanier = document.querySelector('.container')
const modal = document.querySelector('#modal')
const imagemModal = document.querySelector("#imagemModal")
const fechar = document.querySelector('#fechar')

contanier.addEventListener('click',(event)=>{
    if(event.target.tagName ==='IMG'){
        const src = event.target.src
        imagemModal.src = src
        modal.style.display = 'flex'
    }
})
fechar.addEventListener('click',()=>{
    modal.style.display ='none'
})