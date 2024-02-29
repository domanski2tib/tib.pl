function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);






(function() {
  'use strict';

  // Funkcja zliczająca wyświetlenia
  function countViews() {
      var count = localStorage.getItem('views');
      if (count === null) {
          count = 0;
      }
      count++;
      localStorage.setItem('views', count);
      return count;
  }

  // Funkcja wyświetlająca licznik na stronie
  function displayCounter() {
      var counterElement = document.getElementById('counter');
      var views = countViews();
      counterElement.textContent = 'Wyświetleń: ' + views;
  }

  // Funkcja aktualizująca czas
  function updateClock() {
      var now = new Date();
      var hours = now.getHours().toString().padStart(2, '0');
      var minutes = now.getMinutes().toString().padStart(2, '0');
      var seconds = now.getSeconds().toString().padStart(2, '0');
      var clockElement = document.getElementById('clock');
      clockElement.textContent = hours + ':' + minutes + ':' + seconds;
  }

  // Wywołanie funkcji do wyświetlenia licznika i zegara po załadowaniu strony
  window.onload = function() {
      displayCounter();
      setInterval(updateClock, 1000); // Aktualizacja zegara co sekundę
  };
})();






