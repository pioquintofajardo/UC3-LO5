
const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next  element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous  element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +='<br/>Too cool for everyone else!';

//add books
const addform = document.forms('add-book');
addform.addEventListener('submit',function(e)

function sltAll(){
    const Books = document.querySelectorAll("#Books li.ly");
 
 Array.from(Books).forEach(function(Books){
     books.innerHTML = book.textContent.toUpperCase();
   
 })

}

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const ins = e.target.value.toLowerCase();
    const booksNames = addbooks.getElementsByTagName('li');
    Array.from(bookNames).forEach(function(bookName){
        const specificName = bookName.textContent;
        if(specificName.toLowerCase().indexOf(ins) != -1){
            bookName.style.display = 'block';
        } else{
            bookName.style.display = 'none';
        }
    });
});
