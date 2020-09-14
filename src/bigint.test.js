let bigint =  123456789012345678901234567890123456789n;
const sameBigint = BigInt("123456789012345678901234567890");
const bigintFromNumber = BigInt(10);

console.log(bigint);
console.log(sameBigint);

console.log(1n + 2n);
console.log(5n / 2n);

// console.log(1n + 2);

bigint = 1n;
number = 2;
console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);

// console.log(+bigint);

console.log(2n > 1n);
console.log(2n > 1);

console.log(1n || 2);
console.log(0n || 2);