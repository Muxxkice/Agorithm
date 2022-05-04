//Finding Missing Cards
process.stdin.setEncoding('utf8');

const main = (input) => {

	let array = new Array(4);
	for (let x = 0; x < 4; x++) {
		array[x] = new Array(14).fill(false);
	}

	const cards = input.split("\n").slice(1);

	cards.forEach((element) => {
		const text = element.split(" ")[0];
		const num = Number(element.split(" ")[1]);
		if (text == "S") {
			array[0][num] = true;
		} else if (text == "H") {
			array[1][num] = true;
		} else if (text == "C") {
			array[2][num] = true;
		} else if (text == "D") {
			array[3][num] = true;
		}
	})

	array.forEach((el, x) => {
		el.forEach((e, y) => {
			if (array[x][y] == false && y != 0) {
				if (x == 0) {
					console.log("S", y);
				} else if (x == 1) {
					console.log("H", y);
				} else if (x == 2) {
					console.log("C", y);
				} else if (x == 3) {
					console.log("D", y);
				}
			}
		})
	})

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
