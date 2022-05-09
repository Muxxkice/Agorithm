//白昼夢
//テストケースの内WAの部分が半分あるが該当ケースを見つけられなかった
process.stdin.setEncoding('utf8');

const main = (input) => {
	const s = input.split("/n")[0];
	let list = ["dream", "dreamer", "erase", "eraser"];
	let re_list = list.map((n) => n.split("").reverse().join(""))


	const re_s = s.split("").reverse().join("")

	let flg = true;

	for (let i = 0; i < s.length;) {
		let check_flg = false;
		for (let j = 0; j < 4; j++) {
			//console.log(re_s.substr(i, re_list[j].length ),re_list[j])
			if (re_s.substr(i, re_list[j].length) == re_list[j]) {
				check_flg = true;
				i += re_list[j].length;
			}
		}
		//console.log(check_flg)
		if (!check_flg) {
			flg = false;
			break;
		}
	}


	if (flg) {
		console.log("YES")
	} else {
		console.log("NO")
	}

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

