const taskInput = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const newTask = document.querySelector(".task");

const tasks = [];

function addTask() {
 if(taskInput.value === ""){
     alert("please enter a valid task");
 }

 else {
    const toDoTask = document.createElement("div");
    const taskName = document.createElement("h1");
    const tickImage = document.createElement("img");
    tickImage.setAttribute('src', './images/tick-img.png' );
    document.body.appendChild(tickImage);
    const binImage = document.createElement("img");
    binImage.setAttribute('src', './images/bin-img.png' );
    document.body.appendChild(binImage);
    document.getElementById("task").appendChild(toDoTask);

}

   
}
addBtn.addEventListener("click", addTask);
    