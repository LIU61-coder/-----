const positions = ['西', '北', '東', '南'];
const suits = ['♣', '♦', '♥', '♠', 'NT'];
const suitNames = ['C', 'D', 'H', 'S', 'NT'];

let currentBidLevel = 0; 
let currentBidSuit = -1; 
let turnIndex = 3; 

// 樹狀結構狀態
let biddingTree = { val: "root", children: [] };
let currentNode = biddingTree; 
let currentPath = []; // 為了畫面上顯示目前的直線路徑

let lastRealBidder = -1; 
let lastXBidder = -1;    

function initGame() {
    turnIndex = parseInt(document.getElementById('dealer-select').value);
    
    // 初始化樹狀結構
    biddingTree = { val: "root", children: [] };
    currentNode = biddingTree;
    currentPath = [];
    
    currentBidLevel = 0;
    currentBidSuit = -1;
    lastRealBidder = -1;
    lastXBidder = -1;
    
    renderLogUI();
    renderMatrix();
    updateStatus();
}
function renderLogUI() {
    const log = document.getElementById('bid-log');
    log.innerHTML = '';
    
    const dealerIdx = parseInt(document.getElementById('dealer-select').value);
    for(let i = 0; i < dealerIdx; i++) {
        const empty = document.createElement('div');
        log.appendChild(empty);
    }

    currentPath.forEach((node, index) => {
        const cell = document.createElement('div');
        // 若為錯誤叫品，加上 error 樣式
        cell.className = `bid-cell ${node.isError ? 'error' : ''}`;
        
        const errorBadge = node.isError ? ' ⚠️' : '';
        cell.innerHTML = `${node.val}${errorBadge} <span class="bid-note" style="color:${node.isError ? '#ff8e8e' : 'var(--accent)'};font-size:10px;">${node.note ? '*' : ''}</span>`;
        
        cell.onclick = () => jumpToNode(index);
        log.appendChild(cell);
    });
}
function makeBid(val, lv = null, sIdx = null) {
    const bidderPos = turnIndex % 4;
    
    if (val === 'X') lastXBidder = bidderPos;
    if (val === 'XX') lastXBidder = -1; 

    if (lv !== null) {
        currentBidLevel = lv;
        currentBidSuit = sIdx;
        lastRealBidder = bidderPos;
        lastXBidder = -1; 
    }

    let existingNode = currentNode.children.find(c => c.val === val);
    let newNode;
    
    if (existingNode) {
        newNode = existingNode;
    } else {
        // 新增 isError 與 errorMsg 屬性
        newNode = { 
            pos: positions[bidderPos], 
            val: val, 
            note: "", 
            isError: false, 
            errorMsg: "", 
            children: [] 
        };
        
        const note = prompt(`為 "${val}" 輸入備註或策略說明 (沒有可留空):`);
        if (note) newNode.note = note;
        
        // 詢問是否標記為錯誤叫品
        if (confirm(`要將 "${val}" 標記為「錯誤叫品」嗎？`)) {
            newNode.isError = true;
            newNode.errorMsg = prompt(`請輸入 "${val}" 的錯誤提示與原因說明:`) || "此叫品為不建議或錯誤的叫品。";
        }
        
        currentNode.children.push(newNode);
    }

    currentNode = newNode;
    currentPath.push(newNode);
    turnIndex++;
    
    // 若踩到錯誤叫品，發出警告
    if (newNode.isError) {
        alert(`⚠️ 【叫牌錯誤警示】\n[${newNode.pos}] 叫出了 ${newNode.val}！\n\n錯誤提示：${newNode.errorMsg}`);
    }

    refreshAllUI();
}

// 跳回先前的叫牌以建立分支
function jumpToNode(pathIndex) {
    if(confirm("要跳回這個叫品嗎？之後輸入的叫牌會成為新的分支！\n(原來的路徑已經被儲存，不用擔心遺失)")) {
        currentNode = currentPath[pathIndex];
        currentPath = currentPath.slice(0, pathIndex + 1); // 截斷畫面路徑
        
        recalculateBiddingState();
        renderLogUI();
        renderMatrix();
        updateStatus();
    }
}

