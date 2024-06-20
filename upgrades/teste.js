let filho = document.querySelector('.filho')
let res = document.querySelector('#res')
filho.addEventListener('click', clicou)
filho.addEventListener('mouseout', saiu)
function clicou(){
    filho.style.background = '#9fd9ff'
    filho.innerHTML = 'clicou'
    filho.style.borderColor = 'deepskyblue'
}
function saiu() {
    filho.style.background = 'red'
    filho.innerHTML = 'clique'
    filho.style.borderColor = 'brown'
}