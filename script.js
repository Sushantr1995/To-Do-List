let taskList = document.getElementsByTagName('li');

//Add New Task
btn.addEventListener('click', () => {
    let newItem = window.prompt("Enter New Task");
    if (newItem === '' || newItem === null) {
        alert("You must write something!");
    } else {
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(newItem));
        document.getElementById("taskList").appendChild(entry);
        span = addButtons();
        entry.appendChild(span);
        del();
        addCheck();
    }
})

//Create delete button
for (let i = 0; i < taskList.length; i++) {
    span = addButtons();
    taskList[i].appendChild(span);
}

//function to add delete button
function addButtons() {
    let ico = document.createElement("i");
    ico.className = "fa-solid fa-trash del icons";
    del();
    return ico;
}

// Remove list after pressing delete button
function del() {
    let del = document.getElementsByClassName('del');
    let icons = document.getElementsByClassName("icons");
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            let pele = icons[i].parentElement;
            pele.style.display = "none";
        }
    }
}

// Check the task which is completed
addCheck();
function addCheck() {
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].onclick = function () {
            taskList[i].classList.toggle("checked");
        }
    }
}