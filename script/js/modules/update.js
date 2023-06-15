import Database from "./database.js";
import Read from "./read.js";
export default function () {
    const database = new Database();
    let read = new Read();
    let tasksStored = database.getData();
    let tasksOnScreen = document.querySelectorAll(".task");
    tasksOnScreen.forEach(function (task) {
        let editBtn = task.querySelector(".editBtn");
        editBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let taskId = JSON.parse(editBtn.getAttribute("data-id"));
            let formUpdate = task.querySelector("#rowContainer");
            formUpdate.innerHTML = `
      <div class="col-md-6">
         <input class="form-control fs-5" type="text" id="updateInput" value="${task.querySelector("#taskTitle").textContent}" placeholder="new task name..." />
      </div>
      <div class="col-md-6 text-end">
         <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-outline-info updateBtn" type="button">Update</button>
          </div>
      </div>`;
            let updateBtn = task.querySelector(".updateBtn");
            updateBtn.addEventListener("click", (e) => {
                e.preventDefault();
                let index = tasksStored.findIndex((task) => task.id === taskId);
                tasksStored[index] = {
                    id: taskId,
                    title: task.querySelector("#updateInput").value
                };
                database.save(tasksStored);
                read.show(tasksStored);
            });
        });
    });
}
