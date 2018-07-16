# 5chvip

> Nuxt.js TypeScript project


# 開発参加について
https://github.com/5chvip-group/5chvip/wiki/%E9%96%8B%E7%99%BA%E5%8F%82%E5%8A%A0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6
# 開発ガイド
https://github.com/5chvip-group/5chvip/wiki/%E9%96%8B%E7%99%BA%E3%82%AC%E3%82%A4%E3%83%89

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


# 環境構築
## 今北産業
1. npmとnode.jsをインストールします
2. gitリポジトリを落として起動します
3. 起動してﾆﾖﾆﾖします

## 仮想環境を整える

### Q1. 「仮想環境」ってなんだよ
「仮想環境」というのは、現在動いているOS上で別のOSを可動させることです。
大雑把に言えばパソコンの中でバーチャルなパソコンが動いている状態です。

### Q2. なんでそんな面倒なことするんだよ
A2. 開発環境を分けて競合が起きないようにするためです。
同じ部屋で全く別の作業していると散らかったり壊れたり面倒なので部屋を分けるイメージ。

### Q3. どうやって作るんだよ
A3. 執筆者は「Virutalbox」という仮想環境を管理するソフトと、「Ubuntu 64bit」というLinuxベースのOSを使用しています。
他の方法もあるので気になる方は参加者に聞いてください。

### Q4. 手順はどうなってるんだよ
A4. それぞれ落としてインスコするだけです。

### 必要なファイルの準備

Virtualbox本体を落としてインストールしてください。

- http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html?ssSourceSiteId=otnjp

Ubuntu 64bitのisoイメージも落としておきます。ダウンロード場所を忘れずに。

- https://www.ubuntulinux.jp/download/ja-remix

### 仮想環境を作成する

(1) Virtualboxを立ち上げて「新規」ボタンを押してください。
好きな名前、タイプを「Linux」、バージョンを「Ubuntu 64bit」に設定してOKボタンを押す。
その後の選択肢はお好みで。訳わからなかったら次へを連打。

(2) 完成した仮想環境をダブルクリックで立ち上げます。
黒い画面と「起動ハードディスクを選択」というウィンドウが出るので、②で落としたisoを選択します。

(3) 案内に従って操作するとUbuntuのデスクトップっぽい画面が立ち上がります。これで君だけの仮想環境が完成したぞ！

## 必要なソフトをインストールする

Ubuntuが起動できたら、Ubuntu中へ開発に必要なソフトをインストールする。
今回使用するソフトは以下のとおり。

- Nuxt.js

  今回メインで使用するライブラリ(便利なプログラムの部品セット)。
  これを叩くとなんやかんやあって作りたいプログラムが動く。
- Node.js

  Nuxt.jsを実行するための親ライブラリ的ポジション。v8.11.1を使用する。
- nodebrew

  Node.jsのインストール、管理に使用
- npm

  Node.js v8.11.1に付属。サーバの立ち上げに使用するコマンド。
  v5.6.0を使用する。
- yarn

  パッケージ管理系？Node.js v6.11.1に付属。
  推奨バージョンはv1.5.1だが1.7でも問題ない模様。

### 端末を開く

Linuxのデスクトップ(っぽい)画面を右クリック→「端末を開く」を選択。強そうな黒い画面が立ち上がる。
以下、この画面にコマンドを入力する。

### NodeBrewをインストール

以下のコマンドを入れてEnterでインストール。

```
curl -L git.io/nodebrew | perl - setup
```

### Node.jsをインストールする

以下のコマンドでインストール。

```
nodebrew install-binary v8.11.1
```

インストールが終わったら以下のコマンドを入力し、現在PCに入っているNode.jsを確認。v8.11.1があったらおｋ

```
nodebrew ls
```

最後に以下のコマンドを入力して、使用の準備をする。

```
nodebrew use v8.11.1
```

これをしないとNode.jsが有効化されないので注意。
きちんと対象のバージョンが入ればnpmとyarnのバージョンも合うはず。それぞれ以下のコマンドで確認。

```
npm --version
```

```
yarn --version
```

###  gitリポジトリを落として起動する

いよいよソースコードを引っ張っる。
その前にgitをインストールする必要がある。「gitってなんだよこわいれす＞＜」って人は「ソースの更新履歴を管理するソフト」だと思ってね

```
sudo apt-get install git
```

終わったら現在の最新ソースをデスクトップに落とす。

```
git clone https://github.com/5chvip-group/5chvip.git
```

いい感じにインストールが終わるとデスクトップに5chvipフォルダができます。ダブルクリックしたい気持ちはあるけど端末上で移動する。

```
cd 5chvip
```

初回起動時だけ次のコマンドを実行。

```
npm install # or yarn'
```

最後にサーバーを起動して終了！

```
npm run dev
```

起動に成功すると、'http://localhost:3000' の文字が表示される。
これでUbuntuのブラウザから http://localhost:3000 にアクセスすればトップページが出る。

これで環境構築は終了です。

## Tips

### ポートを開く
作成した仮想環境に次の設定をしておくと幸せになれるかもしれない
- ネットワーク→高度→ポートフォワーディング
TCPプロトコルでホストポート8888,ゲストポート3000を設定する

### ホストOSのブラウザで閲覧する
仮想環境に鯖だけ立てて、あとはホストから閲覧、修正する方法。
gitリポジトリの'pakage.json'を特定部分を書き換える。

'''
'script'{
  "dev": "HOST:=0.0.0.0 PORT=3000 nuxt"
}
'''

### 共有フォルダにリポジトリを設置する
こうすればいよいよVirutalboxはサーバーだけです。閲覧・修正をすべてホスト側で実施できます。
