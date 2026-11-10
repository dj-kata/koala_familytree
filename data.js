const familyData = [
  {
    "id": "ラム",
    "name": "ラム",
    "gender": "male",
    "born": "1988/4/28",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2012/3/30"
  },
  {
    "id": "のぞみ",
    "name": "のぞみ",
    "gender": "female",
    "born": "2008/3/1",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nozomi.png",
    "dead": "2026/7/8"
  },
  {
    "id": "ミリー",
    "fid": "ラム",
    "mid": "カルゴア",
    "name": "ミリー",
    "gender": "female",
    "born": "2000/8/23",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/1/30"
  },
  {
    "id": "ピックス",
    "fid": "ジェックス",
    "mid": "ピコ",
    "name": "ピックス",
    "gender": "male",
    "born": "2003/6/28",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2019/1/21"
  },
  {
    "id": "ティリー",
    "name": "ティリー",
    "gender": "female",
    "born": "2009/12/15",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tilly.png",
    "dead": "2024/12/25"
  },
  {
    "id": "ウメ",
    "fid": "パイン",
    "mid": "モミジ",
    "name": "ウメ",
    "gender": "female",
    "born": "2010/8/5",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ume.png",
    "dead": "2022/11/21"
  },
  {
    "id": "だいち",
    "fid": "アーク",
    "mid": "ゆめ",
    "name": "だいち",
    "gender": "male",
    "born": "2013/8/18",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/daichi.png",
    "dead": ""
  },
  {
    "id": "ミライ",
    "fid": "ライタ",
    "mid": "ミリー",
    "name": "ミライ",
    "gender": "female",
    "born": "2008/10/25",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2020/6/10"
  },
  {
    "id": "ウミ",
    "fid": "ウルル",
    "mid": "ウメ",
    "name": "ウミ",
    "gender": "female",
    "born": "2014/6/13",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/umi.png",
    "dead": ""
  },
  {
    "id": "ホリー",
    "name": "ホリー",
    "gender": "female",
    "born": "2013/12/25",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/holly.png",
    "dead": ""
  },
  {
    "id": "モモジ",
    "name": "モモジ",
    "gender": "male",
    "born": "1997/2/7",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2007/2/17"
  },
  {
    "id": "ハニー",
    "fid": "ピース♂",
    "mid": "ライチ",
    "name": "ハニー",
    "gender": "female",
    "born": "2014/8/3",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2024/8/15"
  },
  {
    "id": "ウルル",
    "name": "ウルル",
    "gender": "male",
    "born": "2007/5/26",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/12/18"
  },
  {
    "id": "ユメ",
    "fid": "フランク",
    "mid": "ブランディ",
    "name": "ユメ",
    "gender": "female",
    "born": "2015/1/2",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/yume.png",
    "dead": "2025/3/23"
  },
  {
    "id": "ジンベラン",
    "name": "ジンベラン",
    "gender": "female",
    "born": "2013/2/23",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2023/7/8"
  },
  {
    "id": "タイチ",
    "fid": "ティムタム",
    "mid": "ライチ",
    "name": "タイチ",
    "gender": "male",
    "born": "2012/5/3",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/taichi.png",
    "dead": "2022/9/29"
  },
  {
    "id": "コロン",
    "fid": "フランク",
    "mid": "ココロ",
    "name": "コロン",
    "gender": "male",
    "born": "2014/11/22",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/koron.png",
    "dead": ""
  },
  {
    "id": "チャーリー",
    "fid": "アーチャー(東山)",
    "mid": "ティリー",
    "name": "チャーリー",
    "gender": "male",
    "born": "2014/11/27",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/charlie.png",
    "dead": "2026/3/15"
  },
  {
    "id": "モミジ",
    "fid": "モモジ",
    "mid": "ミリー",
    "name": "モミジ",
    "gender": "female",
    "born": "2006/5/29",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2015/8/21"
  },
  {
    "id": "リオ",
    "fid": "ブンダ",
    "mid": "ココロ",
    "name": "リオ",
    "gender": "female",
    "born": "2015/12/10",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/rio.png",
    "dead": ""
  },
  {
    "id": "ピーター",
    "fid": "ピース♂",
    "mid": "ティリー",
    "name": "ピーター",
    "gender": "male",
    "born": "2016/3/28",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/peter.png",
    "dead": ""
  },
  {
    "id": "クイン",
    "fid": "ボウ",
    "mid": "ドリー",
    "name": "クイン",
    "gender": "female",
    "born": "2015/3/23",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2023/5/31"
  },
  {
    "id": "オウカ",
    "fid": "ウルル",
    "mid": "ウミ",
    "name": "オウカ",
    "gender": "female",
    "born": "2016/9/25",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ouka.png",
    "dead": ""
  },
  {
    "id": "りん",
    "fid": "マックス",
    "mid": "ティリー",
    "name": "りん",
    "gender": "female",
    "born": "2017/8/23",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/rin.png",
    "dead": ""
  },
  {
    "id": "イシン",
    "fid": "ブンダ",
    "mid": "ユメ",
    "name": "イシン",
    "gender": "male",
    "born": "2017/5/14",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ishin.png",
    "dead": ""
  },
  {
    "id": "こまち",
    "fid": "マックス",
    "mid": "ホリー",
    "name": "こまち",
    "gender": "female",
    "born": "2017/4/27",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/komati.png",
    "dead": ""
  },
  {
    "id": "ぼたん",
    "fid": "アーティー",
    "mid": "ウメ",
    "name": "ぼたん",
    "gender": "female",
    "born": "2017/5/12",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/botan.png",
    "dead": "2024/12/13"
  },
  {
    "id": "ななみ",
    "fid": "タイチ",
    "mid": "ホリー",
    "name": "ななみ",
    "gender": "female",
    "born": "2018/7/7",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nanami.png",
    "dead": "2025/12/11"
  },
  {
    "id": "きらら",
    "fid": "タイチ",
    "mid": "ティリー",
    "name": "きらら",
    "gender": "female",
    "born": "2018/9/6",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kirara.png",
    "dead": ""
  },
  {
    "id": "コタロウ (2015)",
    "name": "コタロウ (2015)",
    "gender": "male",
    "born": "2015/9/25",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2022/7/31"
  },
  {
    "id": "ヒマワリ",
    "fid": "バンブラ",
    "mid": "ユメ",
    "name": "ヒマワリ",
    "gender": "female",
    "born": "2019/6/22",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/himawari.png",
    "dead": ""
  },
  {
    "id": "アーチャー",
    "name": "アーチャー",
    "gender": "male",
    "born": "2019/4/26",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/archer.png",
    "dead": ""
  },
  {
    "id": "ハナ",
    "fid": "ピーター",
    "mid": "オウカ",
    "name": "ハナ",
    "gender": "female",
    "born": "2019/5/20",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hana.png",
    "dead": ""
  },
  {
    "id": "エマ",
    "fid": "ピーター",
    "mid": "ウミ",
    "name": "エマ",
    "gender": "female",
    "born": "2018/12/6",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ema.png",
    "dead": ""
  },
  {
    "id": "ふく",
    "fid": "コタロウ",
    "mid": "ドリー",
    "name": "ふく",
    "gender": "female",
    "born": "2019/6/12",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/fuku.png",
    "dead": ""
  },
  {
    "id": "コハル",
    "fid": "コロン",
    "mid": "クイン",
    "name": "コハル",
    "gender": "female",
    "born": "2019/4/2",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/koharu.png",
    "dead": ""
  },
  {
    "id": "つくし",
    "fid": "イシン",
    "mid": "りん",
    "name": "つくし",
    "gender": "female",
    "born": "2020/9/3",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tukusi.png",
    "dead": ""
  },
  {
    "id": "インディコ",
    "fid": "イシン",
    "mid": "ティリー",
    "name": "インディコ",
    "gender": "female",
    "born": "2019/12/22",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/indeko.png",
    "dead": ""
  },
  {
    "id": "キボウ",
    "fid": "バンブラ",
    "mid": "ジェイン",
    "name": "キボウ",
    "gender": "female",
    "born": "2019/10/17",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kibou.png",
    "dead": ""
  },
  {
    "id": "いぶき",
    "fid": "イシン",
    "mid": "ホリー",
    "name": "いぶき",
    "gender": "male",
    "born": "2020/8/27",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ibuki.png",
    "dead": ""
  },
  {
    "id": "イツキ",
    "fid": "バンブラ",
    "mid": "イト",
    "name": "イツキ",
    "gender": "male",
    "born": "2020/4/3",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/itsuki.png",
    "dead": ""
  },
  {
    "id": "ワトル",
    "fid": "タイチ",
    "mid": "ななみ",
    "name": "ワトル",
    "gender": "female",
    "born": "2020/5/14",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/wattle.png",
    "dead": "2026/10/8"
  },
  {
    "id": "ソラ",
    "fid": "バンブラ",
    "mid": "ユメ",
    "name": "ソラ",
    "gender": "male",
    "born": "2020/6/14",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sora.png",
    "dead": ""
  },
  {
    "id": "たんぽぽ",
    "fid": "チャーリー",
    "mid": "ぼたん",
    "name": "たんぽぽ",
    "gender": "female",
    "born": "2020/4/26",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tanpopo.png",
    "dead": ""
  },
  {
    "id": "シャイン",
    "fid": "コロン",
    "mid": "クイン",
    "name": "シャイン",
    "gender": "male",
    "born": "2017/8/31",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/shine.png",
    "dead": "2022/1/6"
  },
  {
    "id": "アーティー",
    "name": "アーティー",
    "gender": "male",
    "born": "2012/8/11",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/7/27"
  },
  {
    "id": "ヒナタ",
    "fid": "ブンダ",
    "mid": "ヒマワリ",
    "name": "ヒナタ",
    "gender": "female",
    "born": "2021/3/27",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hinata.png",
    "dead": ""
  },
  {
    "id": "カナエ",
    "fid": "バンブラ",
    "mid": "ユメ",
    "name": "カナエ",
    "gender": "female",
    "born": "2021/6/13",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kanae.png",
    "dead": ""
  },
  {
    "id": "ピース",
    "fid": "ブンダ",
    "mid": "ジェイン",
    "name": "ピース",
    "gender": "female",
    "born": "2021/6/29",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/peace.png",
    "dead": ""
  },
  {
    "id": "ライト",
    "fid": "バンブラ",
    "mid": "イト",
    "name": "ライト",
    "gender": "male",
    "born": "2021/5/14",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/raito.png",
    "dead": ""
  },
  {
    "id": "シャイニー",
    "fid": "シャイン",
    "mid": "マイ",
    "name": "シャイニー",
    "gender": "female",
    "born": "2021/5/13",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/shiny.png",
    "dead": ""
  },
  {
    "id": "ミラ",
    "fid": "コタロウ",
    "mid": "ジンベラン",
    "name": "ミラ",
    "gender": "female",
    "born": "2021/4/30",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/mira.png",
    "dead": ""
  },
  {
    "id": "あずま",
    "fid": "コロン",
    "mid": "こまち",
    "name": "あずま",
    "gender": "female",
    "born": "2021/5/18",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/azuma.png",
    "dead": ""
  },
  {
    "id": "ニーナ",
    "fid": "コタロウ",
    "mid": "ドリー",
    "name": "ニーナ",
    "gender": "female",
    "born": "2016/9/27",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2020/5/4"
  },
  {
    "id": "ミナト",
    "name": "ミナト",
    "gender": "male",
    "born": "2014/6/12",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/12/20"
  },
  {
    "id": "マイ",
    "fid": "ピーター",
    "mid": "ウメ",
    "name": "マイ",
    "gender": "female",
    "born": "2019/5/15",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2022/6/21"
  },
  {
    "id": "タイヨウ",
    "fid": "タイチ",
    "mid": "インディコ",
    "name": "タイヨウ",
    "gender": "male",
    "born": "2022/8/11",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/taiyou.png",
    "dead": "2026/10/14"
  },
  {
    "id": "ししお",
    "fid": "タイチ",
    "mid": "ホリー",
    "name": "ししお",
    "gender": "male",
    "born": "2022/4/4",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sisio.png",
    "dead": ""
  },
  {
    "id": "ノゾム",
    "fid": "ブンダ",
    "mid": "キボウ",
    "name": "ノゾム",
    "gender": "male",
    "born": "2022/2/26",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nozomu.png",
    "dead": ""
  },
  {
    "id": "おもち",
    "fid": "イシン",
    "mid": "ななみ",
    "name": "おもち",
    "gender": "female",
    "born": "2022/3/21",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/omochi.png",
    "dead": ""
  },
  {
    "id": "スカイ",
    "name": "スカイ",
    "gender": "male",
    "born": "2022/4/20",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sky.png",
    "dead": ""
  },
  {
    "id": "だいふく",
    "fid": "タイチ",
    "mid": "りん",
    "name": "だいふく",
    "gender": "male",
    "born": "2022/3/14",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/daifuku.png",
    "dead": ""
  },
  {
    "id": "ひなぎく",
    "fid": "チャーリー",
    "mid": "ぼたん",
    "name": "ひなぎく",
    "gender": "female",
    "born": "2021/12/15",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hinagiku.png",
    "dead": "2025/7/2"
  },
  {
    "id": "ハリー",
    "fid": "チャーリー",
    "mid": "コハル",
    "name": "ハリー",
    "gender": "male",
    "born": "2022/4/22",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/harry.png",
    "dead": ""
  },
  {
    "id": "きんとき",
    "fid": "コロン",
    "mid": "きらら",
    "name": "きんとき",
    "gender": "male",
    "born": "2022/6/25",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kintoki.png",
    "dead": ""
  },
  {
    "id": "パピー",
    "fid": "ピックス",
    "mid": "ミライ",
    "name": "パピー",
    "gender": "female",
    "born": "2011/6/23",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2013/9/3"
  },
  {
    "id": "ニシチ",
    "fid": "コタロウ",
    "mid": "ニーナ",
    "name": "ニシチ",
    "gender": "male",
    "born": "2019/2/7",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2021/3/31"
  },
  {
    "id": "ツムギ",
    "fid": "アーチャー",
    "mid": "ユメ",
    "name": "ツムギ",
    "gender": "female",
    "born": "2023/5/13",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tumugi.png",
    "dead": ""
  },
  {
    "id": "アラタ",
    "fid": "アーチャー",
    "mid": "ヒナタ",
    "name": "アラタ",
    "gender": "male",
    "born": "2023/6/14",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/arata.png",
    "dead": ""
  },
  {
    "id": "ナギ",
    "fid": "ピーター",
    "mid": "ウミ",
    "name": "ナギ",
    "gender": "female",
    "born": "2023/7/31",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nagi.png",
    "dead": ""
  },
  {
    "id": "アサヒ",
    "fid": "アーチャー",
    "mid": "ヒマワリ",
    "name": "アサヒ",
    "gender": "male",
    "born": "2022/12/9",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/asahi.png",
    "dead": ""
  },
  {
    "id": "スミレ",
    "fid": "ライト",
    "mid": "つくし",
    "name": "スミレ",
    "gender": "female",
    "born": "2024/9/11",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sumire.png",
    "dead": ""
  },
  {
    "id": "カスミ",
    "fid": "アーチャー",
    "mid": "ヒマワリ",
    "name": "カスミ",
    "gender": "female",
    "born": "2024/6/1",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kasumi.png",
    "dead": ""
  },
  {
    "id": "スター",
    "fid": "アーチャー",
    "mid": "インディコ",
    "name": "スター",
    "gender": "male",
    "born": "2023/11/18",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/star.png",
    "dead": ""
  },
  {
    "id": "チャーボウ",
    "fid": "アーチャー",
    "mid": "キボウ",
    "name": "チャーボウ",
    "gender": "male",
    "born": "2023/10/21",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/charbou.png",
    "dead": "2026/7/2"
  },
  {
    "id": "オウキ",
    "fid": "いぶき",
    "mid": "オウカ",
    "name": "オウキ",
    "gender": "male",
    "born": "2024/6/12",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ouki.png",
    "dead": ""
  },
  {
    "id": "もなか",
    "fid": "イシン",
    "mid": "りん",
    "name": "もなか",
    "gender": "male",
    "born": "2023/10/20",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/monaka.png",
    "dead": ""
  },
  {
    "id": "さち",
    "fid": "ソラ",
    "mid": "ふく",
    "name": "さち",
    "gender": "female",
    "born": "2024/5/9",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sachi.png",
    "dead": ""
  },
  {
    "id": "ポポロ",
    "fid": "コロン",
    "mid": "たんぽぽ",
    "name": "ポポロ",
    "gender": "male",
    "born": "2024/4/22",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/poporo.png",
    "dead": ""
  },
  {
    "id": "エイト",
    "fid": "アーチャー",
    "mid": "カナエ",
    "name": "エイト",
    "gender": "male",
    "born": "2024/11/24",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/eight.png",
    "dead": ""
  },
  {
    "id": "アース",
    "fid": "アーチャー",
    "mid": "ピース",
    "name": "アース",
    "gender": "male",
    "born": "2024/9/20",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/earth.png",
    "dead": "2026/7/20"
  },
  {
    "id": "ミラ仔",
    "fid": "ソラ",
    "mid": "ミラ",
    "name": "ミラ仔",
    "gender": "male",
    "born": "2024/6/23",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/mirako1.png",
    "dead": "2025/1/14"
  },
  {
    "id": "ピコ",
    "name": "ピコ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ジェックス",
    "name": "ジェックス",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ライタ",
    "name": "ライタ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "アーチャー(東山)",
    "name": "アーチャー(東山)",
    "gender": "male",
    "born": "",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2015/4/3"
  },
  {
    "id": "カルゴア",
    "name": "カルゴア",
    "gender": "female",
    "born": "",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ボウ",
    "name": "ボウ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ジンベラン仔",
    "fid": "コロン",
    "mid": "ジンベラン",
    "name": "ジンベラン仔",
    "gender": "male",
    "born": "",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2023/7/9"
  },
  {
    "id": "ピース♂",
    "name": "ピース♂",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ゆめ",
    "name": "ゆめ",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/yume_south.png",
    "dead": ""
  },
  {
    "id": "アーク",
    "name": "アーク",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ark.png",
    "dead": ""
  },
  {
    "id": "パイン",
    "name": "パイン",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ティアラ",
    "name": "ティアラ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ティムタム",
    "name": "ティムタム",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ライチ",
    "name": "ライチ",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ジェイン",
    "name": "ジェイン",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "ドリー",
    "name": "ドリー",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "バンブラ",
    "name": "バンブラ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/banbura.png",
    "dead": ""
  },
  {
    "id": "ココロ",
    "name": "ココロ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kokoro.png",
    "dead": ""
  },
  {
    "id": "ブランディ",
    "name": "ブランディ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "フランク",
    "name": "フランク",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/frank.png",
    "dead": ""
  },
  {
    "id": "イト",
    "name": "イト",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ito.png",
    "dead": ""
  },
  {
    "id": "ブンダ",
    "name": "ブンダ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/bunda.png",
    "dead": ""
  },
  {
    "id": "コタロウ",
    "name": "コタロウ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kotarou.png",
    "dead": ""
  },
  {
    "id": "マックス",
    "name": "マックス",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/max.png",
    "dead": ""
  },
  {
    "id": "ラムネ",
    "fid": "アーチャー",
    "mid": "キボウ",
    "name": "ラムネ",
    "gender": "male",
    "born": "2025/4/9",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ramune.png",
    "dead": ""
  },
  {
    "id": "ヒヨリ",
    "fid": "ソラ",
    "mid": "コハル",
    "name": "ヒヨリ",
    "gender": "female",
    "born": "2025/5/1",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hiyori.png",
    "dead": ""
  },
  {
    "id": "コスモ",
    "fid": "ししお",
    "mid": "インディコ",
    "name": "コスモ",
    "gender": "female",
    "born": "2025/5/15",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/cosmo.png",
    "dead": ""
  },
  {
    "id": "ポル",
    "fid": "ソラ",
    "mid": "ミラ",
    "name": "ポル",
    "gender": "female",
    "born": "2025/6/2",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/poll.png",
    "dead": ""
  },
  {
    "id": "ユイ",
    "name": "ユイ",
    "fid": "ブンダ",
    "mid": "ユメ",
    "gender": "female",
    "born": "",
    "dead": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/yui.png"
  },
  {
    "id": "キクタロー",
    "fid": "コロン",
    "mid": "たんぽぽ",
    "name": "キクタロー",
    "gender": "male",
    "born": "2025/12/2",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kikutaro.png",
    "dead": ""
  },
  {
    "id": "てんむす",
    "fid": "スカイ",
    "mid": "りん",
    "name": "てんむす",
    "gender": "male",
    "born": "2026/1/10",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tenmusu.png",
    "dead": ""
  }
];

