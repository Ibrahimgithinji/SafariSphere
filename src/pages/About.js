import React, { useEffect, useRef, useState } from 'react';
import '../css/pages.css';
import { teamMembers } from '../data/team';

const About = () => {
const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.animationId;
            setIsVisible(prev => ({ ...prev, [id]: true }));
            
            // Trigger counter animations for expertise section
            if (entry.target.dataset.counter === 'true') {
              animateCounter(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animation-id]');
    animatedElements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Animate counter numbers
  const animateCounter = (element) => {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + (element.dataset.suffix || '');
    }, 16);
  };

  // Parallax effect for hero background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="about-cinematic" role="main">
      {/* 1. Full-Width Hero Section */}
      <section 
        className="cinematic-hero"
        data-animation-id="hero"
        role="banner"
        aria-label="SafariSphere About Hero"
      >
        <div className="parallax-bg" data-speed="0.3" aria-hidden="true"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className={`hero-text ${isVisible.hero ? 'fade-in-up' : ''}`}>
            <h1 className="hero-title">
              <span className="title-line">Discover Africa</span>
              <span className="title-line accent">Through Our Eyes</span>
            </h1>
            <p className="hero-description">
              Where ancient wisdom meets modern luxury, creating journeys that transform 
              both traveler and destination. Welcome to SafariSphere – your gateway to 
              Africa's soul.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Life-Changing Journeys</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Guides</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" role="button" tabIndex="0" aria-label="Scroll to learn more">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>Discover Our Story</p>
        </div>
      </section>

      {/* 2. Who We Are - Mission/Vision/Values */}
      <section 
        className="who-we-are"
        data-animation-id="who-we-are"
        aria-labelledby="who-we-are-title"
      >
        <div className="container">
          <div className="section-header">
            <h2 id="who-we-are-title" className={`section-title ${isVisible['who-we-are'] ? 'fade-in' : ''}`}>
              Who We Are
            </h2>
            <p className={`section-subtitle ${isVisible['who-we-are'] ? 'fade-in-delay' : ''}`}>
              Crafting authentic African experiences that honor tradition while embracing luxury
            </p>
          </div>
          
          <div className="values-grid">
