//Choose Cards 1

process.stdin.setEncoding('utf8');
const main = (input) => {
	const line = input.split("\n")[1].split(" ");

	let count1 = 0; //red
	let count2 = 0; //yellow
	let count3 = 0; //blue

	line.forEach((n) => {
		if (n == 1) {
			count1++;
		} else if (n == 2) {
			count2++;
		} else if (n == 3) {
			count3++;
		}
	});
	let c1 = count1 * (count1 - 1) / 2; //red
	let c2 = count2 * (count2 - 1) / 2; //yellow
	let c3 = count3 * (count3 - 1) / 2; //blue
	console.log(c1 + c2 + c3);

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
