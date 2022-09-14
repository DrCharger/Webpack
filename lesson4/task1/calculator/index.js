// экспортируйте sum и mult как именной export

export const sum = (a, b) => {
	console.log('implementation for sum');
	return a + b;
};

export const mult = (a, b) => {
	console.log('implementation for mult');
	return a * b;
};

// экспортируйте calc как export по умолчанию

const calc = (expression) => {
	console.log('implementation for calc');

	if (expression.split(' ').includes('+')) {
		const a = +expression.split(' ')[0];
		const b = +expression.split(' ')[2];
		return sum(a, b);
	}
	if (expression.split(' ').includes('*')) {
		const a = expression.split(' ')[0];
		const b = expression.split(' ')[2];
		return mult(a, b);
	}
};

export default calc;
