// Selectors
let add = document.getElementById("add");
let ul = document.querySelector("ul");

function getInput() {
  return document.getElementById("input").value;
}

// Create new note
function addNote() {
  let input = getInput();
  let newNote = ul.appendChild(document.createElement("li"));
  newNote.innerHTML = input;
  newNote.classList.add("note");
  createBtns(newNote);
  delNote();
  doneNote();
}

function createBtns(newNote) {
  let btnDiv = newNote.appendChild(document.createElement("div"));
  btnDiv.classList.add("btns");
  let newDone = btnDiv.appendChild(document.createElement("button"));
  newDone.innerHTML = "Done";
  newDone.classList.add("done");
  let newDel = btnDiv.appendChild(document.createElement("button"));
  newDel.innerHTML = "X";
  newDel.classList.add("del");
}

// Delete note
function delNote() {
  let del = document.querySelectorAll(".del");
  del.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement.remove();
    });
  });
}

// Mark note done
function doneNote() {
  let done = document.querySelectorAll(".done");
  done.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement.classList.add("done-note");
    });
  });
}

add.addEventListener("click", addNote);
