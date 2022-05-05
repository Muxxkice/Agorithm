//Finding a Word

process.stdin.setEncoding('utf8');
const main = (input) => {
	const w = input.split("\n")[0];
	const t = input.split("\n").slice(1);
	const texts = t.map((n) => n.split(" "));

	let count = 0;
	texts.forEach((text, x) => {
		text.forEach((word, y) => {
			let string = word.toLowerCase();
			if (string == w) {
				count++
			}
		})
	})
	console.log(count)

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
