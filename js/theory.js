function showTab(index) {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        
        document.getElementById(`tab-${index}`).classList.add('active');
        document.querySelectorAll('.tab-btn')[index].classList.add('active');
        document.getElementById(`tab-${index}`).scrollTop = 0;
    }