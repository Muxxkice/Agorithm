//Spreadsheet
process.stdin.setEncoding('utf8');
const main = (input) => {
	const r = Number(input.split("\n")[0].split(" ")[0]);
	const c = Number(input.split("\n")[0].split(" ")[1]);
	let lists = input.split("\n").slice(1);
	let lists_map = lists.map((elements) => elements.split(" "));
	let array = Array.from(new Array(r + 1), () => Array(c + 1).fill(0));

	array.forEach((num, x) => {
		let count = 0;
		if (x < r) {
			num.forEach((n, y) => {
				if (y < c) {
					const a = Number(lists_map[x][y]);
					array[x][y] = a;
					count += a;
				} else {
					array[x][y] = count;
				}
			});
		}
	});

	for (let i = 0; i <= c; i++) {
		let count = 0;
		for (let j = 0; j <= r; j++) {
			if (j < r) {
				count += array[j][i];
			} else {
				array[j][i] = count;
			}
		}
	}

	array.forEach((n) => console.log(n.join(" ")))//出力

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

