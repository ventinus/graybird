import app from './app';

$(document).ready(() => {
  window.Beekman = window.Beekman || app();
  window.Beekman.init();
  return;
});

