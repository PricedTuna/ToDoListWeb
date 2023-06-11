// db
var db;

function dbStart() {
   var solicitud = indexedDB.open("task-database");

   solicitud.addEventListener("error", showError);
   solicitud.addEventListener("success", start);
   solicitud.addEventListener("upgradeneeded", createTable);
}
function showError(e) {
   alert(`Ha ocurrido un error: ${e.code} / ${e.message}`);
}

function start(e) {
   db = e.target.result;
   show();
}

function createTable(e) {
   var database = e.target.result;
   var almacen = database.createObjectStore("Task", {
      keyPath: "id",
      autoIncrement: true,
   });
   almacen.createIndex("BuscarTask", "taskName", { unique: false });
}

function insertTask(taskName) {
   var transaction = db.transaction(["Task"], "readwrite");
   var almacen = transaction.objectStore("Task");
   almacen.add({
      taskName: taskName,
   });

   taskInput.value = "";
}

function show() {
   var transaction = db.transaction(["Task"], "readonly");
   var almacen = transaction.objectStore("Task");
   var pointer = almacen.openCursor();
   pointer.addEventListener("success", (e) => {
      var pointer = e.target.result;
      if (pointer) {
         var taskName = pointer.value.taskName;
         var id = pointer.key;
         createTask(taskName, id);
         pointer.continue();
      }
   });
}

function updateTaskDb(key) {
   var transaction = db.transaction(["Task"], "readwrite");
   var almacen = transaction.objectStore("Task");
   var solicitud = almacen.get();

   solicitud.addEventListener("success", function () {
      taskInput.value = solicitud.result.taskName;
   });
}
