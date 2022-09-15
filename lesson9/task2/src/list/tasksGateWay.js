const baseUrl = 'https://6319a5136b4c78d91b3fe284.mockapi.io/api/v1/tasks';

export const getTasksList = () =>
	fetch(baseUrl).then((response) => response.json());

export const createTask = (taskData) =>
	fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	});

export const updateTask = (tasksId, updatedTaskData) =>
	fetch(`${baseUrl}/${tasksId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(updatedTaskData),
	});

export const deleteTask = (tasksId) =>
	fetch(`${baseUrl}/${tasksId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
