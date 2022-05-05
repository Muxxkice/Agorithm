//Card Game
process.stdin.setEncoding('utf8');
const main = (input) => {
	const w = input.split("\n").slice(1);
	let cards = w.map((i) => i.split(" "));
	let taro_count = 0;
	let hanako_count = 0;

	cards.forEach((elements) => {
		const t = elements[0];
		const h = elements[1];
		if (t == h) {
			taro_count++;
			hanako_count++;
		} else if (t < h) {
			hanako_count = hanako_count + 3;
		} else if (h < t) {
			taro_count = taro_count + 3;
		}
	});
	console.log(taro_count, hanako_count);
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
