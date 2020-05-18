import $ from "jquery";

// 問題用HTML
const template = `
<h1>これはStep5で動的に挿入したHTMLです</h1>

<div class="row">
  <div class="col-4 mb-2">
    <div class="card">
      <div id="name1"  class="card-header"></div>
      <div id="price1" class="card-body"></div>
      <div id="tags1" class="card-footer"></div>
    </div>
  </div>

  <div class="col-4 mb-2">
    <div class="card">
      <div id="name2"  class="card-header"></div>
      <div id="price2" class="card-body"></div>
      <div id="tags2" class="card-footer"></div>
    </div>
  </div>

  <div class="col-4 mb-2">
    <div class="card">
      <div id="name3"  class="card-header"></div>
      <div id="price3" class="card-body"></div>
      <div id="tags3" class="card-footer"></div>
    </div>
  </div>

  <div class="col-4 mb-2">
    <div class="card">
      <div id="name4"  class="card-header"></div>
      <div id="price4" class="card-body"></div>
      <div id="tags4" class="card-footer"></div>
    </div>
  </div>

  <div class="col-4 mb-2">
    <div class="card">
      <div id="name5"  class="card-header"></div>
      <div id="price5" class="card-body"></div>
      <div id="tags5" class="card-footer"></div>
    </div>
  </div>
</div>
`;
// index.htmlに用意したステップ5用の要素に書き込む
$("#step5").html(template);

// 🐶問題
// 商品アイテムのJSONを非同期通信(Ajax)で取得し、商品名、価格、タグを表示しなさい
// 商品アイテムのJSONのURLは、 http://localhost:8080/static/step5/items.json です

// ------------------------------------------------------------------

// 非同期通信を開始
$.ajax({
  // ここに適切なパラメータを入れてください
  type: "get",
  url: "static/step5/items.json",
  dataType: "json",
}).then(function (response) {
  // ここは通信成功した時の処理を書きます
  // var response = JSON.parse(response);
  console.log(response);
  // 正しくJSONを取得できた場合、responseは5つの要素を持った配列になっているはず
  response.forEach(function (item) {
    console.log(item);
    console.log(item.name); // アイテムの名前を表示させよ

    console.log(item.id);
    const number = item.id; // タグを動的に書き換えるためのid情報
    $("#name" + number).html(item.name);
    // Step5: 金額表記にカンマがないからおばあちゃんが見間違って10億円の商品を買ってしまいました #2
    const digit = item.price;
    $("#price" + number).html(digit.toLocaleString() + "円");
    // これでおばぁちゃんも大丈夫だね
    const tagsort = item.tags.map(function (tag) {
      return "<div>" + tag + "</div>";
    });
    $("#tags" + number).html(tagsort);
  });
  // responseをforEach()で回して、適切なidの要素にnameとpriceを入れなさい!!!
});
// Step5: 商品タグを1行ずつ表記せよ！ #1
// タグの切れ目がないので視認性にイチャモンがあります

// tagをループして<div></div>で囲えませんか？
