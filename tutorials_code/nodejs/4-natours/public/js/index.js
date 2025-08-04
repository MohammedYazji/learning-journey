/*eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const mapBox = document.getElementById('map');
  const loginForm = document.querySelector('.form');
  const logOutBtn = document.querySelector('.nav__el--logout');

  // DELEGATION
  if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
  }

  // make event listener when the form submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }

  // Logout button event listener
  if (logOutBtn) {
    logOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }
});
