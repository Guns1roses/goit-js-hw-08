// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// // Описан в документации
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryLightboxMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}"
    alt="${description}"
    title="${description}" />
    </a></div>
    `;
  })
  .join('');

const gallery = document.querySelector('div.gallery');

gallery.insertAdjacentHTML('beforeend', galleryLightboxMarkUp);
const galleryLightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

// console.log(galleryItems);

