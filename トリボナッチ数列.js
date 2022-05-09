//トリボナッチ数列
//1,0,5,以下前三つの数の32番目

const main = (input) => {

	let list = [1, 0, 5];
	for (let i = 3; i < 32; i++) {
		list[i] = Number(list[i - 1]) + Number(list[i - 2]) + Number(list[i - 3]);
	}
	console.log(list[31])
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
