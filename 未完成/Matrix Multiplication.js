process.stdin.setEncoding('utf8');

const main = (input) => {
  const n = Number(input.split("\n")[0].split(" ")[0]);
  const m = Number(input.split("\n")[0].split(" ")[1]);
  const l = Number(input.split("\n")[0].split(" ")[2]);
  const nm = input.split("\n").slice(1, n + 1);
  let nm_map = nm.map((n) => n.split(" "))
  const ml = input.split("\n").slice(n + 1);
  let ml_map = ml.map((n) => n.split(" "))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < l; j++) {
      console.log("[j]:" + j)
      for (let k = 0; k < m; k++) {
      }
    }
  }


}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
