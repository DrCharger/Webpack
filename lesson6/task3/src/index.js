import { renderTasks } from './list/render.js';
import { getItem, setItem } from './list/storage.js';
import { addNewTask } from './list/newTask.js';
import { change } from './list/changer.js';
import { getTasksList, deleteTask } from './list/tasksGateWay.js';
import './index.scss';

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
