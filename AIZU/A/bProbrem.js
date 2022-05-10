//A/B Pronrem
process.stdin.setEncoding('utf8');

const main = (input) => {
	const a = Number(input.split(" ")[0]);
	const b = Number(input.split(" ")[1]);

	const ans1 = Math.floor(a / b);
	const ans2 = Math.floor(a % b);
	const ans3 = (a / b).toFixed(5)
	console.log(`${ans1} ${ans2} ${ans3}`)
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

