process.stdin.setEncoding('utf8');
const main = (input) => {
	const line = input.split("\n")[1].split(" ");
	let count1 = 0;
	let count2 = 0;
	let count3 = 0;
	let count4 = 0;
	line.forEach((n) => {

		if (n == 100) {
			count1++
		} else if (n == 200) {
			count2++
		} else if (n == 300) {
			count3++
		} else if (n == 400) {
			count4++
		}
	})
	console.log(count1 * count4 + count2 * count3);
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));



