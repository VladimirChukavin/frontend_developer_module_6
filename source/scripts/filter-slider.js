/**
 * Функция для вывода на страницу в блоке каталога фильтра для выбора диапазона цен.
 */
const filterSlider = () => {
  const slider = document.querySelector('#filter-slider');
  const minPrice = document.querySelector('#price-lower');
  const maxPrice = document.querySelector('#price-upper');
  const reset = document.querySelector('.filter__button--reset');

  noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    step: 1,
    limit: 1000,
    range: {
      'min': 0,
      'max': 1030
    }
  });

  slider.noUiSlider.on('update', (values, handle) => {

    const value = values[handle];

    if (handle) {
      maxPrice.value = Math.round(value);
    } else {
      minPrice.value = Math.round(value);
    }
  });

  minPrice.addEventListener('change', () => {
    slider.noUiSlider.set([this.value, null]);
  });

  maxPrice.addEventListener('change', () => {
    slider.noUiSlider.set([null, this.value]);
  });

  reset.addEventListener('click', () => {
    slider.noUiSlider.set([0, 900]);
  });

};

export {filterSlider};
