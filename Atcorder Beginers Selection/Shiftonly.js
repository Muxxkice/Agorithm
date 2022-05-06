//Shift Only
process.stdin.setEncoding('utf8');
const main = (input) => {
	const numbers = input.split("\n")[1].split(" ");

	let flg = true;
	numbers.some((i) => {
		if (i % 2 != 0) {
			flg = false;
			return true;
		}
	})

	let count = 0;
	const shiftnNum = (board) => {
		let flag = true;
		board.some((num, x) => {

			if (num % 2 == 0) {
				numbers[x] = num / 2;
			} else {

				flag = false
				return true;
			}
		})

		if (flag) {
			count++;
			return shiftnNum(board)
		}
		console.log(count)
	}
	if (flg) {
		shiftnNum(numbers);
	} else {
		console.log("0");
	}

}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

