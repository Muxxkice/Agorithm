//Official House
process.stdin.setEncoding('utf8');

const main = (input) => {
	let array = Array.from(new Array(4), () => {
		return Array.from(new Array(3), () => new Array(10).fill(0))
	})

	const board = input.split("\n").slice(1);

	array.forEach((el, x) => {
		board.forEach((element) => {
			const b = Number(element.split(" ")[0]) - 1;//棟
			const f = Number(element.split(" ")[1]) - 1;//階
			const r = Number(element.split(" ")[2]) - 1;//何号室
			const n = Number(element.split(" ")[3]);//人数
			if (x == b) {
				array[b][f][r] += n;
			}
		})
	})

	array.forEach((p, x) => {
		p.forEach((q) => {
			console.log(" " + q.join(" "))
		})
		if (x < 3) console.log("####################")
	})

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

