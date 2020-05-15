// exportキーワードは、プログラム部品を別ファイルに書き出したり呼び出したりする時に使用する
export default class Hoge {
  hoge() {
    return "HOGEHGOEHGOE";
  }
}

// 利用側は、以下のようにimport fromキーワードを使って呼び出すことができる
// import Hoge from 'step2.ts'

// defaultでなく、名前付きでエクスポートすることができる
export const Piyo = class Piyo {
  piyo() {
    return "PIYOPIYOPIYO";
  }
};

// 利用側
// import Piyo from 'step2.ts'

// 参考: https://ja.javascript.info/import-export
