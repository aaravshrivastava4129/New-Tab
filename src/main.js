const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const infoBox = document.querySelector(".info");


fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic/")
  .then(response => response.json())
  .then(data => {
    const apod = data[0];

    document.querySelector("#background").style.backgroundImage =
      `url("${apod.hdurl}")`;

    infoBox.addEventListener('click', () => {
      window.open(apod.permalink, '_blank', 'noopener,noreferrer');
    });
  });
