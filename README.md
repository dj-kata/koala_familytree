page: https://dj-kata.github.io/koala_familytree/

以下を利用
https://balkan.app/FamilyTreeJS/Docs/GettingStarted

# やったこと
familytree.jsを改造(3行目にfield_2を表示するための改造をしている)

notionのcsv出力結果をconvert.pyでdata.jsに変換する

imgs/に画像をコミットし、https://dj-kata.github.io/koala_familytree/imgs/fuku.pngのようなURLをimg_0に埋め込む。

# メモ
アイコン画像について、jpgについてはconvert.shを実行してpngにしておくこと。正方形の画像を想定している。

各園の家系図ファイルは```csvs/```以下にある。  
全件データは```data.js```から生成されるが、csv作成時に使いやすいように一応```csvs/all.csv```もコミットしている。  