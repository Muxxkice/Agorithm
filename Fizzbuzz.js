const main = (input) => {
	const n = input;
	for (let i = 1; i <= n; i++) {
		if (i % 15 == 0) {
			console.log("FizzBuzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
