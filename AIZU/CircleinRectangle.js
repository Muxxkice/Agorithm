//Circle in a Rectangle
process.stdin.setEncoding('utf8');
const main = (input) => {
	const w = Number(input.split(" ")[0]);
	const h = Number(input.split(" ")[1]);
	const x = Number(input.split(" ")[2]);
	const y = Number(input.split(" ")[3]);
	const r = Number(input.split(" ")[4]);

	let flg = true;
	if (x - r < 0 || r + x > w || y - r < 0 || r + y > h) {
		flg = false;
	}

	if (flg) {
		console.log("Yes");
	} else {
		console.log("No")
	}
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
