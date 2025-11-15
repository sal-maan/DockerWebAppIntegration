// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Theme toggle
var toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('light');
        localStorage.setItem(
            'theme',
            document.body.classList.contains('light') ? 'light' : 'dark'
        );
    });
}

// Load saved theme
(function () {
    var saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light');
    }
})();
