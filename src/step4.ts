import $ from "jquery";

// 問題用HTML
const template = `
<h1>これはStep4で動的に挿入したHTMLです</h1>
<a href="#" class="btn btn-primary" id="btn">商品購入</a>
<a href="#" class="btn btn-secondary" id="minus-btn">取り消し</a>
<p>在庫：<span id="count"></span></p>
`;
// index.htmlに用意したステップ4用の要素に書き込む
$("#step4").html(template);

// 在庫数
let count = 3;
// 在庫数を更新するコード
$("#count").html(count);

// ------------------------------------------------------------------

// 🐶問題
// 商品購入ボタンを押した時に、在庫表示を1減らして表示しなさい。在庫数はcountとする

// 🐷考え方
// 1: idがbtnの要素に対して、jqueryのクリックイベントを拾うコードを書く（ jquery click でぐぐれ ）
// 2: クリックイベントの中での処理で、countを減算し、<span id="count"></span>の要素にcountを書き込む

// 👹ステップアップ問題
// ・もしcountが0だった場合は、countの代わりに「売り切れ」を表示させる
// ・また、countをマイナスにさせないように、減算処理にスキップの処理を入れる

// 👺ステップアップ問題2
// ・商品購入ボタンの横に灰色の取り消しボタンを設置せよ
// ・取り消しボタンを押したら、在庫を1増やす
// ・在庫は3以上にはならない

$("#btn").on("click", function() {
  count--;
  $("#count").html(count);
  if (count <= 0) {
    $("#count").html("売り切れ");
  }
});

$("#minus-btn").on("click", function() {
  if (count < 3) {
    count++;
    $("#count").html(count);
  }
  if (count <= 0) {
    count = 0;
    $("#count").html(count);
  }
});
