let myAnimeLibrary = [
    {
        title: 'Eureka Seven',
        studio: 'Bones',
        episodes: 50,
        status: 'Finished',
        id: 1,
    },
    {
        title: 'Full Metal Alchemist: Brotherhood',
        studio: 'Bones',
        episodes: 64,
        status: 'Finished',
        id: 2,
    },
    {
        title: 'Jojo\'s Bizarre Adventure: The Animation',
        studio: 'David Production',
        episodes: 26,
        status: 'Finished',
        id: 3,
    }
];

// add series, save, cancel btn functions
const addAnime = document.querySelector('#addAnime');
addAnime.onclick = function() {
    addAnimeForm.style.display = 'block';
}

const title = document.getElementById('titleInput');
const studio = document.getElementById('studioInput');
const episodes = document.getElementById('episodeInput');
const status = document.getElementById('statusInput');

const save = document.getElementById('save');
save.addEventListener('click', () => {
    addAnimeToLibrary();
    addAnimeForm.style.display = 'none';
    title.value = '';
    studio.value = '';
    episodes.value = '';
    status.checked = false;
})

const cancel = document.getElementById('cancel');
cancel.onclick = function () {
    addAnimeForm.style.display = 'none';
    title.value = '';
    studio.value = '';
    episodes.value = '';
    status.checked = false;
}

// display library
const container = document.querySelector('#container');
myAnimeLibrary.forEach(element => {
    addAnimeCard(element)
    console.log(myAnimeLibrary)
})

// object creator
function Anime(title, studio, episodes, status, id) {
    this.title = title
    this.studio = studio
    this.episodes = episodes
    this.status = status
    this.id = id
}

// display visually in library after addition
function addAnimeCard(element) {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('animeName');
    const studio = document.createElement('p');
    const episodes = document.createElement('p');

    // container for status label/checkbox 
    const statusCard = document.createElement('div');
    statusCard.classList.add('statusCard');
    const statusLabel = document.createElement('p');
    statusLabel.innerText = 'Status: Finished?';
    const statusCheckBox = document.createElement('input');
    statusCheckBox.setAttribute('type', 'checkbox');
    statusCard.appendChild(statusLabel);
    statusCard.appendChild(statusCheckBox);
    if (element['status'] === 'Finished') {
        statusCheckBox.checked = true;
    } else {
        statusCheckBox.checked = false;
    }
    statusCheckBox.addEventListener('change', function() {
        if (statusCheckBox.checked) {
            element['status'] = 'Finished';
        } else {
            element['status'] = 'Unfinished';
        }
    })


    const remove = document.createElement('button');
    card.classList.add('card');
    card.setAttribute('id', element['id']);
    card.appendChild(title);
    card.appendChild(studio);
    card.appendChild(episodes);
    card.appendChild(statusCard);
    card.appendChild(remove);
    container.appendChild(card);
    // remove.innerText = 'Remove';
    remove.classList.add('removeAnime');
    title.innerText = element['title'];
    studio.innerText = `Studio: ${element['studio']}`;
    episodes.innerText = `Episodes: ${element['episodes']}`;

    remove.addEventListener('click', () => {
        removeFromLibrary(element);
        // console.log('it works');
        // console.log(myAnimeLibrary);
    })
}

// add to library and render to dom
function addAnimeToLibrary() {
    const titleInput = title.value;
    const studioInput = studio.value;
    const episodesInput = episodes.value;
    let statusInput = '';
    if (status.checked === true) {
        statusInput = 'Finished';
    } else {
        statusInput = 'Unfinished';
    }
    const id = myAnimeLibrary.length + 1;
    const anime = new Anime(titleInput, studioInput, episodesInput, statusInput, id);
    myAnimeLibrary.push(anime);
    addAnimeCard(anime);
}

// remove from library and dom
function removeFromLibrary(element) {
    if (confirm(`Remove ${element['title']} from library?`)) {
        // remove card from parent and remove object from array
        myAnimeLibrary.splice((element['id'] - 1), 1);
        container.removeChild(document.getElementById(element['id']));
    } else {
        // does nothing
    }
}

// search filter code block
function search() {
    let search, filter, container, card, h2, txtValue;
    search = document.getElementById('searchBar')
    filter = search.value.toUpperCase();
    container = document.getElementById('container');
    card = document.getElementsByClassName('card');
    h2 = container.getElementsByClassName('animeName');
    for (let i = 0; i < h2.length; i++) {
        txtValue = h2[i].textContent || h2[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}
