//Otoshidama
process.stdin.setEncoding('utf8');

const main = (input) => {
	const n = Number(input.split(" ")[0]);
	const y = Number(input.split(" ")[1]);

	for (let a = 0; a <= n; a++) {
		for (let b = 0; b <= n - a; b++) {
			let c = n - a - b;
			let total = 10000 * a + 5000 * b + 1000 * c;
			if (total == y) {
				console.log(a, b, c)
				return
			}
		}
	}
	console.log("-1 -1 -1");

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

