//Choose Cards 2
process.stdin.setEncoding('utf8');
const main = (input) => {
	const n = input.split("\n")[0];
	const line = input.split("\n")[1].split(" ");
	let count = 0;
	for (let a = 0; a < n; a++) {
		for (let b = a + 1; b < n; b++) {
			for (let c = b + 1; c < n; c++) {
				for (let d = c + 1; d < n; d++) {
					for (let e = d + 1; e < n; e++) {
						if (Number(line[a]) + Number(line[b]) + Number(line[c]) + Number(line[d]) + Number(line[e]) == 1000) {
							count++;
						}
					}
				}
			}
		}
	}
	console.log(count);
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
