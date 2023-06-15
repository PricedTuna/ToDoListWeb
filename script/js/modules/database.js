export default class Database {
    constructor() {
        this.id = 0;
        this.id = 1;
    }
    getData() {
        let tasks = JSON.parse(localStorage.getItem("task"));
        if (!tasks || tasks.length <= 1) {
            tasks = [{
                    id: 0,
                    title: "TITLE TASK 1"
                }];
            this.save(tasks);
            this.id = 1;
        }
        else
            this.id = tasks[tasks.length - 1].id + 1;
        return tasks;
    }
    save(data) {
        localStorage.setItem("task", JSON.stringify(data));
    }
    getId() {
        return this.id;
    }
}
