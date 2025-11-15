// Smooth scroll for nav and buttons
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            e.preventDefault();
            const offset = 70; // header height
            const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking a link (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('show');
        });
    });
}

// Reveal on scroll (IntersectionObserver)
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealEls.forEach(el => observer.observe(el));
} else {
    // Fallback – just show all
    revealEls.forEach(el => el.classList.add('show'));
}

// Typewriter effect for subtitle
(function typewriterEffect() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const sentences = [
        'Designing reliable CI/CD pipelines, container platforms and cloud-native systems.',
        'Automating builds, tests and deployments so releases are fast and safe.',
        'Bridging the gap between development and operations with DevOps best practices.'
    ];

    let sentenceIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
        const current = sentences[sentenceIdx];
        if (!deleting) {
            charIdx++;
            if (charIdx >= current.length + 3) {
                deleting = true;
                setTimeout(tick, 1100);
                el.textContent = current;
                return;
            }
        } else {
            charIdx--;
            if (charIdx <= 0) {
                deleting = false;
                sentenceIdx = (sentenceIdx + 1) % sentences.length;
                setTimeout(tick, 300);
                el.textContent = '';
                return;
            }
        }

        el.textContent = current.slice(0, Math.max(charIdx, 0));
        const delay = deleting ? 35 : 55;
        setTimeout(tick, delay);
    }

    el.textContent = '';
    setTimeout(tick, 600);
})();
