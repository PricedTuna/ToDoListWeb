import Database from "./database.js";
import Read from "./read.js";
export default class Create {
    constructor() {
        this.database = new Database();
        this.read = new Read();
        this.taskInput = document.querySelector("#taskInput");
        this.addTaskBtn = document.querySelector("#addTaskBtn");
    }
    Add() {
        this.addTaskBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let tasks = this.database.getData();
            let lastId = this.database.getId();
            let title = this.taskInput.value;
            if (title != "") {
                let task = {
                    id: lastId++,
                    title
                };
                tasks.push(task);
                this.database.save(tasks);
                this.read.show(tasks);
                this.taskInput.value = "";
            }
            else {
                alert("Something's wrong, please check the task form");
            }
        });
    }
}
