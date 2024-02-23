const searchIcon = document.querySelector('.icon-search')
searchIcon.addEventListener('click', () => {
  const headerInput = document.querySelector('.header__input')
  headerInput.classList.toggle('active')
})
console.log(searchIcon)
