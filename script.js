// --- 导航栏滚动效果 ---
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // 当页面滚动超过 50 像素时
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--white-color)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// --- 滚动渐入动画 (新增) ---

// 1. 选择所有我们想要动画的板块
const sections = document.querySelectorAll('.section.hidden');

// 2. 创建一个观察者
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // 当目标元素进入视窗时
        if (entry.isIntersecting) {
            // 移除 'hidden' 类, 添加 'visible' 类
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
            
            // 动画触发后，停止观察该元素 (可选, 提高性能)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // 元素进入视窗 10% 时触发
});

// 3. 让观察者“观察”我们选择的所有板块
sections.forEach(section => {
    observer.observe(section);
});