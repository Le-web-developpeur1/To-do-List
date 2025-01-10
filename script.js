function validateForm() {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date-input')
    const categoryInput = document.getElementById('category-input')
    const priorityInput = document.getElementById('priority-input')
    const taskListe = document.getElementById('task-list');
    const newTask = document.createElement('li')
    const taskText = taskInput.value;
    const dueDate = dueDateInput.value;
    const category = categoryInput.value;
    const priority = priorityInput.value;


    const now = new Date ();
    const formattedDate = now.toLocaleString();
    
    newTask.textContent = `${taskText} - ${formattedDate} - Échéance : ${dueDate} - ${category} - ${priority}`;
 
    const ediButton = document.createElement('button');
    ediButton.innerHTML ='<i class="fa-regular fa-pen-to-square"></i>';
    ediButton.style.fontSize = '15px'
    // Empêche l'événement de propagation pour éviter de marquer comme terminée.
    ediButton.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    //
    ediButton.onclick = () => {
        const newTaskTask = prompt('Modifier la tâche:', taskText);
        if (newTaskTask !== null) {
            newTask.firstChild.textContent = newTaskTask;
        }

    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    deleteButton.style.fontSize = '15px'
    deleteButton.onclick = function() {
        taskListe.removeChild(newTask);
    };

    setTimeout(() => { 
        newTask.classList.add('show');
     }, 10); 

    newTask.appendChild(ediButton);
    newTask.appendChild(deleteButton);

    newTask.onclick = function() {
        newTask.classList.toggle('completed');
    };

    if (priority === 'Haute') { 
        newTask.classList.add('priority-high'); 
    } else if (priority === 'Moyenne') {
         newTask.classList.add('priority-medium'); 
        } else if (priority === 'Basse') {
             newTask.classList.add('priority-low');
            }


    taskListe.appendChild(newTask);
    taskInput.value = '';
    dueDateInput.value = '';
    categoryInput.value = 'Choisir une catégorie';
    priorityInput.value = 'Choisir une priorité';
    

}

        const searchInput = document.getElementById('search-input')
        filterTasks(searchInput.value.toLowerCase());

        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            filterTasks(filter);
        });

        function filterTasks (filter) {
            const tasks = document.getElementById('task-list').getElementsByTagName('li');
            Array.from(tasks).forEach(function(task) {
                const taskText = task.textContent.toLowerCase();
                if (taskText.includes(filter)) {
                    task.style.display ='';
                } else {
                    task.style.display ='none';
                }
            });
        } 

        function filterTask(status) {
            const tasks = document.querySelectorAll('#task-list li');
            tasks.forEach(task => {
                if (status === 'all') {
                    task.style.display = ''; 
                } else if (status === 'completed' && task.classList.contains('completed')) {
                    task.style.display = '';
                }  else if (status === 'ongoing' && !task.classList.contains('completed')) {
                    task.style.display = '';
                } else {
                    task.style.display = 'none';
                }
            });
        }

        function sortTasks (criteria) {
            const taskListe = document.getElementById('task-list');
            const tasks = Array.from(taskListe.getElementsByTagName('li'));
            let sortedTasks;

            if (criteria === 'date') {
                sortedTasks = tasks.sort((a, b) => new Date(a.dataset.dueDate) - new Date(b.dataset.dueDate));
            } else if (criteria === 'priority') {
                sortedTasks = tasks.sort((a, b) => a.dataset.priority - b.dataset.priority);
            }
            taskListe.innerHTML = '';
            sortedTasks.forEach(task => taskListe.appendChild(task));
        }