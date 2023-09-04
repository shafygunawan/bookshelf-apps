/*!
 * Bookshelf Apps (https://shafygunawan.github.io/bookshelf-apps)
 * Copyright 2021 Shafy Gunawan (https://www.linkedin.com/in/shafygunawan/)
 * Licensed under MIT (https://github.com/shafygunawan/bookshelf-apps/blob/main/LICENSE)
 */
function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = document.getElementById("year").value;
  let isComplete = document.getElementById("isComplete").checked;

  const bookObject = createBookObject(title, author, year, isComplete);
  books.push(bookObject);

  updateBooksInStorage();
  document.dispatchEvent(new Event("newdata"));

  resetAllInput();
}

function resetAllInput() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
  document.getElementById("isComplete").checked = false;
  document.getElementById("search").value = "";
}
