let sectionOpen = document.querySelectorAll('.pricing-table__section')
let sectionRow = document.querySelectorAll(' .pricing-table__row--gray .pricing-table__column--title')
let expandArrow = document.querySelectorAll('.bi-chevron-down')
let collapseArrow = document.querySelectorAll('.bi-chevron-up')

for (let i = 0; i < sectionOpen.length; i++) {
  sectionRow[i].addEventListener('click', function () {
    sectionOpen[i].classList.toggle('pricing-table__section--open')
    expandArrow[i].classList.toggle('bi-chevron-down--active')
    collapseArrow[i].classList.toggle('bi-chevron-up--active')
  })
}
