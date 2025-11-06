const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const filterBtns = document.querySelectorAll(".filter-btn");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Navigate images
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Filter Images
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");

        document.querySelectorAll(".gallery .image").forEach(img => {
            if (category === "all" || img.getAttribute("data-category") === category) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});
