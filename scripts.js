document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText}
                <button class="remove-task">Remove</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            const removeButton = li.querySelector('button.remove-task');
            removeButton.addEventListener('click', () => {
                li.remove();
            });
        }
    });
});
