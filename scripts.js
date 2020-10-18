document.addEventListener('DOMContentLoaded', () => {
  let hamburger = document.querySelector('.hamburger')
  let navLinks = document.querySelector('.navLinks')
  
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'))

  let leftArrow = document.querySelector('.leftArrow');
  let rightArrow = document.querySelector('.rightArrow');
  let sliderContent = document.querySelector('.sliderContent');

  leftArrow.addEventListener('click', () => {
    if (sliderContent.classList.contains('second')) {
      sliderContent.classList.toggle('second')
      sliderContent.classList.toggle('first')
    }
    else if (sliderContent.classList.contains('third')) {
      sliderContent.classList.toggle('third')
      sliderContent.classList.toggle('second')
    }
  })

  rightArrow.addEventListener('click', () => {
    if (sliderContent.classList.contains('first')) {
      sliderContent.classList.toggle('first')
      sliderContent.classList.toggle('second')
    }
    else if (sliderContent.classList.contains('second')) {
      sliderContent.classList.toggle('second')
      sliderContent.classList.toggle('third')
    }
  })
})