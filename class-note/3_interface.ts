interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 100,
};
getUser(seho);
getUser(capt);
getUser({ age: 33, name: "sehoho" });

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number) {
  return 10;
};

interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
// arr[0];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  //   sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
  123: /\.123$/,
};

console.log(obj["cssFile"]);
console.log(obj[123]);

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
