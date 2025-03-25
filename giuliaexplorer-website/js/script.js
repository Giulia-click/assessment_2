document.addEventListener('DOMContentLoaded', function() {
    // Menu button for mobile navigation (if exists)
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            document.querySelector("nav ul").classList.toggle("show");
        });
    }

    // Category menu (only run if these elements exist)
    const categoryBtn = document.getElementById('category-btn');
    const categoryList = document.getElementById('category-list');

    if (categoryBtn && categoryList) {
        categoryBtn.addEventListener('click', function() {
            categoryList.classList.toggle('show');
            console.log("Toggled category dropdown");
        });

        const categoryItems = document.querySelectorAll('#category-list li');
        const categorySections = document.querySelectorAll('.category-section');

        console.log("Found category items:", categoryItems.length);
        console.log("Found category sections:", categorySections.length);

        if (categoryItems.length > 0 && categorySections.length > 0) {
            categoryItems.forEach(item => {
                item.addEventListener('click', function() {
                    const selectedCategory = this.getAttribute('data-category');
                    console.log("Selected category:", selectedCategory);
                    // Hide dropdown after selection
                    categoryList.classList.remove('show');

                    // Show only the section matching the selected category
                    categorySections.forEach(section => {
                        if (section.getAttribute('data-category') === selectedCategory) {
                            section.style.display = 'block';
                            console.log("Showing section:", selectedCategory);
                        } else {
                            section.style.display = 'none';
                        }
                    });
                });
            });
        }
    }
    // Removed the else block so no error message is logged on pages without category elements

    // Slider button functionality (for learn page)
    const sliderBtns = document.querySelectorAll('.slider-btn');
    sliderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sliderId = this.getAttribute('data-slider');
            const slider = document.getElementById(sliderId);
            if (slider) {
                if (this.classList.contains('next')) {
                    slider.scrollBy({ left: 220, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: -220, behavior: 'smooth' });
                }
            }
        });
    });
});
