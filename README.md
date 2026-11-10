# 日本のコアラ家系図

GitHub Pages: <https://dj-kata.github.io/koala_familytree/>

日本で飼育されているコアラの家系図を表示する静的Webアプリです。現在のメイン画面は `v3.html`、全件データは `data.js`、範囲別データは `csvs/` にあります。

## ローカルで確認する

CSVの読み込みに `fetch()` を使うため、HTMLファイルを直接開かずHTTPサーバー経由で確認します。PCへのPythonインストールは不要で、Windows版uvが管理するPythonを使います。

最初に `.env.example` を `.env` へコピーし、Windows版 `uv.exe` のWSLから見たパスを設定します。このリポジトリでは次のような内容です。

```dotenv
WUV=/mnt/c/Users/katao/.local/bin/uv.exe
```

次のコマンドで起動します。

```bash
make serve
```

起動後、<http://127.0.0.1:8000/> を開きます。

## データを確認する

更新後は、CSVの必須列、個体名の重複、性別、行・列番号、画像参照を検査します。

```bash
make validate
```

画像が未登録の場合は警告だけを表示します。画像警告でも失敗させたい場合は `make validate-strict` を実行します。

## データとファイル

- `data.js`: 全個体の表示データ
- `csvs/all.csv`: 全個体のCSV表現
- `csvs/*.csv`: 園・家系など範囲別の表示データ
- `imgs/`: アイコン画像（正方形のPNGを想定）
- `export.csv`, `export_notion.py`: Notionエクスポート由来の旧変換フロー
- `vls.html`, `v1.html`, `familytree.js`: 旧表示方式

現状は `data.js` と `csvs/all.csv` が公開画面の最新データで、`export.csv` は件数が一致しないため、そのまま `export_notion.py` を実行して `data.js` を上書きしないでください。

JPG画像をPNGへ変換する場合は ImageMagick が必要です。

```bash
./convert.sh
```
