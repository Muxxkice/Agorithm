process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

const main = (input) => {

	process.stdin.setEncoding('utf8');
	// Your code here!

	const main = (input) => {

		let sum = 0
		let dict = new Map();
		let count = 0;
		for (let i = 1; i <= 40; i++) {
			for (let j = 1; j <= 30; j++) {
				for (let k = 1; k <= 20; k++) {
					sum = 82 * i + 205 * j + 30 * k
					if (dict.has(sum)) {
						dict.set(sum, dict.get(sum) + 1);
						count += 1;
					} else {
						dict.set(sum, 0);
					}
				}
			}
		}
		console.log(count)
	}

}
	main(require("fs").readFileSync("/dev/stdin", "utf-8"));
