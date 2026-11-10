# 日本のコアラ家系図

GitHub Pages: <https://dj-kata.github.io/koala_familytree/>

日本で飼育されているコアラの家系図を表示する静的Webアプリです。現在のメイン画面は `v3.html` です。個体情報と表示レイアウトのマスターは `data.js`、`csvs/` はそこから生成する互換ファイルです。

## ローカルで確認する

HTMLファイルを直接開かずHTTPサーバー経由で確認します。PCへのPythonインストールは不要で、Windows版uvが管理するPythonを使います。

最初に `.env.example` を `.env` へコピーし、Windows版 `uv.exe` のWSLから見たパスを設定します。このリポジトリでは次のような内容です。

```dotenv
WUV=/mnt/c/Users/katao/.local/bin/uv.exe
```

次のコマンドで起動します。

```bash
make serve
```

起動後、<http://127.0.0.1:8000/> を開きます。

## 個体データを更新する

`data.js` の `familyData` だけを編集します。主なフィールドは次のとおりです。

```js
{
  "id": "tilly",
  "name": "ティリー",
  "gender": "female",
  "born": "2009/12/15",
  "dead": "2024/12/25",
  "locate": "東山動植物園",
  "img": "https://.../imgs/tilly.png"
}
```

- `id`: 英小文字・数字・`_`だけで付ける、一意で変更しない安定ID
- `name`: 画面に表示する個体名。同名でも可
- `fid`, `mid`: 父・母の英字ID。親が不明なら省略
- `born`: 誕生日のみ
- `dead`: 没日。存命または不明なら空文字

編集後、CSVを再生成して検査します。

```bash
make generate
make validate
```

`csvs/*.csv` は生成物なので直接編集しません。

表示グループへ個体を追加する場合は、`familyViews.<グループ>.members` に英字IDを追加します。座標をまだ決めていない場合は自動補完できます。

```bash
make fill-layouts
make validate
```

## 表示レイアウトを更新する

1. `make serve` で起動する
2. コンボボックスから対象ビューを選ぶ（選択時点で表示される）
3. 「レイアウト編集」を有効にする
4. 個体、オレンジの接点、黄色の中継点をドラッグする
5. 「レイアウトを書き出す」でJSONを保存する
6. ダウンロードしたJSONをリポジトリへ置いて反映する

```bash
make apply-layout FILE=layout-yume.json
make validate
```

個体座標は `familyViews.*.positions`、親ペアの接点は `junctions`、子へ向かう中継点は `routes` に保存されます。自動配置は縦横の線分を優先しますが、複雑な家系では書き出した中継点を手動調整できます。

## データを確認する

英字IDの形式・重複、親参照、`born` と `dead`、ビューのメンバー・座標・接点・経路、生成CSVとの同期を検査します。

```bash
make validate
```

画像が未登録の場合は警告だけを表示します。画像警告でも失敗させたい場合は `make validate-strict` を実行します。

## データとファイル

- `data.js`: 全個体と表示レイアウトのマスター
- `assets/app.js`: 家系図の配置・接点・経路・レイアウト編集
- `assets/style.css`: 画面スタイル
- `csvs/*.csv`: `data.js` から生成される互換データ
- `scripts/generate_csvs.py`: CSV生成
- `scripts/fill_layout_positions.py`: グループへ追加した個体の座標補完
- `scripts/apply_layout.py`: ブラウザで書き出したレイアウトの反映
- `scripts/validate_data.py`: データとレイアウトの検査
- `imgs/`: アイコン画像（正方形のPNGを想定）
- `export.csv`, `export_notion.py`: Notionエクスポート由来の旧変換フロー
- `vls.html`, `v1.html`, `familytree.js`: 旧表示方式

`export.csv` は最新マスターではありません。`export_notion.py` を実行して `data.js` を上書きしないでください。

JPG画像をPNGへ変換する場合は ImageMagick が必要です。

```bash
./convert.sh
```
