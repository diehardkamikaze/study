const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["aloooga", 'aloha'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse<number>(arrayOfNumbers));
console.log(reverse(arrayOfStrings));