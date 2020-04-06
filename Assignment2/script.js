const inpNewTask = document.getElementById('inpNewTask')
const ulTaskList = document.getElementById('ulTaskList')


function addTask() {
    var taskName = inpNewTask.value
    if(taskName==""){
        alert("Please Enter Task Name")
        return
    }
    var newItem = document.createElement('li')
    newItem.textContent = taskName
    ulTaskList.appendChild(newItem)
}

function removeTask(){
    var elems = document.querySelectorAll(".checked");
    elems.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
}

function doStrike(){
    console.log();
}




ulTaskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    }
  }, false);