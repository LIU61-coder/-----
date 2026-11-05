// --- 基本變數與初始化 ---
const suits = [
    { s: '♠', name: 'spade', label: '黑桃 (藍)' },
    { s: '♥', name: 'heart', label: '紅心 (紅)' },
    { s: '♣', name: 'club', label: '梅花 (綠)' },
    { s: '♦', name: 'diamond', label: '方塊 (黃)' }
];
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
let currentTarget = 'south';

let handStorage = {
    north: [],
    south: [],
    east: [],
    west: []
};

// 初始化左側選牌矩陣面板
const container = document.getElementById('matrix-container');
if (container) {
    suits.forEach(suit => {
        const label = document.createElement('div');
        label.className = 'suit-label';
        label.innerText = suit.label;
        container.appendChild(label);

        const row = document.createElement('div');
        row.className = 'matrix-row';
        ranks.forEach(rank => {
            const btn = document.createElement('button');
            btn.className = 'matrix-btn';
            btn.id = `btn-${suit.s}-${rank}`;
            btn.innerHTML = `<span>${suit.s}</span><span>${rank}</span>`;
            btn.onclick = () => addCard(suit.s, rank, suit.name);
            row.appendChild(btn);
        });
        container.appendChild(row);
    });
}

// --- UI 與互動輔助函式 ---
function toggleSeatInputs(seat) {
    const enabled = document.getElementById(`${seat}-enable`).checked;
    const cardEl = document.getElementById(`card-${seat}`);
    const inputs = cardEl.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => input.disabled = !enabled);
    cardEl.style.opacity = enabled ? '1' : '0.45';
}

function setTarget(pos) {
    document.querySelectorAll('.pos-indicator').forEach(el => el.classList.remove('current-target'));
    document.getElementById(`${pos}-box`)?.classList.add('current-target');
    currentTarget = pos;
}

function addCard(suit, rank, suitName) {
    const btn = document.getElementById(`btn-${suit}-${rank}`);
    if (btn.classList.contains('used')) return;

    btn.classList.add('used');
    handStorage[currentTarget].push({ suit, rank, suitName });

    renderSingleHand(currentTarget);
}

function renderSingleHand(pos) {
    const targetContainer = document.getElementById(`${pos}-hand`);
    if (!targetContainer) return;
    targetContainer.innerHTML = '';

    const suitSymbols = ['♠', '♥', '♦', '♣'];
    const suitNames = { '♠': 'spade', '♥': 'heart', '♦': 'diamond', '♣': 'club' };

    suitSymbols.forEach(sSymbol => {
        const row = document.createElement('div');
        row.className = 'hand-suit-row';
        
        const rankOrder = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, '10': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2 };
        const filteredCards = handStorage[pos]
            .filter(c => c.suit === sSymbol)
            .sort((a, b) => rankOrder[b.rank] - rankOrder[a.rank]);

        filteredCards.forEach(cardData => {
            const card = document.createElement('div');
            card.className = `card ${suitNames[sSymbol]}-suit mini-layout`; 
            card.setAttribute('data-suit', sSymbol);
            card.innerHTML = `<div class="label-box"><span class="rank-text">${cardData.rank}</span></div>`;

            card.onclick = function(e) {
                e.stopPropagation();
                const btn = document.getElementById(`btn-${sSymbol}-${cardData.rank}`);
                if (btn) btn.classList.remove('used');
                handStorage[pos] = handStorage[pos].filter(c => !(c.suit === sSymbol && c.rank === cardData.rank));
                renderSingleHand(pos);
            };
            row.appendChild(card);
        });
        targetContainer.appendChild(row);
    });
}

function sortHands() {
    ['north', 'south', 'east', 'west'].forEach(pos => {
        renderSingleHand(pos);
    });
}

function submitHandData() {
    const formatHand = (handArray) => handArray.map(c => ({ suit: c.suit, rank: c.rank }));

    const handData = {
        north: formatHand(handStorage.north),
        south: formatHand(handStorage.south),
        east: formatHand(handStorage.east),
        west: formatHand(handStorage.west)
    };

    localStorage.setItem('advance_current_hands', JSON.stringify(handData));
    alert("手牌已記錄！");
    window.location.href = 'biddinginput.html';
}

