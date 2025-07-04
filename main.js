// Futuristic Portfolio JavaScript for Buddha Citta
class FuturisticPortfolio {
  constructor() {
    this.formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with actual Formspree ID
    this.selectedPlanet = 'mars';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupCosmicEffects();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupFormHandling();
    this.setupPlanetSelector();
    this.setupSkillAnimations();
    this.setupConsciousnessMap();
    this.setupCustomCursor();
  }

  setupEventListeners() {
    window.addEventListener('load', () => {
      this.initializeAnimations();
    });

    window.addEventListener('resize', () => {
      this.handleResize();
    });

    // Hero action buttons
    const exploreBtn = document.getElementById('explore-btn');
    const contactBtn = document.getElementById('contact-btn');

    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        this.smoothScrollTo('#about');
      });
    }

    if (contactBtn) {
      contactBtn.addEventListener('click', () => {
        this.smoothScrollTo('#contact');
      });
    }
  }

  setupCosmicEffects() {
    this.createFloatingParticles();
    this.setupNeuralNetwork();
    this.animateStars();
  }

  createFloatingParticles() {
    const cosmicBg = document.getElementById('cosmic-background');
    if (!cosmicBg) return;

    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particles';
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    `;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: ${this.getRandomColor()};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 20 + 10}s linear infinite;
        opacity: ${Math.random() * 0.8 + 0.2};
        box-shadow: 0 0 10px currentColor;
      `;
      particleContainer.appendChild(particle);
    }

    cosmicBg.appendChild(particleContainer);

    // Add particle animation CSS
    this.addParticleStyles();
  }

  getRandomColor() {
    const colors = ['#00ffff', '#ff00ff', '#ffd700', '#00ff88'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  addParticleStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0% { 
          transform: translateY(100vh) rotate(0deg); 
          opacity: 0; 
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { 
          transform: translateY(-100vh) rotate(360deg); 
          opacity: 0; 
        }
      }
    `;
    document.head.appendChild(style);
  }

  setupNeuralNetwork() {
    // Create animated neural network connections
    const neuralConnections = document.querySelector('.neural-connections');
    if (!neuralConnections) return;

    setInterval(() => {
      const connection = document.createElement('div');
      connection.style.cssText = `
        position: absolute;
        width: 2px;
        height: 50px;
        background: linear-gradient(to bottom, #00ffff, transparent);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: neuralPulse 2s ease-out forwards;
        pointer-events: none;
      `;
      
      neuralConnections.appendChild(connection);
      
      setTimeout(() => connection.remove(), 2000);
    }, 3000);

    // Add neural pulse animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes neuralPulse {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
      }
    `;
    document.head.appendChild(style);
  }

  animateStars() {
    const stars = document.querySelector('.stars');
    if (!stars) return;

    let offset = 0;
    const animateStarField = () => {
      offset += 0.5;
      stars.style.backgroundPosition = `${offset}px ${offset * 0.5}px`;
      requestAnimationFrame(animateStarField);
    };
    animateStarField();
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Update active nav link based on scroll position
    window.addEventListener('scroll', () => {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navControls = document.querySelector('.nav-controls');
    
    if (navToggle && navControls) {
      navToggle.addEventListener('click', () => {
        navControls.classList.toggle('active');
      });
    }

    // Smooth scroll for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        this.smoothScrollTo(target);
      });
    });
  }

  smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      const targetPosition = element.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function
        const ease = percentage < 0.5 
          ? 2 * percentage * percentage 
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }

  setupScrollEffects() {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.nav-system');

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Navigation hide/show
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;

      // Parallax effects
      this.updateParallax();
    });
  }

  updateParallax() {
    const scrolled = window.pageYOffset;
    
    // Avatar parallax
    const avatar = document.querySelector('.holographic-frame');
    if (avatar) {
      avatar.style.transform = `translateY(${scrolled * 0.1}px) rotateY(${scrolled * 0.1}deg)`;
    }

    // Consciousness map parallax
    const consciousnessMap = document.querySelector('.consciousness-map');
    if (consciousnessMap) {
      consciousnessMap.style.transform = `translateY(${scrolled * 0.05}px) rotateZ(${scrolled * 0.02}deg)`;
    }
  }

  setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Special animations for specific elements
          if (entry.target.classList.contains('skill-node')) {
            this.animateSkillLevel(entry.target);
          }
          
          if (entry.target.classList.contains('project-pod')) {
            const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('.data-stream, .skill-category, .project-pod, .stat-node');
    elementsToObserve.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s ease';
      observer.observe(element);
    });
  }

  setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleTransmission(contactForm);
      });
    }

    // Enhanced form interactions
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
        this.playFocusSound();
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });

      // Auto-resize textarea
      if (input.tagName === 'TEXTAREA') {
        input.addEventListener('input', () => {
          input.style.height = 'auto';
          input.style.height = input.scrollHeight + 'px';
        });
      }
    });
  }

  async handleTransmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show transmission animation
    this.startTransmissionAnimation();
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Transmitting...</span>';
    submitBtn.disabled = true;
    
    try {
      // Simulate transmission delay
      await this.simulateSpaceTransmission();
      
      // Try to send via Formspree
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        this.showTransmissionSuccess();
        form.reset();
        document.querySelectorAll('.form-field').forEach(field => {
          field.classList.remove('focused');
        });
      } else {
        throw new Error('Transmission failed');
      }
    } catch (error) {
      this.showTransmissionError();
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      this.resetTransmissionAnimation();
    }
  }

  async simulateSpaceTransmission() {
    const statusText = document.querySelector('.status-text');
    const signalBeam = document.querySelector('.signal-beam');
    const targetPlanet = document.querySelector('.target-planet');
    
    const planets = {
      mars: { emoji: '🔴', distance: '225M km', time: 2000 },
      jupiter: { emoji: '🟠', distance: '628M km', time: 3000 },
      saturn: { emoji: '🪐', distance: '1.4B km', time: 4000 },
      neptune: { emoji: '🔵', distance: '4.5B km', time: 5000 }
    };
    
    const planet = planets[this.selectedPlanet];
    targetPlanet.textContent = planet.emoji;
    
    // Animate transmission
    statusText.textContent = `Transmitting to ${this.selectedPlanet.charAt(0).toUpperCase() + this.selectedPlanet.slice(1)}...`;
    signalBeam.style.width = '100%';
    
    await new Promise(resolve => setTimeout(resolve, planet.time));
    
    statusText.textContent = `Signal reached ${this.selectedPlanet.charAt(0).toUpperCase() + this.selectedPlanet.slice(1)}!`;
  }

  startTransmissionAnimation() {
    const transmissionStatus = document.getElementById('transmission-status');
    transmissionStatus.style.background = 'rgba(0, 255, 255, 0.1)';
    transmissionStatus.style.borderColor = '#00ffff';
    transmissionStatus.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
  }

  resetTransmissionAnimation() {
    const transmissionStatus = document.getElementById('transmission-status');
    const signalBeam = document.querySelector('.signal-beam');
    const statusText = document.querySelector('.status-text');
    
    setTimeout(() => {
      transmissionStatus.style.background = '';
      transmissionStatus.style.borderColor = '';
      transmissionStatus.style.boxShadow = '';
      signalBeam.style.width = '0';
      statusText.textContent = 'Ready to transmit';
    }, 2000);
  }

  showTransmissionSuccess() {
    this.showNotification('🚀 Transmission successful! Message sent across the cosmos.', 'success');
  }

  showTransmissionError() {
    this.showNotification('⚠️ Transmission failed! Cosmic interference detected. Please try again.', 'error');
  }

  setupPlanetSelector() {
    const planetOptions = document.querySelectorAll('.planet-option');
    
    planetOptions.forEach(option => {
      option.addEventListener('click', () => {
        planetOptions.forEach(p => p.classList.remove('active'));
        option.classList.add('active');
        this.selectedPlanet = option.dataset.planet;
        
        // Update target planet in transmission status
        const targetPlanet = document.querySelector('.target-planet');
        const planetEmojis = {
          mars: '🔴',
          jupiter: '🟠',
          saturn: '🪐',
          neptune: '🔵'
        };
        targetPlanet.textContent = planetEmojis[this.selectedPlanet];
        
        this.playPlanetSelectSound();
      });
    });
  }

  setupSkillAnimations() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
      const level = skill.dataset.level;
      skill.style.setProperty('--level', level);
    });
  }

  animateSkillLevel(skillNode) {
    const skillLevel = skillNode.querySelector('.skill-level');
    if (skillLevel) {
      skillLevel.style.animation = 'skillLoad 2s ease-out';
    }
  }

  setupConsciousnessMap() {
    const mindNodes = document.querySelectorAll('.mind-node');
    
    mindNodes.forEach(node => {
      node.addEventListener('click', () => {
        mindNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        
        const aspect = node.dataset.aspect;
        this.showAspectInfo(aspect);
        this.playNodeActivationSound();
      });
      
      node.addEventListener('mouseenter', () => {
        this.createNodeConnection(node);
      });
    });
  }

  showAspectInfo(aspect) {
    const aspectInfo = {
      creativity: 'Creative Vision: Transforming imagination into digital reality',
      technology: 'Tech Mastery: Wielding cutting-edge tools with precision',
      mindfulness: 'Mindful Design: Conscious creation for human connection',
      innovation: 'Innovation: Pushing boundaries of what\'s possible'
    };
    
    this.showNotification(aspectInfo[aspect], 'info');
  }

  createNodeConnection(node) {
    const map = document.querySelector('.consciousness-map');
    const connection = document.createElement('div');
    connection.style.cssText = `
      position: absolute;
      width: 2px;
      height: 50px;
      background: linear-gradient(to bottom, #00ffff, transparent);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: connectionPulse 1s ease-out;
      pointer-events: none;
    `;
    
    map.appendChild(connection);
    setTimeout(() => connection.remove(), 1000);
  }

  setupCustomCursor() {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update CSS custom properties for cursor position
      document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
      document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
    });

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .project-pod, .skill-node, .mind-node, .planet-option');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'none';
        this.createCursorEffect();
      });
      
      element.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'none';
      });
    });
  }

  createCursorEffect() {
    const effect = document.createElement('div');
    effect.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid #00ffff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      left: var(--mouse-x);
      top: var(--mouse-y);
      transform: translate(-50%, -50%);
      animation: cursorRipple 0.6s ease-out;
    `;
    
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `quantum-notification notification-${type}`;
    
    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️'
    };
    
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${icons[type]}</span>
        <span class="notification-text">${message}</span>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: rgba(10, 10, 15, 0.95);
      color: #ffffff;
      border: 1px solid #00ffff;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      z-index: 10000;
      animation: slideInNotification 0.3s ease;
      max-width: 400px;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutNotification 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  playFocusSound() {
    // Create audio context for futuristic sounds
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
      const audioContext = new (AudioContext || webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  }

  playPlanetSelectSound() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
      const audioContext = new (AudioContext || webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    }
  }

  playNodeActivationSound() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
      const audioContext = new (AudioContext || webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.15);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    }
  }

  initializeAnimations() {
    // Initialize typing effect
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
      typingElement.style.animation = 'typeWriter 3s steps(11) 1s both, blink 1s infinite';
    }

    // Initialize hologram effects
    const hologramFrame = document.querySelector('.holographic-frame');
    if (hologramFrame) {
      hologramFrame.style.animation = 'hologramPulse 4s ease-in-out infinite';
    }

    // Initialize portal animation
    const portalRing = document.querySelector('.portal-ring');
    if (portalRing) {
      portalRing.style.animation = 'portalSpin 3s linear infinite';
    }
  }

  handleResize() {
    // Handle responsive adjustments
    const nav = document.querySelector('.nav-system');
    const navControls = document.querySelector('.nav-controls');
    
    if (window.innerWidth > 768) {
      navControls.classList.remove('active');
    }

    // Recalculate particle positions
    const particles = document.querySelectorAll('.floating-particles > div');
    particles.forEach(particle => {
      particle.style.left = Math.random() * 100 + '%';
    });
  }
}

// Enhanced Button Effects
class QuantumButtonEnhancer {
  constructor() {
    this.init();
  }

  init() {
    this.setupButtonEffects();
    this.setupHoverEffects();
  }

  setupButtonEffects() {
    const buttons = document.querySelectorAll('.quantum-btn, .transmission-btn, .project-launch');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        this.createQuantumRipple(e, button);
      });
      
      button.addEventListener('click', (e) => {
        this.createQuantumBurst(e, button);
      });
    });
  }

  setupHoverEffects() {
    // Project pod hover effects
    const projectPods = document.querySelectorAll('.project-pod');
    projectPods.forEach(pod => {
      pod.addEventListener('mouseenter', () => {
        pod.style.transform = 'translateY(-10px) scale(1.02)';
        this.createHoverGlow(pod);
      });
      
      pod.addEventListener('mouseleave', () => {
        pod.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Skill node hover effects
    const skillNodes = document.querySelectorAll('.skill-node');
    skillNodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const icon = node.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'scale(1.1) rotateY(15deg)';
        }
      });
      
      node.addEventListener('mouseleave', () => {
        const icon = node.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'scale(1) rotateY(0deg)';
        }
      });
    });
  }

  createQuantumRipple(e, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent);
      border-radius: 50%;
      transform: scale(0);
      animation: quantumRipple 0.6s ease-out;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  createQuantumBurst(e, button) {
    button.style.transform = 'scale(0.95)';
    
    // Create burst particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      const angle = (i / 8) * Math.PI * 2;
      const distance = 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: burstParticle 0.8s ease-out forwards;
        --burst-x: ${x}px;
        --burst-y: ${y}px;
        pointer-events: none;
      `;
      
      button.appendChild(particle);
      setTimeout(() => particle.remove(), 800);
    }
    
    setTimeout(() => {
      button.style.transform = '';
    }, 100);
  }

  createHoverGlow(element) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent);
      border-radius: 15px;
      pointer-events: none;
      z-index: -1;
      animation: glowPulse 2s ease-in-out infinite;
    `;
    
    element.style.position = 'relative';
    element.appendChild(glow);
    
    setTimeout(() => glow.remove(), 2000);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FuturisticPortfolio();
  new QuantumButtonEnhancer();
});

// Add additional CSS animations
const additionalStyles = `
  @keyframes slideInNotification {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutNotification {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  @keyframes quantumRipple {
    to { transform: scale(4); opacity: 0; }
  }
  
  @keyframes burstParticle {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(calc(-50% + var(--burst-x)), calc(-50% + var(--burst-y))) scale(0); opacity: 0; }
  }
  
  @keyframes glowPulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
  
  @keyframes connectionPulse {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
  }
  
  @keyframes cursorRipple {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Orbitron', monospace;
  }
  
  .notification-icon {
    font-size: 1.2rem;
  }
  
  /* Mobile Navigation Styles */
  @media (max-width: 768px) {
    .nav-controls {
      position: fixed;
      top: 80px;
      right: -100%;
      width: 100%;
      height: calc(100vh - 80px);
      background: rgba(10, 10, 15, 0.98);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      transition: right 0.3s ease;
      z-index: 999;
      backdrop-filter: blur(20px);
    }
    
    .nav-controls.active {
      right: 0;
    }
    
    .nav-link {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
    
    .stats-constellation {
      flex-direction: column;
      gap: 1rem;
    }
    
    .stat-node {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  
  /* Custom cursor for desktop */
  @media (min-width: 769px) {
    body::before {
      content: '';
      position: fixed;
      top: var(--mouse-y, 0);
      left: var(--mouse-x, 0);
      width: 20px;
      height: 20px;
      background: #00ffff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease;
      box-shadow: 0 0 20px #00ffff;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);