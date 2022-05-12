//区間和の計算
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	lines.push(line);
});

//ここから
reader.on('close', () => {
	const line = lines[1].split(" ");
	const list = lines.slice(3)

	let s = 0;
	sum_list = [];
	line.forEach((n, x) => {

		s += Number(n);
		sum_list.push(s)
	})

	list.forEach((number) => {
		let a = Number(number.split(" ")[0]);
		let b = Number(number.split(" ")[1]);
		let ans = 0;
		if (a == 0) {
			ans = ans = sum_list[b]
		} else {
			ans = sum_list[b] - sum_list[a - 1]
		}
		console.log(ans);
	});

});