// 根據 currentPath 重新計算等級、花色與 X/XX 狀態
function recalculateBiddingState() {
    const dealerIdx = parseInt(document.getElementById('dealer-select').value);
    turnIndex = dealerIdx + currentPath.length;
    currentBidLevel = 0; currentBidSuit = -1; lastRealBidder = -1; lastXBidder = -1;
    
    currentPath.forEach((node, idx) => {
        const bidderPos = (dealerIdx + idx) % 4;
        if (node.val === 'X') lastXBidder = bidderPos;
        if (node.val === 'XX') lastXBidder = -1;
        
        if (node.val !== 'Pass' && node.val !== 'X' && node.val !== 'XX') {
            currentBidLevel = parseInt(node.val[0]);
            currentBidSuit = suitNames.indexOf(node.val.replace(/[0-9]/g, '').replace('NT', 'NT').replace('♣','C').replace('♦','D').replace('♥','H').replace('♠','S')); 
            lastRealBidder = bidderPos;
            lastXBidder = -1;
        }
    });
}

function renderMatrix() {
    const matrix = document.getElementById('matrix');
    matrix.innerHTML = '';
    for (let lv = 1; lv <= 7; lv++) {
        suits.forEach((s, sIdx) => {
            const btn = document.createElement('button');
            btn.className = `bid-btn suit-${suitNames[sIdx]}`;
            btn.innerHTML = `${lv}${s}`;
            
            const isDisabled = lv < currentBidLevel || (lv === currentBidLevel && sIdx <= currentBidSuit);
            if (isDisabled) btn.disabled = true;

            btn.onclick = () => makeBid(`${lv}${s}`, lv, sIdx);
            matrix.appendChild(btn);
        });
    }
}

// --- 【新增】尋找根節點到目標節點的路徑 ---
function findPathToNode(root, targetNode, path = []) {
    if (root === targetNode) return path;
    for (let child of root.children) {
        let res = findPathToNode(child, targetNode, [...path, child]);
        if (res) return res;
    }
    return null;
}

// --- 修復後的渲染樹狀分枝圖 ---
function renderTreeUI() {
    const container = document.getElementById('tree-container');
    if (!container) return;
    container.innerHTML = '';

    if (biddingTree.children.length === 0) {
        container.innerHTML = '<span style="color:#777; font-size:12px;">尚無叫牌紀錄</span>';
        return;
    }

    function buildTreeHTML(node) {
        const parentDiv = document.createElement('div');
        parentDiv.className = 'tree-node';

        node.children.forEach(child => {
            const childDiv = document.createElement('div');
            childDiv.style.margin = "4px 0";

            const isActive = currentPath.includes(child);
            const isCurrent = (currentNode === child);
            const isError = child.isError;

            childDiv.innerHTML = `
                <span class="tree-content ${isActive ? 'active' : ''} ${isError ? 'error' : ''}">
                    <strong>${isError ? '⚠️ ' : ''}[${child.pos}] ${child.val}</strong>
                    ${child.note ? `<span style="color:#aaa;">(${child.note})</span>` : ''}
                    ${isError ? `<span style="color:#ff8e8e; font-size:11px;"> [錯: ${child.errorMsg}]</span>` : ''}
                    ${isCurrent ? '👈 目前' : ''}
                </span>
                <button class="tree-btn warn" title="標記/修改錯誤提示">⚠️</button>
                <button class="tree-btn" title="修改備註">✏️</button>
                <button class="tree-btn del" title="刪除此節點及後續分枝">❌</button>
            `;

            const contentSpan = childDiv.querySelector('.tree-content');
            const warnBtn = childDiv.querySelectorAll('.tree-btn')[0];
            const editBtn = childDiv.querySelectorAll('.tree-btn')[1];
            const delBtn = childDiv.querySelectorAll('.tree-btn')[2];

            contentSpan.onclick = () => selectNode(child);

            // 標記/修改錯誤提示
            warnBtn.onclick = (e) => {
                e.stopPropagation();
                toggleErrorState(child);
            };

            editBtn.onclick = (e) => {
                e.stopPropagation();
                editNote(child);
            };

            delBtn.onclick = (e) => {
                e.stopPropagation();
                deleteNode(node, child);
            };

            if (child.children && child.children.length > 0) {
                const subTree = buildTreeHTML(child);
                childDiv.appendChild(subTree);
            }

            parentDiv.appendChild(childDiv);
        });

        return parentDiv;
    }

    container.appendChild(buildTreeHTML(biddingTree));
}
function toggleErrorState(node) {
    if (node.isError) {
        const action = confirm(`目前標記為錯誤叫品（提示：${node.errorMsg}）。\n\n按下「確定」修改錯誤提示，「取消」則清除錯誤標記。`);
        if (action) {
            const newMsg = prompt("修改錯誤提示訊息:", node.errorMsg);
            if (newMsg !== null) node.errorMsg = newMsg;
        } else {
            node.isError = false;
            node.errorMsg = "";
        }
    } else {
        const msg = prompt(`將 "${node.val}" 標記為錯誤叫品。\n請輸入錯誤提示與原因說明:`);
        if (msg !== null) {
            node.isError = true;
            node.errorMsg = msg || "此叫品為錯誤叫品。";
        }
    }
    refreshAllUI();
}
function selectNode(node) {
    const newPath = findPathToNode(biddingTree, node);
    if (newPath) {
        currentNode = node;
        currentPath = newPath;
        
        recalculateBiddingState();
        refreshAllUI();

        if (node.isError) {
            alert(`⚠️ 【叫牌錯誤警示】\n切換至錯誤叫品 [${node.pos}] ${node.val}！\n\n錯誤提示：${node.errorMsg}`);
        }
    }
}
// --- 【新增】修改備註 ---
function editNote(node) {
    const newNote = prompt(`修改 "${node.val}" 的備註:`, node.note || '');
    if (newNote !== null) {
        node.note = newNote;
        refreshAllUI();
    }
}

