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
// const food = "メロンパン";
// const drink = "牛乳";

// //  文字列と変数を結合する従来の方法
// const message1 = "朝ごはんは" + drink + "と" + food + "です！";
// console.log(message1);

// const message2 = `朝ごはんは${drink}と${food}です！`;
// console.log(message2);

/**
 * アロー関数
 */

//  従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("hello!"));

// // 変数に関数を入れることもできる
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("Hello!!"));

// // アロー関数(=>がアロー！)
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("hello!!!"));

// // 引数の()は省略することも可能だが、フォーマッターで直される
// const func4 = (str) => {
//   return str;
// };
// console.log(func4("hello!!!!"));

// // 返すものが一行で済む場合は{}でreturnを書く必要がない
// const func5 = (str) => str;

// console.log(func5("hello!!!!!"));

// const add = (num1, num2) => num1 + num2;

// console.log(add(1, 1));

/**
 * 分割代入
 */
// 分割しないやり方
// const breakfast = {
//   food:"メロンパン",
//   drink:"牛乳",
// }

// const message1 = `朝ごはんは${breakfast.drink}と${breakfast.food}です！`
// console.log(message1)
// ↑この書き方だと、変数名が長かった時や項目が多かったりすると大変…

// 分割代入！
// 使いたい項目を予め、定義？しておく(指定のプロパティを抜き出す)
// const {food, drink = "お茶"} = breakfast;
// const message2 = `朝ごはんは${drink}と${food}です！`
// console.log(message2)

// 配列でも分割代入が可能
// 分割しない方法
// const breakfast_list = ["メロンパン","牛乳"]
// const message3 = `朝ごはんは${breakfast_list[0]}と${breakfast_list[1]}です！`
// console.log(message3)

// // 分割代入
// const [food,drink] = breakfast_list;
// const message4 = `朝ごはんは${drink}と${food}です！`
// console.log(message4)

/**
 * デフォルト値
 */
// 引数の後に＝値とするとデフォルト値を設定できる
// 分割代入のときでも使える
// const sayHello = (name = "mickey") => console.log(`hello,${name}!`);
// sayHello("pooh")
// sayHello()

/**
 * スプレット構文 ...
 * 色んな用途アリ
 */

//  配列の展開(1つずつ順番に展開してくれる！)
// const arr1 = [1,2]
// console.log(arr1)
// console.log(...arr1)
// const add = (num1,num2) => num1 + num2;
// console.log(add(...arr1))

// // 配列をまとめる(分割代入とよく一緒に使われる)
// const arr2 = [1,2,3,4,5]
// const[num1,num2,...arr3] = arr2
// console.log(arr3)

// // 配列のコピー、結合
// // コピーの際に代入をすると参照渡し(参照している先が一緒)となり、不具合の元
// const arr4 = [10,20];
// const arr5 = [20,40];

// const arr6 = [...arr4]
// console.log(arr6)

// const arr7 = [...arr4,...arr5];
// console.log(arr7)
