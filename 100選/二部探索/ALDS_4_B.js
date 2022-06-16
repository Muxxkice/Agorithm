//ALDS_4_B - Binary Search 二分探索

// else ifの分岐にNumber()で型指定しなかったら結果が正しくならなかった。
const main = (input) => {
	const n = Number(input.split("\n")[0]);
	const list = input.split("\n")[1].split(" ");
	const q = input.split("\n")[3].split(" ");
	const q_line = q.sort((a, b) => a - b)

	let count = 0;
	for (let i = 0; i < q_line.length; i++) {
		let left = 0;
		let right = n;
		while (left < right) {
			let mid = Math.floor((right + left) / 2);
			if (q_line[i] == list[mid]) {
				count++;
				break;
			} else if (Number(q_line[i]) < Number(list[mid])) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}
	}


	console.log(count)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
