const main = (input) => {
	const line = input.split("\n");
	line.some((n) => {
		const m = Number(n.split(" ")[0]);//中間試験の点数
		const f = Number(n.split(" ")[1]);//期末試験の点数
		const sum_mf = m + f;
		const r = Number(n.split(" ")[2]);//再試験の点数
		if (m == -1 && f == -1 && r == -1) {
			return true;
		}
		else if (m == -1 || f == -1) { console.log("F") }
		else if (80 <= sum_mf) { console.log("A") }
		else if (65 <= sum_mf && sum_mf < 80) { console.log("B") }
		else if (50 <= sum_mf && sum_mf < 65) { console.log("C") }
		else if (30 <= sum_mf && sum_mf < 50 && 50 <= r) { console.log("C") }
		else if (30 <= sum_mf && sum_mf < 50) { console.log("D") }
		else { console.log("F") }
	})

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
