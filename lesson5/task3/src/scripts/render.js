import { getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
	const tasksList = getItem('tasksList') || [];
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('data-id', id);
			checkbox.checked = done;
			checkbox.classList.add('list__item-checkbox');
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			const deleteBTN = document.createElement('button');
			deleteBTN.classList.add('delete__btn');
			listItemElem.append(checkbox, text, deleteBTN);

			return listItemElem;
		});

	listElem.append(...tasksElems);
};
