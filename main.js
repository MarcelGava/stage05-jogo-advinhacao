let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let xAttempts = 1

console.log(randomNumber)

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enter)

//função callback
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão(ou seja, não envie o formulário)

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
  } else if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert('Escolha um número entre 0 e 10')
    xAttempts--
  } else if (isNaN(inputNumber.value)) {
    alert('Apenas números são válidos. Insira um número.')
    xAttempts--
  }

  inputNumber.value = ''
  xAttempts++

  console.log(xAttempts)
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
