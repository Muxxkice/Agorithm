//Combination Easy
process.stdin.setEncoding('utf8');
const main = (input) => {
	const n = input.split(" ")[0];
	const r = input.split(" ")[1];

	let fact_n = 1;
	let fact_r = 1;
	for (let i = 1, j = n, k = r; i <= r; i++, j--, k--) {
		fact_n = fact_n * j;
		fact_r = fact_r * k;
	}

	console.log(fact_n / fact_r);

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

