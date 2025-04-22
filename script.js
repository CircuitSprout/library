document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const inputTitle = document.getElementById('title');
    const inputAuthor = document.getElementById('author');
    const inputYear = document.getElementById('year');
    const inputGenre = document.getElementById('genre');
    const inputPages = document.getElementById('pages');
    const bookDisplay = document.getElementById('bookDisplay');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Create a new list item for the book
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${inputTitle.value}, Author: ${inputAuthor.value}, Year: ${inputYear.value}, Genre: ${inputGenre.value}, Pages: ${inputPages.value}`;

        // Create a "Mark as Read" button
        const readButton = document.createElement('button');
        readButton.textContent = 'Mark as Read';
        readButton.style.marginLeft = '10px';

        // Add an event listener to toggle the read status
        readButton.addEventListener('click', () => {
            if (readButton.textContent === 'Mark as Read') {
                readButton.textContent = 'Mark as Unread';
                listItem.style.textDecoration = 'line-through'; // Strike-through for "Read"
            } else {
                readButton.textContent = 'Mark as Read';
                listItem.style.textDecoration = 'none'; // Remove strike-through for "Unread"
            }
        });

        // Append the button to the list item
        listItem.appendChild(readButton);

        // Append the list item to the book display
        bookDisplay.appendChild(listItem);

        // Clear the input fields
        inputTitle.value = '';
        inputAuthor.value = '';
        inputYear.value = '';
        inputGenre.value = '';
        inputPages.value = '';
    });
});