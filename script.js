// Content for each section
const sectionContent = {
    profil: {
        title: 'Profil',
        content: `
            <h2>Profil</h2>
            <p>Halo! Namaku Najwa Azzahra. Aku adalah mahasiswa yang sedang belajar di bidang teknologi informasi dan tertarik pada dunia jaringan komputer, pemrograman serta perangkat keras.</p>
            <p>Aku senang mengeksplorasi teknologi baru dan terus mengembangkan kemampuan di bidang IT. Passion-ku adalah membuat solusi teknologi yang dapat membantu orang lain.</p>
        `
    },
    pendidikan: {
        title: 'Pendidikan',
        content: `
            <h2>Pendidikan</h2>
            <div class="info-item">
                <h3>Mahasiswa Teknik Komputer/IT</h3>
                <p>Universitas Andalas</p>
                <span class="badge">Semester 3</span>
            </div>
            <p>Saat ini sedang menempuh pendidikan di Universitas Andalas dengan fokus pada bidang Teknik Komputer dan Teknologi Informasi. Mempelajari berbagai aspek teknologi dari software engineering, jaringan komputer, hingga hardware.</p>
        `
    },
    hobi: {
        title: 'Hobi',
        content: `
            <h2>Hobi</h2>
            <div class="hobby-list">
                <div class="hobby-item">
                    <div class="hobby-text">
                        <h4>Belajar hal baru</h4>
                        <p>Senang mempelajari teknologi dan skill baru</p>
                    </div>
                </div>
                <div class="hobby-item">
                    <div class="hobby-text">
                        <h4>Olahraga</h4>
                        <p>Menjaga kesehatan dengan aktivitas fisik</p>
                    </div>
                </div>
                <div class="hobby-item">
                    <div class="hobby-text">
                        <h4>Dengerin musik</h4>
                        <p>Menikmati berbagai genre musik</p>
                    </div>
                </div>
            </div>
        `
    },
    'cita-cita': {
        title: 'Cita-cita',
        content: `
            <h2>Cita-cita</h2>
            <div class="goal-box">
                <p>Ingin menjadi profesional di bidang teknologi dan terus mengembangkan skill di dunia IT.</p>
            </div>
            <p style="margin-top: 20px;">Bercita-cita untuk menjadi seorang IT professional yang kompeten dan mampu berkontribusi dalam perkembangan teknologi di Indonesia. Ingin terus belajar dan berinovasi dalam menciptakan solusi teknologi yang bermanfaat.</p>
        `
    }
};

// Get modal elements
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalOverlay = modal.querySelector('.modal-overlay');

// Get all section buttons
const sectionButtons = document.querySelectorAll('.section-btn');

// Open modal function
function openModal(sectionName) {
    const content = sectionContent[sectionName];
    if (content) {
        modalBody.innerHTML = content.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for section buttons
sectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionName = button.getAttribute('data-section');
        openModal(sectionName);
        
        // Add ripple effect
        createRipple(button);
    });
});

// Event listeners for closing modal
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Ripple effect function
function createRipple(element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    let scale = 0;
    let opacity = 0.6;
    
    function animate() {
        scale += 0.15;
        opacity -= 0.02;
        
        ripple.style.transform = `translate(-50%, -50%) scale(${scale})`;
        ripple.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            ripple.remove();
        }
    }
    
    animate();
}

// Profile image sparkle effect
function createFloatingParticles() {
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 6 + 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.zIndex = '0';
        particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        
        document.body.appendChild(particle);
        
        animateFloatingParticle(particle);
    }
}

function animateFloatingParticle(particle) {
    const duration = 20000 + Math.random() * 10000;
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const amplitude = 30 + Math.random() * 30;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;
        
        const currentY = startY + (progress * -120);
        const currentX = startX + Math.sin(progress * Math.PI * 3) * amplitude;
        
        particle.style.top = currentY + '%';
        particle.style.left = currentX + 'px';
        particle.style.opacity = 0.3 * (1 - progress);
        
        if (currentY < -10) {
            particle.style.top = '110%';
            particle.style.opacity = '0.3';
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize
window.addEventListener('load', () => {
    console.log('✨ Portfolio Najwa Azzahra');
    console.log('💡 Klik pada setiap tombol untuk melihat detailnya!');
});
