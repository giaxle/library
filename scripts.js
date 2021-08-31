let myAnimeLibrary = [
    {
        title: 'Eureka Seven',
        author: ''

    }
];

function Anime(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = () => {
        console.log(title, author, pages, status);
    }
}

function addAnimeToLibrary() {
    const title= prompt("Enter a title: ")
    const studio = prompt("Enter author name: ")
    const episodes = prompt("Enter number of pages: ")
    const status = prompt("Read? yes or no: ")
    const anime = new Book(title, studio, episodes, status);
    myLibrary.push(book);
    console.log(myLibrary);

}

const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', () => {
    addBookToLibrary();
})