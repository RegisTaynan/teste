let pai = document.querySelector('.pai')
let filho = document.querySelector('.filho')
filho.addEventListener('click', clicou)
filho.addEventListener('mouseout', saiu)
//Adicionando eventos para a caixa
function clicou(){
    filho.style.background = '#9fd9ff';
    filho.innerHTML = 'Clicou';
    filho.style.borderColor = 'deepskyblue';
}   //Função de quando o mouse clica na caixa
function saiu() {  
    filho.style.background = 'green'
    filho.innerHTML = 'Saiu'
    filho.style.borderColor = '#164416'
    setTimeout(() => {
        filho.style.background = 'red'
        filho.innerHTML = 'Clique'
        filho.style.borderColor = 'brown'
    }, 3500);   // tempo em miléssimos (3500ms = 3,5s)
    
}   //função de quando o mouse sai da caixa e um timer de 3 segundos