const myLibrary = [];

// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      "The " +
      title +
      " by " +
      author +
      " , " +
      pages +
      " pages " +
      read +
      " read yet."
    );
  };
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pageNumber = document.getElementById("pageNumber").value;
  let read = document.getElementById("read").value;
  if (read === "read") {
    read = true;
  } else {
    read = false;
  }
  const book = new Book(title, author, pageNumber, read);
  myLibrary.push(book);
  if (title === "" || author === "" || pageNumber === "" || read === "") {
    myLibrary.pop(book);
  }
  console.log(book);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pageNumber").value = "";
  document.getElementById("read").value = "";
}

function appendButtonsFromArray() {
  const container = document.getElementsByClassName("book-container")[0];
  container.innerHTML = ""; // Clear the container
  myLibrary.forEach((item) => {
    let btn = document.createElement("button"); // Create a <button> element
    btn.innerHTML = ` 
      <h1>${item.title}</h1>
      <p>${item.info()}</p>
    `; // Insert text
    btn.className = "card shadow";
    if (item.read === true) {
      btn.style.background =
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
    } else {
      btn.style.background =
        "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
    }
    btn.onclick = function () {
      item.read = !item.read;
      // Update the button text when it's clicked
      if (item.read === true) {
        btn.style.background =
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
      } else {
        btn.style.background =
          "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
      }
    };
    container.appendChild(btn);
  });
}

// Call the function when the window has loaded
window.onload = function () {
  appendButtonsFromArray();
};
function handleFormSubmit() {
  event.preventDefault();
  addBookToLibrary();
  appendButtonsFromArray();
}
