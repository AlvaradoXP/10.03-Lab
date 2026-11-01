document.addEventListener("DOMContentLoaded", domLoaded);

//listens for the add button click and Enter key being pressed
function domLoaded() {
    let addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addBtnClick );

    let key = document.getElementById("newTask");
    key.addEventListener("keyup", function(event) {
        if (event.key === "Enter")
        {
            addBtnClick();
        }
    })
}

//Gets user entered text and calls addTask to add it if not empty
function addBtnClick() {

    let tBox = document.getElementById("newTask");
    let inputText = tBox.value;
    if (inputText !== "")
    {
        addTask(inputText);
    }
    
    tBox.value = "";
    tBox.focus();
    
}

//Creates a list inside an <ol> in the HTML with an X button
function addTask(newTask) {
    let list = document.createElement("li");
    list.innerHTML = '<span class="task-text">' + newTask +
    '</span><button class="done-btn">&#10006;</button>';

    let ordList = document.querySelector("ol");
    ordList.appendChild(list);
}