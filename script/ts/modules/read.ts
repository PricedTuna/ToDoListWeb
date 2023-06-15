import deleteBtn from "./delete.js"
import updateBtn from "./update.js"

export default class Read{

   private tasksContainer:Element;

   constructor(){
      this.tasksContainer = document.querySelector("#tasksContainer")
   }

   taskTemplate(task:any){
      return `
   <article class="col border border-secondary p-3 task" id="task-${task.id}">
      <div class="row" id="rowContainer">
         <div class="col-md-6">
            <h3 class="fs-3" id="taskTitle">${task.title}</h3>
         </div>
         <div class="col-md-6 text-end">
            <div class="d-grid gap-2 d-md-block">
               <button class="btn btn-outline-info editBtn" data-id="${task.id}" type="button">Edit</button>
               <button class="btn btn-outline-danger deleteBtn" data-id="${task.id}" type="button">Delete</button>
             </div>
         </div>
      </div>
   </article>`
   }

   show(tasks:[object]){
      this.tasksContainer.innerHTML=""

      tasks.forEach((task:any)=> (task.id != 0) ? this.tasksContainer.innerHTML += this.taskTemplate(task) : null)

      deleteBtn()
      updateBtn()
   }


}