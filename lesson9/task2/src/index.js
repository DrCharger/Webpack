import { renderTasks } from './list/render';
import { setItem } from './list/storage';
// import { addNewTask } from './list/newTask';
// import { change } from './list/changer';
import { getTasksList } from './list/tasksGateWay';
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