// --- 【新增】刪除節點及其分枝 ---
function deleteNode(parent, nodeToDelete) {
    if (confirm(`確定要刪除叫品 "${nodeToDelete.val}" 及其底下的所有分枝嗎？`)) {
        // 從父節點的 children 中移除
        parent.children = parent.children.filter(c => c !== nodeToDelete);

        // 如果目前選中的節點正好是被刪除的節點或其子節點，將指標移回父節點
        if (currentPath.includes(nodeToDelete)) {
            selectNode(parent === biddingTree ? biddingTree : parent);
        } else {
            refreshAllUI();
        }
    }
}

// 統一刷新所有 UI 面板
function refreshAllUI() {
    renderLogUI();
    renderTreeUI();
    renderMatrix();
    updateStatus();
}

// 執行叫牌動作並維護樹狀分枝結構
function makeBid(val, lv = null, sIdx = null) {
    const bidderPos = turnIndex % 4;
    
    if (val === 'X') lastXBidder = bidderPos;
    if (val === 'XX') lastXBidder = -1; 

    if (lv !== null) {
        currentBidLevel = lv;
        currentBidSuit = sIdx;
        lastRealBidder = bidderPos;
        lastXBidder = -1; 
    }

    let existingNode = currentNode.children.find(c => c.val === val);
    let newNode;
    
    if (existingNode) {
        newNode = existingNode;
    } else {
        // 新增 isError 與 errorMsg 屬性
        newNode = { 
            pos: positions[bidderPos], 
            val: val, 
            note: "", 
            isError: false, 
            errorMsg: "", 
            children: [] 
        };
        
        const note = prompt(`為 "${val}" 輸入備註或策略說明 (沒有可留空):`);
        if (note) newNode.note = note;
        
        // 詢問是否標記為錯誤叫品
        if (confirm(`要將 "${val}" 標記為「錯誤叫品」嗎？`)) {
            newNode.isError = true;
            newNode.errorMsg = prompt(`請輸入 "${val}" 的錯誤提示與原因說明:`) || "此叫品為不建議或錯誤的叫品。";
        }
        
        currentNode.children.push(newNode);
    }

    currentNode = newNode;
    currentPath.push(newNode);
    turnIndex++;
    
    // 若踩到錯誤叫品，發出警告
    if (newNode.isError) {
        alert(`⚠️ 【叫牌錯誤警示】\n[${newNode.pos}] 叫出了 ${newNode.val}！\n\n錯誤提示：${newNode.errorMsg}`);
    }

    refreshAllUI();
}

