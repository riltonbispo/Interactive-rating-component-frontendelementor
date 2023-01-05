const main = document.querySelector('.main')
const submitted = document.querySelector('.submitted')
const button = document.querySelector('.submit')
const nota = document.getElementById('rate')
const rates = document.querySelectorAll('.btn')
const back = document.querySelector('.back')

button.addEventListener('click', () =>{
  submitted.classList.remove('some')
  main.classList.add('some')
})

back.addEventListener('click', () =>{
  submitted.classList.add('some')
  main.classList.remove('some')
})

rates.forEach((rate) =>{
  rate.addEventListener('click',() =>{
    nota.innerHTML = ' ' +  rate.innerHTML + " "  
  })
})