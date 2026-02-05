// Мобильное меню
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрыть мобильное меню
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Анимация при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Наблюдаем за всеми секциями
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Интерактивность для SoC демо
document.querySelectorAll('.soc-component').forEach(component => {
    component.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.zIndex = '10';
    });
    
    component.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '1';
    });
});