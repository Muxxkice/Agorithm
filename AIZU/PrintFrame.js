//Print a Frame
const start_end_line = (y) => {
	for (let j = 1; j <= y; j++) {
		process.stdout.write("#")
	}
}

const middle_line = (y) => {
	for (let j = 1; j <= y; j++) {
		if (j == 0 && j == y) {
			process.stdout.write("#")
		} else {
			process.stdout.write(".")
		}
	}
}

const PrintFrame = (x, y) => {
	for (let i = 1; i <= x; i++) {
		if (i == 1 && i == x) {
			start_end_line(y);
		} else {
			middle_line(y);
		}
		console.log()
	}
}

const main = (input) => {
	const line = input.split("\n");

	line.some((n) => {
		const h = Number(n.split(" ")[0]);
		const w = Number(n.split(" ")[1]);
		if (h == 0 && w == 0) {
			return true;
		} else {
			PrintFrame(h, w)
		}
		console.log();
	})
}
