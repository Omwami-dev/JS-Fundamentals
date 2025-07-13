const x = Number(process.argv[2]);

if (!isNaN(x)) {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
} else {
  console.log("Missing number of occurrences");
}
