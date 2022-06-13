const main = (input) => {
	const n = input.split("\n")[0];

	const GCD = (x, y) => {
		while (x >= 1 && y >= 1) {
			if (x > y) {
				x = x % y
			} else {
				y = y % x;
			}
		}
		if (x >= 1) {
			return x;

		} else {
			return y;
		}
	}

	const LCM = (x, y) => {
		return (x / GCD(x, y)) * y
	}

	const num = input.split("\n")[1].split(" ");
	const a = input.split("\n")[1].split(" ")[0];
	const b = input.split("\n")[1].split(" ")[1];

	let lcm_num = LCM(a, b)
	for (let i = 2; i < n; i++) {
		const c = num[i]
		lcm_num = LCM(lcm_num, c);
	}

	console.log(lcm_num)


}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

