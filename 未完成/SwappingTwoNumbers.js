//Swapping Two Numbers
process.stdin.setEncoding('utf8');

const main = (input) => {
	const list = input.split("\n");

	list.some((n) => {
		const a = n.split(" ")[0];
		const b = n.split(" ")[1];
		if (a == 0 && b == 0) {
			return true;
		} else {
			let ans = n.split(" ").sort((a, b) => a - b);
			console.log(ans.join(" "));
		}
	})
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

//sort()だと数値ではなく文字列として並び替えているため、テストケースで引っかかった。
//https://www.for-engineer.life/entry/javascript-sort-filter/
