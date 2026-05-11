import './case-study.css'

function Portfolio() {
  return (
    <>
        <nav>
          <a href="#" className="nav-logo">
            tylerwallace.dev<span className="cursor"></span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="hero-glow2"></div>
          <div className="hero-content">
            <div className="hero-tag">Software Engineer</div>
            <h1>
              <span className="name-line">Tyler</span>
              <span className="name-line accent">Wallace</span>
            </h1>
            <p className="hero-desc">
              Building immersive XR training systems and AI-powered applications.
              Unity engineer with a defense background, moving toward the intersection
              of spatial computing and machine learning.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
            <div className="clearance-badge">
              <span className="clearance-dot"></span>
              DoD Top Secret Clearance Eligible
            </div>
            <div className="hero-stats">
              <div>
                <span className="stat-num">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div>
                <span className="stat-num">3</span>
                <span className="stat-label">Employers</span>
              </div>
              <div>
                <span className="stat-num">XR</span>
                <span className="stat-label">Primary Focus</span>
              </div>
              <div>
                <span className="stat-num">AI</span>
                <span className="stat-label">Current Pursuit</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>About</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a software engineer specializing in <strong>immersive XR development</strong> with
                a background building training simulations for the United States Air Force and
                defense-adjacent clients. My work lives at the intersection of real-time 3D,
                multiplayer systems, and human-centered design.
              </p>
              <p>
                After 6 years developing applications for the Air Force — from web platforms
                to full VR training systems — I moved into the private sector building Unity SDKs,
                mixed reality experiences, and VR device authentication systems.
              </p>
              <p>
                I'm currently pursuing a <strong>Bachelor's in Artificial Intelligence</strong>,
                and actively building toward the convergence of XR and AI.
              </p>
              <p>
                Relocating to <strong>San Antonio</strong>, <strong>Dallas–Fort Worth</strong>, or <strong>Orlando</strong>. Open to remote, hybrid, and in-person positions. Potentially open to other locations for the right role.
              </p>
            </div>
            <div className="about-stack">
              <div className="stack-group">
                <h3>Core Stack</h3>
                <div className="stack-tags">
                  {['Unity', 'C#', 'XR / VR', 'JavaScript', 'Git', 'NPM', 'REST APIs'].map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="stack-group">
                <h3>Web & Backend</h3>
                <div className="stack-tags">
                  {['PHP', 'HTML5 / CSS', 'MySQL', 'jQuery', 'Bootstrap'].map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="stack-group">
                <h3>Currently Learning</h3>
                <div className="stack-tags">
                  {['Python', 'Machine Learning', 'Unity ML-Agents', 'OpenAI API', 'Computer Vision'].map(tag => (
                    <span className="tag highlight" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">

            <div className="project-card">
              <div className="project-type">XR / Defense</div>
              <h3>MOTAR 3D</h3>
              <p>
                Building the SDK and XR application layer for an AI-assisted military training platform that cut Air Force course time nearly in half.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  {['Unity', 'C#', 'VR'].map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="/projects/motar" className="project-link">Case Study →</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-type">SDK / Tooling</div>
              <h3>Unity SDK Suite</h3>
              <p>
                Developed a suite of Unity SDKs for Dynepic to streamline training
                application creation across client projects, including digital asset
                integration and mixed reality asset streaming.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  {['Unity', 'SDK', 'NPM'].map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Case Study (Coming Soon)</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-type">Multiplayer / XR</div>
              <h3>Mixed Reality Multiplayer App</h3>
              <p>
                Multiplayer XR application showcasing advanced platform features
                including real-time mixed reality asset streaming across connected
                devices.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  {['Unity', 'Multiplayer', 'XR'].map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Case Study (Coming Soon)</a>
                </div>
              </div>
            </div>

            {/* <div className="project-card">
              <div className="project-type">AI / Experimental</div>
              <h3>[ Your Next Project ]</h3>
              <p>
                This is where your first AI-integrated project goes — Unity ML-Agents
                experiment, OpenAI API integration, or computer vision demo.
                Build it. Ship it. Put it here.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="project-tag" style={{ borderColor: 'var(--accent2)', color: 'var(--accent2)' }}>
                    Coming Soon
                  </span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/tylerwall20" className="project-link" target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="experience-list">

            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-date">2022 — Present</div>
                <div className="exp-company">Dynepic, Inc<br />Remote</div>
              </div>
              <div className="exp-content">
                <div className="exp-title">Software Engineer</div>
                <p className="exp-desc">
                  Building Unity SDKs, multiplayer XR applications, and VR device
                  authentication systems for defense and commercial training clients.
                  Led live demos and user training. Shipped via NPM with full Git
                  lifecycle management.
                </p>
                <div className="stack-tags">
                  {['Unity', 'C#', 'SDK Dev', 'XR', 'NPM'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-date">2020 — 2022</div>
                <div className="exp-company">US Air Force<br />Hill AFB, UT</div>
              </div>
              <div className="exp-content">
                <div className="exp-title">Software Developer</div>
                <p className="exp-desc">
                  Engineered VR training modules for Air Force personnel using Unity
                  and C#. Trained incoming Airmen in OOP and 3D development.
                  Built modular, reusable systems across multiple training scenarios.
                </p>
                <div className="stack-tags">
                  {['Unity', 'C#', 'VR', 'Training Systems'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-date">2017 — 2020</div>
                <div className="exp-company">US Air Force<br />Fort Meade, MD</div>
              </div>
              <div className="exp-content">
                <div className="exp-title">Operations Programmer</div>
                <p className="exp-desc">
                  Full-stack web development for mission-critical Air Force platforms.
                  Built end-to-end user experiences, derived requirements directly from
                  stakeholders, and engineered analytical data extraction capabilities.
                </p>
                <div className="stack-tags">
                  {['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="contact-inner">
            <div className="contact-text">
              <div className="section-header" style={{ marginBottom: '1rem' }}>
                <span className="section-num">04</span>
                <h2>Let's Talk</h2>
              </div>
              <p>
                I'm actively looking for remote software engineering roles,
                with a focus on XR, simulation, defense tech, and AI-adjacent
                development. Relocating to San Antonio, Dallas–Fort Worth, Orlando, or potentially other locations.
              </p>
              <p>
                Whether you have a role in mind or just want to connect —
                reach out.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:tylerwall20@gmail.com" className="contact-link">
                <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                tylerwall20@gmail.com
              </a>
              <a href="https://linkedin.com/in/tyler-wallace-20" target="_blank" rel="noreferrer" className="contact-link">
                <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                linkedin.com/in/tyler-wallace-20
              </a>
              <a href="https://github.com/tylerwall20" target="_blank" rel="noreferrer" className="contact-link">
                <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                github.com/tylerwall20
              </a>
              <a href="/Tyler_Wallace_Resume.pdf" className="contact-link" target="_blank">
                <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2026 Tyler Wallace — Built with React & intention.</p>
          {/* <p>Dallas–Fort Worth, TX (Relocation in Progress)</p> */}
        </footer>
      </>
  );
}

export default Portfolio;
