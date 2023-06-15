import Database from "./database.js";
import Read from "./read.js";

export default function () {
   const database: Database = new Database();

   let read: Read = new Read();
   let tasksStored: [Object] = database.getData();
   let tasksOnScreen = document.querySelectorAll(".task");
   

   tasksOnScreen.forEach(function (task) {
      let deleteBtn = task.querySelector(".deleteBtn");

      deleteBtn.addEventListener("click", (e) => {
         e.preventDefault();

         let taskId = JSON.parse(deleteBtn.getAttribute("data-id"));
         let newTasks: any = tasksStored.filter(
            (task: any) => task.id !== taskId
         );

         database.save(newTasks);
         read.show(newTasks);
      });
   });
}
