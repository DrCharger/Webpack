import { renderTasks } from './render';
import { setItem } from './storage';
import { createTask, getTasksList } from './tasksGateWay';

const listElem = document.querySelector('.list');

export const addNewTask = () => {
	const inputElem = document.querySelector('.task-input');
	if (inputElem.value === '') {
		return;
	}
	const newTask = {
		text: inputElem.value,
		done: false,
		id: Math.random().toString(),
	};

	createTask(newTask)
		.then(() => getTasksList())
		.then((newTasksList) => {
			setItem('tasksList', newTasksList);
			inputElem.value = '';
			listElem.innerHTML = '';
			renderTasks();
		});
};

const btnElem = document.querySelector('.create-task-btn');

btnElem.addEventListener('click', addNewTask);
