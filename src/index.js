document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    
    //create child node
    let taskInput = document.getElementById("new-task-description").value;
    let taskNode = document.createTextNode(taskInput);

    //append child node to list
    li.appendChild(taskNode);
    ul.appendChild(li);

    event.preventDefault();
  });


});