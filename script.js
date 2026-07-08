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

document.addEventListener("DOMContentLoaded", function() {
    const hackBtn = document.getElementById('hackBtn');
    const vaultInput = document.getElementById('vaultInput');
    const vaultFeedback = document.getElementById('vaultFeedback');
    const terminalScreen = document.getElementById('terminalScreen');
    const secretContent = document.getElementById('secretContent');

    
    if (hackBtn) {
        hackBtn.addEventListener('click', attemptHack);
    }

    
    if (vaultInput) {
        vaultInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') attemptHack();
        });
    }

    function attemptHack() {
        
        const answer = vaultInput.value.replace(/\s+/g, '').toLowerCase();
        
        
        vaultFeedback.style.color = '#10b981';
        vaultFeedback.innerText = "> Đang tính toán đạo hàm hệ thống...";
        hackBtn.disabled = true;

        setTimeout(() => {
            
            if (answer === 'x=3' || answer === '3') {
                vaultFeedback.innerText = "> BYPASS THÀNH CÔNG. Đã đóng băng lõi tản nhiệt.";
                
                setTimeout(() => {
                    terminalScreen.style.display = 'none';
                    secretContent.style.display = 'block';
                }, 1000);
            
            
            } else if (answer === 'x=1' || answer === '1') {
                vaultFeedback.style.color = '#ef4444';
                vaultFeedback.innerText = "> CẢNH BÁO: Đó là điểm Cực đại! Bạn vừa làm nổ máy chủ vì nhiệt độ đạt đỉnh!";
            
            
            } else {
                vaultFeedback.style.color = '#ef4444';
                vaultFeedback.innerText = "> ACCESS DENIED: Tọa độ cực trị không chính xác.";
            }
            hackBtn.disabled = false;
        }, 800);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    const targetDate = new Date("June 11, 2027 00:00:00").getTime();

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minutesEl = document.getElementById("cd-minutes");
    const secondsEl = document.getElementById("cd-seconds");

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            daysEl.innerText = days < 10 ? "0" + days : days;
            hoursEl.innerText = hours < 10 ? "0" + hours : hours;
            minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
            secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;

            
            if (distance < 0) {
                clearInterval(timer);
                document.querySelector(".time-blocks").innerHTML = "<h3 style='color: #10b981; margin: 1rem 0;'>CHÚC BẠN LÀM BÀI THI THẬT TỐT! 🚀</h3>";
            }
        }, 1000);
    }
});
