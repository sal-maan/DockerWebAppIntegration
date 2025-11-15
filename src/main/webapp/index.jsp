<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="header">
    <div class="container nav">
        <div class="logo">My<span>Portfolio</span></div>
        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
        <button id="themeToggle" class="btn-outline">Toggle Theme</button>
    </div>
</header>

<main class="container">
    <section class="hero">
        <div>
            <h1>Hello, I'm <span>Abdul Salman</span></h1>
            <p class="subtitle">
                A <strong>DevOps / Java / Web</strong> enthusiast building reliable and automated solutions.
            </p>
            <div class="hero-actions">
                <a href="#projects" class="btn-primary">View Projects</a>
                <a href="#contact" class="btn-secondary">Hire Me</a>
            </div>
        </div>
    </section>

    <section id="about" class="card">
        <h2>About Me</h2>
        <p>
            I am a detail-oriented engineer who loves automation, CI/CD, and building clean web applications.
            I enjoy working with Jenkins, Maven, Docker, and Tomcat to deliver production-ready software.
        </p>
    </section>

    <section id="skills" class="card">
        <h2>Skills</h2>
        <div class="skills-grid">
            <div class="skill-tag">Java</div>
            <div class="skill-tag">JSP / Servlets</div>
            <div class="skill-tag">Maven</div>
            <div class="skill-tag">Tomcat</div>
            <div class="skill-tag">Jenkins</div>
            <div class="skill-tag">Git</div>
            <div class="skill-tag">Docker</div>
            <div class="skill-tag">Linux</div>
        </div>
    </section>

    <section id="projects" class="card">
        <h2>Projects</h2>
        <div class="projects-grid">
            <article class="project">
                <h3>CI/CD Pipeline</h3>
                <p>
                    Automated build, test, and deployment of a Java web app using Jenkins, Maven, and Tomcat.
                </p>
            </article>
            <article class="project">
                <h3>Monitoring Dashboard</h3>
                <p>
                    Simple dashboard to visualize app health and logs, improving troubleshooting time.
                </p>
            </article>
            <article class="project">
                <h3>Cloud Migration</h3>
                <p>
                    Migrated on-prem services to cloud with containerized workloads using Docker.
                </p>
            </article>
        </div>
    </section>

    <section id="contact" class="card">
        <h2>Contact</h2>
        <p>You can reach me at:</p>
        <ul class="contact-list">
            <li>Email: <a href="mailto:abdulsalmaan9581@gmail.com">abdulsalmaan9581@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com" target="_blank">linkedin.com/in/yourprofile</a></li>
            <li>GitHub: <a href="https://github.com" target="_blank">github.com/yourusername</a></li>
        </ul>
    </section>
</main>

<footer class="footer">
    <div class="container">
        &copy; <%= java.time.Year.now() %> Your Name. All rights reserved.
    </div>
</footer>

<script src="script.js"></script>
</body>
</html>
