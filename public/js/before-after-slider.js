// Before/After Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sliderCards = document.querySelectorAll('.before-after-slider-card');
    
    sliderCards.forEach(card => {
        const sliderContainer = card.querySelector('.slider-images');
        const sliderHandle = card.querySelector('.slider-handle');
        const sliderBefore = card.querySelector('.slider-image-before');
        
        let isDragging = false;
        
        function updateSlider(x) {
            const rect = sliderContainer.getBoundingClientRect();
            const offsetX = x - rect.left;
            const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
            
            // Update handle position
            sliderHandle.style.left = percentage + '%';
            
            // Update clip-path for before image
            sliderBefore.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        }
        
        function startDragging(e) {
            isDragging = true;
            sliderContainer.style.cursor = 'grabbing';
            updateSlider(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
        }
        
        function stopDragging() {
            isDragging = false;
            sliderContainer.style.cursor = 'ew-resize';
        }
        
        function onDrag(e) {
            if (!isDragging) return;
            e.preventDefault();
            updateSlider(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
        }
        
        // Mouse events
        sliderContainer.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDragging);
        
        // Touch events
        sliderContainer.addEventListener('touchstart', startDragging);
        document.addEventListener('touchmove', onDrag);
        document.addEventListener('touchend', stopDragging);
        
        // Click to move slider
        sliderContainer.addEventListener('click', (e) => {
            if (!isDragging) {
                updateSlider(e.clientX);
            }
        });
        
        // Prevent image dragging
        const images = sliderContainer.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });
    });
});
