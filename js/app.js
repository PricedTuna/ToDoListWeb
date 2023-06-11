// Elementos del dom
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let listContainer = document.getElementById("listContainer");
let id;

let taskName;
let taskTemplate;

window.addEventListener("load", () => {
   listenButtons();
   dbStart();
});

// other shit

addTaskBtn.addEventListener("click", () => {
   taskName = taskInput.value;
   createTask(taskName);
   insertTask(taskName);
});

function deleteBtn(id) {
   let taskToDelete = document.querySelector(`#task-${id}`);
   listContainer.removeChild(taskToDelete);
}

function editBtn(id) {
   let taskNameContainer = document.querySelector(`#taskName-${id}`);
   updateTaskDb(id);
   console.log(id);
}

function createTask(taskName, id = crypto.randomUUID()) {
   // Crear elementos
   let taskDiv = document.createElement("div");
   taskDiv.classList.add(
      "row",
      "my-2",
      "p-1",
      "border",
      "border-3",
      "border-gray",
      "border-top-0",
      "border-end-0",
      "border-start-0"
   );
   taskDiv.id = `task-${id}`;

   let containerDiv = document.createElement("div");
   containerDiv.classList.add("container", "d-flex", "justify-content-between");

   let taskSpan = document.createElement("span");
   taskSpan.classList.add("fs-4");
   taskSpan.id = `taskName-${id}`;
   taskSpan.textContent = taskName;

   let buttonDiv = document.createElement("div");
   buttonDiv.style.display = "inline";

   let editButton = document.createElement("button");
   editButton.classList.add(
      "btn",
      "btn-info",
      "border",
      "border-2",
      "border-info"
   );
   editButton.id = `${id}`;
   editButton.textContent = "Edit";
   editButton.addEventListener("click", () => {
      editBtn(deleteButton.id);
   });

   let deleteButton = document.createElement("button");
   deleteButton.classList.add(
      "btn",
      "btn-danger",
      "border",
      "border-2",
      "border-danger"
   );
   deleteButton.id = `${id}`;
   deleteButton.textContent = "Delete";
   deleteButton.addEventListener("click", (e) => {
      deleteBtn(deleteButton.id);
   });

   // Adjuntar elementos
   buttonDiv.appendChild(editButton);
   buttonDiv.appendChild(deleteButton);

   containerDiv.appendChild(taskSpan);
   containerDiv.appendChild(buttonDiv);

   taskDiv.appendChild(containerDiv);

   listContainer.appendChild(taskDiv);
   taskInput.value = "";
}

function listenButtons() {
   let btn_danger = document.querySelectorAll(".btn-danger");
   let btn_info = document.querySelectorAll(".btn-info");

   btn_danger.forEach(function (btn) {
      btn.addEventListener("click", function () {
         deleteBtn(btn.id);
      });
   });

   btn_info.forEach(function (btn) {
      btn.addEventListener("click", function () {
         editBtn(btn.id);
      });
   });
}
