import { renderTasks } from './render.js';
import { setItem, getItem } from './storage.js';
import { getTasksList, deleteTask } from './tasksGateWay.js';

const listElem = document.querySelector('.list');

export const deletedTask = (event) => {
	const isDelBTN = event.target.classList.contains('delete__btn');

	if (!isDelBTN) {
		return;
	}
	const taskId = event.target.closest('.list__item').childNodes[0].dataset.id;

	deleteTask(taskId)
		.then(() => getTasksList())
		.then((newTasksList) => {
			setItem('tasksList', newTasksList);
			listElem.innerHTML = '';
			renderTasks();
		});
};

listElem.addEventListener('click', deletedTask);
