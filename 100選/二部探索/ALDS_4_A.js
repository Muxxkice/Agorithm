//Linear Search(線形探索)
const main = (input) => {
	const list = input.split("\n")[1].split(" ");
	const q = input.split("\n")[3].split(" ");

	let count = 0;
	for (let i = 0; i < q.length; i++) {
		for (let j = 0; j < list.length; j++) {
			if (q[i] == list[j]) {
				count++;
			}
		}
	}
	console.log(count)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
