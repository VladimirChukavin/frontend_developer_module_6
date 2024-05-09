/**
 * Функция для скрытия маски в блоке map.
 */
const hideMask = () => {
  const mapMask = document.querySelector('.map__mask');
  mapMask.classList.add('toggle');
};

/**
 * Функция для вывода карты на страницу.
 */
const renderMap = () => {
  const map = L.map('map')
    .on('load', () => {
      hideMask();
    })
    .setView({
      lat: 59.968322,
      lng: 30.317359
    }, 18);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './images/map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.968322,
      lng: 30.317359
    },
    {
      icon: mainPinIcon,
      riseOnHover: true,
    },
  );

  mainPinMarker.addTo(map);
};

export {renderMap};
