// ［全妖怪の共通データ倉庫］
// 今後、新しい妖怪を増やしたい時はこのファイル「だけ」を下に伸ばしていけばOKです！
const yokaiDatabase = {
    "001": {
        "id": "001",
        "name": "ジバニャン", "furigana": "じばにゃん", "tribe": "プリチー", "role": "アタッカー", "rank": "B",
        "skill_name": "底力", "skill_desc": "HPが残り少なくなったとき ちからがアップする。",
        "image": "001.png",
        "status": {
            "hp":  { "speciesA": 120, "speciesB": 320 },
            "str": { "speciesA": 80,  "speciesB": 240 },
            "mag": { "speciesA": 50,  "speciesB": 150 },
            "def": { "speciesA": 60,  "speciesB": 180 },
            "spd": "ふつう"
        }
    },
    "002": {
        "id": "002",
        "name": "ブシニャン", "furigana": "ぶしにゃん", "tribe": "イサマシ", "role": "アタッカー", "rank": "S",
        "skill_name": "超・クリティカル", "skill_desc": "クリティカルの威力より高くなる。",
        "image": "002.png",
        "status": {
            "hp":  { "speciesA": 150, "speciesB": 400 },
            "str": { "speciesA": 110, "speciesB": 310 },
            "mag": { "speciesA": 40,  "speciesB": 130 },
            "def": { "speciesA": 70,  "speciesB": 200 },
            "spd": "はやい"
        }
    }
    // ➔ 新しい妖怪を追加するときは、ここにカンマ（,）を打って下に同じ形式で足していきます
};
