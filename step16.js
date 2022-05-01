const main = (input) => {
	const n = Number(input.split("\n")[0].split(" "));
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

	let line = input.split("\n")[1].split(" ");
	let x = Number(line[0]);
	let y = Number(line[1]);
	let answer = getGcd(x, y)
	for (let i = 2; i <= n; i++) {
		answer = getGcd(answer, line[i])
	}
	console.log(answer);

}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
