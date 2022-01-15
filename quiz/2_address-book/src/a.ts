// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }

// let result = fetchItems();
// console.log(result);

// new Promise의 경우 Promise에 실려서오는 타입은 모름
function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();

// 결론
// 동시적인 코드는 타입추론이 가능하나 비동기 코드의 경우에는 타입추론이 어려우므로 Promise<T>로 이에 대한 정의가 필요하다.