// 覆寫原本的 initGame 與 makeBid 呼叫
const originalInitGame = initGame;
initGame = function() {
    turnIndex = parseInt(document.getElementById('dealer-select').value);
    biddingTree = { val: "root", children: [] };
    currentNode = biddingTree;
    currentPath = [];
    
    currentBidLevel = 0;
    currentBidSuit = -1;
    lastRealBidder = -1;
    lastXBidder = -1;
    
    refreshAllUI();
};

const originalMakeBid = makeBid;
makeBid = function(val, lv = null, sIdx = null) {
    const bidderPos = turnIndex % 4;
    
    if (val === 'X') lastXBidder = bidderPos;
    if (val === 'XX') lastXBidder = -1; 

    if (lv !== null) {
        currentBidLevel = lv;
        currentBidSuit = sIdx;
        lastRealBidder = bidderPos;
        lastXBidder = -1; 
    }

    let existingNode = currentNode.children.find(c => c.val === val);
    let newNode;
    
    if (existingNode) {
        newNode = existingNode;
    } else {
        newNode = { pos: positions[bidderPos], val: val, note: "", children: [] };
        const note = prompt(`為 "${val}" 輸入備註或策略說明 (沒有可留空):`);
        if (note) newNode.note = note;
        
        currentNode.children.push(newNode);
    }

    currentNode = newNode;
    currentPath.push(newNode);
    turnIndex++;
    
    refreshAllUI();
};

function updateStatus() {
    const bidderPos = turnIndex % 4;
    document.getElementById('turn-display').innerText = `輪到：${positions[bidderPos]}`;
    
    const canX = (lastRealBidder !== -1 && lastRealBidder % 2 !== bidderPos % 2 && lastXBidder === -1);
    document.getElementById('btn-X').disabled = !canX;

    const canXX = (lastXBidder !== -1 && lastXBidder % 2 !== bidderPos % 2);
    document.getElementById('btn-XX').disabled = !canXX;
}
// 切換預覽小視窗開關
function toggleHandPreview() {
    const modal = document.getElementById('hand-preview-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        renderHandPreview();
        modal.style.display = 'flex';
    }
}

// 讀取 localStorage 並渲染手牌
function renderHandPreview() {
    const savedHands = localStorage.getItem('advance_current_hands');
    
    if (!savedHands) {
        document.getElementById('compass-container').innerHTML = 
            '<div style="grid-column: 1/4; text-align: center; color: #aaa; padding: 20px;">未找到暫存的手牌資料</div>';
        return;
    }

    const rawHandData = JSON.parse(savedHands);
    const positions = ['north', 'west', 'east', 'south'];
    const posNames = { north: '北 (N)', west: '西 (W)', east: '東 (E)', south: '南 (S)' };
    const suitsList = [
        { key: '♠', css: 'suit-S' },
        { key: '♥', css: 'suit-H' },
        { key: '♦', css: 'suit-D' },
        { key: '♣', css: 'suit-C' }
    ];

    const rankOrder = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, '10': 10, 'T': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2 };

    positions.forEach(pos => {
        const container = document.getElementById(`hand-pos-${pos}`);
        if (!container) return;

        let html = `<div class="hand-title">${posNames[pos]}</div>`;
        
        // 依照花色分類卡牌
        const handBySuit = { '♠': [], '♥': [], '♦': [], '♣': [] };
        if (rawHandData[pos] && Array.isArray(rawHandData[pos])) {
            rawHandData[pos].forEach(card => {
                if (handBySuit[card.suit]) {
                    const rankStr = (card.rank === '10') ? 'T' : card.rank;
                    handBySuit[card.suit].push(rankStr);
                }
            });
        }

        // 依大至小排序並輸出
        suitsList.forEach(s => {
            let cards = handBySuit[s.key] || [];
            cards.sort((a, b) => (rankOrder[b] || 0) - (rankOrder[a] || 0));
            const cardStr = cards.length > 0 ? cards.join('') : '—';
            
            html += `<div class="suit-line"><span class="${s.css}">${s.key}</span><span>${cardStr}</span></div>`;
        });

        container.innerHTML = html;
    });
}
// 暴露給 HTML 匯出 JSON 用的函數
window.getBiddingData = function() {
    return biddingTree.children;
};

initGame();