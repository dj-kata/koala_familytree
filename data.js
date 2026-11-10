const familyData = [
  {
    "id": "ram",
    "name": "ラム",
    "gender": "male",
    "born": "1988/4/28",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2012/3/30"
  },
  {
    "id": "nozomi",
    "name": "のぞみ",
    "gender": "female",
    "born": "2008/3/1",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nozomi.png",
    "dead": "2026/7/8"
  },
  {
    "id": "millie",
    "fid": "ram",
    "mid": "karugoa",
    "name": "ミリー",
    "gender": "female",
    "born": "2000/8/23",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/1/30"
  },
  {
    "id": "pix",
    "fid": "jex",
    "mid": "pico",
    "name": "ピックス",
    "gender": "male",
    "born": "2003/6/28",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2019/1/21"
  },
  {
    "id": "tilly",
    "name": "ティリー",
    "gender": "female",
    "born": "2009/12/15",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tilly.png",
    "dead": "2024/12/25"
  },
  {
    "id": "ume",
    "fid": "pine",
    "mid": "momiji",
    "name": "ウメ",
    "gender": "female",
    "born": "2010/8/5",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ume.png",
    "dead": "2022/11/21"
  },
  {
    "id": "daichi",
    "fid": "ark",
    "mid": "yume_south",
    "name": "だいち",
    "gender": "male",
    "born": "2013/8/18",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/daichi.png",
    "dead": ""
  },
  {
    "id": "mirai",
    "fid": "raita",
    "mid": "millie",
    "name": "ミライ",
    "gender": "female",
    "born": "2008/10/25",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2020/6/10"
  },
  {
    "id": "umi",
    "fid": "uluru",
    "mid": "ume",
    "name": "ウミ",
    "gender": "female",
    "born": "2014/6/13",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/umi.png",
    "dead": ""
  },
  {
    "id": "holly",
    "name": "ホリー",
    "gender": "female",
    "born": "2013/12/25",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/holly.png",
    "dead": ""
  },
  {
    "id": "momoji",
    "name": "モモジ",
    "gender": "male",
    "born": "1997/2/7",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2007/2/17"
  },
  {
    "id": "honey",
    "fid": "peace_male",
    "mid": "raichi",
    "name": "ハニー",
    "gender": "female",
    "born": "2014/8/3",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2024/8/15"
  },
  {
    "id": "uluru",
    "name": "ウルル",
    "gender": "male",
    "born": "2007/5/26",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/12/18"
  },
  {
    "id": "yume",
    "fid": "frank",
    "mid": "brandy",
    "name": "ユメ",
    "gender": "female",
    "born": "2015/1/2",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/yume.png",
    "dead": "2025/3/23"
  },
  {
    "id": "jinberan",
    "name": "ジンベラン",
    "gender": "female",
    "born": "2013/2/23",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2023/7/8"
  },
  {
    "id": "taichi",
    "fid": "timtam",
    "mid": "raichi",
    "name": "タイチ",
    "gender": "male",
    "born": "2012/5/3",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/taichi.png",
    "dead": "2022/9/29"
  },
  {
    "id": "koron",
    "fid": "frank",
    "mid": "kokoro",
    "name": "コロン",
    "gender": "male",
    "born": "2014/11/22",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/koron.png",
    "dead": ""
  },
  {
    "id": "charlie",
    "fid": "archer_higashiyama",
    "mid": "tilly",
    "name": "チャーリー",
    "gender": "male",
    "born": "2014/11/27",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/charlie.png",
    "dead": "2026/3/15"
  },
  {
    "id": "momiji",
    "fid": "momoji",
    "mid": "millie",
    "name": "モミジ",
    "gender": "female",
    "born": "2006/5/29",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2015/8/21"
  },
  {
    "id": "rio",
    "fid": "bunda",
    "mid": "kokoro",
    "name": "リオ",
    "gender": "female",
    "born": "2015/12/10",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/rio.png",
    "dead": ""
  },
  {
    "id": "peter",
    "fid": "peace_male",
    "mid": "tilly",
    "name": "ピーター",
    "gender": "male",
    "born": "2016/3/28",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/peter.png",
    "dead": ""
  },
  {
    "id": "quinn",
    "fid": "bow",
    "mid": "dolly",
    "name": "クイン",
    "gender": "female",
    "born": "2015/3/23",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2023/5/31"
  },
  {
    "id": "ouka",
    "fid": "uluru",
    "mid": "umi",
    "name": "オウカ",
    "gender": "female",
    "born": "2016/9/25",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ouka.png",
    "dead": ""
  },
  {
    "id": "rin",
    "fid": "max",
    "mid": "tilly",
    "name": "りん",
    "gender": "female",
    "born": "2017/8/23",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/rin.png",
    "dead": ""
  },
  {
    "id": "ishin",
    "fid": "bunda",
    "mid": "yume",
    "name": "イシン",
    "gender": "male",
    "born": "2017/5/14",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ishin.png",
    "dead": ""
  },
  {
    "id": "komati",
    "fid": "max",
    "mid": "holly",
    "name": "こまち",
    "gender": "female",
    "born": "2017/4/27",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/komati.png",
    "dead": ""
  },
  {
    "id": "botan",
    "fid": "artie",
    "mid": "ume",
    "name": "ぼたん",
    "gender": "female",
    "born": "2017/5/12",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/botan.png",
    "dead": "2024/12/13"
  },
  {
    "id": "nanami",
    "fid": "taichi",
    "mid": "holly",
    "name": "ななみ",
    "gender": "female",
    "born": "2018/7/7",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nanami.png",
    "dead": "2025/12/11"
  },
  {
    "id": "kirara",
    "fid": "taichi",
    "mid": "tilly",
    "name": "きらら",
    "gender": "female",
    "born": "2018/9/6",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kirara.png",
    "dead": ""
  },
  {
    "id": "kotaro_2015",
    "name": "コタロウ (2015)",
    "gender": "male",
    "born": "2015/9/25",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2022/7/31"
  },
  {
    "id": "himawari",
    "fid": "banbura",
    "mid": "yume",
    "name": "ヒマワリ",
    "gender": "female",
    "born": "2019/6/22",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/himawari.png",
    "dead": ""
  },
  {
    "id": "archer",
    "name": "アーチャー",
    "gender": "male",
    "born": "2019/4/26",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/archer.png",
    "dead": ""
  },
  {
    "id": "hana",
    "fid": "peter",
    "mid": "ouka",
    "name": "ハナ",
    "gender": "female",
    "born": "2019/5/20",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hana.png",
    "dead": ""
  },
  {
    "id": "ema",
    "fid": "peter",
    "mid": "umi",
    "name": "エマ",
    "gender": "female",
    "born": "2018/12/6",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ema.png",
    "dead": ""
  },
  {
    "id": "fuku",
    "fid": "kotarou",
    "mid": "dolly",
    "name": "ふく",
    "gender": "female",
    "born": "2019/6/12",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/fuku.png",
    "dead": ""
  },
  {
    "id": "koharu",
    "fid": "koron",
    "mid": "quinn",
    "name": "コハル",
    "gender": "female",
    "born": "2019/4/2",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/koharu.png",
    "dead": ""
  },
  {
    "id": "tukusi",
    "fid": "ishin",
    "mid": "rin",
    "name": "つくし",
    "gender": "female",
    "born": "2020/9/3",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tukusi.png",
    "dead": ""
  },
  {
    "id": "indeko",
    "fid": "ishin",
    "mid": "tilly",
    "name": "インディコ",
    "gender": "female",
    "born": "2019/12/22",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/indeko.png",
    "dead": ""
  },
  {
    "id": "kibou",
    "fid": "banbura",
    "mid": "jane",
    "name": "キボウ",
    "gender": "female",
    "born": "2019/10/17",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kibou.png",
    "dead": ""
  },
  {
    "id": "ibuki",
    "fid": "ishin",
    "mid": "holly",
    "name": "いぶき",
    "gender": "male",
    "born": "2020/8/27",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ibuki.png",
    "dead": ""
  },
  {
    "id": "itsuki",
    "fid": "banbura",
    "mid": "ito",
    "name": "イツキ",
    "gender": "male",
    "born": "2020/4/3",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/itsuki.png",
    "dead": ""
  },
  {
    "id": "wattle",
    "fid": "taichi",
    "mid": "nanami",
    "name": "ワトル",
    "gender": "female",
    "born": "2020/5/14",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/wattle.png",
    "dead": "2026/10/8"
  },
  {
    "id": "sora",
    "fid": "banbura",
    "mid": "yume",
    "name": "ソラ",
    "gender": "male",
    "born": "2020/6/14",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sora.png",
    "dead": ""
  },
  {
    "id": "tanpopo",
    "fid": "charlie",
    "mid": "botan",
    "name": "たんぽぽ",
    "gender": "female",
    "born": "2020/4/26",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tanpopo.png",
    "dead": ""
  },
  {
    "id": "shine",
    "fid": "koron",
    "mid": "quinn",
    "name": "シャイン",
    "gender": "male",
    "born": "2017/8/31",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/shine.png",
    "dead": "2022/1/6"
  },
  {
    "id": "artie",
    "name": "アーティー",
    "gender": "male",
    "born": "2012/8/11",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/7/27"
  },
  {
    "id": "hinata",
    "fid": "bunda",
    "mid": "himawari",
    "name": "ヒナタ",
    "gender": "female",
    "born": "2021/3/27",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hinata.png",
    "dead": ""
  },
  {
    "id": "kanae",
    "fid": "banbura",
    "mid": "yume",
    "name": "カナエ",
    "gender": "female",
    "born": "2021/6/13",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kanae.png",
    "dead": ""
  },
  {
    "id": "peace",
    "fid": "bunda",
    "mid": "jane",
    "name": "ピース",
    "gender": "female",
    "born": "2021/6/29",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/peace.png",
    "dead": ""
  },
  {
    "id": "raito",
    "fid": "banbura",
    "mid": "ito",
    "name": "ライト",
    "gender": "male",
    "born": "2021/5/14",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/raito.png",
    "dead": ""
  },
  {
    "id": "shiny",
    "fid": "shine",
    "mid": "mai",
    "name": "シャイニー",
    "gender": "female",
    "born": "2021/5/13",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/shiny.png",
    "dead": ""
  },
  {
    "id": "mira",
    "fid": "kotarou",
    "mid": "jinberan",
    "name": "ミラ",
    "gender": "female",
    "born": "2021/4/30",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/mira.png",
    "dead": ""
  },
  {
    "id": "azuma",
    "fid": "koron",
    "mid": "komati",
    "name": "あずま",
    "gender": "female",
    "born": "2021/5/18",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/azuma.png",
    "dead": ""
  },
  {
    "id": "nina",
    "fid": "kotarou",
    "mid": "dolly",
    "name": "ニーナ",
    "gender": "female",
    "born": "2016/9/27",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2020/5/4"
  },
  {
    "id": "minato",
    "name": "ミナト",
    "gender": "male",
    "born": "2014/6/12",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2017/12/20"
  },
  {
    "id": "mai",
    "fid": "peter",
    "mid": "ume",
    "name": "マイ",
    "gender": "female",
    "born": "2019/5/15",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2022/6/21"
  },
  {
    "id": "taiyou",
    "fid": "taichi",
    "mid": "indeko",
    "name": "タイヨウ",
    "gender": "male",
    "born": "2022/8/11",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/taiyou.png",
    "dead": "2026/10/14"
  },
  {
    "id": "sisio",
    "fid": "taichi",
    "mid": "holly",
    "name": "ししお",
    "gender": "male",
    "born": "2022/4/4",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sisio.png",
    "dead": ""
  },
  {
    "id": "nozomu",
    "fid": "bunda",
    "mid": "kibou",
    "name": "ノゾム",
    "gender": "male",
    "born": "2022/2/26",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nozomu.png",
    "dead": ""
  },
  {
    "id": "omochi",
    "fid": "ishin",
    "mid": "nanami",
    "name": "おもち",
    "gender": "female",
    "born": "2022/3/21",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/omochi.png",
    "dead": ""
  },
  {
    "id": "sky",
    "name": "スカイ",
    "gender": "male",
    "born": "2022/4/20",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sky.png",
    "dead": ""
  },
  {
    "id": "daifuku",
    "fid": "taichi",
    "mid": "rin",
    "name": "だいふく",
    "gender": "male",
    "born": "2022/3/14",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/daifuku.png",
    "dead": ""
  },
  {
    "id": "hinagiku",
    "fid": "charlie",
    "mid": "botan",
    "name": "ひなぎく",
    "gender": "female",
    "born": "2021/12/15",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hinagiku.png",
    "dead": "2025/7/2"
  },
  {
    "id": "harry",
    "fid": "charlie",
    "mid": "koharu",
    "name": "ハリー",
    "gender": "male",
    "born": "2022/4/22",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/harry.png",
    "dead": ""
  },
  {
    "id": "kintoki",
    "fid": "koron",
    "mid": "kirara",
    "name": "きんとき",
    "gender": "male",
    "born": "2022/6/25",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kintoki.png",
    "dead": ""
  },
  {
    "id": "puppy",
    "fid": "pix",
    "mid": "mirai",
    "name": "パピー",
    "gender": "female",
    "born": "2011/6/23",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2013/9/3"
  },
  {
    "id": "nishichi",
    "fid": "kotarou",
    "mid": "nina",
    "name": "ニシチ",
    "gender": "male",
    "born": "2019/2/7",
    "locate": "多摩動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2021/3/31"
  },
  {
    "id": "tumugi",
    "fid": "archer",
    "mid": "yume",
    "name": "ツムギ",
    "gender": "female",
    "born": "2023/5/13",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/tumugi.png",
    "dead": ""
  },
  {
    "id": "arata",
    "fid": "archer",
    "mid": "hinata",
    "name": "アラタ",
    "gender": "male",
    "born": "2023/6/14",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/arata.png",
    "dead": ""
  },
  {
    "id": "nagi",
    "fid": "peter",
    "mid": "umi",
    "name": "ナギ",
    "gender": "female",
    "born": "2023/7/31",
    "locate": "淡路ファームパークイングランドの丘",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/nagi.png",
    "dead": ""
  },
  {
    "id": "asahi",
    "fid": "archer",
    "mid": "himawari",
    "name": "アサヒ",
    "gender": "male",
    "born": "2022/12/9",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/asahi.png",
    "dead": ""
  },
  {
    "id": "sumire",
    "fid": "raito",
    "mid": "tukusi",
    "name": "スミレ",
    "gender": "female",
    "born": "2024/9/11",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sumire.png",
    "dead": ""
  },
  {
    "id": "kasumi",
    "fid": "archer",
    "mid": "himawari",
    "name": "カスミ",
    "gender": "female",
    "born": "2024/6/1",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kasumi.png",
    "dead": ""
  },
  {
    "id": "star",
    "fid": "archer",
    "mid": "indeko",
    "name": "スター",
    "gender": "male",
    "born": "2023/11/18",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/star.png",
    "dead": ""
  },
  {
    "id": "charbou",
    "fid": "archer",
    "mid": "kibou",
    "name": "チャーボウ",
    "gender": "male",
    "born": "2023/10/21",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/charbou.png",
    "dead": "2026/7/2"
  },
  {
    "id": "ouki",
    "fid": "ibuki",
    "mid": "ouka",
    "name": "オウキ",
    "gender": "male",
    "born": "2024/6/12",
    "locate": "王子動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ouki.png",
    "dead": ""
  },
  {
    "id": "monaka",
    "fid": "ishin",
    "mid": "rin",
    "name": "もなか",
    "gender": "male",
    "born": "2023/10/20",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/monaka.png",
    "dead": ""
  },
  {
    "id": "sachi",
    "fid": "sora",
    "mid": "fuku",
    "name": "さち",
    "gender": "female",
    "born": "2024/5/9",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/sachi.png",
    "dead": ""
  },
  {
    "id": "poporo",
    "fid": "koron",
    "mid": "tanpopo",
    "name": "ポポロ",
    "gender": "male",
    "born": "2024/4/22",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/poporo.png",
    "dead": ""
  },
  {
    "id": "eight",
    "fid": "archer",
    "mid": "kanae",
    "name": "エイト",
    "gender": "male",
    "born": "2024/11/24",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/eight.png",
    "dead": ""
  },
  {
    "id": "earth",
    "fid": "archer",
    "mid": "peace",
    "name": "アース",
    "gender": "male",
    "born": "2024/9/20",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/earth.png",
    "dead": "2026/7/20"
  },
  {
    "id": "mirako1",
    "fid": "sora",
    "mid": "mira",
    "name": "ミラ仔",
    "gender": "male",
    "born": "2024/6/23",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/mirako1.png",
    "dead": "2025/1/14"
  },
  {
    "id": "pico",
    "name": "ピコ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "jex",
    "name": "ジェックス",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "raita",
    "name": "ライタ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "archer_higashiyama",
    "name": "アーチャー(東山)",
    "gender": "male",
    "born": "",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2015/4/3"
  },
  {
    "id": "karugoa",
    "name": "カルゴア",
    "gender": "female",
    "born": "",
    "locate": "東山動植物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "bow",
    "name": "ボウ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "jinberan_child",
    "fid": "koron",
    "mid": "jinberan",
    "name": "ジンベラン仔",
    "gender": "male",
    "born": "",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": "2023/7/9"
  },
  {
    "id": "peace_male",
    "name": "ピース♂",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "yume_south",
    "name": "ゆめ",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/yume_south.png",
    "dead": ""
  },
  {
    "id": "ark",
    "name": "アーク",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ark.png",
    "dead": ""
  },
  {
    "id": "pine",
    "name": "パイン",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "tiara",
    "name": "ティアラ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "timtam",
    "name": "ティムタム",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "raichi",
    "name": "ライチ",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "jane",
    "name": "ジェイン",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "dolly",
    "name": "ドリー",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "banbura",
    "name": "バンブラ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/banbura.png",
    "dead": ""
  },
  {
    "id": "kokoro",
    "name": "ココロ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kokoro.png",
    "dead": ""
  },
  {
    "id": "brandy",
    "name": "ブランディ",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/.png",
    "dead": ""
  },
  {
    "id": "frank",
    "name": "フランク",
    "gender": "",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/frank.png",
    "dead": ""
  },
  {
    "id": "ito",
    "name": "イト",
    "gender": "female",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ito.png",
    "dead": ""
  },
  {
    "id": "bunda",
    "name": "ブンダ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/bunda.png",
    "dead": ""
  },
  {
    "id": "kotarou",
    "name": "コタロウ",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kotarou.png",
    "dead": ""
  },
  {
    "id": "max",
    "name": "マックス",
    "gender": "male",
    "born": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/max.png",
    "dead": ""
  },
  {
    "id": "ramune",
    "fid": "archer",
    "mid": "kibou",
    "name": "ラムネ",
    "gender": "male",
    "born": "2025/4/9",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/ramune.png",
    "dead": ""
  },
  {
    "id": "hiyori",
    "fid": "sora",
    "mid": "koharu",
    "name": "ヒヨリ",
    "gender": "female",
    "born": "2025/5/1",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/hiyori.png",
    "dead": ""
  },
  {
    "id": "cosmo",
    "fid": "sisio",
    "mid": "indeko",
    "name": "コスモ",
    "gender": "female",
    "born": "2025/5/15",
    "locate": "平川動物公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/cosmo.png",
    "dead": ""
  },
  {
    "id": "poll",
    "fid": "sora",
    "mid": "mira",
    "name": "ポル",
    "gender": "female",
    "born": "2025/6/2",
    "locate": "埼玉県こども動物自然公園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/poll.png",
    "dead": ""
  },
  {
    "id": "yui",
    "name": "ユイ",
    "fid": "bunda",
    "mid": "yume",
    "gender": "female",
    "born": "",
    "dead": "",
    "locate": "",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/yui.png"
  },
  {
    "id": "kikutaro",
    "fid": "koron",
    "mid": "tanpopo",
    "name": "キクタロー",
    "gender": "male",
    "born": "2025/12/2",
    "locate": "金沢動物園",
    "img": "https://dj-kata.github.io/koala_familytree/imgs/kikutaro.png",
    "dead": ""
  },
  {
    "id": "tenmusu",
    "fid": "sky",
    "mid": "rin",
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
      "ram",
      "nozomi",
      "millie",
      "pix",
      "tilly",
      "ume",
      "daichi",
      "mirai",
      "umi",
      "holly",
      "momoji",
      "honey",
      "uluru",
      "yume",
      "jinberan",
      "taichi",
      "koron",
      "charlie",
      "momiji",
      "rio",
      "peter",
      "quinn",
      "ouka",
      "rin",
      "ishin",
      "komati",
      "botan",
      "nanami",
      "kirara",
      "kotaro_2015",
      "himawari",
      "archer",
      "hana",
      "ema",
      "fuku",
      "koharu",
      "tukusi",
      "indeko",
      "kibou",
      "ibuki",
      "itsuki",
      "wattle",
      "sora",
      "tanpopo",
      "shine",
      "artie",
      "hinata",
      "kanae",
      "peace",
      "raito",
      "shiny",
      "mira",
      "azuma",
      "nina",
      "minato",
      "mai",
      "taiyou",
      "sisio",
      "nozomu",
      "omochi",
      "sky",
      "daifuku",
      "hinagiku",
      "harry",
      "kintoki",
      "puppy",
      "nishichi",
      "tumugi",
      "arata",
      "nagi",
      "asahi",
      "sumire",
      "kasumi",
      "star",
      "charbou",
      "ouki",
      "monaka",
      "sachi",
      "poporo",
      "eight",
      "earth",
      "mirako1",
      "pico",
      "jex",
      "raita",
      "archer_higashiyama",
      "karugoa",
      "bow",
      "jinberan_child",
      "peace_male",
      "yume_south",
      "ark",
      "pine",
      "tiara",
      "timtam",
      "raichi",
      "jane",
      "dolly",
      "banbura",
      "kokoro",
      "brandy",
      "frank",
      "ito",
      "bunda",
      "kotarou",
      "max",
      "ramune",
      "hiyori",
      "cosmo",
      "poll",
      "yui",
      "kikutaro",
      "tenmusu"
    ],
    "positions": {},
    "junctions": {},
    "routes": {}
  },
  "awaji": {
    "label": "淡路ファームパーク",
    "csv": "csvs/awaji.csv",
    "members": [
      "yume_south",
      "ark",
      "nozomi",
      "daichi",
      "kibou",
      "bunda",
      "nozomu",
      "ume",
      "uluru",
      "umi",
      "peace_male",
      "tilly",
      "peter",
      "nagi",
      "ema",
      "komati"
    ],
    "positions": {
      "nozomi": {
        "x": 800,
        "y": 100
      },
      "tilly": {
        "x": 2200,
        "y": 300
      },
      "ume": {
        "x": 1000,
        "y": 300
      },
      "daichi": {
        "x": 400,
        "y": 200
      },
      "umi": {
        "x": 1200,
        "y": 400
      },
      "uluru": {
        "x": 1400,
        "y": 300
      },
      "peter": {
        "x": 2000,
        "y": 400
      },
      "ema": {
        "x": 1600,
        "y": 500
      },
      "kibou": {
        "x": 200,
        "y": 400
      },
      "nozomu": {
        "x": 400,
        "y": 500
      },
      "nagi": {
        "x": 1400,
        "y": 500
      },
      "peace_male": {
        "x": 1800,
        "y": 300
      },
      "yume_south": {
        "x": 200,
        "y": 100
      },
      "ark": {
        "x": 600,
        "y": 100
      },
      "bunda": {
        "x": 600,
        "y": 400
      },
      "komati": {
        "x": 800,
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
      "yume",
      "bunda",
      "tilly",
      "max",
      "ishin",
      "rin",
      "taichi",
      "holly",
      "nanami",
      "daifuku",
      "sky",
      "monaka",
      "wattle",
      "omochi",
      "tenmusu"
    ],
    "positions": {
      "tilly": {
        "x": 800,
        "y": 100
      },
      "holly": {
        "x": 2200,
        "y": 300
      },
      "yume": {
        "x": 200,
        "y": 100
      },
      "taichi": {
        "x": 1800,
        "y": 300
      },
      "rin": {
        "x": 1000,
        "y": 300
      },
      "ishin": {
        "x": 400,
        "y": 300
      },
      "nanami": {
        "x": 2000,
        "y": 500
      },
      "wattle": {
        "x": 2000,
        "y": 600
      },
      "omochi": {
        "x": 1200,
        "y": 600
      },
      "sky": {
        "x": 400,
        "y": 600
      },
      "daifuku": {
        "x": 1400,
        "y": 600
      },
      "monaka": {
        "x": 800,
        "y": 600
      },
      "bunda": {
        "x": 600,
        "y": 100
      },
      "max": {
        "x": 1200,
        "y": 100
      },
      "tenmusu": {
        "x": 800,
        "y": 700
      }
    },
    "junctions": {},
    "routes": {}
  },
  "holly": {
    "label": "ホリー族",
    "csv": "csvs/holly.csv",
    "members": [
      "taichi",
      "holly",
      "max",
      "yume",
      "bunda",
      "nanami",
      "sisio",
      "ishin",
      "wattle",
      "tilly",
      "omochi",
      "indeko",
      "ibuki",
      "ouka",
      "cosmo",
      "ouki",
      "koron",
      "komati",
      "azuma"
    ],
    "positions": {
      "tilly": {
        "x": 800,
        "y": 500
      },
      "holly": {
        "x": 800,
        "y": 100
      },
      "yume": {
        "x": 1600,
        "y": 100
      },
      "taichi": {
        "x": 200,
        "y": 100
      },
      "koron": {
        "x": 800,
        "y": 1000
      },
      "ouka": {
        "x": 2000,
        "y": 700
      },
      "ishin": {
        "x": 1800,
        "y": 300
      },
      "komati": {
        "x": 1200,
        "y": 1000
      },
      "nanami": {
        "x": 400,
        "y": 300
      },
      "indeko": {
        "x": 1000,
        "y": 600
      },
      "ibuki": {
        "x": 1400,
        "y": 700
      },
      "wattle": {
        "x": 200,
        "y": 500
      },
      "azuma": {
        "x": 1000,
        "y": 1100
      },
      "sisio": {
        "x": 600,
        "y": 300
      },
      "omochi": {
        "x": 400,
        "y": 600
      },
      "ouki": {
        "x": 1600,
        "y": 900
      },
      "bunda": {
        "x": 2000,
        "y": 100
      },
      "max": {
        "x": 1400,
        "y": 100
      },
      "cosmo": {
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
      "max",
      "tilly",
      "ishin",
      "taichi",
      "holly",
      "rin",
      "raito",
      "tukusi",
      "monaka",
      "daifuku",
      "archer",
      "indeko",
      "sisio",
      "sumire",
      "star",
      "taiyou",
      "cosmo"
    ],
    "positions": {
      "tilly": {
        "x": 400,
        "y": 100
      },
      "holly": {
        "x": 1600,
        "y": 100
      },
      "taichi": {
        "x": 1200,
        "y": 100
      },
      "rin": {
        "x": 400,
        "y": 300
      },
      "ishin": {
        "x": 600,
        "y": 100
      },
      "archer": {
        "x": 1000,
        "y": 600
      },
      "tukusi": {
        "x": 400,
        "y": 400
      },
      "indeko": {
        "x": 1200,
        "y": 600
      },
      "raito": {
        "x": 200,
        "y": 400
      },
      "taiyou": {
        "x": 1600,
        "y": 800
      },
      "sisio": {
        "x": 1400,
        "y": 600
      },
      "daifuku": {
        "x": 1000,
        "y": 400
      },
      "sumire": {
        "x": 400,
        "y": 800
      },
      "star": {
        "x": 1000,
        "y": 800
      },
      "monaka": {
        "x": 800,
        "y": 400
      },
      "max": {
        "x": 200,
        "y": 100
      },
      "cosmo": {
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
      "tilly",
      "archer_higashiyama",
      "quinn",
      "koron",
      "botan",
      "charlie",
      "koharu",
      "hinagiku",
      "tanpopo",
      "harry",
      "poporo",
      "kikutaro"
    ],
    "positions": {
      "tilly": {
        "x": 400,
        "y": 100
      },
      "koron": {
        "x": 1400,
        "y": 100
      },
      "charlie": {
        "x": 600,
        "y": 200
      },
      "quinn": {
        "x": 1000,
        "y": 100
      },
      "botan": {
        "x": 200,
        "y": 200
      },
      "koharu": {
        "x": 1200,
        "y": 200
      },
      "tanpopo": {
        "x": 400,
        "y": 300
      },
      "hinagiku": {
        "x": 200,
        "y": 300
      },
      "harry": {
        "x": 800,
        "y": 400
      },
      "poporo": {
        "x": 1400,
        "y": 400
      },
      "archer_higashiyama": {
        "x": 800,
        "y": 100
      },
      "kikutaro": {
        "x": 1000,
        "y": 400
      }
    },
    "junctions": {},
    "routes": {}
  },
  "ouji": {
    "label": "王子動物園",
    "csv": "csvs/ouji.csv",
    "members": [
      "bunda",
      "yume",
      "ume",
      "uluru",
      "peace_male",
      "tilly",
      "umi",
      "holly",
      "ishin",
      "peter",
      "ibuki",
      "ouka",
      "mai",
      "nagi",
      "ema",
      "quinn",
      "hana",
      "ouki",
      "shine",
      "koron",
      "shiny",
      "koharu",
      "banbura",
      "ito",
      "raito",
      "itsuki"
    ],
    "positions": {
      "tilly": {
        "x": 2200,
        "y": 100
      },
      "ume": {
        "x": 1000,
        "y": 100
      },
      "umi": {
        "x": 1200,
        "y": 300
      },
      "holly": {
        "x": 200,
        "y": 300
      },
      "uluru": {
        "x": 1400,
        "y": 100
      },
      "yume": {
        "x": 800,
        "y": 100
      },
      "koron": {
        "x": 2000,
        "y": 800
      },
      "peter": {
        "x": 2000,
        "y": 400
      },
      "quinn": {
        "x": 1800,
        "y": 700
      },
      "ouka": {
        "x": 1400,
        "y": 500
      },
      "ishin": {
        "x": 600,
        "y": 300
      },
      "hana": {
        "x": 2000,
        "y": 600
      },
      "ema": {
        "x": 1200,
        "y": 700
      },
      "koharu": {
        "x": 1800,
        "y": 1000
      },
      "ibuki": {
        "x": 400,
        "y": 500
      },
      "itsuki": {
        "x": 600,
        "y": 900
      },
      "shine": {
        "x": 1200,
        "y": 800
      },
      "raito": {
        "x": 400,
        "y": 900
      },
      "shiny": {
        "x": 1000,
        "y": 1000
      },
      "mai": {
        "x": 1000,
        "y": 600
      },
      "nagi": {
        "x": 1400,
        "y": 700
      },
      "ouki": {
        "x": 800,
        "y": 700
      },
      "peace_male": {
        "x": 1800,
        "y": 100
      },
      "banbura": {
        "x": 200,
        "y": 800
      },
      "ito": {
        "x": 600,
        "y": 800
      },
      "bunda": {
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
      "banbura",
      "yume",
      "himawari",
      "archer",
      "asahi",
      "kanae",
      "koron",
      "quinn",
      "dolly",
      "koharu",
      "sora",
      "fuku",
      "kotarou",
      "jinberan",
      "mira",
      "hiyori",
      "poll",
      "sachi"
    ],
    "positions": {
      "yume": {
        "x": 1000,
        "y": 100
      },
      "jinberan": {
        "x": 1600,
        "y": 800
      },
      "koron": {
        "x": 200,
        "y": 300
      },
      "quinn": {
        "x": 600,
        "y": 300
      },
      "himawari": {
        "x": 1000,
        "y": 200
      },
      "archer": {
        "x": 1400,
        "y": 200
      },
      "fuku": {
        "x": 1200,
        "y": 500
      },
      "koharu": {
        "x": 400,
        "y": 500
      },
      "sora": {
        "x": 800,
        "y": 500
      },
      "kanae": {
        "x": 1000,
        "y": 300
      },
      "mira": {
        "x": 1200,
        "y": 700
      },
      "asahi": {
        "x": 1200,
        "y": 300
      },
      "sachi": {
        "x": 1000,
        "y": 900
      },
      "dolly": {
        "x": 1600,
        "y": 400
      },
      "banbura": {
        "x": 600,
        "y": 100
      },
      "kotarou": {
        "x": 1600,
        "y": 600
      },
      "hiyori": {
        "x": 600,
        "y": 900
      },
      "poll": {
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
      "archer_higashiyama",
      "tilly",
      "taichi",
      "holly",
      "max",
      "charlie",
      "kirara",
      "koron",
      "komati",
      "kintoki",
      "azuma",
      "sora"
    ],
    "positions": {
      "tilly": {
        "x": 600,
        "y": 100
      },
      "holly": {
        "x": 1400,
        "y": 100
      },
      "taichi": {
        "x": 1000,
        "y": 100
      },
      "koron": {
        "x": 1200,
        "y": 300
      },
      "charlie": {
        "x": 400,
        "y": 200
      },
      "komati": {
        "x": 1600,
        "y": 300
      },
      "kirara": {
        "x": 800,
        "y": 300
      },
      "azuma": {
        "x": 1400,
        "y": 400
      },
      "kintoki": {
        "x": 1000,
        "y": 400
      },
      "archer_higashiyama": {
        "x": 200,
        "y": 100
      },
      "max": {
        "x": 1800,
        "y": 100
      },
      "sora": {
        "x": 0,
        "y": 400
      }
    },
    "junctions": {},
    "routes": {}
  },
  "tilly": {
    "label": "ティリー族",
    "csv": "csvs/tilly.csv",
    "members": [
      "archer_higashiyama",
      "tilly",
      "peace_male",
      "max",
      "botan",
      "charlie",
      "rin",
      "taichi",
      "harry",
      "ishin",
      "peter",
      "umi",
      "koharu",
      "hinagiku",
      "tanpopo",
      "koron",
      "archer",
      "indeko",
      "ume",
      "ouka",
      "ema",
      "nagi",
      "poporo",
      "kirara",
      "mai",
      "hana",
      "kintoki",
      "star",
      "sisio",
      "taiyou",
      "shine",
      "raito",
      "tukusi",
      "monaka",
      "daifuku",
      "cosmo",
      "shiny",
      "sumire",
      "kikutaro",
      "tenmusu"
    ],
    "positions": {
      "tilly": {
        "x": 2000,
        "y": 100
      },
      "ume": {
        "x": 2200,
        "y": 900
      },
      "umi": {
        "x": 3200,
        "y": 700
      },
      "taichi": {
        "x": 1800,
        "y": 600
      },
      "koron": {
        "x": 800,
        "y": 900
      },
      "charlie": {
        "x": 600,
        "y": 500
      },
      "peter": {
        "x": 2800,
        "y": 700
      },
      "ouka": {
        "x": 2600,
        "y": 900
      },
      "rin": {
        "x": 1000,
        "y": 600
      },
      "ishin": {
        "x": 1200,
        "y": 700
      },
      "botan": {
        "x": 200,
        "y": 500
      },
      "kirara": {
        "x": 1200,
        "y": 1000
      },
      "archer": {
        "x": 1600,
        "y": 900
      },
      "hana": {
        "x": 2800,
        "y": 1000
      },
      "ema": {
        "x": 3000,
        "y": 900
      },
      "koharu": {
        "x": 600,
        "y": 800
      },
      "tukusi": {
        "x": 1000,
        "y": 1200
      },
      "indeko": {
        "x": 1800,
        "y": 900
      },
      "tanpopo": {
        "x": 400,
        "y": 900
      },
      "shine": {
        "x": 2600,
        "y": 1100
      },
      "raito": {
        "x": 600,
        "y": 1200
      },
      "shiny": {
        "x": 2400,
        "y": 1200
      },
      "mai": {
        "x": 2400,
        "y": 1000
      },
      "taiyou": {
        "x": 2200,
        "y": 1100
      },
      "sisio": {
        "x": 2000,
        "y": 1100
      },
      "daifuku": {
        "x": 1400,
        "y": 1200
      },
      "hinagiku": {
        "x": 200,
        "y": 900
      },
      "harry": {
        "x": 800,
        "y": 700
      },
      "kintoki": {
        "x": 800,
        "y": 1100
      },
      "nagi": {
        "x": 3200,
        "y": 900
      },
      "sumire": {
        "x": 800,
        "y": 1300
      },
      "star": {
        "x": 1600,
        "y": 1100
      },
      "monaka": {
        "x": 1200,
        "y": 1200
      },
      "poporo": {
        "x": 600,
        "y": 1000
      },
      "archer_higashiyama": {
        "x": 400,
        "y": 100
      },
      "peace_male": {
        "x": 3000,
        "y": 100
      },
      "max": {
        "x": 800,
        "y": 200
      },
      "cosmo": {
        "x": 1800,
        "y": 1200
      },
      "tenmusu": {
        "x": 1000,
        "y": 700
      },
      "kikutaro": {
        "x": 800,
        "y": 1000
      }
    },
    "junctions": {},
    "routes": {}
  },
  "yume": {
    "label": "ユメ族",
    "csv": "csvs/yume.csv",
    "members": [
      "taichi",
      "holly",
      "bunda",
      "yume",
      "tumugi",
      "banbura",
      "koharu",
      "sora",
      "ishin",
      "yui",
      "mira",
      "himawari",
      "archer",
      "hinata",
      "hiyori",
      "kasumi",
      "asahi",
      "fuku",
      "tilly",
      "kanae",
      "mirako1",
      "poll",
      "nanami",
      "rin",
      "arata",
      "sachi",
      "sisio",
      "indeko",
      "eight",
      "omochi",
      "raito",
      "tukusi",
      "monaka",
      "ouka",
      "ibuki",
      "taiyou",
      "star",
      "ouki",
      "cosmo",
      "sumire"
    ],
    "positions": {
      "tilly": {
        "x": 2800,
        "y": 700
      },
      "holly": {
        "x": 2000,
        "y": 100
      },
      "yume": {
        "x": 3200,
        "y": 200
      },
      "taichi": {
        "x": 1400,
        "y": 100
      },
      "ouka": {
        "x": 1600,
        "y": 1100
      },
      "rin": {
        "x": 3600,
        "y": 800
      },
      "ishin": {
        "x": 3000,
        "y": 400
      },
      "nanami": {
        "x": 1400,
        "y": 800
      },
      "himawari": {
        "x": 3200,
        "y": 500
      },
      "archer": {
        "x": 4000,
        "y": 500
      },
      "fuku": {
        "x": 1000,
        "y": 700
      },
      "koharu": {
        "x": 400,
        "y": 400
      },
      "tukusi": {
        "x": 3400,
        "y": 1000
      },
      "indeko": {
        "x": 2600,
        "y": 900
      },
      "ibuki": {
        "x": 2000,
        "y": 1100
      },
      "sora": {
        "x": 800,
        "y": 400
      },
      "hinata": {
        "x": 4400,
        "y": 500
      },
      "kanae": {
        "x": 3800,
        "y": 700
      },
      "raito": {
        "x": 3000,
        "y": 1000
      },
      "mira": {
        "x": 200,
        "y": 500
      },
      "taiyou": {
        "x": 2200,
        "y": 1100
      },
      "sisio": {
        "x": 1800,
        "y": 900
      },
      "omochi": {
        "x": 1600,
        "y": 1000
      },
      "tumugi": {
        "x": 4400,
        "y": 200
      },
      "arata": {
        "x": 4200,
        "y": 800
      },
      "asahi": {
        "x": 3600,
        "y": 600
      },
      "sumire": {
        "x": 3200,
        "y": 1200
      },
      "kasumi": {
        "x": 3400,
        "y": 600
      },
      "star": {
        "x": 2800,
        "y": 1100
      },
      "ouki": {
        "x": 1800,
        "y": 1200
      },
      "monaka": {
        "x": 3600,
        "y": 1000
      },
      "sachi": {
        "x": 800,
        "y": 900
      },
      "eight": {
        "x": 4000,
        "y": 900
      },
      "mirako1": {
        "x": 200,
        "y": 800
      },
      "banbura": {
        "x": 3800,
        "y": 300
      },
      "bunda": {
        "x": 2600,
        "y": 200
      },
      "hiyori": {
        "x": 600,
        "y": 600
      },
      "cosmo": {
        "x": 2400,
        "y": 1200
      },
      "poll": {
        "x": 400,
        "y": 800
      },
      "yui": {
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
