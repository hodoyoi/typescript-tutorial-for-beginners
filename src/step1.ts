/**
 * ES6によるクラスの作成方法
 *
 * 用語
 * メソッド ... クラスの中に実装された関数のことを言います。以下のHogeクラスではconstructor()とpiyo()がメソッドです
 * プロパティ ... クラスの中に実装された変数のことを言います。以下のHogeクラスではsuffixがそれに当たります
 * インスタンス ... クラスはそのままでは使用できず、クラスを元手に個々に独立した実体を生成しなくてはなりません。newキーワードを使ってクラスから生成した実体のことをインスタンスと呼びます
 */

class Hoge {
  // Typescriptは、プロパティの宣言(インスタンスごとに用意された変数)ができる
  // 書式は 変数名: 型情報 とする
  suffix: string;

  // このメソッドはHogeがnewされた時点で実行される
  constructor(_suffix) {
    // プロパティsuffixを初期化する
    this.suffix = _suffix;
  }

  // 文字列型の引数strを取り、suffixを付けて返す
  // Typescriptは引数に型情報を渡せる
  piyo(str: string) {
    return str + this.suffix;
  }
}

// クラスHogeからインスタンスhoge_instanceを生成する
const hoge_instance = new Hoge("MOUMOU");

// Javascriptでは作った関数を変数の中に入れることができる
const piyo2 = function (str) {
  return str + "PIYOPIYOPIYO";
};

// 上記の関数をインスタンスに持たせることができる
hoge_instance.piyo2 = piyo2;

// ブラウザのwindowオブジェクトに持たせる
window.hoge = hoge_instance;

window.alert(hoge_instance.piyo2("FUGAFUGA"));
