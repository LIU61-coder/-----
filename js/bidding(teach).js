const positions = ['西', '北', '東', '南'];
const suitSymbols = ['♣', '♦', '♥', '♠', 'NT'];
let turnIndex = 0; 
let currentStep = 0; 
let rawDealsData = null; // 存放載入的原始牌局資料（單局或陣列）
let gameData = null;     // 當前進行中的牌局資料
let currentDealIndex = 0;// 當前牌局索引
let currentTreeNode = null;

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const folder = urlParams.get('folder'); 
    const name = urlParams.get('name');     

    if (cardset && cardset[folder] && cardset[folder][name]) {
        rawDealsData = cardset[folder][name];

        // 判斷是否為多牌局練習集 (Array)
        if (Array.isArray(rawDealsData) && rawDealsData.length > 1) {
            promptDealSelection(rawDealsData);
        } else {
            // 單一牌局直接啟動
            currentDealIndex = 0;
            const singleData = Array.isArray(rawDealsData) ? rawDealsData[0] : rawDealsData;
            gameData = (typeof singleData === 'string') ? JSON.parse(singleData) : singleData;
            setupGame();
        }
    } else {
        document.getElementById('turn-display').innerText = "找不到資料";
        console.error("查無此路徑:", folder, "->", name);
    }
};

