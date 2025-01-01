
function validateForm() {
    const taskInput = document.getElementById('task');
    const taskListe = document.getElementById('task-list');
    const newTask = document.createElement('li')
    const taskText = taskInput.value;
    const positionActuelle = 0;
    
    const now = new Date();
    const options = {
        year : 'numeric',
        month : '2-digit',
        day : '2-digit',
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12 : false
    }
    const dateTime = now.toLocaleDateString('fr-FR',options);
    newTask.innerText = taskText + dateTime;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = function() {
        taskListe.removeChild(newTask);
    };

    newTask.appendChild(deleteButton);
    newTask.onclick = function() {
        newTask.classList.toggle('completed');
    };


    taskListe.appendChild(newTask);
    taskInput.value = '';

}