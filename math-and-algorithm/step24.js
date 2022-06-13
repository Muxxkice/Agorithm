//Answer Exam Randomly
process.stdin.setEncoding('utf8');
const main = (input) => {
	const list = input.split("\n").slice(1);

	let value = 0;
	list.forEach((n) => {
		const q = n.split(" ")[0];
		const p = n.split(" ")[1];
		value += (p / q);
	})
	console.log(value);
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
