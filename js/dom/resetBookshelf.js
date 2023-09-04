/*!
 * Bookshelf Apps (https://shafygunawan.github.io/bookshelf-apps)
 * Copyright 2021 Shafy Gunawan (https://www.linkedin.com/in/shafygunawan/)
 * Licensed under MIT (https://github.com/shafygunawan/bookshelf-apps/blob/main/LICENSE)
 */
function resetBookshelfConfirmation() {
  const modal = createConfirmationElements({
    headerText: "Reset Bookshelf",
    bodyText: "Are you sure you want to delete all the books on the bookshelf?",
    confirmButton: createConfirmResetBookshelfButton(),
    cancelButton: createCancelResetBookshelfButton(),
  });

  document.body.append(modal);
  showConfirmationElements(modal);
}

function createConfirmResetBookshelfButton() {
  return createButtonElements({
    content: "Reset",
    cssClass: ["button", "button--red", "modal__confirm"],
    clickEventListener: () => {
      books = [];
      updateBooksInStorage();
      document.dispatchEvent(new Event("newdata"));
      deleteConfirmationElements();
    },
  });
}

function createCancelResetBookshelfButton() {
  return createButtonElements({
    content: "Cancel",
    cssClass: ["button", "button--blue", "modal__cancel"],
    clickEventListener: () => {
      deleteConfirmationElements();
    },
  });
}
