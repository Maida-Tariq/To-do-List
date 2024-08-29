document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const emptyMessage = document.getElementById('emptyMessage');

    function updateEmptyMessage() {
        if (taskList.children.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
        }
    }

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
            updateEmptyMessage();

            const removeButton = li.querySelector('button.remove-task');
            removeButton.addEventListener('click', () => {
                li.remove();
                updateEmptyMessage();
            });
        }
    });

    updateEmptyMessage();
});
