// Task 2
let getId = id => document.getElementById(id);

getId('inputBtn').onclick = () => {
  go();
  getId('form').reset();
}

async function movieShow() {
  let movieValue = getId('inputValue').value;
  let api = '8b46df00';

  if (movieValue.length < 3) {
    getId('modal').style.backgroundColor = '#000000c7';
    getId('modal').style.zIndex = 1;
    getId('movie').style.display = 'block';
    let box = getId('movie');
    box.style.zIndex = 3;
  }

  await fetch(`http://www.omdbapi.com/?apikey=${api}&s=${movieValue}`)
    .then(response => response.json())
    .then((jsonData) => {
      let movies = jsonData.Search;
      let output = '';
      movies.map((element, index) => {
        output += `
            <div class="col">
              <div class="box">
                <img src="${element.Poster}">
                  <h4>${element.Title}</h4>
                  <br>
                  <h5>movie<h5/>
                  <h5>${element.Year}</h5>
                  <br>
                  <button onclick="movieDetails('${element.imdbID}')">More details</button>
              </div>
            </div>
            `
      })
      let box = getId('infoBox');
      box.innerHTML = output;
    })

}
async function movieDetails(id) {
  let api = '8b46df00';
  await fetch(`http://www.omdbapi.com/?apikey=${api}&i=` + id)
    .then(response => response.json())
    .then(response => {
      let res = response;
      let ratings = response.Ratings;
      let str = '';
      ratings.map((elem) => {
        str += `<p>${elem.Source} ${elem.Value}</p>`;
      })
      let output = '';
      output += `
        <div class="detalisBox">
            <div class="leftBox">
              <img src="${res.Poster}">
            </div>
            <div class="rightBox">
              <div class="name">
                <h2>${res.Title}</h2>
              </div>
              <div class="info">
                <p>${res.Rated} ${res.Year} ${res.Genre}</p>
                <p>${res.Plot}</p>
                <p><span>Written by:</span> ${res.Writer}</p>
                <p><span>Directed by:</span> ${res.Director}</p>
                <p><span>Starring:</span> ${res.Actors}</p>
                <p><span>BoxOffice:</span> ${res.BoxOffice}</p>
                <p><span>Awards:</span> ${res.Awards}</p>
                <p><span>Ratings</span>: ${str}</p>
              </div>
            </div>

        </div>
        `
      getId('modal').style.backgroundColor = '#000000c7';
      getId('modal').style.zIndex = 1;
      getId('detalisBox').style.display = 'block';
      let box = getId('detalisBox');
      box.style.zIndex = 3;
      box.innerHTML = output;
    })
}

getId('modal').onclick = () => {
  getId('modal').style.backgroundColor = '#fff';
  getId('modal').style.zIndex = -1;
  getId('detalisBox').style.display = 'none';
  getId('movie').style.display = 'none';
}

async function go() {
  let show = await movieShow();
  // let detalis = await movieDetails();
  // console.log(detalis);
}