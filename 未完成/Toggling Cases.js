//Toggling Cases
//Presentation errorが解決できない

process.stdin.setEncoding('utf8');

const main = (input) => {
	const text = input.split(" ");

	let new_text = []
	text.forEach((n, x) => {
		s = n.split("")
		s.forEach((el, y) => {
			if (el.charCodeAt() < 65 || el.charCodeAt() > 122) {
				new_text.push(el)
			}
			else if (el == el.toUpperCase()) {
				new_text.push(el.toLowerCase())
			} else if (el == el.toLowerCase()) {
				new_text.push(el.toUpperCase())
			}
		})
		if (x != text.length) {
			new_text.push(" ")
		}

	})

	console.log(new_text.join(""))

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));


