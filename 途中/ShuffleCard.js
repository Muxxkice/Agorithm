process.stdin.setEncoding('utf8');

const main = (input) => {
	const line = input.split("\n");
  console.log(line)
  const Shuffle=(n) => {
  if(n.length > 1) {
  const card = n.split("");
  }
  }
  line.some((cards) =>{
  if(cards == "-") {
  return true;
  } else {
  Shuffle(cards);
  }
  })

}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));