function randomDeal() {
    handStorage = { north: [], south: [], east: [], west: [] };
    document.querySelectorAll('.hand-area').forEach(el => el.innerHTML = '');
    document.querySelectorAll('.matrix-btn').forEach(btn => btn.classList.remove('used'));

    const allCards = [];
    const suitSymbols = ['♠', '♥', '♣', '♦'];
    const suitNames = ['spade', 'heart', 'club', 'diamond'];
    const rankValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

    suitSymbols.forEach((s, i) => {
        rankValues.forEach(r => {
            allCards.push({ suit: s, rank: r, suitName: suitNames[i] });
        });
    });

    for (let i = allCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }

    const seats = ['south', 'north', 'east', 'west'];
    seats.forEach((seat, index) => {
        currentTarget = seat; 
        document.querySelectorAll('.pos-indicator').forEach(el => el.classList.remove('current-target'));
        document.getElementById(`${seat}-box`)?.classList.add('current-target');

        const hand = allCards.slice(index * 13, (index + 1) * 13);
        hand.forEach(c => {
            addCard(c.suit, c.rank, c.suitName);
        });
    });
    
    setTarget('south');
    sortHands();
}

function copyHandData() {
    const formatHand = (handArray) => handArray.map(c => ({ suit: c.suit, rank: c.rank }));
    const handData = {
        north: formatHand(handStorage.north),
        south: formatHand(handStorage.south),
        east: formatHand(handStorage.east),
        west: formatHand(handStorage.west)
    };

    navigator.clipboard.writeText(JSON.stringify(handData)).then(() => {
        alert("📋 手牌 JSON 字串已成功複製！");
    }).catch(err => {
        console.error('複製失敗:', err);
        alert("複製失敗，可能是瀏覽器權限阻擋。");
    });
}

function openCustomModal() {
    document.getElementById('custom-modal').style.display = 'flex';
}

function closeCustomModal() {
    document.getElementById('custom-modal').style.display = 'none';
}

function getCardHCP(rank) {
    if (rank === 'A') return 4;
    if (rank === 'K') return 3;
    if (rank === 'Q') return 2;
    if (rank === 'J') return 1;
    return 0;
}

function getSeatName(seat) {
    const names = { north: '北 (NORTH)', south: '南 (SOUTH)', east: '東 (EAST)', west: '西 (WEST)' };
    return names[seat] || seat;
}


// ==========================================
// 引擎 1：過濾器發牌（Rejection Sampling）
// ==========================================

function matchFilter(hand, targets) {
    const seats = ['north', 'south', 'east', 'west'];
    const suitNamesMap = { '♠': 'spade', '♥': 'heart', '♦': 'diamond', '♣': 'club' };

    for (const seat of seats) {
        if (!targets[seat].enabled) continue;

        const cards = hand[seat];

        // 1. 檢查 HCP 點力 (如有指定)
        if (targets[seat].hcp !== null) {
            const hcp = cards.reduce((sum, c) => sum + getCardHCP(c.rank), 0);
            if (hcp !== targets[seat].hcp) return false;
        }

        // 2. 檢查各花色張數 (如有指定)
        for (const [sym, key] of Object.entries(suitNamesMap)) {
            const targetLen = targets[seat].lengths[sym];
            if (targetLen !== null) {
                const len = cards.filter(c => c.suit === sym).length;
                if (len !== targetLen) return false;
            }
        }
    }
    return true;
}

function generateByFilter(targets, maxAttempts = 25000) {
    const suitSymbols = ['♠', '♥', '♣', '♦'];
    const suitNames = ['spade', 'heart', 'club', 'diamond'];
    const rankValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

    const deck = [];
    suitSymbols.forEach((s, i) => {
        rankValues.forEach(r => {
            deck.push({ suit: s, rank: r, suitName: suitNames[i] });
        });
    });

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        // 洗牌
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        const hand = {
            south: deck.slice(0, 13),
            north: deck.slice(13, 26),
            east:  deck.slice(26, 39),
            west:  deck.slice(39, 52)
        };

        if (matchFilter(hand, targets)) {
            return hand;
        }
    }
    return null; // 超過最大嘗試次數（條件較嚴格）
}


// ==========================================
// 引擎 2：矩陣與點力推算（Constraint Solver）
// ==========================================