const familyViews = {
  "all": {
    "label": "登録済みの全個体",
    "csv": "csvs/all.csv",
    "members": [
      "ラム",
      "のぞみ",
      "ミリー",
      "ピックス",
      "ティリー",
      "ウメ",
      "だいち",
      "ミライ",
      "ウミ",
      "ホリー",
      "モモジ",
      "ハニー",
      "ウルル",
      "ユメ",
      "ジンベラン",
      "タイチ",
      "コロン",
      "チャーリー",
      "モミジ",
      "リオ",
      "ピーター",
      "クイン",
      "オウカ",
      "りん",
      "イシン",
      "こまち",
      "ぼたん",
      "ななみ",
      "きらら",
      "コタロウ (2015)",
      "ヒマワリ",
      "アーチャー",
      "ハナ",
      "エマ",
      "ふく",
      "コハル",
      "つくし",
      "インディコ",
      "キボウ",
      "いぶき",
      "イツキ",
      "ワトル",
      "ソラ",
      "たんぽぽ",
      "シャイン",
      "アーティー",
      "ヒナタ",
      "カナエ",
      "ピース",
      "ライト",
      "シャイニー",
      "ミラ",
      "あずま",
      "ニーナ",
      "ミナト",
      "マイ",
      "タイヨウ",
      "ししお",
      "ノゾム",
      "おもち",
      "スカイ",
      "だいふく",
      "ひなぎく",
      "ハリー",
      "きんとき",
      "パピー",
      "ニシチ",
      "ツムギ",
      "アラタ",
      "ナギ",
      "アサヒ",
      "スミレ",
      "カスミ",
      "スター",
      "チャーボウ",
      "オウキ",
      "もなか",
      "さち",
      "ポポロ",
      "エイト",
      "アース",
      "ミラ仔",
      "ピコ",
      "ジェックス",
      "ライタ",
      "アーチャー(東山)",
      "カルゴア",
      "ボウ",
      "ジンベラン仔",
      "ピース♂",
      "ゆめ",
      "アーク",
      "パイン",
      "ティアラ",
      "ティムタム",
      "ライチ",
      "ジェイン",
      "ドリー",
      "バンブラ",
      "ココロ",
      "ブランディ",
      "フランク",
      "イト",
      "ブンダ",
      "コタロウ",
      "マックス",
      "ラムネ",
      "ヒヨリ",
      "コスモ",
      "ポル",
      "ユイ",
      "キクタロー",
      "てんむす"
    ],
    "positions": {},
    "junctions": {},
    "routes": {}
  },
  "awaji": {
    "label": "淡路ファームパーク",
    "csv": "csvs/awaji.csv",
    "members": [
      "ゆめ",
      "アーク",
      "のぞみ",
      "だいち",
      "キボウ",
      "ブンダ",
      "ノゾム",
      "ウメ",
      "ウルル",
      "ウミ",
      "ピース♂",
      "ティリー",
      "ピーター",
      "ナギ",
      "エマ",
      "こまち"
    ],
    "positions": {
      "のぞみ": {
        "x": 800,
        "y": 100
      },
      "ティリー": {
        "x": 2200,
        "y": 300
      },
      "ウメ": {
        "x": 1000,
        "y": 300
      },
      "だいち": {
        "x": 400,
        "y": 200
      },
      "ウミ": {
        "x": 1200,
        "y": 400
      },
      "ウルル": {
        "x": 1400,
        "y": 300
      },
      "ピーター": {
        "x": 2000,
        "y": 400
      },
      "エマ": {
        "x": 1600,
        "y": 500
      },
      "キボウ": {
        "x": 200,
        "y": 400
      },
      "ノゾム": {
        "x": 400,
        "y": 500
      },
      "ナギ": {
        "x": 1400,
        "y": 500
      },
      "ピース♂": {
        "x": 1800,
        "y": 300
      },
      "ゆめ": {
        "x": 200,
        "y": 100
      },
      "アーク": {
        "x": 600,
        "y": 100
      },
      "ブンダ": {
        "x": 600,
        "y": 400
      }
    },
    "junctions": {},
    "routes": {}
  },
  "higashiyama2025": {
    "label": "東山動植物園",
    "csv": "csvs/higashiyama2025.csv",
    "members": [
      "ユメ",
      "ブンダ",
      "ティリー",
      "マックス",
      "イシン",
      "りん",
      "タイチ",
      "ホリー",
      "ななみ",
      "だいふく",
      "スカイ",
      "もなか",
      "ワトル",
      "おもち",
      "てんむす"
    ],
    "positions": {
      "ティリー": {
        "x": 800,
        "y": 100
      },
      "ホリー": {
        "x": 2200,
        "y": 300
      },
      "ユメ": {
        "x": 200,
        "y": 100
      },
      "タイチ": {
        "x": 1800,
        "y": 300
      },
      "りん": {
        "x": 1000,
        "y": 300
      },
      "イシン": {
        "x": 400,
        "y": 300
      },
      "ななみ": {
        "x": 2000,
        "y": 500
      },
      "ワトル": {
        "x": 2000,
        "y": 600
      },
      "おもち": {
        "x": 1200,
        "y": 600
      },
      "スカイ": {
        "x": 400,
        "y": 600
      },
      "だいふく": {
        "x": 1400,
        "y": 600
      },
      "もなか": {
        "x": 800,
        "y": 600
      },
      "ブンダ": {
        "x": 600,
        "y": 100
      },
      "マックス": {
        "x": 1200,
        "y": 100
      }
    },
    "junctions": {},
    "routes": {}
  },
  "holly": {
    "label": "ホリー族",
    "csv": "csvs/holly.csv",
    "members": [
      "タイチ",
      "ホリー",
      "マックス",
      "ユメ",
      "ブンダ",
      "ななみ",
      "ししお",
      "イシン",
      "ワトル",
      "ティリー",
      "おもち",
      "インディコ",
      "いぶき",
      "オウカ",
      "コスモ",
      "オウキ",
      "コロン",
      "こまち",
      "あずま"
    ],
    "positions": {
      "ティリー": {
        "x": 800,
        "y": 500
      },
      "ホリー": {
        "x": 800,
        "y": 100
      },
      "ユメ": {
        "x": 1600,
        "y": 100
      },
      "タイチ": {
        "x": 200,
        "y": 100
      },
      "コロン": {
        "x": 800,
        "y": 1000
      },
      "オウカ": {
        "x": 2000,
        "y": 700
      },
      "イシン": {
        "x": 1800,
        "y": 300
      },
      "こまち": {
        "x": 1200,
        "y": 1000
      },
      "ななみ": {
        "x": 400,
        "y": 300
      },
      "インディコ": {
        "x": 1000,
        "y": 600
      },
      "いぶき": {
        "x": 1400,
        "y": 700
      },
      "ワトル": {
        "x": 200,
        "y": 500
      },
      "あずま": {
        "x": 1000,
        "y": 1100
      },
      "ししお": {
        "x": 600,
        "y": 300
      },
      "おもち": {
        "x": 400,
        "y": 600
      },
      "オウキ": {
        "x": 1600,
        "y": 900
      },
      "ブンダ": {
        "x": 2000,
        "y": 100
      },
      "マックス": {
        "x": 1400,
        "y": 100
      },
      "コスモ": {
        "x": 600,
        "y": 800
      }
    },
    "junctions": {},
    "routes": {}
  },
  "indeko_tukusi": {
    "label": "インディコ・つくし周辺",
    "csv": "csvs/indeko_tukusi.csv",
    "members": [
      "マックス",
      "ティリー",
      "イシン",
      "タイチ",
      "ホリー",
      "りん",
      "ライト",
      "つくし",
      "もなか",
      "だいふく",
      "アーチャー",
      "インディコ",
      "ししお",
      "スミレ",
      "スター",
      "タイヨウ",
      "コスモ"
    ],
    "positions": {
      "ティリー": {
        "x": 400,
        "y": 100
      },
      "ホリー": {
        "x": 1600,
        "y": 100
      },
      "タイチ": {
        "x": 1200,
        "y": 100
      },
      "りん": {
        "x": 400,
        "y": 300
      },
      "イシン": {
        "x": 600,
        "y": 100
      },
      "アーチャー": {
        "x": 1000,
        "y": 600
      },
      "つくし": {
        "x": 400,
        "y": 400
      },
      "インディコ": {
        "x": 1200,
        "y": 600
      },
      "ライト": {
        "x": 200,
        "y": 400
      },
      "タイヨウ": {
        "x": 1600,
        "y": 800
      },
      "ししお": {
        "x": 1400,
        "y": 600
      },
      "だいふく": {
        "x": 1000,
        "y": 400
      },
      "スミレ": {
        "x": 400,
        "y": 800
      },
      "スター": {
        "x": 1000,
        "y": 800
      },
      "もなか": {
        "x": 800,
        "y": 400
      },
      "マックス": {
        "x": 200,
        "y": 100
      },
      "コスモ": {
        "x": 1200,
        "y": 800
      }
    },
    "junctions": {},
    "routes": {}
  },
  "kanazawa": {
    "label": "金沢動物園",
    "csv": "csvs/kanazawa.csv",
    "members": [
      "ティリー",
      "アーチャー(東山)",
      "クイン",
      "コロン",
      "ぼたん",
      "チャーリー",
      "コハル",
      "ひなぎく",
      "たんぽぽ",
      "ハリー",
      "ポポロ",
      "キクタロー"
    ],
    "positions": {
      "ティリー": {
        "x": 400,
        "y": 100
      },
      "コロン": {
        "x": 1400,
        "y": 100
      },
      "チャーリー": {
        "x": 600,
        "y": 200
      },
      "クイン": {
        "x": 1000,
        "y": 100
      },
      "ぼたん": {
        "x": 200,
        "y": 200
      },
      "コハル": {
        "x": 1200,
        "y": 200
      },
      "たんぽぽ": {
        "x": 400,
        "y": 300
      },
      "ひなぎく": {
        "x": 200,
        "y": 300
      },
      "ハリー": {
        "x": 800,
        "y": 400
      },
      "ポポロ": {
        "x": 1400,
        "y": 400
      },
      "アーチャー(東山)": {
        "x": 800,
        "y": 100
      }
    },
    "junctions": {},
    "routes": {}
  },
  "ouji": {
    "label": "王子動物園",
    "csv": "csvs/ouji.csv",
    "members": [
      "ブンダ",
      "ユメ",
      "ウメ",
      "ウルル",
      "ピース♂",
      "ティリー",
      "ウミ",
      "ホリー",
      "イシン",
      "ピーター",
      "いぶき",
      "オウカ",
      "マイ",
      "ナギ",
      "エマ",
      "クイン",
      "ハナ",
      "オウキ",
      "シャイン",
      "コロン",
      "シャイニー",
      "コハル",
      "バンブラ",
      "イト",
      "ライト",
      "イツキ"
    ],
    "positions": {
      "ティリー": {
        "x": 2200,
        "y": 100
      },
      "ウメ": {
        "x": 1000,
        "y": 100
      },
      "ウミ": {
        "x": 1200,
        "y": 300
      },
      "ホリー": {
        "x": 200,
        "y": 300
      },
      "ウルル": {
        "x": 1400,
        "y": 100
      },
      "ユメ": {
        "x": 800,
        "y": 100
      },
      "コロン": {
        "x": 2000,
        "y": 800
      },
      "ピーター": {
        "x": 2000,
        "y": 400
      },
      "クイン": {
        "x": 1800,
        "y": 700
      },
      "オウカ": {
        "x": 1400,
        "y": 500
      },
      "イシン": {
        "x": 600,
        "y": 300
      },
      "ハナ": {
        "x": 2000,
        "y": 600
      },
      "エマ": {
        "x": 1200,
        "y": 700
      },
      "コハル": {
        "x": 1800,
        "y": 1000
      },
      "いぶき": {
        "x": 400,
        "y": 500
      },
      "イツキ": {
        "x": 600,
        "y": 900
      },
      "シャイン": {
        "x": 1200,
        "y": 800
      },
      "ライト": {
        "x": 400,
        "y": 900
      },
      "シャイニー": {
        "x": 1000,
        "y": 1000
      },
      "マイ": {
        "x": 1000,
        "y": 600
      },
      "ナギ": {
        "x": 1400,
        "y": 700
      },
      "オウキ": {
        "x": 800,
        "y": 700
      },
      "ピース♂": {
        "x": 1800,
        "y": 100
      },
      "バンブラ": {
        "x": 200,
        "y": 800
      },
      "イト": {
        "x": 600,
        "y": 800
      },
      "ブンダ": {
        "x": 400,
        "y": 100
      }
    },
    "junctions": {},
    "routes": {}
  },
  "scz": {
    "label": "埼玉県こども動物自然公園",
    "csv": "csvs/scz.csv",
    "members": [
      "バンブラ",
      "ユメ",
      "ヒマワリ",
      "アーチャー",
      "アサヒ",
      "カナエ",
      "コロン",
      "クイン",
      "ドリー",
      "コハル",
      "ソラ",
      "ふく",
      "コタロウ",
      "ジンベラン",
      "ミラ",
      "ヒヨリ",
      "ポル",
      "さち"
    ],
    "positions": {
      "ユメ": {
        "x": 1000,
        "y": 100
      },
      "ジンベラン": {
        "x": 1600,
        "y": 800
      },
      "コロン": {
        "x": 200,
        "y": 300
      },
      "クイン": {
        "x": 600,
        "y": 300
      },
      "ヒマワリ": {
        "x": 1000,
        "y": 200
      },
      "アーチャー": {
        "x": 1400,
        "y": 200
      },
      "ふく": {
        "x": 1200,
        "y": 500
      },
      "コハル": {
        "x": 400,
        "y": 500
      },
      "ソラ": {
        "x": 800,
        "y": 500
      },
      "カナエ": {
        "x": 1000,
        "y": 300
      },
      "ミラ": {
        "x": 1200,
        "y": 700
      },
      "アサヒ": {
        "x": 1200,
        "y": 300
      },
      "さち": {
        "x": 1000,
        "y": 900
      },
      "ドリー": {
        "x": 1600,
        "y": 400
      },
      "バンブラ": {
        "x": 600,
        "y": 100
      },
      "コタロウ": {
        "x": 1600,
        "y": 600
      },
      "ヒヨリ": {
        "x": 600,
        "y": 900
      },
      "ポル": {
        "x": 1400,
        "y": 1000
      }
    },
    "junctions": {},
    "routes": {}
  },
  "tama2025": {
    "label": "多摩動物公園",
    "csv": "csvs/tama2025.csv",
    "members": [
      "アーチャー(東山)",
      "ティリー",
      "タイチ",
      "ホリー",
      "マックス",
      "チャーリー",
      "きらら",
      "コロン",
      "こまち",
      "きんとき",
      "あずま",
      "ソラ"
    ],
    "positions": {
      "ティリー": {
        "x": 600,
        "y": 100
      },
      "ホリー": {
        "x": 1400,
        "y": 100
      },
      "タイチ": {
        "x": 1000,
        "y": 100
      },
      "コロン": {
        "x": 1200,
        "y": 300
      },
      "チャーリー": {
        "x": 400,
        "y": 200
      },
      "こまち": {
        "x": 1600,
        "y": 300
      },
      "きらら": {
        "x": 800,
        "y": 300
      },
      "あずま": {
        "x": 1400,
        "y": 400
      },
      "きんとき": {
        "x": 1000,
        "y": 400
      },
      "アーチャー(東山)": {
        "x": 200,
        "y": 100
      },
      "マックス": {
        "x": 1800,
        "y": 100
      }
    },
    "junctions": {},
    "routes": {}
  },
  "tilly": {
    "label": "ティリー族",
    "csv": "csvs/tilly.csv",
    "members": [
      "アーチャー(東山)",
      "ティリー",
      "ピース♂",
      "マックス",
      "ぼたん",
      "チャーリー",
      "りん",
      "タイチ",
      "ハリー",
      "イシン",
      "ピーター",
      "ウミ",
      "コハル",
      "ひなぎく",
      "たんぽぽ",
      "コロン",
      "アーチャー",
      "インディコ",
      "ウメ",
      "オウカ",
      "エマ",
      "ナギ",
      "ポポロ",
      "きらら",
      "マイ",
      "ハナ",
      "きんとき",
      "スター",
      "ししお",
      "タイヨウ",
      "シャイン",
      "ライト",
      "つくし",
      "もなか",
      "だいふく",
      "コスモ",
      "シャイニー",
      "スミレ",
      "キクタロー",
      "てんむす"
    ],
    "positions": {
      "ティリー": {
        "x": 2000,
        "y": 100
      },
      "ウメ": {
        "x": 2200,
        "y": 900
      },
      "ウミ": {
        "x": 3200,
        "y": 700
      },
      "タイチ": {
        "x": 1800,
        "y": 600
      },
      "コロン": {
        "x": 800,
        "y": 900
      },
      "チャーリー": {
        "x": 600,
        "y": 500
      },
      "ピーター": {
        "x": 2800,
        "y": 700
      },
      "オウカ": {
        "x": 2600,
        "y": 900
      },
      "りん": {
        "x": 1000,
        "y": 600
      },
      "イシン": {
        "x": 1200,
        "y": 700
      },
      "ぼたん": {
        "x": 200,
        "y": 500
      },
      "きらら": {
        "x": 1200,
        "y": 1000
      },
      "アーチャー": {
        "x": 1600,
        "y": 900
      },
      "ハナ": {
        "x": 2800,
        "y": 1000
      },
      "エマ": {
        "x": 3000,
        "y": 900
      },
      "コハル": {
        "x": 600,
        "y": 800
      },
      "つくし": {
        "x": 1000,
        "y": 1200
      },
      "インディコ": {
        "x": 1800,
        "y": 900
      },
      "たんぽぽ": {
        "x": 400,
        "y": 900
      },
      "シャイン": {
        "x": 2600,
        "y": 1100
      },
      "ライト": {
        "x": 600,
        "y": 1200
      },
      "シャイニー": {
        "x": 2400,
        "y": 1200
      },
      "マイ": {
        "x": 2400,
        "y": 1000
      },
      "タイヨウ": {
        "x": 2200,
        "y": 1100
      },
      "ししお": {
        "x": 2000,
        "y": 1100
      },
      "だいふく": {
        "x": 1400,
        "y": 1200
      },
      "ひなぎく": {
        "x": 200,
        "y": 900
      },
      "ハリー": {
        "x": 800,
        "y": 700
      },
      "きんとき": {
        "x": 800,
        "y": 1100
      },
      "ナギ": {
        "x": 3200,
        "y": 900
      },
      "スミレ": {
        "x": 800,
        "y": 1300
      },
      "スター": {
        "x": 1600,
        "y": 1100
      },
      "もなか": {
        "x": 1200,
        "y": 1200
      },
      "ポポロ": {
        "x": 600,
        "y": 1000
      },
      "アーチャー(東山)": {
        "x": 400,
        "y": 100
      },
      "ピース♂": {
        "x": 3000,
        "y": 100
      },
      "マックス": {
        "x": 800,
        "y": 200
      },
      "コスモ": {
        "x": 1800,
        "y": 1200
      }
    },
    "junctions": {},
    "routes": {}
  },
  "yume": {
    "label": "ユメ族",
    "csv": "csvs/yume.csv",
    "members": [
      "タイチ",
      "ホリー",
      "ブンダ",
      "ユメ",
      "ツムギ",
      "バンブラ",
      "コハル",
      "ソラ",
      "イシン",
      "ユイ",
      "ミラ",
      "ヒマワリ",
      "アーチャー",
      "ヒナタ",
      "ヒヨリ",
      "カスミ",
      "アサヒ",
      "ふく",
      "ティリー",
      "カナエ",
      "ミラ仔",
      "ポル",
      "ななみ",
      "りん",
      "アラタ",
      "さち",
      "ししお",
      "インディコ",
      "エイト",
      "おもち",
      "ライト",
      "つくし",
      "もなか",
      "オウカ",
      "いぶき",
      "タイヨウ",
      "スター",
      "オウキ",
      "コスモ",
      "スミレ"
    ],
    "positions": {
      "ティリー": {
        "x": 2800,
        "y": 700
      },
      "ホリー": {
        "x": 2000,
        "y": 100
      },
      "ユメ": {
        "x": 3200,
        "y": 200
      },
      "タイチ": {
        "x": 1400,
        "y": 100
      },
      "オウカ": {
        "x": 1600,
        "y": 1100
      },
      "りん": {
        "x": 3600,
        "y": 800
      },
      "イシン": {
        "x": 3000,
        "y": 400
      },
      "ななみ": {
        "x": 1400,
        "y": 800
      },
      "ヒマワリ": {
        "x": 3200,
        "y": 500
      },
      "アーチャー": {
        "x": 4000,
        "y": 500
      },
      "ふく": {
        "x": 1000,
        "y": 700
      },
      "コハル": {
        "x": 400,
        "y": 400
      },
      "つくし": {
        "x": 3400,
        "y": 1000
      },
      "インディコ": {
        "x": 2600,
        "y": 900
      },
      "いぶき": {
        "x": 2000,
        "y": 1100
      },
      "ソラ": {
        "x": 800,
        "y": 400
      },
      "ヒナタ": {
        "x": 4400,
        "y": 500
      },
      "カナエ": {
        "x": 3800,
        "y": 700
      },
      "ライト": {
        "x": 3000,
        "y": 1000
      },
      "ミラ": {
        "x": 200,
        "y": 500
      },
      "タイヨウ": {
        "x": 2200,
        "y": 1100
      },
      "ししお": {
        "x": 1800,
        "y": 900
      },
      "おもち": {
        "x": 1600,
        "y": 1000
      },
      "ツムギ": {
        "x": 4400,
        "y": 200
      },
      "アラタ": {
        "x": 4200,
        "y": 800
      },
      "アサヒ": {
        "x": 3600,
        "y": 600
      },
      "スミレ": {
        "x": 3200,
        "y": 1200
      },
      "カスミ": {
        "x": 3400,
        "y": 600
      },
      "スター": {
        "x": 2800,
        "y": 1100
      },
      "オウキ": {
        "x": 1800,
        "y": 1200
      },
      "もなか": {
        "x": 3600,
        "y": 1000
      },
      "さち": {
        "x": 800,
        "y": 900
      },
      "エイト": {
        "x": 4000,
        "y": 900
      },
      "ミラ仔": {
        "x": 200,
        "y": 800
      },
      "バンブラ": {
        "x": 3800,
        "y": 300
      },
      "ブンダ": {
        "x": 2600,
        "y": 200
      },
      "ヒヨリ": {
        "x": 600,
        "y": 600
      },
      "コスモ": {
        "x": 2400,
        "y": 1200
      },
      "ポル": {
        "x": 400,
        "y": 800
      },
      "ユイ": {
        "x": 3200,
        "y": 400
      }
    },
    "junctions": {},
    "routes": {}
  }
};

window.familyData = familyData;

window.familyViews = familyViews;

