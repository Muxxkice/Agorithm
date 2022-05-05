//Matrix Vector Multiplication
process.stdin.setEncoding('utf8');
const main = (input) => {
	const n = Number(input.split("\n")[0].split(" ")[0]);
	const m = Number(input.split("\n")[0].split(" ")[1]);
	const q = input.split("\n").slice(1, n + 1)
	let matrix = q.map((n) => n.split(" "))
	const colum = input.split("\n").slice(n + 1)

	matrix.forEach((elements, x) => {
		let c = 0;
		elements.forEach((element, y) => {
			c += Number(element) * colum[y];
		})
		console.log(c);
	})

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

