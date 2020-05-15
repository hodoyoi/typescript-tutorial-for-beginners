# Typescriptチュートリアル用プロジェクト

## 環境構築

`yarn` または `npm` が必要です

```
$ yarn
```

または

```
$ npm install
```

## ローカルサーバの建て方

```
$ yarn dev
```
または
```
$ npm run dev
```
で、 `https://localhost:8080` に接続する



## ディレクトリ構成
- src ... ソースコードを格納する
- static ... 静的ファイルを置く
- dist ... `$ yarn build` または `$ npm run build` でコンパイルした成果物を格納する
- node_modules ... `yarn` または `npm` で導入したライブラリを格納する

## Github上での出題〜回答の流れ

+ 出題に対してissueと、回答用のブランチを立てる
+ 回答用ブランチにコードを書く
+ 回答用ブランチをもとにプルリクエストを立てる
+ 正解ならmasterにマージしてissueをクローズする