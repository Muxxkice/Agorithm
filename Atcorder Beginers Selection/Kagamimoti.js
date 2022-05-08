//Kagamimoti

process.stdin.setEncoding('utf8');

const main = (input) => {
	const list = input.split("\n").slice(1);

	let dict = new Map();
	let a = 1;
	list.forEach((n) => {
		if (!dict.get(n) && n > 0) {
			dict.set(n, a);
		}
	})
	console.log(dict.size);
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
