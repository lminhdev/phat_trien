document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const folderCards = document.querySelectorAll('.folder-card');
    const itemCountDisplay = document.getElementById('itemCount');

    
    const updateItemCount = (count) => {
        if (itemCountDisplay) {
            itemCountDisplay.textContent = `${count} thư mục`;
        }
    };

    updateItemCount(folderCards.length);

    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            folderCards.forEach(card => {
                
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            updateItemCount(visibleCount);
        });
    }
});
// --- CYBER-VAULT LOGIC ---
document.addEventListener("DOMContentLoaded", function() {
    const hackBtn = document.getElementById('hackBtn');
    const vaultInput = document.getElementById('vaultInput');
    const vaultFeedback = document.getElementById('vaultFeedback');
    const terminalScreen = document.getElementById('terminalScreen');
    const secretContent = document.getElementById('secretContent');

    // Kích hoạt khi bấm nút HACK
    if (hackBtn) {
        hackBtn.addEventListener('click', attemptHack);
    }

    // Kích hoạt khi ấn phím Enter
    if (vaultInput) {
        vaultInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') attemptHack();
        });
    }

    function attemptHack() {
        // Lấy dữ liệu, xóa toàn bộ khoảng trắng và chuyển thành chữ thường
        const answer = vaultInput.value.replace(/\s+/g, '').toLowerCase();
        
        // Trạng thái đang xử lý
        vaultFeedback.style.color = '#10b981';
        vaultFeedback.innerText = "> Đang tính toán đạo hàm hệ thống...";
        hackBtn.disabled = true;

        setTimeout(() => {
            // Đáp án đúng: Điểm cực tiểu là x = 3
            if (answer === 'x=3' || answer === '3') {
                vaultFeedback.innerText = "> BYPASS THÀNH CÔNG. Đã đóng băng lõi tản nhiệt.";
                
                setTimeout(() => {
                    terminalScreen.style.display = 'none';
                    secretContent.style.display = 'block';
                }, 1000);
            
            // Bẫy lỗi: Nếu nhập x = 1 (Đây là điểm Cực đại)
            } else if (answer === 'x=1' || answer === '1') {
                vaultFeedback.style.color = '#ef4444';
                vaultFeedback.innerText = "> CẢNH BÁO: Đó là điểm Cực đại! Bạn vừa làm nổ máy chủ vì nhiệt độ đạt đỉnh!";
            
            // Xử lý khi nhập sai hoàn toàn
            } else {
                vaultFeedback.style.color = '#ef4444';
                vaultFeedback.innerText = "> ACCESS DENIED: Tọa độ cực trị không chính xác.";
            }
            hackBtn.disabled = false;
        }, 800); // Giả lập độ trễ xử lý 0.8 giây để tạo cảm giác hack thật
    }
});
