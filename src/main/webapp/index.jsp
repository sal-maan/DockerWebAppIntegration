<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DevOps Engineer | Your Name</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="bg-orbit"></div>

<header class="header">
    <div class="container nav">
        <div class="logo">Your<span>DevOps</span></div>
        <nav id="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#stack">Toolbox</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
        <button class="menu-btn" id="menuBtn">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>

<main class="container">
    <!-- HERO -->
    <section class="hero reveal">
        <div class="hero-text">
            <p class="eyebrow">🚀 DevOps Engineer</p>
            <h1>
                I automate
                <span class="gradient-text">builds</span>,
                <span class="gradient-text">deployments</span>,
                and <span class="gradient-text">infrastructure</span>.
            </h1>
            <p class="subtitle" id="typewriter">
                Designing reliable CI/CD pipelines, container platforms and cloud-native systems.
            </p>
            <div class="hero-actions">
                <a href="#projects" class="btn btn-primary">View My Work</a>
                <a href="#contact" class="btn btn-outline">Let’s Collaborate</a>
            </div>
            <div class="hero-tags">
                <span>Jenkins</span><span>Docker</span><span>Kubernetes</span><span>Linux</span><span>Monitoring</span>
            </div>
        </div>
        <div class="hero-badge">
            <div class="badge-ring"></div>
            <div class="badge-content">
                <span class="dot"></span>
                <p>CI/CD<br><span>On Every Commit</span></p>
            </div>
        </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="card section reveal">
        <h2>About Me</h2>
        <p>
            I’m a DevOps engineer focused on automation, scalability and reliability. I turn fragile,
            manual deployments into clean, repeatable pipelines and codify infrastructure so releases
            are boring, safe and fast.
        </p>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="card section reveal">
        <h2>Core Skills</h2>
        <div class="chips">
            <span class="chip">CI/CD Pipelines</span>
            <span class="chip">Infrastructure as Code</span>
            <span class="chip">Containerization</span>
            <span class="chip">Linux & Shell</span>
            <span class="chip">Monitoring & Alerting</span>
            <span class="chip">Cloud & Networking Basics</span>
        </div>
    </section>

    <!-- TOOLBOX -->
    <section id="stack" class="card section reveal">
        <h2>Toolbox</h2>
        <div class="columns">
            <div class="column-card">
                <h3>CI/CD & SCM</h3>
                <ul>
                    <li>Jenkins • GitHub Actions</li>
                    <li>Git • GitLab • Bitbucket</li>
                    <li>Maven • Gradle • npm</li>
                </ul>
            </div>
            <div class="column-card">
                <h3>Containers & Cloud</h3>
                <ul>
                    <li>Docker • Docker Compose</li>
                    <li>Kubernetes (basics)</li>
                    <li>AWS / Azure (basics)</li>
                </ul>
            </div>
            <div class="column-card">
                <h3>Ops & Observability</h3>
                <ul>
                    <li>Linux (RHEL / Ubuntu)</li>
                    <li>Prometheus • Grafana</li>
                    <li>ELK / Loki</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="card section reveal">
        <h2>Highlighted Projects</h2>
        <div class="grid">
            <article class="project">
                <h3>End-to-End CI/CD Pipeline</h3>
                <p>
                    Designed a Jenkins pipeline to build, test, run quality checks, build Docker images and
                    deploy to Tomcat on every push.
                </p>
                <p class="tech">Jenkins • Git • Maven • Docker • Tomcat</p>
            </article>
            <article class="project">
                <h3>Containerized Microservice Stack</h3>
                <p>
                    Dockerized multiple services with a shared network, reverse proxy and centralized logs
                    using ELK, ready for Kubernetes.
                </p>
                <p class="tech">Docker • Nginx • ELK • Compose</p>
            </article>
            <article class="project">
                <h3>Monitoring & Alerting Platform</h3>
                <p>
                    Deployed dashboards and alerts for app, infra and pipeline metrics to detect issues
                    before users notice.
                </p>
                <p class="tech">Prometheus • Grafana • Linux</p>
            </article>
        </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="card section reveal">
        <h2>Contact</h2>
        <p>If you’d like to discuss an opportunity or project, reach out:</p>
        <ul class="contact">
            <li>📧 Email: <a href="mailto:you@example.com">you@example.com</a></li>
            <li>🔗 LinkedIn: <a href="https://www.linkedin.com" target="_blank">linkedin.com/in/yourprofile</a></li>
            <li>💻 GitHub: <a href="https://github.com" target="_blank">github.com/yourusername</a></li>
        </ul>
    </section>
</main>

<footer class="footer">
    <div class="container">
        © 2025 Your Name · DevOps Engineer
    </div>
</footer>

<script src="script.js"></script>
</body>
</html>
