
document.getElementById('submit-button').addEventListener('click', function() {

})

function appendBookToDom(title, author, cover) {
    const titleH1 = document.createElement('h3')
    titleH1.textContent = title
    document.querySelector('#display-book').appendChild(titleH1)

    const coverImg = document.createElement('img')
    coverImg.src = cover
    coverImg.alt = title
    document.querySelector('#display-book').appendChild(coverImg)

    const authorDiv = document.createElement('div')
    authorDiv.textContent = `By ${author}`
    document.querySelector('#display-book').appendChild(authorDiv)

}

function fetchBook(genre) {
    fetch(`http://openlibrary.org/subjects/${genre}.json`) 
    .then(res => res.json()) 
    .then((json) => {
    //do anything with the json
    const randomBook = getRandomBook(json.works)

    const title = randomBook.title;
    const author = getAuthorString(randomBook)
    const cover = `http://covers.openlibrary.org/b/id/${randomBook.cover_id}-M.jpg`;
    console.log(title)
     console.log(author)
    console.log(cover)

    appendBookToDom(title, author, cover);


    })
    
}


function getRandomBook(books) {
    const randomIndex = Math.floor(Math.random() * books.length)
    return books[randomIndex]
}

function getAuthorString(book) {
    //TODO handle multple authors better
   return book.authors[0].name
}
let genre = 'mystery';
const book = fetchBook(genre);

