// 변수에 인터페이스 활용
var seho = {
    age: 33,
    name: "세호"
};
// 함수에 인터페이스 활용
function getUser(user) {
    console.log(user);
}
var capt = {
    name: "캡틴",
    age: 100
};
getUser(seho);
getUser(capt);
getUser({ age: 33, name: "sehoho" });
var sum;
sum = function (a, b) {
    return 10;
};
var arr = ["a", "b", "c"];
var obj = {
    //   sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
    123: /\.123$/
};
console.log(obj["cssFile"]);
console.log(obj[123]);
Object.keys(obj).forEach(function (value) { });
