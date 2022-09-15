import { renderTasks } from './render';
import { setItem } from './storage';
import { getTasksList, deleteTask } from './tasksGateWay';

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
