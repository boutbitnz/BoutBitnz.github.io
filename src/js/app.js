if ('serviceWorker' in navigator) {
  navigator.serviceWorker
          .register('./sw.js')
          .then(function() { console.log('Service Worker Registered'); });
}

// progressive web application | https://auth0.com/blog/introduction-to-progressive-apps-part-one/
// Is basically a website built using modern web technologies
// but acts and feels like a mobile app.

// The piece of code above checks if the browser supports service workers,
// and if it does, registers the service worker file. Once the service
// worker is registered, we start to experience it's
// lifecycle the moment a user visits the page for the first time.Introduction to Progressive Web Apps
