//Print Test Cases

process.stdin.setEncoding('utf8');

const main = (input) => {
	const list = input.split("\n");

	let i = 0;
	while (true) {
		if (list[i] == 0) {
			return false;
		} else {
			console.log(`Case ${i + 1}: ${list[i]}`)
			i++;
		}
	}
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

