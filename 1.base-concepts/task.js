"use strict"

function solveEquation(a, b, c) {
	const arr = [];
	const d = b * b - 4 * a * c;

	if (d > 0) {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	} else if (d === 0) {
		const x = -b / (2 * a)
		arr.push(x);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let payment = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
  let credit = payment * countMonths;
  let c = credit.toFixed(2)
  return Number(c);
}