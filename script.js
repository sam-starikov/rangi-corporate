/* header input */
const searchIcon = document.querySelector('.icon-search')
const headerInput = document.querySelector('.header__input')
searchIcon.addEventListener('click', () => {
  headerInput.classList.toggle('active')
})
