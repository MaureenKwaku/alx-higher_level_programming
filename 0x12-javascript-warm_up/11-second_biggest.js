#!/usr/bin/node
(() => {
  const args = process.argv;
  const argsCount = args.length;

  if (argsCount < 3) {
    console.log(0);
  } else {
    const integers = [];
    for (let i = 2; i < argsCount; i++) {
      const num = Number(args[i]);
      if (!isNaN(num)) {
        integers.push(num);
      }
    }
    if (integers.length < 2) {
      console.log(0);
    } else {
      const sortedIntegers = integers.sort((a, b) => b - a);
      console.log(sortedIntegers[1]);
    }
  }
})();
