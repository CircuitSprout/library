document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const yearInput = document.getElementById('year');
    const bookDisplay = document.getElementById('bookDisplay');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

    const listItem = document.createElement('li');
    listItem.textContent = 'Title: ${titleInput.value}, Author: ${authorInput.value}, Year: ${yearInput.value}';

    bookDisplay.appendChild(listItem);

        titleInput.value= '';
        authorInput.value = '';
        yearInput.value = '';
    });
});