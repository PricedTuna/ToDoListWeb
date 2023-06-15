import Database from "./database.js";
import Read from "./read.js";
export default function () {
    const database = new Database();
    let read = new Read();
    let tasksStored = database.getData();
    let tasksOnScreen = document.querySelectorAll(".task");
    tasksOnScreen.forEach(function (task) {
        let deleteBtn = task.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let taskId = JSON.parse(deleteBtn.getAttribute("data-id"));
            let newTasks = tasksStored.filter((task) => task.id !== taskId);
            database.save(newTasks);
            read.show(newTasks);
        });
    });
}
