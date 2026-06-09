// ［全妖怪の共通データ倉庫］
// 今後、新しい妖怪を増やしたい時はこのファイル「だけ」を下に伸ばしていけばOKです！
const yokaiDatabase = {
    "001": {
        "id": "001",
        "name": "ぶようじん坊", "furigana": "ぶようじんぼう", "tribe": "イサマシ", "role": "アタッカー", "rank": "E",
        "skill_name": "ぶようじん", "skill_desc": "クリティカルされやすくなるが　クリティカルが出やすくなる。",
        "image": "001.png",
        "status": {
            "hp":  { "speciesA": 49, "speciesB": 344 },
            "str": { "speciesA": 16,  "speciesB": 200 },
            "mag": { "speciesA": 3,  "speciesB": 45 },
            "def": { "speciesA": 5,  "speciesB": 82 },
            "spd": "はやい"
        }
    },
    "002": {
        "id": "002",
        "name": "がらあきん坊", "furigana": "がらあきんぼう", "tribe": "イサマシ", "role": "アタッカー", "rank": "C",
        "skill_name": "ぶようじん", "skill_desc": "クリティカルされやすくなるが　クリティカルが出やすくなる。",
        "image": "002.png",
        "status": {
            "hp":  { "speciesA": 61, "speciesB": 382 },
            "str": { "speciesA": 19, "speciesB": 229 },
            "mag": { "speciesA": 5,  "speciesB": 50 },
            "def": { "speciesA": 8,  "speciesB": 99 },
            "spd": "はやい"
        }
    }
    // ➔ 新しい妖怪を追加するときは、ここにカンマ（,）を打って下に同じ形式で足していきます
};
