const btnPrev = document.querySelector('#prev-btn')
const btnNext = document.querySelector('#next-btn')
const numbers = document.querySelectorAll('.number')
const progressBar = document.querySelector('.progress-bar')

let currentNumber = 1

btnNext.addEventListener('click', () => {
  currentNumber++

  if (currentNumber > numbers.length) {
    currentNumber = numbers.length
  }

  paintDOM()
})

btnPrev.addEventListener('click', () => {
  currentNumber--

  if (currentNumber < 1) {
    currentNumber = 1
  }

  paintDOM()
})

function paintDOM() {
  // Numbers functionality
  numbers.forEach((num) => {
    if (num.innerText <= currentNumber) {
      num.classList.add('current')
    } else {
      num.classList.remove('current')
    }
  })

  // Button functionality
  if (currentNumber === 1) {
    btnPrev.disabled = true
    btnNext.disabled = false
  } else if (currentNumber === numbers.length) {
    btnPrev.disabled = false
    btnNext.disabled = true
  } else {
    btnPrev.disabled = false
    btnNext.disabled = false
  }

  // Progress bar functionality
  const currents = document.querySelectorAll('.current')
  const progressBarWidth = ((currents.length - 1) / (numbers.length - 1)) * 100
  progressBar.style.width = `${progressBarWidth}%`
}
