import app from './app';

$(document).ready(() => {
  window.Project = window.Project || app();
  window.Project.init();
  return;
});

