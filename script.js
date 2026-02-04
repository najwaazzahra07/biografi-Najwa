// Animasi untuk elemen saat di-scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe semua section
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Animasi untuk hobby cards saat diklik
const hobbyCards = document.querySelectorAll('.hobby-card');
hobbyCards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
        
        // Tambahkan efek konfetti
        createConfetti(this);
    });
});

// Fungsi untuk membuat efek konfetti
function createConfetti(element) {
    const colors = ['#ffeaa7', '#74b9ff', '#fd79a8', '#a29bfe', '#55efc4'];
    const confettiCount = 20;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        const rect = element.getBoundingClientRect();
        confetti.style.left = rect.left + rect.width / 2 + 'px';
        confetti.style.top = rect.top + rect.height / 2 + 'px';
        
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 3 + Math.random() * 3;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        animateConfetti(confetti, vx, vy);
    }
}

function animateConfetti(element, vx, vy) {
    let posX = parseFloat(element.style.left);
    let posY = parseFloat(element.style.top);
    let opacity = 1;
    
    function update() {
        posX += vx;
        posY += vy;
        opacity -= 0.02;
        
        element.style.left = posX + 'px';
        element.style.top = posY + 'px';
        element.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(update);
        } else {
            element.remove();
        }
    }
    
    update();
}

// Animasi teks berkedip untuk nama
const nameElement = document.querySelector('.name');
let isGlowing = false;

setInterval(() => {
    if (!isGlowing) {
        nameElement.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 2px 2px 8px rgba(0, 0, 0, 0.3)';
        isGlowing = true;
    } else {
        nameElement.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.3)';
        isGlowing = false;
    }
}, 2000);

// Animasi untuk profile image saat di-hover
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(5deg)';
    this.style.transition = 'transform 0.3s ease';
});

profileImage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});

// Tambahkan partikel mengambang di background
function createFloatingParticles() {
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.zIndex = '1';
        
        document.body.appendChild(particle);
        
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = 10000 + Math.random() * 10000;
    const startY = parseFloat(particle.style.top);
    const endY = startY - 100;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;
        
        const currentY = startY + (endY - startY) * progress;
        particle.style.top = currentY + '%';
        
        if (currentY < -10) {
            particle.style.top = '110%';
        }
        
        requestAnimationFrame(update);
    }
    
    update();
}

// Jalankan animasi partikel saat halaman dimuat
window.addEventListener('load', () => {
    createFloatingParticles();
    
    // Smooth scroll untuk animasi yang lebih halus
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Console message
console.log('🎨 Website Najwa Azzahra - Dibuat dengan penuh warna dan animasi!');
console.log('💻 Selamat datang di profil saya!');
