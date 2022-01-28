import "./styles.css";

const onClickAdd = () => {
  // 入力した値の取得
  const inputText = document.getElementById("add-text").value;
  // add-button押したら入力した値を削除する
  document.getElementById("add-text").value = "";

  // TODO項目の追加(各々の要素を生成)
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = inputText;
  // ボタンの生成
  const completionButton = document.createElement("button");
  completionButton.innerText = "completion";
  completionButton.addEventListener("click", () => {
    alert("tee");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // 押下された削除ボタンの親要素(li)を未完了リストから消す
    // 親要素の取得
    const deleteTarget = deleteButton.parentNode.parentNode;
    // 指定した要素の子要素を削除
    document.getElementById("non-completion-list").removeChild(deleteTarget);
  });

  // 要素の構成の設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completionButton);
  div.appendChild(deleteButton);
  // htmlに生成した要素を追加
  document.getElementById("non-completion-list").appendChild(li);
};

// add-buttonクリックイベント
// イベントを実行するエレメントを取得
// どんなイベントのとき、どの関数を実行するか
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
