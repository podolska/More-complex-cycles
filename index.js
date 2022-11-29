for (let i = 20; i <= 30; i+=0.5) {
  console.log(i);
};

const dollarRate = 27;

for (let i = 10; i <= 100; i+= 10) {
  console.log(dollarRate * i);
};

const n = 369;

for (let i = 0; i <= 100; i++) {
  if (i ** 2 <= n) {
    console.log(i);
  }
}

const ifTheNumberIsSimple = (number) => {
  let count = 0;
  for (let i = 1; i <= 9; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  if (count > 2) {
    return false;
  } 

  return true;
}

const check1 = ifTheNumberIsSimple(7);
const check2 = ifTheNumberIsSimple(8);

console.log(check1, check2);

const checkNumberKratneThree = (number) => {
  let copy = number;

  while (copy > 3) {
    copy /= 3;
    if (copy % 3 !== 0) {
      return false;
    }
  }

  if (copy === 3) {
    return true;
  }

  return false;
}

const check3 = checkNumberKratneThree(81);
const check4 = checkNumberKratneThree(100);

console.log(check3, check4);