async function fetchData(){
    let gamesList = ["Gta5","Batman","Minecraft","Ironman","Far Cry"];
    let randomNumber = Math.floor(Math.random()*5);
    console.log(randomNumber);
    if(randomNumber>=5){
        randomNumber = randomNumber - 5 ;
    }
    let response = await fetch('https://api.rawg.io/api/games?key=5c14b272c6594eb7857bb4a774e32aef&search='
    +gamesList[randomNumber]);
    let data = await response.json();
    console.log(data);
    let gameData = `<h1>${data.results[0].name}</h1>
    <section>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${data.results[0].background_image}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${data.results[1].background_image}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${data.results[2].background_image}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </section>`
    let gamesDisplay = document.getElementById('gamesDisplay');
    gamesDisplay.innerHTML = gameData;
}
fetchData();