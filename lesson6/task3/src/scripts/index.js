import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { addNewTask } from './newTask.js';
import { change } from './changer.js';
import { getTasksList, deleteTask } from './tasksGateWay.js';

document.addEventListener('DOMContentLoaded', () => {
	getTasksList().then((tasksList) => {
		setItem('tasksList', tasksList);
		renderTasks();
	});
});

const onStorageChange = (e) => {
	if (e.key !== 'tasksList') {
		return;
	}

	renderTasks();
};

window.addEventListener('storage', onStorageChange);
