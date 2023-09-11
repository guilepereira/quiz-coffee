const form = document.querySelector('form')
const result = document.querySelector('.result')
const score = document.querySelector('.score') // span
const feedback = document.querySelector('.feedback')

const correctAnswers = ['A', 'C', 'B', 'A']
let scoreCount = 0

const responseProcessing = event => {
  event.preventDefault()

  const userAnswers = [
    form.one.value,
    form.two.value,
    form.three.value,
    form.four.value
  ]

  userAnswers.forEach(answerValidator)
  showResult()
}

const answerValidator = (userAnswer, arrayPosition) => {
  const isSameAnswer = userAnswer === correctAnswers[arrayPosition]
  if(isSameAnswer) {
    scoreCount +=1
  }
}

const showResult = () => {
    
  switch (scoreCount) {
    case 0:
      feedbackStatus = 'Bora passar um cafézinho? 💀'
      break
    case 1:
      feedbackStatus = 'E esse café fraco? 🪫'
      break
    case 2:
      feedbackStatus = 'Cheirinho de café! 💘'
      break
    case 3:
      feedbackStatus = 'Esse tá forte! 💪🏽'
      break
    case 4:
      feedbackStatus = 'Perfeito igual fresco 🥹☕'
  }

  result.classList.remove('d-none')
  score.textContent = `${scoreCount} de 4 perguntas`
  feedback.textContent = `${feedbackStatus}`
}

form.addEventListener('submit', responseProcessing)