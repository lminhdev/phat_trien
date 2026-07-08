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

document.addEventListener("DOMContentLoaded", function() {
    const spinBtn = document.getElementById('spinBtn');
    const wheel = document.getElementById('studyWheel');
    const spinResult = document.getElementById('spinResult');
    let currentDegree = 0;

    if (spinBtn && wheel) {
        spinBtn.addEventListener('click', function() {
            
            spinBtn.disabled = true;
            spinResult.style.color = '#9ca3af';
            spinResult.innerText = "MINH LÊ đang tính toán...";

            
            const randomSpins = Math.floor(Math.random() * 5) + 5; 
            const randomDegree = Math.floor(Math.random() * 360);
            const totalDegree = (randomSpins * 360) + randomDegree;
            
            currentDegree += totalDegree;
            
            
            wheel.style.transform = `rotate(${currentDegree}deg)`;

            
            setTimeout(() => {
                const actualDeg = currentDegree % 360;
                
                
                const pointerDeg = (360 - actualDeg) % 360;
                const adjustedDeg = (pointerDeg + 30) % 360;

                let resultText = "";
                if (adjustedDeg >= 0 && adjustedDeg < 60) resultText = "Học 10 từ vựng";
                else if (adjustedDeg >= 60 && adjustedDeg < 120) resultText = "Học 15 từ vựng";
                else if (adjustedDeg >= 120 && adjustedDeg < 180) resultText = "BOT";
                else if (adjustedDeg >= 180 && adjustedDeg < 240) resultText = "BOT";
                else if (adjustedDeg >= 240 && adjustedDeg < 300) resultText = "BOT";
                else resultText = "HỌC HỌC HỌC HỌC HỌC HỌC";

                spinResult.style.color = '#fbbf24';
                spinResult.innerText = `> ${resultText} <`;
                spinBtn.disabled = false;
            }, 4000);
        });
    }
});
