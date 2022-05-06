//Some Sums
process.stdin.setEncoding('utf8');
const main = (input) => {
	const n = Number(input.split(" ")[0]);
	const a = Number(input.split(" ")[1]);
	const b = Number(input.split(" ")[2]);

	const func_sum = (p) => {
		let sum = 0;
		while (p > 0) {
			sum += Math.floor(p % 10);
			p /= 10
		}
		return sum;
	}

	let total = 0;
	for (let i = 1; i <= n; i++) {
		let num = i;
		if (i > 9) {
			num = func_sum(i)
		}
		if (a <= num && num <= b) {
			total += i;
		}
	}
	console.log(total)
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
