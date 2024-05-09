const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const linkContainer = document.getElementById('linkContainer');

searchButton.addEventListener('click', () => {
  const location = locationInput.value.trim();
  if (location) {
    const shareLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    displayLink(shareLink);
  } else {
    alert('Please enter a location.');
  }
});

function displayLink(link) {
  linkContainer.innerHTML = `<p>Share Location Link: <a href="${link}" target="_blank">${link}</a></p>`;
}