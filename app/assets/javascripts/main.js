import app from './app';

document.addEventListener('turbolinks:load', () => {
  window.Project = window.Project || app();
  window.Project.init();
  return;
});

