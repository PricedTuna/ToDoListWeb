import Create from "./modules/create.js";
import Database from "./modules/database.js";
import Read from "./modules/read.js";

export default class App{

   private database:Database;
   private create:Create;
   private read:Read;

   constructor(){
      this.database = new Database()
      this.create = new Create()
      this.read = new Read()
   }

   Load(){
      this.create.Add()

      let tasks = this.database.getData()
      this.read.show(tasks)
      
   }
}