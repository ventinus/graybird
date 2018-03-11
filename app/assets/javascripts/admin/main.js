import app from './app';

document.addEventListener('turbolinks:load', () => {
  window.ADMIN = window.ADMIN || app();
  window.ADMIN.init();
})
