//Counting Characters
process.stdin.setEncoding('utf8');

const main = (input) => {
	const text = input.toLowerCase().split(" ");

	let dict = new Map();

	text.forEach((t) => {
		let alp = t.split("");
		alp.forEach((a) => {
			if (97 <= a.charCodeAt() && a.charCodeAt() <= 122) {
				if (dict.has(a)) {
					dict.set(a, dict.get(a) + 1);
				} else {
					dict.set(a, 1);
				}
			}
		})
	})
	for (let i = 97; i <= 122; i++) {
		let alphabet = String.fromCharCode(i)
		if (dict.has(alphabet)) {
			console.log(`${alphabet} : ${dict.get(alphabet)}`);
		} else {
			console.log(`${alphabet} : 0`);
		}
	}

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

