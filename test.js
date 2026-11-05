const strongMinorCardset = {
"strongMinor": {
"牌局(二)": {
"metadata": {
"title": "牌局 Ⅱ",
"category": "強低花",
"timestamp": "2026-10-31T00:00:00.000Z",
"dealer": "北",
"vulnerability": "None",
"warning": [
"1. 3♥ 的張數鐵則：答叫方在 3 階自由重叫高花，制度上必須具備 6+ 張長門。",
"2. 3♦! 扣叫的解題唯一性：當答叫方持 5 張高花且旁門無擋時，3♦! (Western Cuebid) 是既能避開 3NT 陷阱、又能完美挖出開叫方 3 張高花配合（♥KT4）的唯一正確線路！"
]
},
"hands": {
"north": {
"S": ["A", "J"],
"H": ["K", "10", "4"],
"D": ["7", "2"],
"C": ["A", "K", "Q", "10", "8", "3"]
},
"south": {
"S": ["K", "10", "8"],
"H": ["A", "Q", "9", "6", "2"],
"D": ["8", "5", "4"],
"C": ["7", "4"]
},
"east": {
"S": ["9", "6", "5"],
"H": ["8", "7", "5"],
"D": ["A", "K", "J", "10"],
"C": ["9", "6", "2"]
},
"west": {
"S": ["Q", "7", "4", "3", "2"],
"H": ["J", "3"],
"D": ["Q", "9", "6", "3"],
"C": ["J", "5"]
}
},
"bidding": [
{
"pos": "北",
"val": "1♣",
"note": "北家 17 HCP 開叫 1♣",
"children": [
{
"pos": "東",
"val": "Pass",
"note": "",
"children": [
{
"pos": "南",
"val": "1♥",
"note": "【南家第一度決策】9 HCP 答叫 1♥ (5 張 ♥)",
"children": [
{
"pos": "西",
"val": "Pass",
"note": "",
"children": [
{
"pos": "北",
"val": "3♣",
"alert": true,
"note": "北家 3♣! 跳重叫原花色（表示 16–18 HCP、6+ 張強 ♣）",
"children": [
{
"pos": "東",
"val": "Pass",
"note": "",
"children": [
{
"pos": "南",
"val": "3♦",
"alert": true,
"note": "【分支 A：唯一精確最佳解】南家自持 ♦854 無擋不能叫 3NT，且 ♥ 僅 5 張不能叫 3♥，故叫出 3♦! (Western Cuebid) 詢問擋張",
"children": [
{
"pos": "西",
"val": "Pass",
"note": "",
"children": [
{
"pos": "北",
"val": "3♥",
"alert": true,
"note": "北家無 ♦ 擋張但握有 3 張 ♥ 支持 (♥KT4)，順勢回報 3♥",
"children": [
{
"pos": "東",
"val": "Pass",
"note": "",
"children": [
{
"pos": "南",
"val": "4♥",
"note": "【南家第三度決策】南家確定 5-3 ♥ 配合，定局 4♥ Game！",
"children": [
{
"pos": "西",
"val": "Pass",
"note": "",
"children": [
{
"pos": "北",
"val": "Pass",
"note": "開叫方同意 4♥ Game Pass",
"children": [
{
"pos": "東",
"val": "Pass",
"note": "",
"children": []
}
]
}
]
}
]
}
]
}
]
}
]
}
},
{
"pos": "南",
"val": "3♥",
"note": "",
"children": [],
"isError": true,
"errorMsg": "【分支 B 犯錯警示】⚠️ 叫牌錯誤！在 1♣ - 1♥; 3♣ - 3♥ 後續中，三線自由重叫高花 3♥ 嚴格保證 6+ 張紅心。你僅有 5 張 ♥ 會少報長門張數，嚴重誤導北家！"
},
{
"pos": "南",
"val": "3NT",
"note": "",
"children": [],
"isError": true,
"errorMsg": "【分支 C 犯錯警示】⚠️ 致命陷阱/賭博性叫品！無視自身 ♦854 毫無方塊擋張而盲目叫 3NT，敵方首攻 ♦ 將直接打穿合約 (Down 2)！"
}
]
}
}
]
}
]
}
]
}
]
}
]
}
]
}
}
};