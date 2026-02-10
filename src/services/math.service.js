const fibonacci = (n) => {
  if (n < 0) return [];

  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
};

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const primes = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter(
    (num) => Number.isInteger(num) && isPrime(num)
  );
};

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
};

const hcf = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr.reduce((acc, num) => gcd(acc, num));
};


const lcmTwo = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

const lcm = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr.reduce((acc, num) => lcmTwo(acc, num));
};


export default {
  fibonacci,
  primes,
  lcm,
  hcf,
};