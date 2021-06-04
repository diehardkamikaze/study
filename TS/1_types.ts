const str: string = "hello"
const isFetching: boolean = true;
const int: Number = 42;
const float: Number = 4.2;
const mant: Number = 3e10;

// Arr
const NumberArr: Number[] = [1, 1, 2, 3, 5, 8, 13, 21];
const NumberArr2: Array<Number> = [1, 1, 2, 3, 5, 8, 13, 21];

const words: Array<String> = ["Hello", "ALASKA"];

// Tuple
const contact: [string, number] = ['Vladilen', 1234567];

//Any
let variable: any = 42;
//...
variable = 'New String';
variable = [];

// ====
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName('ALZ');

// Never
function throwError(message: string): never {
  throw new Error(message);
}

// You never know
function infinite(): never {
  while (true);
}

// Type
type Login = string; // just alias

const login: Login = '2';

type ID = string | number;
const id1: ID = '1234';
const id2: ID = 1234;

type SomeType = string | null | undefined;