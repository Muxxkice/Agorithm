//B - ATCoder

const main = (input) => {
	const s = input.split("\n")[0].split("");

	let ans = 0;
	for (let i = 0; i < s.length; i++) {
		const string = s.slice(i)
		let count = 0;
		for (let j = 0; j < s.length - i; j++) {
			if (string[j] == "A" || string[j] == "T" || string[j] == "C" || string[j] == "G") {
				count++;
			} else {
				j = s.length;
			}
		}
		if (count > ans) {
			ans = count;
		}
	}
	console.log(ans);

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));


