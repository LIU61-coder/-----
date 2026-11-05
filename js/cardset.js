const cardset = {
    "natural": {
        "練習(一)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "unsorted"
            },
            "hands": {
                "north": {
                    "S": [
                        "9",
                        "8",
                        "4",
                        "3"
                    ],
                    "H": [
                        "Q",
                        "9",
                        "5"
                    ],
                    "D": [
                        "A",
                        "J",
                        "6"
                    ],
                    "C": [
                        "K",
                        "T",
                        "3"
                    ]
                },
                "south": {
                    "S": [
                        "Q",
                        "6",
                        "5"
                    ],
                    "H": [
                        "K",
                        "J",
                        "T",
                        "8"
                    ],
                    "D": [
                        "T",
                        "9",
                        "2"
                    ],
                    "C": [
                        "A",
                        "5",
                        "4"
                    ]
                },
                "east": {
                    "S": [
                        "A",
                        "J",
                        "7"
                    ],
                    "H": [
                        "7",
                        "6",
                        "2"
                    ],
                    "D": [
                        "K",
                        "Q",
                        "4",
                        "3"
                    ],
                    "C": [
                        "9",
                        "6",
                        "2"
                    ]
                },
                "west": {
                    "S": [
                        "K",
                        "T",
                        "2"
                    ],
                    "H": [
                        "A",
                        "4",
                        "3"
                    ],
                    "D": [
                        "8",
                        "7",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "J",
                        "8",
                        "7"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♥",
                                    "note": "",
                                    "children": []
                                },
                                {
                                    "pos": "南",
                                    "val": "Pass",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "不應該pass"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(二)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "南",
                "vulnerability": "None",
                "category": "unsorted"
            },
            "hands": {
                "north": {
                    "S": [
                        "8",
                        "7",
                        "5",
                        "3"
                    ],
                    "H": [
                        "6",
                        "5",
                        "2"
                    ],
                    "D": [
                        "A",
                        "K",
                        "7"
                    ],
                    "C": [
                        "K",
                        "9",
                        "2"
                    ]
                },
                "south": {
                    "S": [
                        "K",
                        "J",
                        "T"
                    ],
                    "H": [
                        "A",
                        "J",
                        "9",
                        "7"
                    ],
                    "D": [
                        "9",
                        "8",
                        "3"
                    ],
                    "C": [
                        "J",
                        "5",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "A",
                        "9",
                        "4"
                    ],
                    "H": [
                        "Q",
                        "T",
                        "3"
                    ],
                    "D": [
                        "T",
                        "6",
                        "5",
                        "4"
                    ],
                    "C": [
                        "A",
                        "8",
                        "6"
                    ]
                },
                "west": {
                    "S": [
                        "Q",
                        "6",
                        "2"
                    ],
                    "H": [
                        "K",
                        "8",
                        "4"
                    ],
                    "D": [
                        "Q",
                        "J",
                        "2"
                    ],
                    "C": [
                        "Q",
                        "T",
                        "7",
                        "4"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "南",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "西",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "北",
                                    "val": "Pass",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "東",
                                            "val": "X",
                                            "note": "",
                                            "children": []
                                        },
                                        {
                                            "pos": "東",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [],
                                            "isError": true,
                                            "errorMsg": "此叫品為錯誤叫品。"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(三)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(四)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(五)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(六)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(七)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(八)": {
            "metadata": {
                "category": "unsorted"
            }
        }
    },
    "simpleoneNT": {
        "練習(一)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "K",
                        "3"
                    ],
                    "H": [
                        "Q",
                        "J",
                        "8",
                        "2"
                    ],
                    "D": [
                        "K",
                        "7",
                        "5",
                        "2"
                    ],
                    "C": [
                        "Q",
                        "4",
                        "2"
                    ]
                },
                "south": {
                    "S": [
                        "Q",
                        "9",
                        "5",
                        "4"
                    ],
                    "H": [
                        "K",
                        "T",
                        "6",
                        "3"
                    ],
                    "D": [
                        "J",
                        "4"
                    ],
                    "C": [
                        "K",
                        "7",
                        "5"
                    ]
                },
                "east": {
                    "S": [
                        "J",
                        "8",
                        "7"
                    ],
                    "H": [
                        "A",
                        "7",
                        "5"
                    ],
                    "D": [
                        "A",
                        "9",
                        "3"
                    ],
                    "C": [
                        "J",
                        "9",
                        "6"
                    ]
                },
                "west": {
                    "S": [
                        "10",
                        "6",
                        "2"
                    ],
                    "H": [
                        "9",
                        "4"
                    ],
                    "D": [
                        "Q",
                        "10",
                        "8",
                        "6"
                    ],
                    "C": [
                        "A",
                        "10",
                        "8",
                        "3"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1NT",
                    "note": "15-17 HCP 平衡型",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2♣",
                                    "note": "Stayman 詢問 4 張高花",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♥",
                                                    "note": "答 4 張 ♥",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♥",
                                                                    "note": "找到 8 張 ♥ 配合！9 HCP + 同伴 15-17 HCP 帶配合已達 24+ 成局線，直接進 4♥",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♥",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "找到高花 8 張配合後，9 HCP 加上同伴 15-17 HCP 已達高花成局點力 (24+ 帶配合)，應直接叫 4♥ 成局，勿叫 3♥ 邀請！"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3NT",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "既然已經找到 4-4 ♥ 配合，應叫高花合約 4♥，高花合約獲勝率與安全性均優於 3NT。"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "pos": "南",
                                    "val": "3NT",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "持雙高花 4-4 時應先叫 2♣ Stayman 尋找 8 張高花配合，勿忽略高花配合直接叫 3NT。"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(二)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "Q",
                        "2"
                    ],
                    "H": [
                        "A",
                        "7",
                        "3",
                        "2"
                    ],
                    "D": [
                        "K",
                        "J",
                        "8"
                    ],
                    "C": [
                        "Q",
                        "6",
                        "5"
                    ]
                },
                "south": {
                    "S": [
                        "J",
                        "8",
                        "6",
                        "3"
                    ],
                    "H": [
                        "K",
                        "9",
                        "5",
                        "2"
                    ],
                    "D": [
                        "Q",
                        "7",
                        "2"
                    ],
                    "C": [
                        "Q",
                        "4",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "A",
                        "10",
                        "9",
                        "5"
                    ],
                    "H": [
                        "J",
                        "10",
                        "4"
                    ],
                    "D": [
                        "A",
                        "5",
                        "3"
                    ],
                    "C": [
                        "J",
                        "8",
                        "7"
                    ]
                },
                "west": {
                    "S": [
                        "7",
                        "4"
                    ],
                    "H": [
                        "Q",
                        "8",
                        "6"
                    ],
                    "D": [
                        "10",
                        "9",
                        "6",
                        "4"
                    ],
                    "C": [
                        "A",
                        "K",
                        "10",
                        "9"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1NT",
                    "note": "15-17 HCP",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2♣",
                                    "note": "Stayman",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♥",
                                                    "note": "答 4 張 ♥",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♥",
                                                                    "note": "找到配合，8 HCP 屬邀請範圍 (23-25點)，叫 3♥ 邀請同伴",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "北家 15 HCP 低限，拒絕邀請 Pass",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♥",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "8 HCP 帶配合屬邀請點力 (兩家合計約 23-25 點)，同伴為 15 點低限時點力不足成局，應叫 3♥ 邀請而非直接衝 4♥。"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "既然已經找到 4-4 ♥ 配合，應直接叫 3♥ 作高花邀請，勿叫 2NT 無王邀請。"
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
            ]
        },
        "練習(三)": {
            "metadata": {
                "title": "練習(三)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "Q",
                        "3"
                    ],
                    "H": [
                        "K",
                        "8",
                        "4"
                    ],
                    "D": [
                        "J",
                        "9",
                        "2"
                    ],
                    "C": [
                        "K",
                        "Q",
                        "7",
                        "5"
                    ]
                },
                "south": {
                    "S": [
                        "K",
                        "J",
                        "9",
                        "7",
                        "2"
                    ],
                    "H": [
                        "Q",
                        "10",
                        "6",
                        "3"
                    ],
                    "D": [
                        "8",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "8",
                        "6",
                        "4"
                    ],
                    "H": [
                        "A",
                        "7",
                        "2"
                    ],
                    "D": [
                        "K",
                        "Q",
                        "7",
                        "3"
                    ],
                    "C": [
                        "J",
                        "4",
                        "3"
                    ]
                },
                "west": {
                    "S": [
                        "10",
                        "5"
                    ],
                    "H": [
                        "J",
                        "9",
                        "5"
                    ],
                    "D": [
                        "A",
                        "10",
                        "6",
                        "4"
                    ],
                    "C": [
                        "A",
                        "10",
                        "9",
                        "8"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1NT",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2♣",
                                    "note": "Stayman",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♦",
                                                    "note": "無 4 張高花",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♥",
                                                                    "note": "交大特約：5♠4♥ 邀請 (Inv, 8-9 HCP)",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "4♠",
                                                                                    "note": "北家 16 點兼有 3 張 ♠ 支持，接受邀請叫 4♠ 成局",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♠",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "交大社制中，Stayman 答 2D 後叫 2♠ 表示『5♥4♠ 邀請』！持 5♠4♥ 應叫 2♥！"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "持 5♠4♥ 邀請牌型，應叫 2♥ 特約同時秀出 5 張 ♠ 與 4 張 ♥，若直接叫 2NT 會漏掉同伴有 3 張 ♠ 時的 5-3 配合。"
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
            ]
        },
        "練習(四)": {
            "metadata": {
                "title": "練習(四)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "Q",
                        "4"
                    ],
                    "H": [
                        "A",
                        "J",
                        "5"
                    ],
                    "D": [
                        "K",
                        "Q",
                        "8",
                        "2"
                    ],
                    "C": [
                        "J",
                        "9",
                        "3"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "J",
                        "8",
                        "7",
                        "2"
                    ],
                    "H": [
                        "9",
                        "4",
                        "3"
                    ],
                    "D": [
                        "J",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "6",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "10",
                        "6",
                        "5"
                    ],
                    "H": [
                        "K",
                        "10",
                        "8",
                        "2"
                    ],
                    "D": [
                        "A",
                        "9",
                        "3"
                    ],
                    "C": [
                        "8",
                        "7",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "9",
                        "3"
                    ],
                    "H": [
                        "Q",
                        "7",
                        "6"
                    ],
                    "D": [
                        "10",
                        "7",
                        "6",
                        "4"
                    ],
                    "C": [
                        "A",
                        "K",
                        "10",
                        "5"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1NT",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2♥",
                                    "note": "Jacoby Transfer 至 ♠",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♠",
                                                    "note": "接受轉換",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "5 張 ♠ 8-9 HCP 平衡型邀請（讓開叫方選擇 3NT 或 ♠ 合約）",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "4♠",
                                                                                    "note": "北家 16 HCP (上限) 且有 3 張 ♠ 支持，選擇 4♠ 成局",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♠",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "轉移後再叫 3♠ 代表 6+ 張 ♠ 的邀請；持 5 張 ♠ 且平衡型邀請牌應叫 2NT，交給同伴依據黑桃張數 (2張/3張) 選擇 3NT 或 ♠ 合約。"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "Pass",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "8 HCP 已達到邀請點力 (8-9 HCP)，不應 Pass 2♠，應叫 2NT 繼續邀請成局。"
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
            ]
        },
        "練習(五)": {
            "metadata": {
                "title": "練習(五)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "Q",
                        "J",
                        "5"
                    ],
                    "H": [
                        "A",
                        "K",
                        "4"
                    ],
                    "D": [
                        "K",
                        "8",
                        "6",
                        "2"
                    ],
                    "C": [
                        "Q",
                        "9",
                        "3"
                    ]
                },
                "south": {
                    "S": [
                        "K",
                        "8",
                        "2"
                    ],
                    "H": [
                        "Q",
                        "10",
                        "3"
                    ],
                    "D": [
                        "A",
                        "7",
                        "4"
                    ],
                    "C": [
                        "J",
                        "7",
                        "6",
                        "5"
                    ]
                },
                "east": {
                    "S": [
                        "9",
                        "7",
                        "6",
                        "4"
                    ],
                    "H": [
                        "8",
                        "7",
                        "2"
                    ],
                    "D": [
                        "Q",
                        "J",
                        "9"
                    ],
                    "C": [
                        "K",
                        "8",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "A",
                        "10",
                        "3"
                    ],
                    "H": [
                        "J",
                        "9",
                        "6",
                        "5"
                    ],
                    "D": [
                        "10",
                        "5",
                        "3"
                    ],
                    "C": [
                        "A",
                        "2"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1NT",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "3NT",
                                    "note": "束叫 (Sign-off)。10+ HCP 平衡型且無 4M，兩家點力 25-27 HCP 達標，直達 3NT",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "Pass",
                                                    "note": "",
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
                                },
                                {
                                    "pos": "南",
                                    "val": "2NT",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "持 10 HCP 平衡型無高花，10 + 15-17 = 25-27 HCP，點力足夠成局，應直接叫 3NT 束叫，勿叫 2NT 邀請！"
                                },
                                {
                                    "pos": "南",
                                    "val": "2♣",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "手牌完全沒有 4 張高花，不需要叫 2♣ Stayman 探詢高花，直接叫 3NT 即可。"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習集": [
            {
                "metadata": {
                    "title": "牌局 1",
                    "category": "1NT",
                    "dealer": "北",
                    "vulnerability": "None",
                    "warning": [
                        "高花配合的優先級高於 3NT！",
                        "當持 4 張高花且有 8+ HCP（邀請點）或 10+ HCP（成局點）時，第一圈必須優先叫 2♣! Stayman 尋找 4-4 高花配合，不可因為自身是均型就直接叫 3NT。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "K",
                            "Q",
                            "4"
                        ],
                        "H": [
                            "A",
                            "K",
                            "8",
                            "2"
                        ],
                        "D": [
                            "J",
                            "9",
                            "5"
                        ],
                        "C": [
                            "A",
                            "7",
                            "3"
                        ]
                    },
                    "south": {
                        "S": [
                            "J",
                            "8",
                            "3"
                        ],
                        "H": [
                            "Q",
                            "J",
                            "9",
                            "5"
                        ],
                        "D": [
                            "A",
                            "6",
                            "4",
                            "2"
                        ],
                        "C": [
                            "Q",
                            "5"
                        ]
                    },
                    "east": {
                        "S": [
                            "A",
                            "10",
                            "9",
                            "7",
                            "2"
                        ],
                        "H": [
                            "7",
                            "4",
                            "3"
                        ],
                        "D": [
                            "K",
                            "Q",
                            "10",
                            "8"
                        ],
                        "C": [
                            "8"
                        ]
                    },
                    "west": {
                        "S": [
                            "6",
                            "5"
                        ],
                        "H": [
                            "10",
                            "6"
                        ],
                        "D": [
                            "7",
                            "3"
                        ],
                        "C": [
                            "K",
                            "J",
                            "10",
                            "9",
                            "6",
                            "4"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1NT",
                        "note": "北家 17 HCP 開叫 1NT (15–17 HCP BAL)",
                        "children": [
                            {
                                "pos": "東",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "2♣",
                                        "alert": true,
                                        "note": "【分支 1A：最佳解】10 HCP 發動 2♣! Stayman 詢問高花",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♥",
                                                        "note": "北家 2♥ 報出 4 張紅心",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "4♥",
                                                                        "note": "【南家第二度決策】確認 4-4 ♥ 配合且點力足夠 (17+10=27)，叫出 4♥ Game！",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "Pass",
                                                                                        "note": "開叫方同意 4♥ 合約 Pass",
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
                                        ]
                                    },
                                    {
                                        "pos": "南",
                                        "val": "3NT",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 1B 犯錯警示】⚠️ 叫牌次優/錯誤！持 4 張高花且有 10+ HCP 成局點力時，第一圈應優先叫 2♣! Stayman 尋找 4-4 高花配合，不可直接叫 3NT！"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "metadata": {
                    "title": "牌局 2",
                    "category": "1NT",
                    "dealer": "北",
                    "vulnerability": "Both",
                    "warning": [
                        "持 5 張高花與 9 HCP 邀請點時的標準叫序：",
                        "1. 第一圈先叫 2♦/2♥ Transfer 轉叫高花。",
                        "2. 第二圈叫 2NT！這樣搭檔若有 3 張配合可改叫 3M/4M；若無配合則可選擇 2NT/3NT。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "K",
                            "5"
                        ],
                        "H": [
                            "K",
                            "10",
                            "4"
                        ],
                        "D": [
                            "A",
                            "Q",
                            "6",
                            "2"
                        ],
                        "C": [
                            "J",
                            "8",
                            "3"
                        ]
                    },
                    "south": {
                        "S": [
                            "J",
                            "9",
                            "2"
                        ],
                        "H": [
                            "Q",
                            "J",
                            "8",
                            "6",
                            "3"
                        ],
                        "D": [
                            "K",
                            "7",
                            "4"
                        ],
                        "C": [
                            "Q",
                            "5"
                        ]
                    },
                    "east": {
                        "S": [
                            "Q",
                            "10",
                            "8",
                            "7"
                        ],
                        "H": [
                            "A",
                            "7",
                            "5"
                        ],
                        "D": [
                            "J",
                            "9",
                            "5"
                        ],
                        "C": [
                            "10",
                            "9",
                            "2"
                        ]
                    },
                    "west": {
                        "S": [
                            "6",
                            "4",
                            "3"
                        ],
                        "H": [
                            "2"
                        ],
                        "D": [
                            "10",
                            "8",
                            "3"
                        ],
                        "C": [
                            "A",
                            "K",
                            "7",
                            "6",
                            "4"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1NT",
                        "note": "北家 17 HCP 開叫 1NT",
                        "children": [
                            {
                                "pos": "東",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "2♦",
                                        "alert": true,
                                        "note": "【南家第一度決策】9 HCP 持 5 張 ♥，叫 2♦! 轉換至 ♥",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♥",
                                                        "note": "北家配合叫出 2♥",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2NT",
                                                                        "note": "【分支 2A：最佳解】轉叫後叫 2NT（正好 5 張 ♥ + 9 HCP 邀請點力）",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "4♥",
                                                                                        "note": "北家持 17 點上限 (MAX) 且有 3 張 ♥ 支持，接受邀請叫出 4♥ Game！",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "東",
                                                                                                "val": "Pass",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "南",
                                                                                                        "val": "Pass",
                                                                                                        "note": "【南家第三度決策】同意 4♥ Game Pass",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "西",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3♥",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 2B 犯錯警示】⚠️ 叫牌錯誤！1NT - 2♦; 2♥ - 3♥ 依制度代表『6+ 張 ♥』的邀請牌 (INV)。你僅 5 張 ♥ 不可跳叫 3♥！"
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "Pass",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 2C 犯錯警示】⚠️ 叫牌錯誤！第二圈 Pass 代表 0–8 HCP 的弱牌簽退 (Sign-off)，你有 9 HCP 邀請點力，Pass 會漏叫 4♥ Game！"
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
                ]
            },
            {
                "metadata": {
                    "title": "牌局 3",
                    "category": "竄叫",
                    "dealer": "南",
                    "vulnerability": "Favorable",
                    "warning": [
                        "7 張長門在任何身價下都不應該開叫二階竄叫（2♦/2♥/2♠）。",
                        "在「無對有」有利身價下，開叫 2♦ 極度消極，少報張數且無法阻礙敵方。",
                        "開叫 3♦ 兼具阻礙效果，且能完美保留搭檔叫 3NT 的最高得分空間；開叫 4♦ 則是最大化封殺敵方的阻礙叫。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "K",
                            "10",
                            "5"
                        ],
                        "H": [
                            "A",
                            "K",
                            "6"
                        ],
                        "D": [
                            "A",
                            "3"
                        ],
                        "C": [
                            "J",
                            "8",
                            "4",
                            "2"
                        ]
                    },
                    "south": {
                        "S": [
                            "4"
                        ],
                        "H": [
                            "8",
                            "5",
                            "3"
                        ],
                        "D": [
                            "K",
                            "Q",
                            "J",
                            "10",
                            "8",
                            "7",
                            "2"
                        ],
                        "C": [
                            "5",
                            "3"
                        ]
                    },
                    "east": {
                        "S": [
                            "Q",
                            "J",
                            "9",
                            "7",
                            "2"
                        ],
                        "H": [
                            "Q",
                            "J",
                            "9",
                            "4"
                        ],
                        "D": [
                            "9",
                            "5"
                        ],
                        "C": [
                            "K",
                            "7"
                        ]
                    },
                    "west": {
                        "S": [
                            "8",
                            "6",
                            "3"
                        ],
                        "H": [
                            "10",
                            "7",
                            "2"
                        ],
                        "D": [
                            "6",
                            "4"
                        ],
                        "C": [
                            "A",
                            "Q",
                            "9",
                            "6",
                            "2"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "南",
                        "val": "3♦",
                        "alert": true,
                        "note": "【分支 2A：實戰最佳解】開叫 3♦ 兼具阻礙效果，並完美保留搭檔叫 3NT 的空間！",
                        "children": [
                            {
                                "pos": "西",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "北",
                                        "val": "3NT",
                                        "note": "北家 19 HCP 高花全擋，直奔 3NT 成局！",
                                        "children": [
                                            {
                                                "pos": "東",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "南",
                                                        "val": "Pass",
                                                        "note": "【南家第二度決策】同意 3NT 成局合約 Pass",
                                                        "children": [
                                                            {
                                                                "pos": "西",
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
                    },
                    {
                        "pos": "南",
                        "val": "4♦",
                        "alert": true,
                        "note": "【分支 2B：極端阻礙解】開叫 4♦ 最大化阻礙敵方（Rule of 4），但會越過 3NT",
                        "children": [
                            {
                                "pos": "西",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "北",
                                        "val": "5♦",
                                        "note": "北家 19 HCP 配合 ♦A3 加叫至 5♦！",
                                        "children": [
                                            {
                                                "pos": "東",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "南",
                                                        "val": "Pass",
                                                        "note": "【南家第二度決策】同意 5♦ 合約 Pass",
                                                        "children": [
                                                            {
                                                                "pos": "西",
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
                    },
                    {
                        "pos": "南",
                        "val": "2♦",
                        "note": "",
                        "children": [],
                        "isError": true,
                        "errorMsg": "【分支 2C 犯錯警示】⚠️ 叫牌錯誤！7 張長門在任何身價下都不應開叫 2♦ 二階竄叫。開叫 2♦ 少報 1 張長度、毫無阻礙效果，且會誤導同伴對 3NT 或 5♦ 贏墩的計算！"
                    }
                ]
            }
        ]
    },
    "preempt": {
        "練習(一)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "南",
                "vulnerability": "EW",
                "category": "竄叫"
            },
            "hands": {
                "south": {
                    "S": [
                        "Q",
                        "J",
                        "10",
                        "9",
                        "5",
                        "2"
                    ],
                    "H": [
                        "8",
                        "3"
                    ],
                    "D": [
                        "J",
                        "7",
                        "4"
                    ],
                    "C": [
                        "6",
                        "2"
                    ]
                },
                "north": {
                    "S": [
                        "A",
                        "K"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "5",
                        "2"
                    ],
                    "D": [
                        "A",
                        "K",
                        "5"
                    ],
                    "C": [
                        "A",
                        "8",
                        "4",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "8",
                        "6"
                    ],
                    "H": [
                        "7",
                        "6",
                        "4"
                    ],
                    "D": [
                        "8",
                        "6",
                        "3"
                    ],
                    "C": [
                        "Q",
                        "10",
                        "9",
                        "7",
                        "5"
                    ]
                },
                "west": {
                    "S": [
                        "7",
                        "4",
                        "3"
                    ],
                    "H": [
                        "K",
                        "J",
                        "10",
                        "9"
                    ],
                    "D": [
                        "Q",
                        "10",
                        "9",
                        "2"
                    ],
                    "C": [
                        "K",
                        "J"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "南",
                    "val": "2♠",
                    "note": "【南家開叫決策】234定律：有利身價（我無敵有）允許少4墩。2♠目標8墩，需4勝墩。♠QJ10952帶4個黑桃勝墩，符合二線竄叫！",
                    "children": [
                        {
                            "pos": "西",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "北",
                                    "val": "4♠",
                                    "note": "同伴（北家）點力強大直接加叫 4♠ 成局",
                                    "children": [
                                        {
                                            "pos": "東",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "南",
                                                    "val": "Pass",
                                                    "note": "【南家結尾決策】配合同伴 Pass 結束叫牌",
                                                    "children": [
                                                        {
                                                            "pos": "西",
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
                },
                {
                    "pos": "南",
                    "val": "Pass",
                    "note": "",
                    "children": [],
                    "isError": true,
                    "errorMsg": "有利身價（我無敵有）時，234定律允許少4墩（只需4墩勝墩）。持6張好花色且有4勝墩應積極開叫 2♠ 阻擊敵方！"
                },
                {
                    "pos": "南",
                    "val": "1♠",
                    "note": "",
                    "children": [],
                    "isError": true,
                    "errorMsg": "開叫一線（1♠）需要 12+ HCP，本手牌大牌點僅 3 HCP，不可開叫 1♠。"
                }
            ]
        },
        "練習(二)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "Ogust"
            },
            "hands": {
                "north": {
                    "S": [
                        "Q",
                        "J",
                        "10",
                        "9",
                        "4",
                        "2"
                    ],
                    "H": [
                        "A",
                        "5"
                    ],
                    "D": [
                        "K",
                        "3"
                    ],
                    "C": [
                        "8",
                        "4",
                        "2"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "K",
                        "3"
                    ],
                    "H": [
                        "K",
                        "8",
                        "2"
                    ],
                    "D": [
                        "A",
                        "Q",
                        "5",
                        "4"
                    ],
                    "C": [
                        "K",
                        "Q",
                        "5"
                    ]
                },
                "east": {
                    "S": [
                        "6"
                    ],
                    "H": [
                        "9",
                        "7",
                        "6",
                        "3"
                    ],
                    "D": [
                        "10",
                        "8",
                        "7",
                        "6"
                    ],
                    "C": [
                        "J",
                        "10",
                        "7",
                        "6"
                    ]
                },
                "west": {
                    "S": [
                        "8",
                        "7",
                        "5"
                    ],
                    "H": [
                        "Q",
                        "J",
                        "10",
                        "4"
                    ],
                    "D": [
                        "J",
                        "9",
                        "2"
                    ],
                    "C": [
                        "A",
                        "9",
                        "3"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "2♠",
                    "note": "同伴（北家）二線竄叫 2♠",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2NT",
                                    "note": "【南家第一度決策】持 16 HCP 強牌且有 3 張 ♠ 支持，叫 2NT Ogust 詢問同伴品質與點力",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "3♦",
                                                    "note": "同伴回應 3♦ (爛牌好點：8-10 HCP，♠ 無 AKQ 中任意 2 張)",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♠",
                                                                    "note": "【南家第二度決策】得知同伴有 8-10 HCP 好點，兩家合計 24+ HCP 帶 9 張黑桃配合，加叫 4♠ 成局",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♠",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "同伴回應 3♦ 代表『8-10 HCP 好點』，加上你手上的 16 HCP 已達 24+ 點帶配合之成局線，應直接加叫 4♠ 成局，勿停在 3♠！"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "pos": "南",
                                    "val": "Pass",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "持 16 HCP 帶 3 張 ♠ 支持，點力強大有成局機會，應叫 2NT Ogust 探詢同伴點力與牌質，不應 Pass！"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(三)": {
            "metadata": {
                "title": "練習(三)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "Ogust"
            },
            "hands": {
                "north": {
                    "S": [
                        "Q",
                        "J",
                        "10",
                        "8",
                        "5",
                        "2"
                    ],
                    "H": [
                        "K",
                        "4"
                    ],
                    "D": [
                        "8",
                        "6",
                        "3"
                    ],
                    "C": [
                        "7",
                        "5"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "K",
                        "3"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "5"
                    ],
                    "D": [
                        "A",
                        "J",
                        "9",
                        "2"
                    ],
                    "C": [
                        "K",
                        "4",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "9",
                        "7",
                        "4"
                    ],
                    "H": [
                        "J",
                        "10",
                        "8",
                        "7"
                    ],
                    "D": [
                        "Q",
                        "10",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "8",
                        "3"
                    ]
                },
                "west": {
                    "S": [
                        "6"
                    ],
                    "H": [
                        "9",
                        "6",
                        "3",
                        "2"
                    ],
                    "D": [
                        "K",
                        "7",
                        "4"
                    ],
                    "C": [
                        "A",
                        "J",
                        "10",
                        "9",
                        "6"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "2♠",
                    "note": "同伴（北家）二線竄叫 2♠",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2NT",
                                    "note": "【南家第一度決策】叫 2NT Ogust 詢問",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "3♣",
                                                    "note": "同伴回應 3♣ (爛牌爛點：5-7 HCP，♠ 無 AKQ 中任意 2 張)",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♠",
                                                                    "note": "【南家第二度決策】得知同伴為低限爛點，總點數不足，修正停叫 3♠ (Sign-off)",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♠",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "同伴回應 3♣ 代表『5-7 HCP 爛點爛牌』，兩家總點數僅約 21-22 點，成局機率極低，應停在 3♠ Sign-off，不可衝 4♠！"
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
            ]
        },
        "練習集": [
            {
                "metadata": {
                    "title": "牌局 1",
                    "category": "竄叫",
                    "dealer": "北",
                    "vulnerability": "None",
                    "warning": [
                        "在 Ogust 詢問後得知搭檔有好品質王牌與上限點數時：",
                        "1. 3NT 優先考量：若答叫方旁門擋張完整且能數出 9 磴硬贏墩，3NT 能完全消除敵方王吃（Ruff）的風險，是非常高級的極佳判斷！",
                        "2. 4♠ 配合選擇：若考慮到雙張小 ♥ 可能在 3NT 被攻擊，或是王牌合約能多吃超墩（Overtrick），4♠ 亦為正規選擇。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "K",
                            "10",
                            "8",
                            "7",
                            "3"
                        ],
                        "H": [
                            "8",
                            "5"
                        ],
                        "D": [
                            "J",
                            "6",
                            "4"
                        ],
                        "C": [
                            "9",
                            "2"
                        ]
                    },
                    "south": {
                        "S": [
                            "Q",
                            "5"
                        ],
                        "H": [
                            "A",
                            "K",
                            "J"
                        ],
                        "D": [
                            "K",
                            "Q",
                            "2"
                        ],
                        "C": [
                            "Q",
                            "10",
                            "7",
                            "4"
                        ]
                    },
                    "east": {
                        "S": [
                            "J",
                            "9",
                            "4",
                            "2"
                        ],
                        "H": [
                            "Q",
                            "9",
                            "4",
                            "2"
                        ],
                        "D": [
                            "A",
                            "9",
                            "5"
                        ],
                        "C": [
                            "J",
                            "5"
                        ]
                    },
                    "west": {
                        "S": [
                            "6"
                        ],
                        "H": [
                            "10",
                            "7",
                            "6",
                            "3"
                        ],
                        "D": [
                            "10",
                            "8",
                            "7",
                            "3"
                        ],
                        "C": [
                            "A",
                            "K",
                            "8",
                            "6"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "2♠",
                        "alert": true,
                        "note": "北家 9 HCP 弱開叫 2♠ (二線竄叫)",
                        "children": [
                            {
                                "pos": "東",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "2NT",
                                        "alert": true,
                                        "note": "南家 17 HCP 發動 2NT! Ogust 特約詢問",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "3♠",
                                                        "alert": true,
                                                        "note": "北家回應 3♠!（Ogust 答覆：好王牌品質 ♠AK + 好點數 8-9 HCP MAX）",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3NT",
                                                                        "note": "【分支 1A：最佳解 1】南家旁門擋張完整且數出 9 墩頂張，直奔 3NT 避開王牌壞分佈風險！",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "Pass",
                                                                                        "note": "開叫方同意 3NT 合約 Pass",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "4♠",
                                                                        "note": "【分支 1B：最佳解 2】南家選擇 8 張黑桃王牌配合，叫出 4♠ 高花 Game！",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "Pass",
                                                                                        "note": "開叫方同意 4♠ 合約 Pass",
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
                                        ]
                                    },
                                    {
                                        "pos": "南",
                                        "val": "Pass",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 1C 犯錯警示】⚠️ 叫牌錯誤！南家持 17 HCP 大牌點卻選擇 Pass 2♠，白白漏掉必成的 Game！"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "metadata": {
                    "title": "牌局 2",
                    "category": "竄叫",
                    "dealer": "南",
                    "vulnerability": "Unfavorable",
                    "warning": [
                        "在「我有敵無」極危險局況下：",
                        "1. 贏磴計算：6 張 ♠ 頂張缺 A 算 5~6 磴贏磴。",
                        "2. 線位鐵則：6 贏磴 + 2 = 8 磴 (2♠)。絕不可因手牌好看而跳叫 3♠！"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "10",
                            "2"
                        ],
                        "H": [
                            "A",
                            "K",
                            "Q"
                        ],
                        "D": [
                            "K",
                            "Q",
                            "J",
                            "5"
                        ],
                        "C": [
                            "A",
                            "8",
                            "3"
                        ]
                    },
                    "south": {
                        "S": [
                            "K",
                            "Q",
                            "J",
                            "9",
                            "7",
                            "4"
                        ],
                        "H": [
                            "8",
                            "5",
                            "2"
                        ],
                        "D": [
                            "6",
                            "3"
                        ],
                        "C": [
                            "Q",
                            "4"
                        ]
                    },
                    "east": {
                        "S": [
                            "8",
                            "6",
                            "5"
                        ],
                        "H": [
                            "J",
                            "10",
                            "9",
                            "4"
                        ],
                        "D": [
                            "10",
                            "9",
                            "8",
                            "4"
                        ],
                        "C": [
                            "K",
                            "10"
                        ]
                    },
                    "west": {
                        "S": [
                            "3"
                        ],
                        "H": [
                            "7",
                            "6",
                            "3"
                        ],
                        "D": [
                            "A",
                            "7",
                            "2"
                        ],
                        "C": [
                            "J",
                            "9",
                            "7",
                            "6",
                            "5",
                            "2"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "南",
                        "val": "2♠",
                        "alert": true,
                        "note": "【分支 1A：最佳解】南家持 6 贏磴，在「我有敵無」身價下適用 Rule of 2 (6+2=8 磴)，精確開叫 2♠！",
                        "children": [
                            {
                                "pos": "西",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "北",
                                        "val": "4♠",
                                        "note": "北家持 23 HCP 超強大牌與 3 張 ♠ 支持，直接加叫 4♠ Game！",
                                        "children": [
                                            {
                                                "pos": "東",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "南",
                                                        "val": "Pass",
                                                        "note": "【南家第二度決策】同意 4♠ Game Pass",
                                                        "children": [
                                                            {
                                                                "pos": "西",
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
                    },
                    {
                        "pos": "南",
                        "val": "3♠",
                        "note": "",
                        "children": [],
                        "isError": true,
                        "errorMsg": "【分支 1B 犯錯警示】⚠️ 叫牌過度激進！在「我有敵無」身價下適用 Rule of 2 (允許失 2 磴)，6 贏磴 + 2 = 8 磴 (2♠)。若跳叫 3♠ (需 9 磴)，在敵方處罰賭倍下 Down 3 磴 (-800 分)，損失遠超敵方 Game 分數！"
                    }
                ]
            }
        ]
    },
    "major": {
        "練習(一)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "迫叫1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "T",
                        "9",
                        "8",
                        "5",
                        "2"
                    ],
                    "H": [
                        "Q",
                        "9",
                        "7",
                        "5"
                    ],
                    "D": [
                        "A",
                        "4"
                    ],
                    "C": [
                        "A",
                        "K"
                    ]
                },
                "south": {
                    "S": [
                        "6",
                        "3"
                    ],
                    "H": [
                        "K",
                        "J",
                        "2"
                    ],
                    "D": [
                        "Q",
                        "8",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "5",
                        "4",
                        "3",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "K",
                        "J",
                        "4"
                    ],
                    "H": [
                        "8",
                        "6",
                        "4"
                    ],
                    "D": [
                        "K",
                        "J",
                        "T",
                        "3",
                        "2"
                    ],
                    "C": [
                        "J",
                        "9"
                    ]
                },
                "west": {
                    "S": [
                        "A",
                        "Q",
                        "7"
                    ],
                    "H": [
                        "A",
                        "T",
                        "3"
                    ],
                    "D": [
                        "9",
                        "7",
                        "6"
                    ],
                    "C": [
                        "T",
                        "8",
                        "7",
                        "6"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♠",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1NT",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♥",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♠",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "Pass",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "要叫2S保護同伴16+"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♣",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "要有6張低花我們才會叫3C，3C是希望同伴高線有配合可以打3N或實在沒配合才叫的"
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
            ]
        },
        "練習(二)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "迫叫1NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "9",
                        "8",
                        "6",
                        "4"
                    ],
                    "H": [
                        "A",
                        "K",
                        "9",
                        "3"
                    ],
                    "D": [
                        "T",
                        "8"
                    ],
                    "C": [
                        "Q",
                        "9"
                    ]
                },
                "south": {
                    "S": [
                        "J",
                        "2"
                    ],
                    "H": [
                        "J",
                        "5",
                        "2"
                    ],
                    "D": [
                        "A",
                        "J",
                        "9",
                        "7",
                        "2"
                    ],
                    "C": [
                        "A",
                        "3",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "Q",
                        "7",
                        "5"
                    ],
                    "H": [
                        "Q",
                        "6",
                        "4"
                    ],
                    "D": [
                        "Q",
                        "6",
                        "5"
                    ],
                    "C": [
                        "J",
                        "6",
                        "5",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "A",
                        "T",
                        "3"
                    ],
                    "H": [
                        "T",
                        "8",
                        "7"
                    ],
                    "D": [
                        "K",
                        "4",
                        "3"
                    ],
                    "C": [
                        "K",
                        "T",
                        "8",
                        "7"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♠",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1NT",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♥",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♦",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "3D不是邀請，2NT才是"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                    ]
                                },
                                {
                                    "pos": "南",
                                    "val": "2NT",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "叫邀請要從1NT出來"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(三)": {
            "metadata": {
                "title": "練習(三)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "二蓋一"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "Q",
                        "J",
                        "9",
                        "5"
                    ],
                    "H": [
                        "J",
                        "4",
                        "2"
                    ],
                    "D": [
                        "K",
                        "T",
                        "6"
                    ],
                    "C": [
                        "Q",
                        "8"
                    ]
                },
                "south": {
                    "S": [
                        "6",
                        "3"
                    ],
                    "H": [
                        "K",
                        "Q",
                        "6",
                        "5"
                    ],
                    "D": [
                        "Q",
                        "J",
                        "8",
                        "2"
                    ],
                    "C": [
                        "A",
                        "5",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "A",
                        "T",
                        "8"
                    ],
                    "H": [
                        "9",
                        "8"
                    ],
                    "D": [
                        "9",
                        "7",
                        "5",
                        "3"
                    ],
                    "C": [
                        "K",
                        "J",
                        "T",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "7",
                        "4",
                        "2"
                    ],
                    "H": [
                        "A",
                        "T",
                        "7",
                        "3"
                    ],
                    "D": [
                        "A",
                        "4"
                    ],
                    "C": [
                        "9",
                        "7",
                        "6",
                        "2"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♠",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2♦",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♠",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "3NT",
                                                                                    "note": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3NT",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♠",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "2S是wating，不是6張S"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "pos": "南",
                                    "val": "1NT",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♦",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3NT",
                                                                    "note": "",
                                                                    "children": []
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "12對12還是建議叫3N，不二蓋一就要選叫3NT"
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
            ]
        },
        "練習(四)": {
            "metadata": {
                "title": "練習(四)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "二蓋一"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "T",
                        "9",
                        "8",
                        "5"
                    ],
                    "H": [
                        "A",
                        "K",
                        "Q",
                        "6"
                    ],
                    "D": [
                        "K",
                        "Q",
                        "5"
                    ],
                    "C": [
                        "2"
                    ]
                },
                "south": {
                    "S": [],
                    "H": [
                        "T",
                        "9",
                        "7",
                        "2"
                    ],
                    "D": [
                        "A",
                        "J",
                        "7",
                        "2"
                    ],
                    "C": [
                        "A",
                        "K",
                        "J",
                        "9",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "J",
                        "4",
                        "2"
                    ],
                    "H": [
                        "J",
                        "8",
                        "5"
                    ],
                    "D": [
                        "T",
                        "9",
                        "6"
                    ],
                    "C": [
                        "7",
                        "6",
                        "5",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "A",
                        "Q",
                        "7",
                        "6",
                        "3"
                    ],
                    "H": [
                        "4",
                        "3"
                    ],
                    "D": [
                        "8",
                        "4",
                        "3"
                    ],
                    "C": [
                        "Q",
                        "T",
                        "8"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♠",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "2♣",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♥",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♥",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "3NT",
                                                                                    "note": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "4♣",
                                                                                                    "note": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "4♦",
                                                                                                                    "note": "",
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "pos": "東",
                                                                                                                            "val": "Pass",
                                                                                                                            "note": "",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "pos": "南",
                                                                                                                                    "val": "4♥",
                                                                                                                                    "note": "",
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "pos": "西",
                                                                                                                                            "val": "Pass",
                                                                                                                                            "note": "",
                                                                                                                                            "children": [
                                                                                                                                                {
                                                                                                                                                    "pos": "北",
                                                                                                                                                    "val": "4NT",
                                                                                                                                                    "note": "",
                                                                                                                                                    "children": [
                                                                                                                                                        {
                                                                                                                                                            "pos": "東",
                                                                                                                                                            "val": "Pass",
                                                                                                                                                            "note": "",
                                                                                                                                                            "children": [
                                                                                                                                                                {
                                                                                                                                                                    "pos": "南",
                                                                                                                                                                    "val": "6♥",
                                                                                                                                                                    "note": "",
                                                                                                                                                                    "children": [
                                                                                                                                                                        {
                                                                                                                                                                            "pos": "西",
                                                                                                                                                                            "val": "Pass",
                                                                                                                                                                            "note": "",
                                                                                                                                                                            "children": [
                                                                                                                                                                                {
                                                                                                                                                                                    "pos": "北",
                                                                                                                                                                                    "val": "Pass",
                                                                                                                                                                                    "note": "",
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
                                                                                                                                    ]
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "pos": "南",
                                                                                                                                    "val": "4♠",
                                                                                                                                    "note": "",
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "pos": "西",
                                                                                                                                            "val": "Pass",
                                                                                                                                            "note": "",
                                                                                                                                            "children": [
                                                                                                                                                {
                                                                                                                                                    "pos": "北",
                                                                                                                                                    "val": "4NT",
                                                                                                                                                    "note": "",
                                                                                                                                                    "children": [
                                                                                                                                                        {
                                                                                                                                                            "pos": "東",
                                                                                                                                                            "val": "Pass",
                                                                                                                                                            "note": "",
                                                                                                                                                            "children": [
                                                                                                                                                                {
                                                                                                                                                                    "pos": "南",
                                                                                                                                                                    "val": "6♥",
                                                                                                                                                                    "note": "",
                                                                                                                                                                    "children": [
                                                                                                                                                                        {
                                                                                                                                                                            "pos": "西",
                                                                                                                                                                            "val": "Pass",
                                                                                                                                                                            "note": "",
                                                                                                                                                                            "children": [
                                                                                                                                                                                {
                                                                                                                                                                                    "pos": "北",
                                                                                                                                                                                    "val": "Pass",
                                                                                                                                                                                    "note": "",
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
                                                                                                                                    ]
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "3NT不會是要打，是要你cuebid的意思"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♥",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "叫4H是弱牌，你沒那麼弱"
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
            ]
        },
        "練習(五)": {
            "metadata": {
                "title": "練習(五)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "bergen"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "K",
                        "T",
                        "8",
                        "6"
                    ],
                    "H": [
                        "K",
                        "J",
                        "9",
                        "5"
                    ],
                    "D": [
                        "T",
                        "7"
                    ],
                    "C": [
                        "J",
                        "7"
                    ]
                },
                "south": {
                    "S": [
                        "J",
                        "7",
                        "5",
                        "2"
                    ],
                    "H": [
                        "A"
                    ],
                    "D": [
                        "J",
                        "9",
                        "6",
                        "2"
                    ],
                    "C": [
                        "A",
                        "T",
                        "8",
                        "5"
                    ]
                },
                "east": {
                    "S": [
                        "9",
                        "4"
                    ],
                    "H": [
                        "T",
                        "6",
                        "3",
                        "2"
                    ],
                    "D": [
                        "K",
                        "Q",
                        "4",
                        "3"
                    ],
                    "C": [
                        "K",
                        "9",
                        "2"
                    ]
                },
                "west": {
                    "S": [
                        "Q",
                        "3"
                    ],
                    "H": [
                        "Q",
                        "8",
                        "7",
                        "4"
                    ],
                    "D": [
                        "A",
                        "8",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "6",
                        "4",
                        "3"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♠",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "3♦",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "4♠",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "Pass",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
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
                    ]
                }
            ]
        },
        "練習(六)": {
            "metadata": {
                "title": "練習(六)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "bergen"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "K",
                        "J",
                        "7",
                        "3"
                    ],
                    "H": [
                        "T",
                        "9",
                        "2"
                    ],
                    "D": [
                        "Q",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "4",
                        "3"
                    ]
                },
                "south": {
                    "S": [
                        "T",
                        "9",
                        "8",
                        "4"
                    ],
                    "H": [
                        "A",
                        "K",
                        "6",
                        "3"
                    ],
                    "D": [
                        "7",
                        "2"
                    ],
                    "C": [
                        "A",
                        "J",
                        "9"
                    ]
                },
                "east": {
                    "S": [
                        "5"
                    ],
                    "H": [
                        "J",
                        "8",
                        "5"
                    ],
                    "D": [
                        "A",
                        "J",
                        "9",
                        "8",
                        "6"
                    ],
                    "C": [
                        "T",
                        "8",
                        "7",
                        "6"
                    ]
                },
                "west": {
                    "S": [
                        "Q",
                        "6",
                        "2"
                    ],
                    "H": [
                        "Q",
                        "7",
                        "4"
                    ],
                    "D": [
                        "K",
                        "T",
                        "4",
                        "3"
                    ],
                    "C": [
                        "K",
                        "5",
                        "2"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♠",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "3♣",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "3NT",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♠",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "Pass",
                                                                                    "note": "",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♣",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "3NT是12-15平均牌，那你低線是不是不該叫牌"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "pos": "南",
                                    "val": "2♣",
                                    "note": "",
                                    "children": [],
                                    "isError": true,
                                    "errorMsg": "4張GF不是叫這個"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(七)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(八)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習集": [
            {
                "metadata": {
                    "title": "牌局 1",
                    "category": "迫叫1NT",
                    "dealer": "北",
                    "vulnerability": "None",
                    "warning": [
                        "持 3 張高花支持時：",
                        "1. 8–bad 10 HCP：直接叫 1M - 2M。",
                        "2. 10–11 HCP (邀請)：必須經由 1M - 1NT!，第二圈再跳叫 3M！",
                        "3. 4+ 張高花配合：則使用 Bergen Raise (2NT/3C/3D/3H)。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "K",
                            "J",
                            "10",
                            "4"
                        ],
                        "H": [
                            "Q",
                            "6",
                            "3"
                        ],
                        "D": [
                            "K",
                            "8",
                            "5"
                        ],
                        "C": [
                            "Q",
                            "2"
                        ]
                    },
                    "south": {
                        "S": [
                            "Q",
                            "7",
                            "2"
                        ],
                        "H": [
                            "A",
                            "K",
                            "9",
                            "4"
                        ],
                        "D": [
                            "J",
                            "6",
                            "3"
                        ],
                        "C": [
                            "J",
                            "8",
                            "4"
                        ]
                    },
                    "east": {
                        "S": [
                            "9",
                            "8",
                            "5"
                        ],
                        "H": [
                            "8",
                            "7",
                            "2"
                        ],
                        "D": [
                            "A",
                            "10",
                            "9",
                            "4"
                        ],
                        "C": [
                            "9",
                            "6",
                            "3"
                        ]
                    },
                    "west": {
                        "S": [
                            "6",
                            "3"
                        ],
                        "H": [
                            "J",
                            "10",
                            "5"
                        ],
                        "D": [
                            "Q",
                            "7",
                            "2"
                        ],
                        "C": [
                            "A",
                            "K",
                            "10",
                            "7",
                            "5"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1♠",
                        "note": "北家 15 HCP 均型開叫 1♠",
                        "children": [
                            {
                                "pos": "東",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "1NT",
                                        "alert": true,
                                        "note": "【南家第一度決策】11 HCP 迫叫 1NT（點力不夠二蓋一 13+ 點，不可直接叫 2♠/2♣/2♦）",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♣",
                                                        "note": "北家再叫 2♣（表示 3+ 張 ♣，12–18 HCP）",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3♠",
                                                                        "alert": true,
                                                                        "note": "【分支 3A：最佳解】南家跳叫 3♠!（制度定義：保證 3 張 ♠ 配合，10–11 HCP 邀請牌力）",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "4♠",
                                                                                        "note": "北家持 15 點最大限接受邀請，叫出 4♠ Game！",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "東",
                                                                                                "val": "Pass",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "南",
                                                                                                        "val": "Pass",
                                                                                                        "note": "【南家第三度決策】同意 4♠ Game Pass",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "西",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2♠",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 3D 犯錯警示】⚠️ 叫牌錯誤！第二圈僅叫 2♠ 依制度僅為 6–7 HCP 配合低限簽退 (Sign-off)，北家會直接 Pass 漏叫 4♠ Game！"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "pos": "南",
                                        "val": "2♠",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 3B 犯錯警示】⚠️ 叫牌錯誤！第一圈直接叫 2♠ 依制度為 3+ 張配合、8–bad 10 HCP 的低限牌。這會少報點力，導致北家 Pass 漏叫 4♠ Game！"
                                    },
                                    {
                                        "pos": "南",
                                        "val": "2♣",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 3C 犯錯警示】⚠️ 叫牌錯誤！二蓋一 (2/1) 保證 13+ HCP 迫叫成局 (FG)。南家僅 11 HCP 點數不足，不可直接二蓋一！"
                                    },
                                    {
                                        "pos": "南",
                                        "val": "2♦",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 3C 犯錯警示】⚠️ 叫牌錯誤！二蓋一 (2/1) 保證 13+ HCP 迫叫成局 (FG)。南家僅 11 HCP 點數不足，不可直接二蓋一！"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "metadata": {
                    "title": "牌局 2",
                    "category": "迫叫1NT",
                    "dealer": "北",
                    "vulnerability": "Both",
                    "warning": [
                        "在 1♥ 開叫後，南家若有 4+ 張 ♠，第一圈必須優先答叫 1♠。",
                        "因此 1♥ - 1NT! 已經完全否定了 4 張黑桃的存在！在此前提下，第二圈的 2♠! 絕不可能再是自然黑桃牌組，而是專門留給『低花配合 + 邀請牌力』的特種約定叫品。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "K",
                            "Q",
                            "2"
                        ],
                        "H": [
                            "A",
                            "K",
                            "J",
                            "8",
                            "4"
                        ],
                        "D": [
                            "J",
                            "7"
                        ],
                        "C": [
                            "9",
                            "5",
                            "2"
                        ]
                    },
                    "south": {
                        "S": [
                            "9",
                            "7",
                            "3"
                        ],
                        "H": [
                            "Q",
                            "2"
                        ],
                        "D": [
                            "A",
                            "10",
                            "6",
                            "2"
                        ],
                        "C": [
                            "K",
                            "J",
                            "8",
                            "4"
                        ]
                    },
                    "east": {
                        "S": [
                            "J",
                            "10",
                            "8",
                            "5",
                            "4"
                        ],
                        "H": [
                            "9",
                            "6",
                            "5",
                            "3"
                        ],
                        "D": [
                            "K",
                            "5"
                        ],
                        "C": [
                            "Q",
                            "7"
                        ]
                    },
                    "west": {
                        "S": [
                            "A",
                            "6"
                        ],
                        "H": [
                            "10",
                            "7"
                        ],
                        "D": [
                            "Q",
                            "9",
                            "8",
                            "4",
                            "3"
                        ],
                        "C": [
                            "A",
                            "10",
                            "6",
                            "3"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1♥",
                        "note": "北家 15 HCP 均型開叫 1♥",
                        "children": [
                            {
                                "pos": "東",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "1NT",
                                        "alert": true,
                                        "note": "【南家第一度決策】10 HCP 迫叫 1NT（否認 4 張 ♠）",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♣",
                                                        "note": "北家再叫 2♣（表示 3+ 張 ♣）",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2♠",
                                                                        "alert": true,
                                                                        "note": "【分支 4A：最佳邀請解】南家叫出特種約定叫品 2♠!（1♥-1NT 後叫 2♠! = 對同伴開叫的 ♣ 有配合，且持邀請 Inv 力量）",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "3NT",
                                                                                        "note": "北家 ♣ 有 3 張且 ♠ 帶 K Q 擋張，接受邀請叫出 3NT！",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "東",
                                                                                                "val": "Pass",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "南",
                                                                                                        "val": "Pass",
                                                                                                        "note": "【南家第三度決策】同意 3NT 合約 Pass",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "西",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2♥",
                                                                        "note": "【分支 4B：合格簽退解】叫回 2♥（依制度定義：8–10 HCP，2 張 ♥ 配合，將合約叫回同伴的 5 張 ♥ 保護叫/簽退）",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "Pass",
                                                                                        "note": "北家同意 2♥ 簽退 Pass",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3♣",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 4C 犯錯警示】⚠️ 叫牌次優/錯誤！1H - 1NT; 2m - 3m 依制度為『保護叫 (Sign-off / 競叫)』，僅代表 8–10 點低限配合。北家會以為點力偏低而 Pass，錯失 3NT Game！"
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2NT",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 4D 犯錯警示】⚠️ 叫牌次優/錯誤！1H - 1NT; 2m - 2NT 代表『無低花配合的無王邀請 (11–12 HCP)』。無視了自己的 ♣ 4 張配合且 10 HCP 點力不足，有超叫風險！"
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
                ]
            },
            {
                "metadata": {
                    "title": "牌局 3",
                    "category": "bergen",
                    "dealer": "北",
                    "vulnerability": "None",
                    "warning": [
                        "1. Limit Bergen Raise (3♦!): 保證 4+ 張高花配合，10–11 HCP 邀請力量。",
                        "2. 持 10 HCP 且有 4 張王牌配合（確定 9 張大配合）時切勿僅叫 2♠，過度保守會漏掉必成 Game。",
                        "3. 經由 1NT! 再跳叫 3M 專門留給 3 張王牌配合、10–11 HCP 的邀請手牌，有 4 張配合時不可經由 1NT!。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "K",
                            "Q",
                            "8",
                            "2"
                        ],
                        "H": [
                            "J",
                            "5"
                        ],
                        "D": [
                            "K",
                            "7",
                            "4"
                        ],
                        "C": [
                            "J",
                            "6",
                            "2"
                        ]
                    },
                    "south": {
                        "S": [
                            "J",
                            "9",
                            "6",
                            "3"
                        ],
                        "H": [
                            "A",
                            "K",
                            "4"
                        ],
                        "D": [
                            "8",
                            "5",
                            "2"
                        ],
                        "C": [
                            "Q",
                            "10",
                            "4"
                        ]
                    },
                    "east": {
                        "S": [
                            "10",
                            "7",
                            "4"
                        ],
                        "H": [
                            "Q",
                            "10",
                            "8"
                        ],
                        "D": [
                            "A",
                            "Q",
                            "J"
                        ],
                        "C": [
                            "9",
                            "7",
                            "5"
                        ]
                    },
                    "west": {
                        "S": [
                            "5"
                        ],
                        "H": [
                            "9",
                            "7",
                            "6",
                            "3",
                            "2"
                        ],
                        "D": [
                            "10",
                            "9",
                            "6",
                            "3"
                        ],
                        "C": [
                            "A",
                            "K",
                            "8"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1♠",
                        "note": "北家 14 HCP MAX 開叫 1♠",
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
                                        "note": "【分支 1A：最佳解】南家叫出 3♦! Limit Bergen Raise（保證 4+ 張 ♠ 配合、10–11 HCP 邀請力量）",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "4♠",
                                                        "note": "北家持 14 HCP MAX 點力且 ♠AKQ 堅固，欣然接受邀請叫出 4♠ Game！",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "Pass",
                                                                        "note": "【南家第二度決策】同意 4♠ Game Pass",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
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
                                    },
                                    {
                                        "pos": "南",
                                        "val": "2♠",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 1B 犯錯警示】⚠️ 叫牌過於保守！持 10 HCP 上限且有 4 張王牌配合（確定 9 張高花配合），直接叫 2♠ 僅表示 3+ 張配合與 8–bad 10 HCP，北家會直接 Pass 漏掉必成的 4♠ Game！"
                                    },
                                    {
                                        "pos": "南",
                                        "val": "1NT",
                                        "alert": true,
                                        "note": "【分支 1C 犯錯嘗試】經由 1NT 迫叫",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♣",
                                                        "note": "北家再叫 2♣",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3♠",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 1C 犯錯警示】⚠️ 觀念錯誤！1M - 1NT!; 2X - 3M 專門留給 3 張王牌配合、10–11 HCP 的邀請手牌。有 4 張配合時不可經由 1NT!，應直接叫出 3♦! Limit Bergen Raise！"
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
                ]
            },
            {
                "metadata": {
                    "title": "牌局 4",
                    "category": "bergen",
                    "dealer": "北",
                    "vulnerability": "Both",
                    "warning": [
                        "1. Constructive Bergen Raise (3♣!): 保證 4+ 張高花配合，7–9 HCP 建設性加叫。",
                        "2. 3-4-3-3 平牌 8 HCP 亦可穩健選叫 2♥ (6–10 HCP)，同伴發動 3♥ 邀請時再接受叫 4♥ Game。",
                        "3. 跳叫 3♥! 為 Preemptive (0–6 HCP 阻絕加叫)，持 8 點實點不可誤叫 3♥。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "K",
                            "5"
                        ],
                        "H": [
                            "K",
                            "Q",
                            "10",
                            "6",
                            "2"
                        ],
                        "D": [
                            "A",
                            "8",
                            "4"
                        ],
                        "C": [
                            "7",
                            "3"
                        ]
                    },
                    "south": {
                        "S": [
                            "10",
                            "8",
                            "2"
                        ],
                        "H": [
                            "J",
                            "9",
                            "7",
                            "4"
                        ],
                        "D": [
                            "K",
                            "6",
                            "2"
                        ],
                        "C": [
                            "K",
                            "J",
                            "5"
                        ]
                    },
                    "east": {
                        "S": [
                            "Q",
                            "J",
                            "9",
                            "6",
                            "4"
                        ],
                        "H": [
                            "8",
                            "3"
                        ],
                        "D": [
                            "Q",
                            "10",
                            "9"
                        ],
                        "C": [
                            "A",
                            "8",
                            "2"
                        ]
                    },
                    "west": {
                        "S": [
                            "7",
                            "3"
                        ],
                        "H": [
                            "A",
                            "5"
                        ],
                        "D": [
                            "Q",
                            "J",
                            "5",
                            "3"
                        ],
                        "C": [
                            "9",
                            "6",
                            "4",
                            "2"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1♥",
                        "note": "北家 16 HCP 開叫 1♥",
                        "children": [
                            {
                                "pos": "東",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "2♥",
                                        "note": "【分支 2A：實戰穩健解】南家考量自身為 3-4-3-3 絕對均型且無短門，選擇叫 2♥ (6–10 HCP 配合)",
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
                                                        "note": "北家 16 點強牌發動 3♥! 邀請",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "4♥",
                                                                        "note": "【南家第二度決策】持 8 點 MAX、4 張配合與雙 K，接受邀請叫出 4♥ Game！",
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
                                        ]
                                    },
                                    {
                                        "pos": "南",
                                        "val": "3♣",
                                        "alert": true,
                                        "note": "【分支 2B：積極叫牌解】南家叫出 3♣! Constructive Bergen Raise（7–9 HCP 建設性加叫）",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "4♥",
                                                        "note": "北家持 16 HCP 強牌且 ♥ 質量優良，直跳 4♥ Game！",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "Pass",
                                                                        "note": "【南家第二度決策】同意 4♥ Game Pass",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
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
                                    },
                                    {
                                        "pos": "南",
                                        "val": "3♥",
                                        "note": "",
                                        "children": [],
                                        "isError": true,
                                        "errorMsg": "【分支 2C 犯錯警示】⚠️ 叫牌錯誤！1M - 3M! 為 Preemptive（阻絕加叫，0–6 HCP）。你持 8 點實點與雙 K，不可誤叫 3♥ 阻絕！"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "minor": {
        "練習(一)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "南",
                "vulnerability": "None",
                "category": "低花2NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "T",
                        "9",
                        "6",
                        "5"
                    ],
                    "H": [
                        "T",
                        "8",
                        "5"
                    ],
                    "D": [
                        "8",
                        "7",
                        "6"
                    ],
                    "C": [
                        "A",
                        "J",
                        "5"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "Q",
                        "J"
                    ],
                    "H": [
                        "A",
                        "K",
                        "9",
                        "3"
                    ],
                    "D": [
                        "K",
                        "T",
                        "3"
                    ],
                    "C": [
                        "Q",
                        "T",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "K",
                        "2"
                    ],
                    "H": [
                        "7",
                        "6",
                        "4",
                        "2"
                    ],
                    "D": [
                        "J",
                        "9",
                        "5",
                        "2"
                    ],
                    "C": [
                        "K",
                        "8",
                        "3"
                    ]
                },
                "west": {
                    "S": [
                        "8",
                        "7",
                        "4",
                        "3"
                    ],
                    "H": [
                        "Q",
                        "J"
                    ],
                    "D": [
                        "A",
                        "Q",
                        "4"
                    ],
                    "C": [
                        "9",
                        "7",
                        "6",
                        "4"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "南",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "西",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "北",
                                    "val": "1♠",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "東",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "南",
                                                    "val": "2NT",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "西",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "北",
                                                                    "val": "Pass",
                                                                    "note": "",
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
                                                },
                                                {
                                                    "pos": "南",
                                                    "val": "3NT",
                                                    "note": "",
                                                    "children": [],
                                                    "isError": true,
                                                    "errorMsg": "現在18-19不是叫3NT要叫2NT了"
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
        },
        "練習(二)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "東",
                "vulnerability": "None",
                "category": "強低花"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "8",
                        "7",
                        "6"
                    ],
                    "H": [
                        "7",
                        "6",
                        "2"
                    ],
                    "D": [
                        "K",
                        "9",
                        "8"
                    ],
                    "C": [
                        "8",
                        "7",
                        "5"
                    ]
                },
                "south": {
                    "S": [
                        "J",
                        "5"
                    ],
                    "H": [
                        "A",
                        "J"
                    ],
                    "D": [
                        "A",
                        "J",
                        "T"
                    ],
                    "C": [
                        "A",
                        "K",
                        "J",
                        "T",
                        "3",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "Q",
                        "9",
                        "3",
                        "2"
                    ],
                    "H": [
                        "Q",
                        "9",
                        "4",
                        "3"
                    ],
                    "D": [
                        "Q",
                        "7",
                        "5"
                    ],
                    "C": [
                        "Q",
                        "6"
                    ]
                },
                "west": {
                    "S": [
                        "A",
                        "T",
                        "4"
                    ],
                    "H": [
                        "K",
                        "T",
                        "8",
                        "5"
                    ],
                    "D": [
                        "6",
                        "4",
                        "3",
                        "2"
                    ],
                    "C": [
                        "9",
                        "4"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "東",
                    "val": "Pass",
                    "note": "",
                    "children": [
                        {
                            "pos": "南",
                            "val": "2♣",
                            "note": "",
                            "children": [],
                            "isError": true,
                            "errorMsg": "要有9副可以吃得牌組或22+我們才會開2C"
                        },
                        {
                            "pos": "南",
                            "val": "1♣",
                            "note": "",
                            "children": [
                                {
                                    "pos": "西",
                                    "val": "Pass",
                                    "note": "",
                                    "children": [
                                        {
                                            "pos": "北",
                                            "val": "1♠",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "東",
                                                    "val": "Pass",
                                                    "note": "",
                                                    "children": [
                                                        {
                                                            "pos": "南",
                                                            "val": "3♦",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "西",
                                                                    "val": "Pass",
                                                                    "note": "",
                                                                    "children": [
                                                                        {
                                                                            "pos": "北",
                                                                            "val": "3NT",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "東",
                                                                                    "val": "Pass",
                                                                                    "note": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "南",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "西",
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
                                                        },
                                                        {
                                                            "pos": "南",
                                                            "val": "3♣",
                                                            "note": "",
                                                            "children": [],
                                                            "isError": true,
                                                            "errorMsg": "3C是16-18，你更強要叫3D"
                                                        },
                                                        {
                                                            "pos": "南",
                                                            "val": "3NT",
                                                            "note": "",
                                                            "children": [],
                                                            "isError": true,
                                                            "errorMsg": "這個18-19，4張S的意思，可以去看1m1M2NT後續"
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
        },
        "練習(三)": {
            "metadata": {
                "title": "練習(三)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "twoway"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "3"
                    ],
                    "H": [
                        "J",
                        "8",
                        "5"
                    ],
                    "D": [
                        "A",
                        "Q",
                        "4"
                    ],
                    "C": [
                        "K",
                        "10",
                        "8",
                        "6",
                        "2"
                    ]
                },
                "south": {
                    "S": [
                        "Q",
                        "J",
                        "8",
                        "7",
                        "2"
                    ],
                    "H": [
                        "K",
                        "7",
                        "6",
                        "4"
                    ],
                    "D": [
                        "9",
                        "2"
                    ],
                    "C": [
                        "5",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "A",
                        "10",
                        "9",
                        "4"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "3"
                    ],
                    "D": [
                        "J",
                        "8",
                        "6",
                        "3"
                    ],
                    "C": [
                        "Q",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "6",
                        "5"
                    ],
                    "H": [
                        "10",
                        "9",
                        "2"
                    ],
                    "D": [
                        "K",
                        "10",
                        "7",
                        "5"
                    ],
                    "C": [
                        "A",
                        "J",
                        "9",
                        "7"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♠",
                                    "note": "【南家第一度決策】1♠ 答叫 (6+ HCP, 5張♠)",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "1NT",
                                                    "note": "同伴再叫 1NT (12-14 HCP 平衡型)",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♣",
                                                                    "note": "【南家第二度決策】2♣! = Puppet to 2♦! (預備做弱牌束叫)",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "2♦",
                                                                                    "note": "開叫方被迫回應 2♦!",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "2♥",
                                                                                                    "note": "【南家第三度決策】轉換後叫 2♥ = 5♠4♥ 弱牌束叫 (S/O, 6-9 HCP)",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "2♠",
                                                                                                                    "note": "開叫者有 2張♠ 與 3張♥，評估 5-2 王牌優於 4-3 王牌，主動修正至 2♠",
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "pos": "東",
                                                                                                                            "val": "Pass",
                                                                                                                            "note": "",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "pos": "南",
                                                                                                                                    "val": "Pass",
                                                                                                                                    "note": "尊重開叫者修正 Pass",
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "pos": "西",
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
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "pos": "南",
                                                                            "val": "2♥",
                                                                            "note": "",
                                                                            "children": [],
                                                                            "isError": true,
                                                                            "errorMsg": "直接叫 2♥ 代表『5♠4♥ 邀請牌型 (10-12 HCP)』！持 6 HCP 弱牌必須先叫 2♣! ➔ 2♦! 轉換後再叫 2♥ 才是弱牌束叫 (S/O)。"
                                                                        },
                                                                        {
                                                                            "pos": "南",
                                                                            "val": "2♦",
                                                                            "note": "",
                                                                            "children": [],
                                                                            "isError": true,
                                                                            "errorMsg": "2♦! 是 FG Checkback (13+ HCP 迫局)，6 HCP 弱牌絕不可使用。"
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
                    ]
                }
            ]
        },
        "練習(四)": {
            "metadata": {
                "title": "練習(四)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "twoway"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "3"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "8",
                        "5"
                    ],
                    "D": [
                        "J",
                        "8",
                        "4"
                    ],
                    "C": [
                        "K",
                        "Q",
                        "6",
                        "2"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "J",
                        "9",
                        "7",
                        "2"
                    ],
                    "H": [
                        "K",
                        "10",
                        "6",
                        "4"
                    ],
                    "D": [
                        "Q",
                        "5"
                    ],
                    "C": [
                        "J",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "Q",
                        "10",
                        "8",
                        "4"
                    ],
                    "H": [
                        "J",
                        "9",
                        "3"
                    ],
                    "D": [
                        "A",
                        "10",
                        "6",
                        "2"
                    ],
                    "C": [
                        "8",
                        "5"
                    ]
                },
                "west": {
                    "S": [
                        "6",
                        "5"
                    ],
                    "H": [
                        "7",
                        "2"
                    ],
                    "D": [
                        "K",
                        "7",
                        "3"
                    ],
                    "C": [
                        "10",
                        "9",
                        "7",
                        "4",
                        "3"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♠",
                                    "note": "【南家第一度決策】1♠ 答叫",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "1NT",
                                                    "note": "1NT 再叫 (12-14 HCP)",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♥",
                                                                    "note": "【南家第二度決策】直接叫 2♥ = 5♠4♥ 邀請牌型 (INV, 10-12 HCP，不經 2♣!)",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "4♥",
                                                                                    "note": "開叫方持 14 HCP 上限且有 4張♥ 配合，接受邀請直接叫 4♥ 成局",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
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
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♣",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "經由 2♣! ➔ 2♦! 轉換後再叫 2♥ 是『5♠4♥ 弱牌束叫 (6-9 HCP)』！持 11 HCP 邀請牌型應不經 2♣! 直接喊出 2♥。"
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2♦",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "2♦! 是 FG Checkback (13+ HCP 迫局)，持 11 HCP 邀請牌型不可叫 2♦! 迫局。"
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
            ]
        },
        "練習(五)": {
            "metadata": {
                "title": "練習(五)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "低花2NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "Q",
                        "4"
                    ],
                    "H": [
                        "J",
                        "8",
                        "5"
                    ],
                    "D": [
                        "A",
                        "K",
                        "6"
                    ],
                    "C": [
                        "A",
                        "J",
                        "8",
                        "2"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "J",
                        "9",
                        "7",
                        "2"
                    ],
                    "H": [
                        "10",
                        "6",
                        "4"
                    ],
                    "D": [
                        "Q",
                        "9",
                        "2"
                    ],
                    "C": [
                        "8",
                        "5"
                    ]
                },
                "east": {
                    "S": [
                        "10",
                        "8",
                        "3"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "9",
                        "2"
                    ],
                    "D": [
                        "10",
                        "7",
                        "4"
                    ],
                    "C": [
                        "Q",
                        "9",
                        "4"
                    ]
                },
                "west": {
                    "S": [
                        "6",
                        "5"
                    ],
                    "H": [
                        "K",
                        "7",
                        "3"
                    ],
                    "D": [
                        "J",
                        "8",
                        "5",
                        "3"
                    ],
                    "C": [
                        "K",
                        "10",
                        "7",
                        "6",
                        "3"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "開叫 1m (12-21 HCP)",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♠",
                                    "note": "【南家第一度決策】7 HCP 達標，答叫 5 張高花 1♠",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2NT",
                                                    "note": "開叫方再叫 2NT (18-19 HCP 強平均牌，無 4 張 ♠ 支持)",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♣",
                                                                    "note": "【南家第二度決策】3♣! = Checkback Stayman（詢問同伴是否有 3 張 ♠ 或 4 張 ♥）",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "3♠",
                                                                                    "note": "開叫方回應 3♠（階梯第二階：只有 3 張 ♠ 配合，無 4 張 ♥）",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "4♠",
                                                                                                    "note": "【南家第三度決策】確認 5-3 ♠ 配合且總點數 25+ HCP，加叫 4♠ 成局！",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "Pass",
                                                                                                                    "note": "",
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
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "同伴有 18-19 HCP 加上你的 7 HCP 已達 25+ HCP，且已找到 5-3 ♠ 配合，絕不可在 3♠ Pass！"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "pos": "南",
                                                                            "val": "3NT",
                                                                            "note": "",
                                                                            "children": [],
                                                                            "isError": true,
                                                                            "errorMsg": "持 5 張高花 ♠ 時，應先叫 3♣! Checkback Stayman 尋找同伴是否有 3 張 ♠ 支持，直接叫 3NT 會漏掉 5-3 高花配合！"
                                                                        },
                                                                        {
                                                                            "pos": "南",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [],
                                                                            "isError": true,
                                                                            "errorMsg": "同伴 2NT 展現 18-19 HCP 強點，你持 7 HCP 已達 25+ 成局線，絕對不能 Pass！"
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
                    ]
                }
            ]
        },
        "練習(六)": {
            "metadata": {
                "title": "練習(六)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "低花2NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "K",
                        "8",
                        "3"
                    ],
                    "H": [
                        "Q",
                        "4",
                        "2"
                    ],
                    "D": [
                        "A",
                        "Q",
                        "2"
                    ],
                    "C": [
                        "K",
                        "J",
                        "5"
                    ]
                },
                "south": {
                    "S": [
                        "Q",
                        "J",
                        "7",
                        "2"
                    ],
                    "H": [
                        "J",
                        "10",
                        "9",
                        "6",
                        "3"
                    ],
                    "D": [
                        "K",
                        "8"
                    ],
                    "C": [
                        "9",
                        "4"
                    ]
                },
                "east": {
                    "S": [
                        "10",
                        "9",
                        "4"
                    ],
                    "H": [
                        "A",
                        "K",
                        "7",
                        "5"
                    ],
                    "D": [
                        "J",
                        "7",
                        "4"
                    ],
                    "C": [
                        "8",
                        "2"
                    ]
                },
                "west": {
                    "S": [
                        "6",
                        "5"
                    ],
                    "H": [
                        "8",
                        "2"
                    ],
                    "D": [
                        "10",
                        "9",
                        "6",
                        "5",
                        "3"
                    ],
                    "C": [
                        "A",
                        "Q",
                        "10",
                        "7",
                        "6",
                        "3"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♥",
                                    "note": "【南家第一度決策】7 HCP 答叫 1♥",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2NT",
                                                    "note": "開叫方再叫 2NT (18-19 HCP 強平均牌)",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♣",
                                                                    "note": "【南家第二度決策】3♣! = Checkback Stayman（詢問同伴是否有 3 張 ♥ 或 4 張 ♠）",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "3♦",
                                                                                    "note": "開叫方回應 3♦!（階梯第一階：3♦! = 兩者都有！同時有 3 張 ♥ 配合 ＆ 4 張 ♠）",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "4♥",
                                                                                                    "note": "【南家第三度決策】得知 5-3 ♥ 配合且點力足夠，加叫 4♥ 成局！",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "Pass",
                                                                                                                    "note": "",
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
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "Pass",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "3♦! 是同伴特約回答（表示兩者都有），叫牌尚未完成且點力已達 25+，絕對不能 Pass！"
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "3NT",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "同伴回應 3♦! 表明有 3 張 ♥ 支持（5-3 配合），應優先叫 4♥ 高花成局！"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "pos": "南",
                                                                            "val": "3NT",
                                                                            "note": "",
                                                                            "children": [],
                                                                            "isError": true,
                                                                            "errorMsg": "持 5♥4♠ 時應先叫 3♣! Checkback 探詢，直接叫 3NT 會漏掉同伴有 3♥ 或 4♠ 時的高花配合！"
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
                    ]
                }
            ]
        },
        "練習(七)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "100分"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "Q",
                        "8",
                        "3"
                    ],
                    "H": [
                        "A",
                        "K",
                        "5",
                        "2"
                    ],
                    "D": [
                        "4"
                    ],
                    "C": [
                        "A",
                        "Q",
                        "7",
                        "6"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "J",
                        "7",
                        "2"
                    ],
                    "H": [
                        "Q",
                        "6",
                        "4",
                        "3"
                    ],
                    "D": [
                        "J",
                        "8"
                    ],
                    "C": [
                        "K",
                        "10",
                        "3"
                    ]
                },
                "east": {
                    "S": [
                        "10",
                        "9"
                    ],
                    "H": [
                        "J",
                        "10",
                        "9",
                        "8"
                    ],
                    "D": [
                        "A",
                        "K",
                        "Q",
                        "10",
                        "9",
                        "2"
                    ],
                    "C": [
                        "J"
                    ]
                },
                "west": {
                    "S": [
                        "6",
                        "5",
                        "4"
                    ],
                    "H": [
                        "7"
                    ],
                    "D": [
                        "7",
                        "6",
                        "5",
                        "3"
                    ],
                    "C": [
                        "9",
                        "8",
                        "5",
                        "4",
                        "2"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "開叫 1m (12-21 HCP)",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♥",
                                    "note": "【南家第一度決策】11 HCP 且持 4-4 高花（4♠4♥），依自然制規則優先答叫 1♥！",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "4♦",
                                                    "note": "【100 特約】4♦! = 指定 ♦ 單張，16-18 HCP，4 張 ♥ 配合",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4NT",
                                                                    "note": "【南家第二度決策】兩家 29+ HCP 且 ♦ 短門完美配合，發動 4NT RKCB 探詢滿貫",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "5♦",
                                                                                    "note": "開叫方回應 5♦（1430 體系：5♦ = 3 或 0 張 Keycard；在此為 ♥A + ♥K + ♣A 共 3 張）",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "6♥",
                                                                                                    "note": "【南家第三度決策】確認 5 個 Keycard 齊全且帶 ♥Q，直達 6♥ 小滿貫！",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "Pass",
                                                                                                                    "note": "",
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
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "5♥",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "同伴回應 5♦ 表示有 3 張 Keycard，加上你手上的 ♠A，全隊共有 4 張 Keycard + ♥Q，滿貫非常穩固，不應在 5♥ 停叫！"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♥",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "同伴叫 4♦! 展現 16-18 HCP 且 ♦ 為單張，你持 11 HCP 且 ♦ 點力完全無浪費，總點數與短門效應極佳，直接叫 4♥ 停叫太過保守，應叫 4NT RKCB 試探滿貫！"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "pos": "南",
                                            "val": "1♠",
                                            "note": "",
                                            "children": [],
                                            "isError": true,
                                            "errorMsg": "持 4-4 雙高花（4♠4♥）答叫時，依自然制順序應『優先答叫 1♥』，不可先叫 1♠！"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(八)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "100分"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "K",
                        "3"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "8",
                        "2"
                    ],
                    "D": [
                        "5"
                    ],
                    "C": [
                        "A",
                        "K",
                        "J",
                        "4"
                    ]
                },
                "south": {
                    "S": [
                        "J",
                        "7",
                        "2"
                    ],
                    "H": [
                        "K",
                        "J",
                        "10",
                        "7",
                        "4"
                    ],
                    "D": [
                        "8",
                        "6",
                        "3"
                    ],
                    "C": [
                        "Q",
                        "10",
                        "2"
                    ]
                },
                "east": {
                    "S": [
                        "10",
                        "9",
                        "8",
                        "4"
                    ],
                    "H": [
                        "9",
                        "5"
                    ],
                    "D": [
                        "A",
                        "K",
                        "Q",
                        "10",
                        "2"
                    ],
                    "C": [
                        "8",
                        "5",
                        "3"
                    ]
                },
                "west": {
                    "S": [
                        "Q",
                        "6",
                        "5"
                    ],
                    "H": [
                        "6",
                        "3"
                    ],
                    "D": [
                        "J",
                        "9",
                        "7",
                        "4"
                    ],
                    "C": [
                        "9",
                        "7",
                        "6",
                        "4"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "1♣",
                    "note": "",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "1♥",
                                    "note": "【南家第一度決策】8 HCP 答叫 1♥",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "2♠",
                                                    "note": "【100 特約】2♠! = 跳叫 oM（16-18 缺門 或 19-21 單/缺門，未指明短門）",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "2NT",
                                                                    "note": "【南家第二度決策】2NT! = 加一問短，詢問短門位置與點力區間",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "3♣",
                                                                                    "note": "【100 特約答覆】3♣! = 19-21 HCP，♦ 或 ♠ 單張",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "6♥",
                                                                                                    "note": "【南家第三度決策】得知同伴為 19-21 超強牌，兩家點數 28+ HCP 且有 9 張 ♥ 王牌配合，直達 6♥ 小滿貫！",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "Pass",
                                                                                                                    "note": "",
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
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "4♥",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "同伴 3♣! 已表明白有 19-21 HCP 且帶短門，加上你手上的 8 HCP 帶 5 張 ♥ 王牌，滿貫幾乎 100% 必成，直接喊 4♥ 會錯失滿貫！"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♥",
                                                                    "note": "",
                                                                    "children": [],
                                                                    "isError": true,
                                                                    "errorMsg": "同伴跳叫 2♠! 是 100 特約強牌，應先叫 2NT! 加一問短，精準探詢同伴是 16-18 還是 19-21 HCP，不應直接蓋叫 4♥！"
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
            ]
        },
        "練習集": [
            {
                "metadata": {
                    "title": "牌局 1",
                    "category": "倒叫",
                    "dealer": "北",
                    "vulnerability": "None",
                    "warning": [
                        "1. 倒叫（Reverse）是強烈迫叫叫品（F1/GF），答叫方持 10 HCP 已達 GF 門檻，絕不可 Pass！",
                        "2. 在敵方插叫後且自身無擋張時，切勿盲目跳 3NT，必須透過 3♦! Western Cuebid 扣叫詢問同伴是否有擋張。"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "K",
                            "5"
                        ],
                        "H": [
                            "K",
                            "Q",
                            "J",
                            "2"
                        ],
                        "D": [
                            "K",
                            "J",
                            "9"
                        ],
                        "C": [
                            "A",
                            "K",
                            "J",
                            "7"
                        ]
                    },
                    "south": {
                        "S": [
                            "A",
                            "Q",
                            "9",
                            "6",
                            "3"
                        ],
                        "H": [
                            "10",
                            "7",
                            "4"
                        ],
                        "D": [
                            "8",
                            "4",
                            "2"
                        ],
                        "C": [
                            "K",
                            "J"
                        ]
                    },
                    "east": {
                        "S": [
                            "J",
                            "10",
                            "8"
                        ],
                        "H": [
                            "9",
                            "8",
                            "5",
                            "3"
                        ],
                        "D": [
                            "A",
                            "Q",
                            "10",
                            "7",
                            "3"
                        ],
                        "C": [
                            "8"
                        ]
                    },
                    "west": {
                        "S": [
                            "7",
                            "4",
                            "2"
                        ],
                        "H": [
                            "A",
                            "6"
                        ],
                        "D": [
                            "6",
                            "5"
                        ],
                        "C": [
                            "9",
                            "6",
                            "4",
                            "3",
                            "2"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "北",
                        "val": "1♣",
                        "note": "北家 19 HCP 開叫 1♣",
                        "children": [
                            {
                                "pos": "東",
                                "val": "1♦",
                                "alert": true,
                                "note": "東家 1♦ 插叫",
                                "children": [
                                    {
                                        "pos": "南",
                                        "val": "1♠",
                                        "note": "【南家第一度決策】10 HCP 叫 1♠ (保證 4+ 張 ♠, 6+ HCP)",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♥",
                                                        "alert": true,
                                                        "note": "北家 2♥ 倒叫 (Reverse)！表示 16–21 HCP，5+ ♣ 與 4 ♥",
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
                                                                        "note": "【分支 A：精確最佳解】南家自持 ♦842 無擋，叫出 3♦! (Western Cuebid) 詢問北家是否有 ♦ 擋張",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "3NT",
                                                                                        "note": "北家持 ♦KJ 保證方塊擋張，叫出 3NT 定局！",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "東",
                                                                                                "val": "Pass",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "南",
                                                                                                        "val": "Pass",
                                                                                                        "note": "【南家第三度決策】同意 3NT 定局合約 Pass",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "西",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2♠",
                                                                        "note": "【分支 B：合格自然解】南家重叫 2♠ 告知搭檔黑桃為 5 張長門 (AQ963)，逼叫成局 (GF)",
                                                                        "children": [
                                                                            {
                                                                                "pos": "西",
                                                                                "val": "Pass",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "北",
                                                                                        "val": "3NT",
                                                                                        "note": "北家根據 ♠ 無配合但 ♦ 有擋，叫出 3NT 成局！",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "東",
                                                                                                "val": "Pass",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "南",
                                                                                                        "val": "Pass",
                                                                                                        "note": "【南家第三度決策】同意 3NT 成局合約 Pass",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "西",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3NT",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 C 犯錯警示】⚠️ 叫牌錯誤 / 賭博性叫品！南家持 ♦842 毫無方塊擋張，萬一北家無 ♦ 擋張將被直接打穿！在敵方插叫後無擋張時，切勿盲目跳 3NT，必須透過 3♦! Western Cuebid 詢問擋張！"
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "Pass",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 D 犯錯警示】⚠️ 叫牌嚴重錯誤！倒叫（Reverse）為強烈迫叫叫品（F1/GF），南家握有 10 HCP 已達 GF 門檻，絕不可 Pass！"
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
                ]
            },
            {
                "metadata": {
                    "title": "牌局 2",
                    "category": "倒叫",
                    "dealer": "北",
                    "vulnerability": "None",
                    "warning": [
                        "1. 2NT! = 弱牌特種繼叫 (Ingberman / Relay)：6–7 HCP 最低限，要求開叫方自動叫出 3♣，答叫方再決定 Pass 或修正合約。",
                        "2. 2♠ = 5+ 張 ♠ + 8+ HCP 邀請/迫叫：在倒叫後續中明確展現長門與足夠的邀請點數。",
                        "3. 倒叫（Reverse）為迫叫一輪（F1），即使只有 6 點也絕對不可 Pass！"
                    ]
                },
                "hands": {
                    "north": {
                        "S": [
                            "K",
                            "5"
                        ],
                        "H": [
                            "A",
                            "K",
                            "8",
                            "4"
                        ],
                        "D": [
                            "J",
                            "6"
                        ],
                        "C": [
                            "A",
                            "Q",
                            "10",
                            "7",
                            "3"
                        ]
                    },
                    "south": {
                        "S": [
                            "Q",
                            "J",
                            "8",
                            "6",
                            "2"
                        ],
                        "H": [
                            "7",
                            "5",
                            "3"
                        ],
                        "D": [
                            "K",
                            "8",
                            "4",
                            "2"
                        ],
                        "C": [
                            "6"
                        ]
                    },
                    "east": {
                        "S": [
                            "A",
                            "10",
                            "4"
                        ],
                        "H": [
                            "J",
                            "9",
                            "2"
                        ],
                        "D": [
                            "Q",
                            "10",
                            "7",
                            "5"
                        ],
                        "C": [
                            "K",
                            "9",
                            "4"
                        ]
                    },
                    "west": {
                        "S": [
                            "9",
                            "7",
                            "3"
                        ],
                        "H": [
                            "Q",
                            "10",
                            "6"
                        ],
                        "D": [
                            "A",
                            "9",
                            "3"
                        ],
                        "C": [
                            "J",
                            "8",
                            "5",
                            "2"
                        ]
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
                                        "val": "1♠",
                                        "note": "【南家第一度決策】6 HCP 答叫 1♠ (5 張 ♠)",
                                        "children": [
                                            {
                                                "pos": "西",
                                                "val": "Pass",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "北",
                                                        "val": "2♥",
                                                        "alert": true,
                                                        "note": "北家 2♥ 倒叫 (Reverse)！表示 16–21 HCP，5+ ♣ 與 4 ♥，迫叫一輪 (F1)",
                                                        "children": [
                                                            {
                                                                "pos": "東",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2NT",
                                                                        "alert": true,
                                                                        "note": "【分支 A：精確最佳解】南家叫出 2NT! (Ingberman Relay)，告知搭檔自身為 6–7 HCP 低限弱牌",
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
                                                                                        "note": "北家按約定強制接叫 3♣!",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "東",
                                                                                                "val": "Pass",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "南",
                                                                                                        "val": "Pass",
                                                                                                        "note": "【南家第三度決策】南家 Pass 簽退於同伴 5 張長門 3♣ 合約！",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "西",
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
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "2♠",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 B 犯錯警示】⚠️ 叫牌錯誤！在倒叫後續中，2♠ 保證 5+ 張 ♠ 且具有 8+ HCP 邀請/迫叫力量！你僅 6 HCP 若叫 2♠ 會誤導同伴以為兩家有 25+ 點而叫成局，導致當場 3NT/4♠ 宕牌！"
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "3NT",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 C 犯錯警示】⚠️ 叫牌過頭！無視自身僅 6 點而盲目叫 Game，兩家合算僅 23 HCP 必當！"
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "4♠",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 C 犯錯警示】⚠️ 叫牌過頭！無視自身僅 6 點而盲目叫 Game，兩家合算僅 23 HCP 必當！"
                                                                    },
                                                                    {
                                                                        "pos": "南",
                                                                        "val": "Pass",
                                                                        "note": "",
                                                                        "children": [],
                                                                        "isError": true,
                                                                        "errorMsg": "【分支 D 犯錯警示】⚠️ 嚴重規則錯誤！倒叫（Reverse）是迫叫一輪（F1）！即便只有 6 點也絕對不可 Pass 2♥，必須透過 2NT! 弱牌繼叫尋求安全簽退！"
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
                ]
            }
        ]
    },
    "other": {
        "練習(一)": {
            "metadata": {
                "title": "練習(一)",
                "dealer": "北",
                "vulnerability": "None",
                "category": "2NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "K",
                        "Q",
                        "5"
                    ],
                    "H": [
                        "A",
                        "Q",
                        "8",
                        "2"
                    ],
                    "D": [
                        "A",
                        "K",
                        "7"
                    ],
                    "C": [
                        "Q",
                        "9",
                        "4"
                    ]
                },
                "south": {
                    "S": [
                        "A",
                        "8",
                        "4",
                        "2"
                    ],
                    "H": [
                        "K",
                        "J",
                        "9",
                        "3"
                    ],
                    "D": [
                        "9",
                        "5",
                        "4"
                    ],
                    "C": [
                        "A",
                        "6"
                    ]
                },
                "east": {
                    "S": [
                        "J",
                        "10",
                        "9",
                        "7",
                        "3"
                    ],
                    "H": [
                        "10",
                        "7"
                    ],
                    "D": [
                        "J",
                        "10",
                        "8",
                        "2"
                    ],
                    "C": [
                        "8",
                        "3"
                    ]
                },
                "west": {
                    "S": [
                        "6"
                    ],
                    "H": [
                        "6",
                        "5",
                        "4"
                    ],
                    "D": [
                        "Q",
                        "6",
                        "3"
                    ],
                    "C": [
                        "K",
                        "J",
                        "10",
                        "5",
                        "2"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "2NT",
                    "note": "北家 20 HCP 均型開叫 2NT",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "3♣",
                                    "alert": true,
                                    "note": "【南家第一度決策】3♣! = Stayman 探詢 4 張高花",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "3♥",
                                                    "note": "北家回應 3♥（表示持 4 張 ♥）",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "3♠",
                                                                    "alert": true,
                                                                    "note": "【南家第二度決策】3♠! = 隱蔽配合（♥ 配合且具備滿貫試探 ST 興趣）",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "4♦",
                                                                                    "alert": true,
                                                                                    "note": "北家 4♦! 扣叫 (Cuebid)，表示 ♥ 配合且有 ♦ A/K 控制",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "4NT",
                                                                                                    "alert": true,
                                                                                                    "note": "【分支 1A：積極衝滿】南家發動 4NT! RKCB (以 ♥ 為王牌)",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "5♦",
                                                                                                                    "alert": true,
                                                                                                                    "note": "北家回應 5♦!（1430 體系：表 3 或 0 張 Keycard，持 ♥A, ♦A, ♠K 共 3 張）",
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "pos": "東",
                                                                                                                            "val": "Pass",
                                                                                                                            "note": "",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "pos": "南",
                                                                                                                                    "val": "6♥",
                                                                                                                                    "note": "【南家第四度決策】算清 Keycard 齊備，叫出 6♥ 小滿貫！",
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "pos": "西",
                                                                                                                                            "val": "Pass",
                                                                                                                                            "note": "",
                                                                                                                                            "children": [
                                                                                                                                                {
                                                                                                                                                    "pos": "北",
                                                                                                                                                    "val": "Pass",
                                                                                                                                                    "note": "開叫方同意 6♥ 滿貫合約 Pass",
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
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "4♥",
                                                                                                    "note": "【分支 1B：保守煞車】南家考量 4-3-3-3 均型與 12 HCP，選擇喊回 4♥ 束叫 (Sign-off)",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "Pass",
                                                                                                                    "note": "開叫方尊重同伴煞車決定 Pass",
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
                    ]
                }
            ]
        },
        "練習(二)": {
            "metadata": {
                "title": "練習(二)",
                "dealer": "北",
                "vulnerability": "Both",
                "warning": [
                    "1. 報 K 鐵則：5NT 問 K 時在六線順序報 K，絕對『不能報沒有 K 的那門』！",
                    "2. 大滿貫期望值：當確定關鍵張齊備且透過 5NT 確認外圍 ♦K 後，兩家大牌點與長門吃墩已達 13 墩必成條件，叫上 7 階可獲取最高大滿貫底分！"
                ],
                "category": "2NT"
            },
            "hands": {
                "north": {
                    "S": [
                        "A",
                        "K",
                        "J"
                    ],
                    "H": [
                        "K",
                        "Q",
                        "9"
                    ],
                    "D": [
                        "A",
                        "Q",
                        "8",
                        "2"
                    ],
                    "C": [
                        "Q",
                        "5",
                        "3"
                    ]
                },
                "south": {
                    "S": [
                        "6",
                        "4",
                        "2"
                    ],
                    "H": [
                        "A",
                        "7"
                    ],
                    "D": [
                        "K",
                        "4"
                    ],
                    "C": [
                        "A",
                        "K",
                        "10",
                        "9",
                        "8",
                        "6"
                    ]
                },
                "east": {
                    "S": [
                        "Q",
                        "10",
                        "8",
                        "7",
                        "3"
                    ],
                    "H": [
                        "J",
                        "8",
                        "4"
                    ],
                    "D": [
                        "J",
                        "9"
                    ],
                    "C": [
                        "7",
                        "2"
                    ]
                },
                "west": {
                    "S": [
                        "9",
                        "5"
                    ],
                    "H": [
                        "10",
                        "6",
                        "5",
                        "2"
                    ],
                    "D": [
                        "10",
                        "7",
                        "6",
                        "5",
                        "3"
                    ],
                    "C": [
                        "J",
                        "4"
                    ]
                }
            },
            "bidding": [
                {
                    "pos": "北",
                    "val": "2NT",
                    "note": "北家 21 HCP 均型開叫 2NT",
                    "children": [
                        {
                            "pos": "東",
                            "val": "Pass",
                            "note": "",
                            "children": [
                                {
                                    "pos": "南",
                                    "val": "3♠",
                                    "note": "【南家第一度決策】3♠! = Ask Minors 特約詢問低花",
                                    "children": [
                                        {
                                            "pos": "西",
                                            "val": "Pass",
                                            "note": "",
                                            "children": [
                                                {
                                                    "pos": "北",
                                                    "val": "3NT",
                                                    "note": "北家回應 3NT（無 4 張 ♣）",
                                                    "children": [
                                                        {
                                                            "pos": "東",
                                                            "val": "Pass",
                                                            "note": "",
                                                            "children": [
                                                                {
                                                                    "pos": "南",
                                                                    "val": "4♥",
                                                                    "note": "【南家第二度決策】4♥! = 保證 6+ 張 ♣ 並鎖定 ♣ 為王牌展開滿貫試探 (ST)",
                                                                    "children": [
                                                                        {
                                                                            "pos": "西",
                                                                            "val": "Pass",
                                                                            "note": "",
                                                                            "children": [
                                                                                {
                                                                                    "pos": "北",
                                                                                    "val": "4NT",
                                                                                    "note": "北家持 21 HCP 極限與 ♣Q53 支持，主動發動 4NT! RKCB 問 A",
                                                                                    "children": [
                                                                                        {
                                                                                            "pos": "東",
                                                                                            "val": "Pass",
                                                                                            "note": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "5♦",
                                                                                                    "note": "【分支 2A：最佳解】南家精確回答 5♦! (1430 體系：表 3 或 0 張 Keycard，持 ♣A, ♣K, ♥A 共 3 張)",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "pos": "西",
                                                                                                            "val": "Pass",
                                                                                                            "note": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "pos": "北",
                                                                                                                    "val": "5NT",
                                                                                                                    "note": "北家確認 5 個 Keycard 與 ♣Q 全齊，發動 5NT! 詢問外圍 K",
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "pos": "東",
                                                                                                                            "val": "Pass",
                                                                                                                            "note": "",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "pos": "南",
                                                                                                                                    "val": "6♦",
                                                                                                                                    "note": "【分支 2A】南家自持 ♦K 故精準報出 6♦!（不可報沒有 K 的花色！）",
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "pos": "西",
                                                                                                                                            "val": "Pass",
                                                                                                                                            "note": "",
                                                                                                                                            "children": [
                                                                                                                                                {
                                                                                                                                                    "pos": "北",
                                                                                                                                                    "val": "7NT",
                                                                                                                                                    "note": "北家算清手握 ♠AK, ♥K, ♦A 加上南家的 ♦K 與 ♣AK，13 墩全吃，直攻 7NT 大滿貫！",
                                                                                                                                                    "children": [
                                                                                                                                                        {
                                                                                                                                                            "pos": "東",
                                                                                                                                                            "val": "Pass",
                                                                                                                                                            "note": "",
                                                                                                                                                            "children": [
                                                                                                                                                                {
                                                                                                                                                                    "pos": "南",
                                                                                                                                                                    "val": "Pass",
                                                                                                                                                                    "note": "【南家第五度決策】同意 7NT 大滿貫合約 Pass 結尾",
                                                                                                                                                                    "children": [
                                                                                                                                                                        {
                                                                                                                                                                            "pos": "西",
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
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "pos": "南",
                                                                                                                                            "val": "6♥",
                                                                                                                                            "note": "",
                                                                                                                                            "children": [],
                                                                                                                                            "isError": true,
                                                                                                                                            "errorMsg": "【分支 2B 犯錯警示】⚠️ 錯誤叫品！南家自持 ♥A 但無 ♥K，若叫出 6♥ 即屬違規/誤導，會導致搭檔錯估 ♥ 贏墩而叫錯合約！"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "pos": "南",
                                                                                                                                            "val": "6♣",
                                                                                                                                            "note": "",
                                                                                                                                            "children": [],
                                                                                                                                            "isError": true,
                                                                                                                                            "errorMsg": "【分支 2C 犯錯警示】⚠️ 過早煞車！南家在 5NT! 問 K 時未積極報 K 直接簽退，導致漏叫必成的大滿貫 7♣/7NT！"
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
                                                                                                },
                                                                                                {
                                                                                                    "pos": "南",
                                                                                                    "val": "5♣",
                                                                                                    "note": "",
                                                                                                    "children": [],
                                                                                                    "isError": true,
                                                                                                    "errorMsg": "1430 體系中 5♣ 表示 1 或 4 張 Keycard。你持 ♣A, ♣K, ♥A 共 3 張 Keycard，應回應 5♦! (3/0張)。"
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
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "練習(三)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(四)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(五)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(六)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(七)": {
            "metadata": {
                "category": "unsorted"
            }
        },
        "練習(八)": {
            "metadata": {
                "category": "unsorted"
            }
        }
    },
    "advance": {
        "練習集": [
            {
                "metadata": {
                    "title": "牌局 1",
                    "dealer": "西",
                    "vulnerability": "None",
                    "category": "第四新花"
                },
                "hands": {
                    "north": {
                        "S": [
                            "K",
                            "J",
                            "9"
                        ],
                        "H": [
                            "J",
                            "T",
                            "9",
                            "8",
                            "7",
                            "6"
                        ],
                        "D": [
                            "A"
                        ],
                        "C": [
                            "A",
                            "K",
                            "2"
                        ]
                    },
                    "south": {
                        "S": [
                            "A",
                            "Q",
                            "T",
                            "6",
                            "5",
                            "4"
                        ],
                        "H": [
                            "K"
                        ],
                        "D": [
                            "K",
                            "Q",
                            "J",
                            "T",
                            "4"
                        ],
                        "C": [
                            "3"
                        ]
                    },
                    "east": {
                        "S": [
                            "3",
                            "2"
                        ],
                        "H": [
                            "A",
                            "3",
                            "2"
                        ],
                        "D": [
                            "6",
                            "5",
                            "3",
                            "2"
                        ],
                        "C": [
                            "7",
                            "6",
                            "5",
                            "4"
                        ]
                    },
                    "west": {
                        "S": [
                            "8",
                            "7"
                        ],
                        "H": [
                            "Q",
                            "5",
                            "4"
                        ],
                        "D": [
                            "9",
                            "8",
                            "7"
                        ],
                        "C": [
                            "Q",
                            "J",
                            "T",
                            "9",
                            "8"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "西",
                        "val": "Pass",
                        "note": "",
                        "children": [
                            {
                                "pos": "北",
                                "val": "1♥",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "東",
                                        "val": "Pass",
                                        "note": "",
                                        "children": [
                                            {
                                                "pos": "南",
                                                "val": "1♠",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "西",
                                                        "val": "Pass",
                                                        "note": "",
                                                        "children": [
                                                            {
                                                                "pos": "北",
                                                                "val": "2♣",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "東",
                                                                        "val": "Pass",
                                                                        "note": "",
                                                                        "children": [
                                                                            {
                                                                                "pos": "南",
                                                                                "val": "2♦",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "西",
                                                                                        "val": "Pass",
                                                                                        "note": "",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "北",
                                                                                                "val": "2♠",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "東",
                                                                                                        "val": "Pass",
                                                                                                        "note": "",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "南",
                                                                                                                "val": "3♣",
                                                                                                                "note": "",
                                                                                                                "children": [],
                                                                                                                "isError": true,
                                                                                                                "errorMsg": "這會看不出來是在對S還是C"
                                                                                                            },
                                                                                                            {
                                                                                                                "pos": "南",
                                                                                                                "val": "3♦",
                                                                                                                "note": "",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "pos": "西",
                                                                                                                        "val": "Pass",
                                                                                                                        "note": "",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "pos": "北",
                                                                                                                                "val": "4♣",
                                                                                                                                "note": "",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "pos": "東",
                                                                                                                                        "val": "Pass",
                                                                                                                                        "note": "",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "pos": "南",
                                                                                                                                                "val": "4♥",
                                                                                                                                                "note": "",
                                                                                                                                                "children": [],
                                                                                                                                                "isError": true,
                                                                                                                                                "errorMsg": "不是很好，當然結果可能是好的，但你的牌實際上只需要關鍵張而已，直接4NT比較好"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "pos": "南",
                                                                                                                                                "val": "4NT",
                                                                                                                                                "note": "",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "pos": "西",
                                                                                                                                                        "val": "Pass",
                                                                                                                                                        "note": "",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "pos": "北",
                                                                                                                                                                "val": "5♦",
                                                                                                                                                                "note": "",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
                                                                                                                                                                        "pos": "東",
                                                                                                                                                                        "val": "Pass",
                                                                                                                                                                        "note": "",
                                                                                                                                                                        "children": [
                                                                                                                                                                            {
                                                                                                                                                                                "pos": "南",
                                                                                                                                                                                "val": "6♠",
                                                                                                                                                                                "note": "",
                                                                                                                                                                                "children": [
                                                                                                                                                                                    {
                                                                                                                                                                                        "pos": "西",
                                                                                                                                                                                        "val": "Pass",
                                                                                                                                                                                        "note": "",
                                                                                                                                                                                        "children": [
                                                                                                                                                                                            {
                                                                                                                                                                                                "pos": "北",
                                                                                                                                                                                                "val": "Pass",
                                                                                                                                                                                                "note": "",
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
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "metadata": {
                    "title": "牌局 2",
                    "dealer": "東",
                    "vulnerability": "None",
                    "category": "X後續"
                },
                "hands": {
                    "north": {
                        "S": [
                            "A",
                            "T",
                            "7"
                        ],
                        "H": [
                            "J",
                            "8",
                            "7",
                            "6"
                        ],
                        "D": [
                            "K",
                            "T",
                            "7",
                            "4",
                            "3"
                        ],
                        "C": [
                            "K"
                        ]
                    },
                    "south": {
                        "S": [
                            "K",
                            "Q",
                            "J",
                            "4"
                        ],
                        "H": [
                            "A",
                            "9",
                            "3"
                        ],
                        "D": [
                            "J",
                            "8",
                            "5"
                        ],
                        "C": [
                            "T",
                            "6",
                            "3"
                        ]
                    },
                    "east": {
                        "S": [
                            "8"
                        ],
                        "H": [
                            "K",
                            "Q",
                            "5"
                        ],
                        "D": [
                            "A"
                        ],
                        "C": [
                            "A",
                            "J",
                            "9",
                            "8",
                            "7",
                            "5",
                            "4",
                            "2"
                        ]
                    },
                    "west": {
                        "S": [
                            "9",
                            "6",
                            "5",
                            "3",
                            "2"
                        ],
                        "H": [
                            "T",
                            "4",
                            "2"
                        ],
                        "D": [
                            "Q",
                            "9",
                            "6",
                            "2"
                        ],
                        "C": [
                            "Q"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "東",
                        "val": "1♣",
                        "note": "",
                        "children": [
                            {
                                "pos": "南",
                                "val": "X",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "西",
                                        "val": "Pass",
                                        "note": "",
                                        "children": [
                                            {
                                                "pos": "北",
                                                "val": "2♣",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "東",
                                                        "val": "3♣",
                                                        "note": "",
                                                        "children": [
                                                            {
                                                                "pos": "南",
                                                                "val": "X",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "西",
                                                                        "val": "Pass",
                                                                        "note": "",
                                                                        "children": [
                                                                            {
                                                                                "pos": "北",
                                                                                "val": "3♦",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "東",
                                                                                        "val": "Pass",
                                                                                        "note": "",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "南",
                                                                                                "val": "3♠",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "西",
                                                                                                        "val": "Pass",
                                                                                                        "note": "",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "北",
                                                                                                                "val": "Pass",
                                                                                                                "note": "",
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
                                                                ]
                                                            },
                                                            {
                                                                "pos": "南",
                                                                "val": "3♠",
                                                                "note": "",
                                                                "children": [],
                                                                "isError": true,
                                                                "errorMsg": "比較不優，看結果，其實你也沒有需要主動叫S的理由，表示點立即可"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "pos": "南",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "西",
                                        "val": "Pass",
                                        "note": "",
                                        "children": [
                                            {
                                                "pos": "北",
                                                "val": "X",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "東",
                                                        "val": "3♣",
                                                        "note": "",
                                                        "children": [
                                                            {
                                                                "pos": "南",
                                                                "val": "X",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "西",
                                                                        "val": "Pass",
                                                                        "note": "",
                                                                        "children": [
                                                                            {
                                                                                "pos": "北",
                                                                                "val": "3♦",
                                                                                "note": "",
                                                                                "children": [
                                                                                    {
                                                                                        "pos": "東",
                                                                                        "val": "Pass",
                                                                                        "note": "",
                                                                                        "children": [
                                                                                            {
                                                                                                "pos": "南",
                                                                                                "val": "3♠",
                                                                                                "note": "",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "pos": "西",
                                                                                                        "val": "Pass",
                                                                                                        "note": "",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "pos": "北",
                                                                                                                "val": "Pass",
                                                                                                                "note": "",
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
                                                                ]
                                                            },
                                                            {
                                                                "pos": "南",
                                                                "val": "3♠",
                                                                "note": "",
                                                                "children": [],
                                                                "isError": true,
                                                                "errorMsg": "比較不優，看結果，其實你也沒有需要主動叫S的理由，表示點立即可。如果你說X是要殺，那叫3C的人不是笨蛋，不會叫一個沒有意義的合約"
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
            },
            {
                "metadata": {
                    "title": "牌局 3",
                    "dealer": "南",
                    "vulnerability": "NS",
                    "category": "高線競叫"
                },
                "hands": {
                    "north": {
                        "S": [
                            "Q",
                            "8",
                            "7",
                            "3",
                            "2"
                        ],
                        "H": [
                            "J"
                        ],
                        "D": [
                            "Q"
                        ],
                        "C": [
                            "A",
                            "Q",
                            "T",
                            "6",
                            "5",
                            "4"
                        ]
                    },
                    "south": {
                        "S": [
                            "K",
                            "9",
                            "5"
                        ],
                        "H": [
                            "7",
                            "5",
                            "3"
                        ],
                        "D": [
                            "A",
                            "T",
                            "6",
                            "2"
                        ],
                        "C": [
                            "K",
                            "8",
                            "3"
                        ]
                    },
                    "east": {
                        "S": [
                            "A",
                            "6"
                        ],
                        "H": [
                            "A",
                            "K",
                            "T",
                            "9",
                            "8",
                            "6",
                            "4"
                        ],
                        "D": [
                            "9",
                            "8",
                            "5"
                        ],
                        "C": [
                            "2"
                        ]
                    },
                    "west": {
                        "S": [
                            "J",
                            "T",
                            "4"
                        ],
                        "H": [
                            "Q",
                            "2"
                        ],
                        "D": [
                            "K",
                            "J",
                            "7",
                            "4",
                            "3"
                        ],
                        "C": [
                            "J",
                            "9",
                            "7"
                        ]
                    }
                },
                "bidding": [
                    {
                        "pos": "南",
                        "val": "Pass",
                        "note": "",
                        "children": [
                            {
                                "pos": "西",
                                "val": "Pass",
                                "note": "",
                                "children": [
                                    {
                                        "pos": "北",
                                        "val": "1♠",
                                        "note": "",
                                        "children": [
                                            {
                                                "pos": "東",
                                                "val": "4♥",
                                                "note": "",
                                                "children": [
                                                    {
                                                        "pos": "南",
                                                        "val": "X",
                                                        "note": "",
                                                        "children": [],
                                                        "isError": true,
                                                        "errorMsg": "4HX-2，4S+1，請自行看牌局"
                                                    },
                                                    {
                                                        "pos": "南",
                                                        "val": "4♠",
                                                        "note": "",
                                                        "children": [
                                                            {
                                                                "pos": "西",
                                                                "val": "Pass",
                                                                "note": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "北",
                                                                        "val": "Pass",
                                                                        "note": "",
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
                        ]
                    }
                ]
            }
        ]
    }
};