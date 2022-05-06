process.stdin.setEncoding('utf8');

const main = (input) => {

	const a = input.split("\n")[0];//500
	const b = input.split("\n")[1];//100
	const c = input.split("\n")[2];//50
	const x = input.split("\n")[3]; //何円にするか

	let count = 0;
	for (let i = 0; i <= a; i++) {
		for (let j = 0; j <= b; j++) {
			for (let k = 0; k <= c; k++) {
				if (500 * i + 100 * j + 50 * k == x) {
					count++;
				}
			};
		};
	};
	console.log(count);


}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