function solveMatrixL(initialL) {
    const seatList = ['north', 'south', 'east', 'west'];
    const suitList = ['♠', '♥', '♦', '♣'];

    let grid = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ];

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            grid[r][c] = initialL[seatList[r]][suitList[c]];
        }
    }

    function deduce(g) {
        let changed = false;
        for (let r = 0; r < 4; r++) {
            let nulls = [], sum = 0;
            for (let c = 0; c < 4; c++) {
                if (g[r][c] === null) nulls.push(c);
                else sum += g[r][c];
            }
            if (sum > 13) return false;
            if (nulls.length === 1) {
                let rem = 13 - sum;
                if (rem < 0 || rem > 13) return false;
                g[r][nulls[0]] = rem;
                changed = true;
            }
        }
        for (let c = 0; c < 4; c++) {
            let nulls = [], sum = 0;
            for (let r = 0; r < 4; r++) {
                if (g[r][c] === null) nulls.push(r);
                else sum += g[r][c];
            }
            if (sum > 13) return false;
            if (nulls.length === 1) {
                let rem = 13 - sum;
                if (rem < 0 || rem > 13) return false;
                g[nulls[0]][c] = rem;
                changed = true;
            }
        }
        if (changed) return deduce(g);
        return true;
    }

    function backtrack(g) {
        if (!deduce(g)) return null;

        let nullPositions = [];
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                if (g[r][c] === null) nullPositions.push({ r, c });
            }
        }

        if (nullPositions.length === 0) {
            for (let r = 0; r < 4; r++) {
                if (g[r].reduce((a, b) => a + b, 0) !== 13) return null;
            }
            for (let c = 0; c < 4; c++) {
                let colSum = g[0][c] + g[1][c] + g[2][c] + g[3][c];
                if (colSum !== 13) return null;
            }
            return g;
        }

        // 隨機選擇未知數，增加亂數多樣性
        let picked = nullPositions[Math.floor(Math.random() * nullPositions.length)];
        let targetR = picked.r;
        let targetC = picked.c;

        let rowSum = 0, colSum = 0;
        for (let c = 0; c < 4; c++) if (g[targetR][c] !== null) rowSum += g[targetR][c];
        for (let r = 0; r < 4; r++) if (g[r][targetC] !== null) colSum += g[r][targetC];

        let maxVal = Math.min(13 - rowSum, 13 - colSum);
        if (maxVal < 0) return null;

        let choices = [];
        for (let v = 0; v <= maxVal; v++) choices.push(v);
        choices.sort(() => Math.random() - 0.5);

        for (let v of choices) {
            let copy = g.map(row => [...row]);
            copy[targetR][targetC] = v;
            let result = backtrack(copy);
            if (result) return result;
        }

        return null;
    }

    let solvedGrid = backtrack(grid);
    if (!solvedGrid) return null;

    let resL = {};
    for (let r = 0; r < 4; r++) {
        let seat = seatList[r];
        resL[seat] = {};
        for (let c = 0; c < 4; c++) {
            resL[seat][suitList[c]] = solvedGrid[r][c];
        }
    }
    return resL;
}

function generateHCPAssignment(initialHCP) {
    const seats = ['north', 'south', 'east', 'west'];
    let specifiedSum = 0;
    let unassignedSeats = [];

    for (const s of seats) {
        if (initialHCP[s] !== null) {
            specifiedSum += initialHCP[s];
        } else {
            unassignedSeats.push(s);
        }
    }

    let remHCP = 40 - specifiedSum;
    if (remHCP < 0) return null;

    let resHCP = { ...initialHCP };

    if (unassignedSeats.length === 0) {
        if (specifiedSum !== 40) return null;
        return resHCP;
    }

    if (unassignedSeats.length === 1) {
        let s = unassignedSeats[0];
        if (remHCP < 0 || remHCP > 37) return null;
        resHCP[s] = remHCP;
        return resHCP;
    }

    let rawRatios = unassignedSeats.map(() => Math.random());
    let totalRatio = rawRatios.reduce((a, b) => a + b, 0);
    let currentSum = 0;

    for (let i = 0; i < unassignedSeats.length; i++) {
        let s = unassignedSeats[i];
        if (i === unassignedSeats.length - 1) {
            let h = remHCP - currentSum;
            if (h < 0 || h > 37) return null;
            resHCP[s] = h;
        } else {
            let h = Math.round((rawRatios[i] / totalRatio) * remHCP);
            h = Math.min(37, Math.max(0, h));
            resHCP[s] = h;
            currentSum += h;
        }
    }

    return resHCP;
}