// 選擇牌局彈窗 (提供隨機與 1, 2, 3... 選項)
function promptDealSelection(dealsList) {
    // 移除舊有彈窗
    const oldStartModal = document.getElementById('start-deal-modal');
    if (oldStartModal) oldStartModal.remove();
    const oldSuccessModal = document.getElementById('success-modal');
    if (oldSuccessModal) oldSuccessModal.remove();

    const modal = document.createElement('div');
    modal.id = 'start-deal-modal';
    modal.style = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center; z-index: 3000;
    `;
    
    let dealButtons = '';
    dealsList.forEach((deal, idx) => {
        const parsed = (typeof deal === 'string') ? JSON.parse(deal) : deal;
        const title = (parsed.metadata && parsed.metadata.title) ? parsed.metadata.title : `牌局 ${idx + 1}`;
        const activeStyle = (idx === currentDealIndex) ? 'border-color: #fac400; color: #fac400; background: #1e293b;' : '';
        
        dealButtons += `
            <button onclick="selectDealAndStart(${idx})" style="
                padding: 10px; background: #334155; color: white; border: 1px solid #475569;
                border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 14px;
                transition: 0.2s; ${activeStyle}
            " onmouseover="this.style.background='#475569'" onmouseout="this.style.background='#334155'">
                ${title}
            </button>
        `;
    });

    modal.innerHTML = `
        <div style="
            background: #1e293b; border: 2px solid #fac400; padding: 25px 20px;
            border-radius: 16px; width: 360px; max-width: 90vw; text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.8); color: white;
        ">
            <h3 style="color: #fac400; margin-top: 0; font-size: 1.3rem;">🎲 請選擇練習模式</h3>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 18px;">本題庫共有 ${dealsList.length} 個練習牌局：</p>
            
            <button onclick="selectDealAndStart('random')" style="
                width: 100%; padding: 12px; margin-bottom: 15px; background: linear-gradient(135deg, #e84c3d, #c0392b); color: white;
                border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 15px;
                box-shadow: 0 4px 12px rgba(232, 76, 61, 0.4);
            ">🔀 隨機抽牌局</button>

            <div style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 8px; text-align: left;">指定牌局：</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; max-height: 180px; overflow-y: auto;">
                ${dealButtons}
            </div>
            
            ${gameData ? `
            <button onclick="document.getElementById('start-deal-modal').remove()" style="
                margin-top: 15px; background: transparent; border: none; color: #94a3b8; cursor: pointer; text-decoration: underline;
            ">返回目前牌局</button>
            ` : ''}
        </div>
    `;
    document.body.appendChild(modal);
}

// 切換/選擇牌局並重新初始化
function selectDealAndStart(choice) {
    const startModal = document.getElementById('start-deal-modal');
    if (startModal) startModal.remove();
    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.remove();

    if (choice === 'random') {
        currentDealIndex = Math.floor(Math.random() * rawDealsData.length);
    } else if (choice === 'next') {
        currentDealIndex = (currentDealIndex + 1) % rawDealsData.length;
    } else {
        currentDealIndex = choice;
    }

    const targetDeal = rawDealsData[currentDealIndex];
    gameData = (typeof targetDeal === 'string') ? JSON.parse(targetDeal) : targetDeal;
    setupGame();
}

function setupGame() {
    if (!gameData || !gameData.metadata) return;

    const isMultiple = Array.isArray(rawDealsData) && rawDealsData.length > 1;
    const dealTitle = gameData.metadata.title || `牌局 ${currentDealIndex + 1}`;
    
    // 1. 左上角標題與牌局資訊顯示
    const gameTitleEl = document.getElementById('game-title');
    if (gameTitleEl) {
        if (isMultiple) {
            gameTitleEl.innerHTML = `
                <div style="font-size: 1rem; color: #fac400; font-weight: bold;">[${currentDealIndex + 1}/${rawDealsData.length}] ${dealTitle}</div>
                <button onclick="promptDealSelection(rawDealsData)" style="
                    margin-top: 4px; padding: 3px 8px; font-size: 11px; background: #334155; color: #cbd5e1; 
                    border: 1px solid #475569; border-radius: 4px; cursor: pointer;
                ">🔄 切換/選擇牌局</button>
            `;
        } else {
            gameTitleEl.innerText = dealTitle;
        }
    }

    const vul = gameData.metadata.vulnerability || "None";
    document.getElementById('vul-display').innerText = `身價：${vul}`;
    
    // 2. 設定 Dealer 與初始化叫牌紀錄紀錄格
    const dealerMap = { "西": 0, "北": 1, "東": 2, "南": 3 };
    turnIndex = dealerMap[gameData.metadata.dealer] ?? 3;
    
    const bidLog = document.getElementById('bid-log');
    if (bidLog) {
        bidLog.innerHTML = '';
        for (let i = 0; i < turnIndex; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'bid-cell empty';
            bidLog.appendChild(emptyCell);
        }
    }

    // 3. 渲染南家手牌
    if (gameData.hands && gameData.hands.south) {
        const convertedHand = convertObjectHandToArray(gameData.hands.south);
        renderSouthHand(convertedHand); 
    }

    // 4. 解析叫牌樹
    let treeData = gameData.bidding;
    if (Array.isArray(treeData) && treeData.length > 0 && treeData[0].children === undefined) {
        let dummyRoot = { children: [] };
        let curr = dummyRoot;
        for (let i = 0; i < treeData.length; i++) {
            let node = { val: treeData[i].val, note: treeData[i].note, isError: treeData[i].isError || false, errorMsg: treeData[i].errorMsg || "", children: [] };
            curr.children.push(node);
            curr = node;
        }
        treeData = dummyRoot.children;
    }

    currentTreeNode = { children: treeData };
    
    renderMatrix();         
    checkWhosTurn();
}

function convertObjectHandToArray(objHand) {
    const handArray = [];
    const suitMap = { 'S': '♠', 'H': '♥', 'D': '♦', 'C': '♣' };
    
    for (const [sKey, ranks] of Object.entries(objHand)) {
        const symbol = suitMap[sKey];
        if (symbol && Array.isArray(ranks)) {
            ranks.forEach(r => {
                const displayRank = (r === 'T') ? '10' : r;
                handArray.push({ suit: symbol, rank: displayRank });
            });
        }
    }
    return handArray;
}

function renderSouthHand(hand) {
    const table = document.getElementById('table');
    if (!table || !Array.isArray(hand)) return;
    table.innerHTML = '';

    const suitOrder = { '♠': 4, '♥': 3, '♦': 2, '♣': 1 };
    const rankOrder = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, '10': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2 };

    hand.sort((a, b) => (suitOrder[b.suit] - suitOrder[a.suit]) || (rankOrder[b.rank] - rankOrder[a.rank]));

    hand.forEach((card, i) => {
        const offset = (i - 6) * 45; 
        const colorClass = { '♣': 'club-suit', '♦': 'diamond-suit', '♥': 'heart-suit', '♠': 'spade-suit' }[card.suit];
        const el = document.createElement('div');
        el.className = `card ${colorClass}`;
        el.setAttribute('data-suit', card.suit);
        el.style.setProperty('--offset', `${offset}px`);
        el.style.zIndex = i;
        el.innerHTML = `<div class="label-box"><span class="rank-text">${card.rank}</span></div>`;
        table.appendChild(el);
    });
}

function renderMatrix() {
    const matrix = document.getElementById('matrix');
    matrix.innerHTML = '';
    for (let lv = 1; lv <= 7; lv++) {
        suitSymbols.forEach(s => {
            const btn = document.createElement('button');
            btn.className = `bid-btn suit-${s === 'NT' ? 'NT' : ''}`;
            btn.innerText = `${lv}${s}`;
            btn.onclick = () => handlePlayerAction(`${lv}${s}`);
            matrix.appendChild(btn);
        });
    }
}

function checkWhosTurn() {
    if (!currentTreeNode || !currentTreeNode.children) return;

    const validChildren = currentTreeNode.children.filter(c => !c.isError);

    if (currentTreeNode.children.length === 0 || (currentTreeNode.children.length > 0 && validChildren.length === 0)) {
        document.getElementById('turn-display').innerText = "叫牌結束";
        toggleButtons(false);
        return;
    }

    const currentPosName = positions[turnIndex % 4];

    if (currentPosName === "南") {
        document.getElementById('turn-display').innerText = "輪到你了：請選擇正確叫品";
        toggleButtons(true);
    } else {
        document.getElementById('turn-display').innerText = `輪到：${currentPosName} (思考中...)`;
        toggleButtons(false);
        setTimeout(() => {
            const nextNode = validChildren[0] || currentTreeNode.children[0];
            executeStep(nextNode.val, nextNode.note, nextNode);
        }, 1200); 
    }
}

function handlePlayerAction(bid) {
    if (!currentTreeNode || !currentTreeNode.children) return;

    const validChildren = currentTreeNode.children.filter(child => !child.isError);
    const validBids = validChildren.map(c => c.val).join(" 或 ") || "無 (叫牌應結束)";

    const matchedChild = currentTreeNode.children.find(child => child.val === bid);

    if (!matchedChild) {
        showTeachingModal(bid, validBids, "不存在此叫牌分支！這不在目前規劃的叫牌策略樹中，請重新選擇。", "不存在此分支");
    } else if (matchedChild.isError) {
        const reason = matchedChild.errorMsg || matchedChild.note || "此叫品不符合目前的叫牌約定或策略。";
        showTeachingModal(bid, validBids, reason, "錯誤叫品警示");
    } else {
        executeStep(matchedChild.val, matchedChild.note, matchedChild);
    }
}

function executeStep(val, note, nextNode) {
    const cell = document.createElement('div');
    cell.className = 'bid-cell';
    cell.innerText = val;
    if (note) cell.title = note;
    
    document.getElementById('bid-log').appendChild(cell);
    
    currentTreeNode = nextNode;
    turnIndex++;

    const validChildren = currentTreeNode.children ? currentTreeNode.children.filter(c => !c.isError) : [];

    if (!currentTreeNode.children || currentTreeNode.children.length === 0 || validChildren.length === 0) {
        document.getElementById('turn-display').innerText = "叫牌完成！";
        toggleButtons(false);
        setTimeout(() => {
            showSuccessModal();
        }, 500);
    } else {
        checkWhosTurn();
    }
}

function toggleButtons(enable) {
    const btns = document.querySelectorAll('.bid-btn');
    btns.forEach(b => b.disabled = !enable);
}

function showTeachingModal(yourBid, correctBid, errorReason, modalTitle = "Advance 策略指導") {
    const oldModal = document.getElementById('teaching-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'teaching-modal';
    modal.style = `position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:#2d2d2d; border:2px solid var(--accent); padding:30px; border-radius:15px; z-index:1000; color:white; text-align:center; box-shadow:0 0 50px rgba(0,0,0,0.8); width:340px;`;
    
    modal.innerHTML = `
        <h3 style="color:#e84c3d; margin-top:0;">⚠️ ${modalTitle}</h3>
        <p style="margin: 8px 0;">你選擇了：<span style="color:#e84c3d; font-weight:bold;">${yourBid}</span></p>
        <p style="margin: 8px 0;">正確應為：<span style="color:#68b04d; font-weight:bold;">${correctBid}</span></p>
        <hr style="border:0; border-top:1px solid #444; margin:15px 0;">
        <div style="font-size:0.95rem; line-height:1.6; color:#ddd; text-align:left; background:#1e1e1e; padding:12px; border-radius:6px; word-break:break-all;">
            <strong>原因說明：</strong><br>${errorReason}
        </div>
        <button onclick="this.parentElement.remove()" style="background:var(--accent); border:none; padding:10px 25px; border-radius:5px; cursor:pointer; font-weight:bold; margin-top:15px; color:#000;">我明白了</button>
    `;
    document.body.appendChild(modal);
}

