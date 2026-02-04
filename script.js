// Animasi interaktif pada tombol
const btn = document.querySelector('.pulse');
if(btn) {
    btn.addEventListener('click', () => {
        btn.textContent = 'Terima kasih!';
        btn.style.background = 'linear-gradient(90deg, #43cea2, #185a9d)';
    });
}