function adjustHCP(tempHand, targets) {
    const seats = ['north', 'south', 'east', 'west'];
    const suitSymbols = ['♠', '♥', '♦', '♣'];

    const calcHandHCP = (cards) => cards.reduce((sum, c) => sum + getCardHCP(c.rank), 0);

    for (let iter = 0; iter < 500; iter++) {
        let currentHCPs = {};
        let matched = true;

        for (const seat of seats) {
            currentHCPs[seat] = calcHandHCP(tempHand[seat]);
            if (currentHCPs[seat] !== targets[seat].hcp) {
                matched = false;
            }
        }

        if (matched) return true;

        let needy = seats.find(s => currentHCPs[s] < targets[s].hcp);
        let rich = seats.find(s => currentHCPs[s] > targets[s].hcp);

        if (!needy || !rich) break;

        let swapped = false;
        for (const s of suitSymbols) {
            let needyCards = tempHand[needy].filter(c => c.suit === s);
            let richCards = tempHand[rich].filter(c => c.suit === s);

            if (needyCards.length === 0 || richCards.length === 0) continue;

            for (let cN of needyCards) {
                for (let cR of richCards) {
                    let diff = getCardHCP(cR.rank) - getCardHCP(cN.rank);
                    if (diff > 0 && (currentHCPs[needy] + diff <= targets[needy].hcp)) {
                        let idxN = tempHand[needy].indexOf(cN);
                        let idxR = tempHand[rich].indexOf(cR);
                        tempHand[needy][idxN] = cR;
                        tempHand[rich][idxR] = cN;
                        swapped = true;
                        break;
                    }
                }
                if (swapped) break;
            }
            if (swapped) break;
        }

        if (!swapped) {
            let randomSuit = suitSymbols[Math.floor(Math.random() * 4)];
            let needyCards = tempHand[needy].filter(c => c.suit === randomSuit);
            let richCards = tempHand[rich].filter(c => c.suit === randomSuit);
            if (needyCards.length > 0 && richCards.length > 0) {
                let cN = needyCards[Math.floor(Math.random() * needyCards.length)];
                let cR = richCards[Math.floor(Math.random() * richCards.length)];
                let idxN = tempHand[needy].indexOf(cN);
                let idxR = tempHand[rich].indexOf(cR);
                tempHand[needy][idxN] = cR;
                tempHand[rich][idxR] = cN;
            }
        }
    }
    return false;
}


// ==========================================
// 主功能：綜合發牌控制（雙引擎整合）
// ==========================================

