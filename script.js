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