<article
              className={`value-card mission ${isVisible['who-we-are'] ? 'slide-in-left' : ''}`}
              tabIndex="0"
              aria-labelledby="mission-title"
            >
              <div className="value-icon" aria-hidden="true">
                <i className="fas fa-heart"></i>
              </div>
              <h3 id="mission-title">Our Mission</h3>
              <p>
                To create transformative safari experiences that connect travelers with Africa's 
                magnificent wildlife and rich cultural heritage while contributing to conservation 
                efforts and local community empowerment.
              </p>
            </article>

            <article
              className={`value-card vision ${isVisible['who-we-are'] ? 'slide-in-up' : ''}`}
              tabIndex="0"
              aria-labelledby="vision-title"
            >
              <div className="value-icon" aria-hidden="true">
                <i className="fas fa-binoculars"></i>
              </div>
              <h3 id="vision-title">Our Vision</h3>
              <p>
                To be the world's most respected safari company, setting the standard for 
                sustainable luxury travel that protects Africa's natural treasures for future generations.
              </p>
            </article>

            <article
              className={`value-card values ${isVisible['who-we-are'] ? 'slide-in-right' : ''}`}
              tabIndex="0"
              aria-labelledby="values-title"
            >
              <div className="value-icon" aria-hidden="true">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 id="values-title">Our Values</h3>
              <p>
                Sustainability, authenticity, and excellence drive everything we do. We believe 
                in responsible tourism that benefits both travelers and the destinations we explore.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Our Story - Two Column with Slide Animations */}
      <section 
        className="our-story"
        data-animation-id="our-story"
        aria-labelledby="our-story-title"
      >
        <div className="container">
          <div className="story-content">
            <div className={`story-text ${isVisible['our-story'] ? 'slide-in-left' : ''}`}>
              <h2 id="our-story-title" className="section-title">Our Story</h2>
              <div className="story-paragraphs">
                <p>
                  SafariSphere was born from a deep love for Africa's untamed beauty and a 
                  desire to share its magic with the world. Founded in 2009 by Sarah Mwaniki, 
                  our company began as a small passion project, guided by the wisdom of local 
                  Maasai elders and the expertise of seasoned safari guides.
                </p>
                <p>
                  What started as weekend expeditions to the Maasai Mara has evolved into a 
                  premium safari company that operates across East and Southern Africa. Today, 
                  we combine traditional African hospitality with modern luxury, ensuring every 
                  journey creates lasting memories while contributing to wildlife conservation.
                </p>
                <p>
                  Our commitment extends beyond tourism – we actively support 25+ conservation 
                  projects and work closely with local communities to ensure our presence 
                  creates positive impact for both people and wildlife.
                </p>
              </div>
              <div className="story-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">2009</span>
                  <span className="highlight-text">Founded with a vision</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">25+</span>
                  <span className="highlight-text">Conservation projects</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-text">Sustainable practices</span>
                </div>
              </div>
            </div>
            
            <div className={`story-image ${isVisible['our-story'] ? 'slide-in-right' : ''}`}>
              <div className="image-container">
                <img 
                  src="/images/about-journey.jpg" 
                  alt="SafariSphere team on a safari journey through African landscapes"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-play"></i>
                    <span>Watch Our Story</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Expertise - Grid with Animated Counters */}
      <section 
        className="our-expertise"
        data-animation-id="our-expertise"
        aria-labelledby="our-expertise-title"
      >
        <div className="container">
          <div className="section-header">
            <h2 id="our-expertise-title" className={`section-title ${isVisible['our-expertise'] ? 'fade-in' : ''}`}>
              Our Expertise
            </h2>
            <p className={`section-subtitle ${isVisible['our-expertise'] ? 'fade-in-delay' : ''}`}>
              Decades of combined experience in luxury African travel and conservation
            </p>
          </div>
          
          <div className="expertise-grid">
            <div 
              className={`expertise-item ${isVisible['our-expertise'] ? 'scale-in' : ''}`}
              tabIndex="0"
            >
              <div className="expertise-icon" aria-hidden="true">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Wildlife Conservation</h3>
              <p>Active partnerships with conservation organizations to protect endangered species and their habitats.</p>
            </div>
            
            <div 
              className={`expertise-item ${isVisible['our-expertise'] ? 'scale-in-delay' : ''}`}
              tabIndex="0"
            >
              <div className="expertise-icon" aria-hidden="true">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Local Knowledge</h3>
              <p>Intimate knowledge of African ecosystems, wildlife behaviors, and cultural traditions.</p>
            </div>
            
            <div 
              className={`expertise-item ${isVisible['our-expertise'] ? 'scale-in-delay-2' : ''}`}
              tabIndex="0"
            >
              <div className="expertise-icon" aria-hidden="true">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Luxury Service</h3>
              <p>Premium accommodations, gourmet dining, and personalized service throughout your journey.</p>
            </div>
            
            <div 
              className={`expertise-item ${isVisible['our-expertise'] ? 'scale-in-delay-3' : ''}`}
              tabIndex="0"
            >
              <div className="expertise-icon" aria-hidden="true">
                <i className="fas fa-helicopter"></i>
              </div>
              <h3>Unique Access</h3>
              <p>Helicopter safaris, private reserves, and exclusive wildlife viewing opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Team - Profile Grid with Staggered Reveal */}
      <section 
        className="meet-the-team"
        data-animation-id="meet-the-team"
        aria-labelledby="meet-the-team-title"
      >
        <div className="container">
          <div className="section-header">
            <h2 id="meet-the-team-title" className={`section-title ${isVisible['meet-the-team'] ? 'fade-in' : ''}`}>
              Meet the Team
            </h2>
            <p className={`section-subtitle ${isVisible['meet-the-team'] ? 'fade-in-delay' : ''}`}>
              The passionate experts behind every SafariSphere experience
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article 
                key={member.id}
                className={`team-card ${isVisible['meet-the-team'] ? `stagger-${index}` : ''}`}
                tabIndex="0"
                aria-labelledby={`team-member-${member.id}`}
              >
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-avatar.jpg';
                    }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-text">
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 id={`team-member-${member.id}`} className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-specialties">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA - Gradient Background with Interactive Effects */}
      <section 
        className="closing-cta"
        data-animation-id="closing-cta"
        aria-labelledby="closing-cta-title"
      >
        <div className="cta-background" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content">
            <h2 id="closing-cta-title" className={`cta-title ${isVisible['closing-cta'] ? 'fade-in-up' : ''}`}>
              Ready to Begin Your African Adventure?
            </h2>
            <p className={`cta-description ${isVisible['closing-cta'] ? 'fade-in-up-delay' : ''}`}>
              Join thousands of travelers who have discovered Africa's magic with SafariSphere. 
              Your journey of a lifetime starts with a single step.
            </p>
            <div className={`cta-buttons ${isVisible['closing-cta'] ? 'fade-in-up-delay-2' : ''}`}>
              <button 
                className="cta-primary"
                aria-label="Start planning your safari adventure"
              >
                <span>Plan Your Safari</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button 
                className="cta-secondary"
                aria-label="Download our travel brochure"
              >
                <span>Download Brochure</span>
                <i className="fas fa-download"></i>
              </button>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>+254 700 123 456</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>info@safarisphere.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;