function generateCustomDeal() {
    const errorEl = document.getElementById('custom-error');
    errorEl.innerText = '';

    const seats = ['north', 'south', 'east', 'west'];
    const suitSymbols = ['♠', '♥', '♦', '♣'];
    const suitNamesMap = { '♠': 'spade', '♥': 'heart', '♦': 'diamond', '♣': 'club' };

    let filterTargets = {};
    let initialL = {
        north: { '♠': null, '♥': null, '♦': null, '♣': null },
        south: { '♠': null, '♥': null, '♦': null, '♣': null },
        east:  { '♠': null, '♥': null, '♦': null, '♣': null },
        west:  { '♠': null, '♥': null, '♦': null, '♣': null }
    };
    let initialHCP = { north: null, south: null, east: null, west: null };

    let totalSpecifiedHCP = 0;
    let anySeatChecked = false;

    // 1. 讀取並驗證使用者輸入
    for (const seat of seats) {
        const isEnabled = document.getElementById(`${seat}-enable`).checked;
        filterTargets[seat] = { enabled: isEnabled, hcp: null, lengths: { '♠': null, '♥': null, '♦': null, '♣': null } };

        if (!isEnabled) continue;
        anySeatChecked = true;

        // HCP 點力解析
        const hcpVal = document.getElementById(`${seat}-hcp`).value.trim();
        if (hcpVal !== '') {
            const h = parseInt(hcpVal, 10);
            if (isNaN(h) || h < 0 || h > 37) {
                errorEl.innerText = `【點力錯誤】${getSeatName(seat)} 點力必須在 0 ~ 37 之間！`;
                return;
            }
            initialHCP[seat] = h;
            filterTargets[seat].hcp = h;
            totalSpecifiedHCP += h;
        }

        // 花色張數解析
        let seatSuitSum = 0;
        let seatSpecifiedCount = 0;

        for (const [sym, key] of Object.entries(suitNamesMap)) {
            const val = document.getElementById(`${seat}-${key}`).value.trim();
            if (val !== '') {
                const len = parseInt(val, 10);
                if (isNaN(len) || len < 0 || len > 13) {
                    errorEl.innerText = `【張數錯誤】${getSeatName(seat)} 的 ${sym} 張數必須在 0 ~ 13 之間！`;
                    return;
                }
                initialL[seat][sym] = len;
                filterTargets[seat].lengths[sym] = len;
                seatSuitSum += len;
                seatSpecifiedCount++;
            }
        }

        if (seatSuitSum > 13) {
            errorEl.innerText = `【張數錯誤】${getSeatName(seat)} 已設定的花色總張數 (${seatSuitSum} 張) 已超過 13 張！`;
            return;
        }
        if (seatSpecifiedCount === 4 && seatSuitSum !== 13) {
            errorEl.innerText = `【張數錯誤】${getSeatName(seat)} 4 個花色皆已指定，但總和為 ${seatSuitSum} 張（必須剛好為 13 張）！`;
            return;
        }
    }

    if (!anySeatChecked) {
        errorEl.innerText = '請至少勾選 1 家進行自訂，或直接使用「隨機發牌」！';
        return;
    }

    if (totalSpecifiedHCP > 40) {
        errorEl.innerText = `【點力錯誤】已指定的點力總和 (${totalSpecifiedHCP} 點) 已超過一副牌上限 40 點！`;
        return;
    }

    for (const sym of suitSymbols) {
        let colSum = 0;
        for (const seat of seats) {
            if (initialL[seat][sym] !== null) colSum += initialL[seat][sym];
        }
        if (colSum > 13) {
            errorEl.innerText = `【花色張數錯誤】花色 ${sym} 已指定張數總和 (${colSum} 張) 已超過 13 張！`;
            return;
        }
    }

    // 2. 階段一：優先採用過濾器生成 (Monte Carlo Filter)
    let handFound = generateByFilter(filterTargets, 25000);
    let engineType = 'filter';

    // 3. 階段二：若條件較嚴格過濾失敗，自動切換至矩陣解算器 (Constraint Fallback)
    if (!handFound) {
        engineType = 'solver';
        const rankValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

        for (let attempt = 0; attempt < 3000; attempt++) {
            const resolvedL = solveMatrixL(initialL);
            if (!resolvedL) break;

            const resolvedHCP = generateHCPAssignment(initialHCP);
            if (!resolvedHCP) break;

            let currentTargets = {};
            for (const seat of seats) {
                currentTargets[seat] = { hcp: resolvedHCP[seat], lengths: resolvedL[seat] };
            }

            let tempHand = { north: [], south: [], east: [], west: [] };
            for (const s of suitSymbols) {
                let suitCards = rankValues.map(r => ({ suit: s, rank: r, suitName: suitNamesMap[s] }));
                suitCards.sort(() => Math.random() - 0.5);

                let offset = 0;
                for (const seat of seats) {
                    const count = currentTargets[seat].lengths[s];
                    tempHand[seat].push(...suitCards.slice(offset, offset + count));
                    offset += count;
                }
            }

            if (adjustHCP(tempHand, currentTargets)) {
                handFound = tempHand;
                break;
            }
        }
    }

    if (!handFound) {
        errorEl.innerText = '無法找到同時符合該「點力」與「花色長度」的牌型組合，請適度放寬條件再試一次！';
        return;
    }

    // 4. 發牌結果渲染至畫面
    handStorage = handFound;
    document.querySelectorAll('.matrix-btn').forEach(btn => btn.classList.remove('used'));
    seats.forEach(seat => {
        handStorage[seat].forEach(c => {
            const btn = document.getElementById(`btn-${c.suit}-${c.rank}`);
            if (btn) btn.classList.add('used');
        });
    });

    sortHands();

    document.getElementById('custom-success-toast')?.remove();
    const toast = document.createElement('div');
    toast.id = 'custom-success-toast';
    toast.style.cssText = 'color: #2ecc71; text-align: center; margin-top: 8px; font-weight: bold; font-size: 14px;';
    toast.innerText = engineType === 'filter' 
        ? '✓ 發牌成功！（採用真實機率過濾器生成）'
        : '✓ 發牌成功！（條件較嚴格，已自動精確演算配牌）';
    errorEl.parentNode.appendChild(toast);
    setTimeout(() => toast?.remove(), 2500);
}