import MediaCarousel from '../components/MediaCarousel'

function MOTARCaseStudy() {
  return (
    <>
      <div className="cs-body">
        <nav className="cs-nav">
          <a href="/" className="cs-nav-logo">tylerwallace.dev</a>
          <a href="/#projects" className="cs-back">← Back to Projects</a>
        </nav>

        {/* HERO */}
        <div className="cs-hero">
          <div className="cs-hero-tag">Case Study — XR / Defense</div>
          <h1 className="cs-title">
            MOTAR <span>3D</span>
          </h1>
          <p className="cs-subtitle">
            Building the SDK and XR application layer for a fully-featured military training platform
            that cut Air Force course time nearly in half.
          </p>

          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <div className="cs-meta-label">Company</div>
              <div className="cs-meta-value">Dynepic, Inc</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Role</div>
              <div className="cs-meta-value">Software Engineer</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Timeline</div>
              <div className="cs-meta-value">2022 — 2025</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Presented At</div>
              <div className="cs-meta-value">IITSEC 2024</div>
            </div>
          </div>

          <div className="cs-stats">
            <div className="cs-stat">
              <div className="cs-stat-num">46%</div>
              <div className="cs-stat-desc">Reduction in training time — 27-day course to 12.5 days average</div>
            </div>
            <div className="cs-stat">
              <div className="cs-stat-num">93.5%</div>
              <div className="cs-stat-desc">Of trainees met or exceeded performance standards</div>
            </div>
            <div className="cs-stat">
              <div className="cs-stat-num">170+</div>
              <div className="cs-stat-desc">Lessons across 4 proficiency levels using 9 distinct media types</div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="cs-content">

          {/* BACKGROUND */}
          <div className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">01</span>
              <h2 className="cs-section-title">Background</h2>
            </div>
            <div className="cs-prose">
              <p>
                Air Force technical training has historically relied on videos, slideshows, and quizzes —
                passive formats that struggle to develop the hands-on skills required for complex maintenance
                and operational tasks. The <strong>MOTAR platform</strong> was built to change that: a fully-featured
                Learning Content Management System that allowed any approved vendor to host training
                applications and authorized users to access all relevant content from a single, cohesive platform.
              </p>
              <p>
                MOTAR's platform capabilities included group and solo user permission structures, asset
                delivery, version control, training analytics, and learner record management. My work focused
                on <strong>MOTAR 3D</strong> — the XR extension of the platform that brought immersive, interactive
                training into the VR and augmented reality space.
              </p>
            </div>
          </div>

          {/* MY ROLE */}
          <div className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">02</span>
              <h2 className="cs-section-title">My Role</h2>
            </div>
            <div className="cs-prose">
              <p>
                I owned the <strong>MOTAR 3D SDK</strong> — the layer that allowed developers and subject matter
                experts to build XR training applications on top of the MOTAR platform without needing
                deep Unity expertise. The SDK provided:
              </p>
              <p>
                <strong>Training progress reporting</strong> — real-time API communication with the MOTAR
                platform to track granular user actions: where they went, how long they took, what they
                interacted with, and in what sequence. Far beyond typical game-style progress saves,
                this created a rich analytical data layer for instructors and commanders.
              </p>
              <p>
                <strong>Platform authentication</strong> — secure, seamless user authentication connecting
                XR applications directly to the MOTAR permission and identity system.
              </p>
              <p>
                <strong>Out-of-the-box multiplayer</strong> — a novel capability in the XR training space,
                allowing collaborative training scenarios without requiring developers to implement
                networking infrastructure from scratch.
              </p>
              <p>
                <strong>Asset streaming</strong> — delivering 3D models and content from the MOTAR platform
                to XR applications at runtime, including support for disconnected server environments
                relevant to deployed military contexts.
              </p>
              <p>
                <strong>A cohesive build pipeline</strong> — standardizing how XR training applications
                were structured, built, and released, enabling subject matter experts with no Unity
                experience to create training content with minimal development overhead.
              </p>
            </div>
            <div className="cs-stack">
              {['Unity', 'C#', 'OpenXR', 'Meta Quest 3', 'Vive Focus 3', 'REST APIs', 'NPM', 'Git'].map(t => (
                <span className="cs-tag" key={t}>{t}</span>
              ))}
              {['Multiplayer Networking', 'Asset Streaming', 'SDK Development'].map(t => (
                <span className="cs-tag accent" key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* TECHNICAL CHALLENGES */}
          <div className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">03</span>
              <h2 className="cs-section-title">Technical Challenges</h2>
            </div>
            <div className="cs-prose">
              <p>
                The most significant technical challenge came from the platform's ambition around
                training analytics. Unlike a traditional video game that periodically saves progress,
                MOTAR 3D maintained <strong>active, continuous API communication</strong> with the platform
                throughout every training session — tracking every meaningful user action in real time.
              </p>
            </div>

            <div className="cs-callout">
              <p>
                <strong>The insight:</strong> A training platform needs to know not just whether a trainee
                completed a task, but <em>how</em> they completed it — the sequence of actions, the time
                taken at each step, the errors made and corrected. Building that data pipeline into
                a real-time 3D application without degrading performance required a fundamentally
                different architecture than typical game development patterns.
              </p>
            </div>

            <div className="cs-prose">
              <p>
                Building on the <strong>OpenXR framework</strong> for two distinct target devices — the
                Meta Quest 3 and the Vive Focus 3 — added cross-platform complexity. Each headset has
                different controller inputs, tracking capabilities, and rendering constraints. The SDK
                abstracted these differences so that application developers could build once and deploy
                to either device without platform-specific code.
              </p>
              <p>
                The <strong>multiplayer capability</strong> was particularly novel for the XR training
                space. Enabling collaborative training scenarios — where an instructor and trainee could
                inhabit the same virtual space simultaneously — required solving synchronization,
                latency, and state management challenges in a context where the stakes of getting it
                wrong were higher than a missed shot in a video game.
              </p>
            </div>
          </div>

          {/* DEMO APPLICATIONS */}
          <div className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">04</span>
              <h2 className="cs-section-title">Demo Applications</h2>
            </div>
            <div className="cs-prose">
              <p>
                I built a suite of demonstration applications to showcase the platform's capabilities
                at live events including <strong>IITSEC 2024</strong>, virtual demos, and targeted
                in-person presentations. Each demo was designed to show a specific capability in a
                realistic training context.
              </p>
            </div>
            <div className="cs-demos">
              <div className="cs-demo-card">
                <div className="cs-demo-icon">Medical Training</div>
                <h4>CPR Instruction & Practice</h4>
                <p>In-headset video CPR instructions followed by hands-on practice on a virtual patient — combining passive instruction with active skill application in a single session.</p>
              </div>
              <div className="cs-demo-card">
                <div className="cs-demo-icon">Maintenance</div>
                <h4>Aircraft Inspection</h4>
                <p>Immersive walkthrough of aircraft maintenance inspection procedures, replicating real-world task sequences in a risk-free virtual environment.</p>
              </div>
              <div className="cs-demo-card">
                <div className="cs-demo-icon">Logistics</div>
                <h4>Cargo Securing + In-VR Quiz</h4>
                <p>Hands-on cargo securing simulation inside a virtual cargo aircraft, followed by an integrated quiz — demonstrating assessment capabilities within the XR experience itself.</p>
              </div>
              <div className="cs-demo-card">
                <div className="cs-demo-icon">Asset Streaming + AR</div>
                <h4>EOD Disarming Procedure</h4>
                <p>Streamed a 3D disarming animation from a disconnected server to a VR headset, then transitioned to AR — overlaying the step-by-step animation alongside a real object for side-by-side reference. Showcased both asset streaming and AR capabilities simultaneously.</p>
              </div>
            </div>
          </div>

          {/* DEMO MEDIA */}
          <div className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">05</span>
              <h2 className="cs-section-title">Media</h2>
            </div>
            <MediaCarousel />
          </div>

          {/* OUTCOME */}
          <div className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">06</span>
              <h2 className="cs-section-title">Outcome</h2>
            </div>
            <div className="cs-outcome">
              <p>
                MOTAR was validated through a formal Air Force study involving two classes of Crew Chief
                Fundamentals students. The results were compelling: a <strong>46% reduction in training
                time</strong> — from a 27-day course to an average of 12.5 days — while achieving knowledge
                test scores within 7–8% of traditional instruction and <strong>93.5% of trainees meeting
                or exceeding performance standards</strong>.
              </p>
              <p>
                The platform delivered <strong>170+ lessons across 4 proficiency levels</strong> using
                9 distinct media types, validating immersive technology as a viable replacement for
                traditional classroom instruction at scale.
              </p>
              <p>
                Among its peer government solutions, MOTAR was consistently regarded as the most capable
                and modern platform. The work demonstrated that a small, focused engineering team could
                build defense-grade training infrastructure that meaningfully outperformed the incumbent
                solutions — and that immersive XR training, when built correctly, delivers measurably
                better outcomes than passive formats.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <div className="cs-bottom-nav">
          <a href="/#projects" className="cs-bottom-link">← All Projects</a>
          <a href="/" className="cs-bottom-link">tylerwallace.dev</a>
        </div>
      </div>
    </>
  );
}

export default MOTARCaseStudy;
