import Database from "./database.js";
import Read from "./read.js";

export default class Create {
   private taskInput;
   private addTaskBtn:Element;
   private database:Database;
   private read:Read;

   constructor() {
      this.database = new Database();
      this.read = new Read()

      this.taskInput = document.querySelector("#taskInput");
      this.addTaskBtn = document.querySelector("#addTaskBtn");
   }

   Add(){
      this.addTaskBtn.addEventListener("click", (e)=> {
         e.preventDefault()
         
         let tasks:[object] = this.database.getData(); 
         let lastId: number = this.database.getId();
         

         let title:string = this.taskInput.value;
         
         
         if (title != "") {
            
            let task = {
               id: lastId++,
               title
            }

            tasks.push(task)
            this.database.save(tasks)
            this.read.show(tasks)

            this.taskInput.value = ""

         } else {
            alert("Something's wrong, please check the task form")    
         }

      })
   }
}
