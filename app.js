
const api = 'https://www.omdbapi.com/?i=tt3896198&apikey=f0b45b11&t=';
const notfound = document.getElementById('notfound');
const found = document.getElementById('found');
const welcome = document.getElementById('welcome');



function searchmovie() {
  const input = document.getElementById('moviename').value.trim();

  if (!input) {
    alert("Please enter a movie name.");
    return;
  }

  const query = api + input;

  const movieName = document.getElementById('title');
  const genre = document.getElementById('genre');
  const date = document.getElementById('date');
  const actors = document.getElementById('actors');
  const collection = document.getElementById('collection');
  const awards = document.getElementById('awards');
  const directors = document.getElementById('directors');
  const writer = document.getElementById('writer');
  const rating = document.getElementById('rating');
  const poster = document.getElementById('poster');

  fetch(query)
    .then((res) => res.json())
    .then((data) => {
      if (data.Error) {
        notfound.classList.remove('d-none');
        found.classList.add('d-none');
        welcome.classList.add('d-none');
        document.getElementById("namdfawde").innerText = input;
        movieName.innerText = '';
        poster.src = '';
      } else {
        notfound.classList.add('d-none');
        welcome.classList.add('d-none');
        found.classList.remove('d-none');

        movieName.innerText = data.Title || 'N/A';
        genre.innerText = data.Genre || 'N/A';
        date.innerText = data.Released || 'N/A';
        actors.innerText = data.Actors || 'N/A';
        collection.innerText = data.BoxOffice || 'N/A';
        awards.innerText = data.Awards || 'N/A';
        directors.innerText = data.Director || 'N/A';
        writer.innerText = data.Writer || 'N/A';
        rating.innerText = data.imdbRating || 'N/A';
        poster.src = data.Poster || '';
      }
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
      alert("Network error. Please try again later.");
    });
}
