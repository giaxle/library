let myAnimeLibrary = [
    {
        title: 'Eureka Seven',
        studio: 'Bones',
        episodes: 50,
        status: 'Finished',
        id: 1,
    }
];

const addAnime = document.querySelector('#addAnime');
addAnime.addEventListener('click', () => {
    addAnimeToLibrary();
})

// display library 
const container = document.querySelector('#container');
myAnimeLibrary.forEach(element => {
    addAnimeCard(element)
    console.log(myAnimeLibrary)
})


function Anime(title, studio, episodes, status, id) {
    this.title = title
    this.studio = studio
    this.episodes = episodes
    this.status = status
    this.id = id
    this.info = () => {
        console.log(title, studio, episodes, status, id);
    }
}

function addAnimeToLibrary() {
    const title = prompt("Enter a title: ")
    const studio = prompt("Enter studio name: ")
    const episodes = prompt("Enter number of episodes: ")
    const status = prompt("Finished or unfinished?: ")
    const id = myAnimeLibrary.length + 1;
    const anime = new Anime(title, studio, episodes, status, id);
    myAnimeLibrary.push(anime);
    addAnimeCard(anime);
}

// display visually in library after addition
function addAnimeCard(element) {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const studio = document.createElement('p');
    const episodes = document.createElement('p');
    const status = document.createElement('p');
    const remove = document.createElement('button');
    card.classList.add('card');
    card.appendChild(title);
    card.appendChild(studio);
    card.appendChild(episodes);
    card.appendChild(status);
    card.appendChild(remove);
    container.appendChild(card);
    remove.innerText = 'Remove';
    remove.setAttribute('id', element['id']);
    remove.classList.add('removeAnime');
    title.innerText = element['title'];
    studio.innerText = `Studio: ${element['studio']}`;
    episodes.innerText = `Episodes: ${element['episodes']}`;
    status.innerText = `Status: ${element['status']}`;

    remove.addEventListener('click', () => {
        console.log('it works');
    })
}

function removeFromLibrary(element) {
    myAnimeLibrary.splice()
}