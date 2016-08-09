import app from './app';

$(document).ready(function() {
  window.Admin = window.Admin || app();
  window.Admin.init();
})
