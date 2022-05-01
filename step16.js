//Greatest common divisor
const main = (input) => {

	const getGcd = (a, b) => {
		while (a >= 1 && b >= 1) {
			if (a > b) {
				a = a % b;
			} else {
				b = b % a;
			}
		}
		if (a >= 1) {
			return a;

		} else {
			return b;
		}
	}

	const n = Number(input.split("\n")[0]);
	const line = input.split("\n")[1].split(" ");
	let answer = getGcd(line[0], line[1]);

	for (let i = 2; i < n; i++) {
		answer = getGcd(answer, line[i])
	}

	console.log(answer);

}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
