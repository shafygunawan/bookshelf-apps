/*!
 * Bookshelf Apps (https://shafygunawan.github.io/bookshelf-apps)
 * Copyright 2021 Shafy Gunawan (https://www.linkedin.com/in/shafygunawan/)
 * Licensed under MIT (https://github.com/shafygunawan/bookshelf-apps/blob/main/LICENSE)
 */
function createButtonElements({ content, cssClass, clickEventListener }) {
  const button = document.createElement("button");
  button.innerHTML = content;

  button.addEventListener("click", clickEventListener);

  if (typeof cssClass != "object") {
    button.classList.add(cssClass);
    return button;
  }

  for (let css of cssClass) {
    button.classList.add(css);
  }

  return button;
}
