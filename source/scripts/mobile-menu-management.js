/**
 * Управление меню на мобильной версии страницы
 */
function mobileMenuManagement() {
  const header = document.querySelector('.header');
  const btn = document.querySelector('.nav__menu-button');
  const navList = document.querySelector('.nav__list');

  header.classList.remove('header--nojs');

  btn.addEventListener('click', () => {
    for (let i = 0; i < btn.children.length; i++) {
      if (btn.children[i].classList.contains('toggle')) {
        btn.children[i].classList.remove('toggle');
        addRemoveClass(btn, 'nav__menu-button--open', 'nav__menu-button--close');
      } else {
        btn.children[i].classList.add('toggle');
        addRemoveClass(btn, 'nav__menu-button--close', 'nav__menu-button--open');
      }
    }

    navList.classList.toggle('toggle');
  });
}

/** Добавить-удалить класс кнопке-гамбургеру для отображения открытия или закрытия меню
 * @param elem кнопка-гамбургер
 * @param removeClass удаляемый класс
 * @param addClass добавляемый класс
 */
function addRemoveClass(elem, removeClass, addClass) {
  elem.classList.remove(removeClass);
  elem.classList.add(addClass);
}

export {mobileMenuManagement};
