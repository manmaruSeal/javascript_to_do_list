import "./styles.css";

const onClickAdd = () => {
  // 入力した値の取得
  const inputText = document.getElementById("add-text").value;
  // add-button押したら入力した値を削除する
  document.getElementById("add-text").value = "";
  addNonCompletion(inputText);
};

// add-buttonクリックイベント
// イベントを実行するエレメントを取得
// どんなイベントのとき、どの関数を実行するか
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromNonCompletion = (target) => {
  document.getElementById("non-completion-list").removeChild(target);
};

const addNonCompletion = (text) => {
  // TODO項目の追加(各々の要素を生成)
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;
  // ボタンの生成
  const completionButton = document.createElement("button");
  completionButton.innerText = "completion";
  // 完了機能
  completionButton.addEventListener("click", () => {
    // 親要素の取得してその子要素を削除
    deleteFromNonCompletion(deleteButton.parentNode.parentNode);

    // 押下されたボタンの親要素を取得する(再度createelementする必要なし)
    const addTarget = completionButton.parentNode.parentNode;
    // 同じ階層のPタグのテキストを取得
    // p.innerText = completionButton.previousElementSibling.textContent;

    // 押下されたTODOの内容(親要素から取得することもできる)
    const text = addTarget.firstChild.firstChild.innerText;

    // div以下の要素を削除
    addTarget.firstElementChild.textContent = null;

    // pタグの生成
    const p = document.createElement("p");
    p.innerText = text;

    // ボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    div.appendChild(p);
    div.appendChild(backButton);

    // 戻す機能
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      // console.log(deleteTarget);
      // 指定した要素の子要素を削除
      document.getElementById("completion-list").removeChild(deleteTarget);
      // 押下されたボタンの親要素を取得する(再度createelementする必要なし)
      // const addTarget = backButton.parentNode.parentNode;
      // const p = document.createElement("p");
      // 同じ階層のPタグのテキストを取得
      const text = addTarget.firstChild.firstChild.innerText;
      addNonCompletion(text);
    });

    document.getElementById("completion-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  // 削除機能
  deleteButton.addEventListener("click", () => {
    // 押下された削除ボタンの親要素(li)を未完了リストから消す
    // 親要素を取得して要素の子要素を削除
    deleteFromNonCompletion(deleteButton.parentNode.parentNode);
  });

  // 要素の構成の設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completionButton);
  div.appendChild(deleteButton);
  // htmlに生成した要素を追加
  document.getElementById("non-completion-list").appendChild(li);
};
