/**
 * const,letの変数宣言
 */

//  varは上書きも再定義もできてしまう
//  意図しないところでやってしまうことも…
// var val1 = "var変数";
// console.log(val1);

// val1 = "aaaa"
// console.log(val1)

// var val1="aaa23456"
// console.log(val1)

// letは上書き可能だが、再定義はエラーとなる
// let val2 = "let_test";
// console.log(val2);

// val2 = "let_update";
// console.log(val2);
// let val2 = "test_insert";

// constは上書きも再定義もエラーとなる
// const val3 = "test_const";
// console.log(val3);

// val3 = "test_"

// const val3 = "test"

// constはオブジェクト、配列の変更はエラーとならない

// const val4 = {
//   name:"test",
//   age:10
// };
// val4.address = "japan"
// val4.age = 12;

// console.log(val4);

// const val5 = ["dog","dog_2"];
// val5.push("cat")
// console.log(val5);

/**
 * テンプレート文字列
 */
const food = "メロンパン";
const drink = "牛乳";

//  文字列と変数を結合する従来の方法
const message1 = "朝ごはんは" + drink + "と" + food + "です！";
console.log(message1);

const message2 = `朝ごはんは${drink}と${food}です！`;
console.log(message2);
