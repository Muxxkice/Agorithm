//Dice Expectation
process.stdin.setEncoding('utf8');
const main = (input) => {
	const n = input.split("\n")[0];
	const b = input.split("\n")[1].split(" ");
	const r = input.split("\n")[2].split(" ");

	let b_all = 0;
	let r_all = 0;
	b.forEach((e) => {
		b_all += Number(e);
	})
	r.forEach((e) => {
		r_all += Number(e);
	})

	console.log((b_all + r_all) / n);
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));


