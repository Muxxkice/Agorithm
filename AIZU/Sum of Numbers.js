//Sum of Numbers

process.stdin.setEncoding('utf8');

const main = (input) => {
	const list = input.split("\n");

	list.some((n) => {
		if (n === "0") {
			return true;
		} else {
			num = n.split("");
		}
		let sum = 0;
		num.forEach((number) => {
			sum += Number(number);
		})
		console.log(sum)
	})
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

