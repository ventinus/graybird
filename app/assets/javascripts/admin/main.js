import app from './app';

document.addEventListener('turbolinks:load', () => {
  window.Admin = window.Admin || app();
  window.Admin.init();
})
