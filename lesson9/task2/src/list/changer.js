import { deletedTask } from './deleteTask';
import { renderTasks } from './render';
import { setItem, getItem } from './storage';
import { getTasksList, updateTask } from './tasksGateWay';

const listElem = document.querySelector('.list');

export const change = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  const isDelBTN = event.target.classList.contains('delete__btn');
  if (isDelBTN) {
    deletedTask();
  }
  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      listElem.innerHTML = '';
      renderTasks();
    });
};

listElem.addEventListener('click', change);
