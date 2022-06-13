//AtCoder Beginner Contest 106 B - 105
const main = (input) => {
	const n = Number(input.split("\n")[0]);

	let ans = 0;
	for (let i = 1; i <= n; i++) {
		let count = 0;
		if (i % 2 != 0) {
			for (let j = 1; j <= n; j++) {
				if (i % j === 0) {
					count++;
				}
			}
			if (count == 8) {
				ans++;
			}
		}
	}
	console.log(ans)

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
