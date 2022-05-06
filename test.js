const h = Number(lines[0].split(" ")[0]);
const w = Number(lines[0].split(" ")[1]);

const a_1 = Number(lines[1].split(" ")[0]);
const a_2 = Number(lines[1].split(" ")[1]);
const b_1 = Number(lines[2].split(" ")[0]);
const b_2 = Number(lines[2].split(" ")[1]);
const x_line = a_2 - a_1; //横の増え方
const y_line = b_1 - a_1; //縦の増え方

let array = Array.from(new Array(h), () => new Array(w).fill(0));
console.log(array)


//横一列目
array[0][0] = a_1;
let tmp = a_1
array.forEach((elements, x) => {
	elements.forEach((ele, y) => {
		if (x === 0 && y !== 0) {
			array[x][y] = tmp + x_line;
			tmp = array[x][y];
		}
	})
})

//横一列目
tmp = a_1
array.forEach((elements, y) => {
	elements.forEach((ele, x) => {
		if (y === 0 && x !== 0) {
			array[x][y] = tmp + y_line;
			tmp = array[x][y];
		}
	})
})
let temp = 0;
array.forEach((elements, x) => {
	elements.forEach((ele, y) => {
		if (y === 0 && x !== 0) {
			temp = array[x][y];
		} else if (x !== 0) {
			array[x][y] = temp + x_line;
			temp = array[x][y];
		}
	})
})

array.forEach((n) => {
	console.log(n.join(" "));
})