// 格式化單一家手牌 HTML
function formatHandHTML(handObj) {
    if (!handObj) return '<div style="color:#64748b; font-size:12px;">無資料</div>';
    
    const suitSymbols = { 'S': '♠', 'H': '♥', 'D': '♦', 'C': '♣' };
    const suitColors = { 'S': '#60a5fa', 'H': '#f87171', 'D': '#facc15', 'C': '#4ade80' };
    
    let html = '<div style="font-family: monospace; font-size: 13px; text-align: left; line-height: 1.4;">';
    ['S', 'H', 'D', 'C'].forEach(s => {
        let ranks = '—';
        if (handObj[s] && Array.isArray(handObj[s]) && handObj[s].length > 0) {
            ranks = handObj[s].join(' ');
        }
        html += `<div style="white-space: nowrap;"><span style="color:${suitColors[s]}; font-weight:bold; display:inline-block; width: 16px; text-align: center;">${suitSymbols[s]}</span> ${ranks}</div>`;
    });
    html += '</div>';
    return html;
}

// 叫牌成功通關視窗（包含四家牌與下一牌切換按鈕）
function showSuccessModal() {
    const oldModal = document.getElementById('success-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'success-modal';
    modal.style = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border: 3px solid #4ade80; padding: 25px 20px;
        border-radius: 20px; z-index: 2000; color: white; text-align: center;
        box-shadow: 0 0 60px rgba(74, 222, 128, 0.3); 
        width: 440px; max-width: 92vw; max-height: 90vh; overflow-y: auto;
        animation: modalPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    
    const praises = [
        "出色表現！梅竹賽就靠你啦!",
        "完美的叫牌邏輯，你已經準備好進入實戰了。",
        "漂亮！這就是專業橋手該有的思維。"
    ];
    const randomPraise = praises[Math.floor(Math.random() * praises.length)];
    const hands = (gameData && gameData.hands) ? gameData.hands : {};

    const isMultipleDeals = Array.isArray(rawDealsData) && rawDealsData.length > 1;
    const dealTitle = (gameData && gameData.metadata && gameData.metadata.title) ? gameData.metadata.title : `牌局 ${currentDealIndex + 1}`;

    modal.innerHTML = `
        <div style="font-size: 38px; margin-bottom: 5px;">🏆</div>
        <h2 style="color: #4ade80; margin: 0 0 4px 0; letter-spacing: 2px;">做得好！</h2>
        
        <!-- 顯示剛剛完成的牌局名稱與編號 -->
        <div style="color: #60a5fa; font-weight: bold; font-size: 0.95rem; margin-bottom: 6px;">
            🎯 完成：${isMultipleDeals ? `[牌局 ${currentDealIndex + 1}/${rawDealsData.length}] ` : ''}${dealTitle}
        </div>
        
        <p style="font-size: 0.88rem; line-height: 1.4; color: #cbd5e1; margin: 0 0 12px 0;">${randomPraise}</p>
        
        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 10px 0 15px 0;">
        
        <!-- 四家手牌羅盤區 -->
        <div style="color: #fac400; font-weight: bold; font-size: 0.9rem; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <span>♠♥♦♣</span> 完整四家手牌
        </div>
        
        <div style="
            display: grid;
            grid-template-areas:
                '. north .'
                'west . east'
                '. south .';
            grid-template-columns: 1fr 1.15fr 1fr;
            gap: 8px;
            background: rgba(15, 23, 42, 0.6);
            padding: 10px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.08);
            margin-bottom: 18px;
        ">
            <div style="grid-area: north; background: #0f172a; padding: 6px 8px; border-radius: 6px; border: 1px solid #334155;">
                <div style="color:#4ade80; font-weight:bold; font-size:11px; margin-bottom:2px;">北 (N)</div>
                ${formatHandHTML(hands.north)}
            </div>
            <div style="grid-area: west; background: #0f172a; padding: 6px 8px; border-radius: 6px; border: 1px solid #334155;">
                <div style="color:#4ade80; font-weight:bold; font-size:11px; margin-bottom:2px;">西 (W)</div>
                ${formatHandHTML(hands.west)}
            </div>
            <div style="grid-area: east; background: #0f172a; padding: 6px 8px; border-radius: 6px; border: 1px solid #334155;">
                <div style="color:#4ade80; font-weight:bold; font-size:11px; margin-bottom:2px;">東 (E)</div>
                ${formatHandHTML(hands.east)}
            </div>
            <div style="grid-area: south; background: #0f172a; padding: 6px 8px; border-radius: 6px; border: 1px solid #334155;">
                <div style="color:#4ade80; font-weight:bold; font-size:11px; margin-bottom:2px;">南 (S)</div>
                ${formatHandHTML(hands.south)}
            </div>
        </div>

        <!-- 練習集控制按鈕 -->
        ${isMultipleDeals ? `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
            <button onclick="selectDealAndStart('next')" style="
                padding: 10px; background: #10b981; color: #022c22; border: none;
                border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.9rem;
            ">▶ 下一牌</button>
            <button onclick="selectDealAndStart('random')" style="
                padding: 10px; background: #e84c3d; color: white; border: none;
                border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.9rem;
            ">🔀 隨機下一牌</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <button onclick="promptDealSelection(rawDealsData)" style="
                padding: 8px; background: #334155; color: white; border: 1px solid #475569;
                border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.85rem;
            ">☰ 選擇牌局</button>
            <button onclick="selectDealAndStart(currentDealIndex)" style="
                padding: 8px; background: #334155; color: white; border: 1px solid #475569;
                border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.85rem;
            ">🔄 重練本局</button>
        </div>
        ` : `
        <button onclick="selectDealAndStart(0)" style="
            background: #4ade80; border: none; padding: 10px 30px; 
            border-radius: 50px; cursor: pointer; font-weight: bold; 
            color: #064e3b; font-size: 0.95rem; transition: 0.3s; 
            box-shadow: 0 4px 15px rgba(74, 222, 128, 0.4);
        ">再次挑戰</button>
        `}
    `;

    document.body.appendChild(modal);
}