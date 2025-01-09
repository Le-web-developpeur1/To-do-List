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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = function() {
        taskListe.removeChild(newTask);
    };

    setTimeout(() => { 
        newTask.classList.add('show');
     }, 10); 

    newTask.appendChild(deleteButton);
    
    newTask.onclick = function() {
        newTask.classList.toggle('completed');
    };

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



