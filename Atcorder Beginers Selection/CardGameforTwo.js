//Card Game for Two
process.stdin.setEncoding('utf8');

const main = (input) => {
	const n = Number(input.split("\n")[0]);
	let cards = input.split("\n")[1].split(" ");

	let card_list = cards.sort((a, b) => b - a);

	let alice_count = 0;
	let bob_count = 0;
	for (let i = 0; i < n; i++) {
		if (i % 2 === 0) {
			alice_count += Number(card_list[i])
		} else {
			bob_count += Number(card_list[i])
		}
	}
	console.log(alice_count - bob_count)
}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

