// Buddha Citta Portfolio v3.0 - Advanced Interactive Experience
class FuturisticPortfolio {
  constructor() {
    this.formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with actual Formspree ID
    this.selectedPlanet = 'mars';
    this.birthDate = new Date(2003, 8, 26); // September 26, 2003 (month is 0-indexed)
    this.currentPage = 0;
    this.resultsPerPage = 10;
    this.allBlogResults = [];
    this.currentSearchTerm = '';
    this.blogFiles = []; // Will store actual blog file data
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
    this.setupBioDataUpdates();
    this.setupBlogSearch();
    this.setupAdvancedAnimations();
    this.loadBlogFiles();
  }

  async loadBlogFiles() {
    // Define the blog files to load
    const blogFileNames = [
      'blog/index.html',
      'blog/blog1.html',
      'blog/blog2.html',
      'blog/blog3.html'
    ];

    try {
      for (const fileName of blogFileNames) {
        try {
          const response = await fetch(fileName);
          if (response.ok) {
            const content = await response.text();
            this.blogFiles.push({
              url: fileName,
              content: content,
              title: this.extractTitle(content),
              excerpt: this.extractExcerpt(content)
            });
          }
        } catch (error) {
          console.log(`Could not load ${fileName}:`, error);
        }
      }
    } catch (error) {
      console.log('Error loading blog files:', error);
    }
  }

  extractTitle(htmlContent) {
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) {
      return titleMatch[1].replace(' | Buddha Citta Blog', '').trim();
    }
    
    const h1Match = htmlContent.match(/<h1[^>]*>.*?<span[^>]*>(.*?)<\/span>.*?<\/h1>/i);
    if (h1Match) {
      return h1Match[1].trim();
    }
    
    return 'Untitled Blog Post';
  }

  extractExcerpt(htmlContent) {
    // Try to find the first paragraph in the article body
    const articleMatch = htmlContent.match(/<article[^>]*>(.*?)<\/article>/is);
    if (articleMatch) {
      const pMatch = articleMatch[1].match(/<p[^>]*>(.*?)<\/p>/i);
      if (pMatch) {
        return pMatch[1].replace(/<[^>]*>/g, '').trim().substring(0, 200) + '...';
      }
    }
    
    return 'Exploring the fascinating intersection of technology and consciousness...';
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
    this.setupQuantumField();
  }

  setupQuantumField() {
    const quantumField = document.querySelector('.quantum-field');
    if (!quantumField) return;

    let offset = 0;
    const animateQuantumField = () => {
      offset += 0.2;
      quantumField.style.backgroundPosition = `${offset}px ${offset * 0.5}px`;
      requestAnimationFrame(animateQuantumField);
    };
    animateQuantumField();
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

    const navToggle = document.querySelector('.nav-toggle');
    const navControls = document.querySelector('.nav-controls');
    
    if (navToggle && navControls) {
      navToggle.addEventListener('click', () => {
        navControls.classList.toggle('active');
      });
    }

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
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
      this.updateParallax();
    });
  }

  updateParallax() {
    const scrolled = window.pageYOffset;
    
    const avatar = document.querySelector('.holographic-frame');
    if (avatar) {
      avatar.style.transform = `translateY(${scrolled * 0.1}px) rotateY(${scrolled * 0.1}deg)`;
    }

    const consciousnessMap = document.querySelector('.consciousness-map');
    if (consciousnessMap) {
      consciousnessMap.style.transform = `translateY(${scrolled * 0.05}px) rotateZ(${scrolled * 0.02}deg)`;
    }
  }

  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
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

    const elementsToObserve = document.querySelectorAll('.data-stream, .skill-category, .project-pod, .stat-node, .stat-card');
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
    
    this.startAdvancedTransmissionAnimation();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Transmitting...</span>';
    submitBtn.disabled = true;
    
    try {
      await this.simulateAdvancedSpaceTransmission();
      
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        this.showTransmissionSuccess();
        this.createSuccessParticles();
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

  async simulateAdvancedSpaceTransmission() {
    const statusText = document.querySelector('.status-text');
    const signalBeam = document.querySelector('.signal-beam');
    const messagePacket = document.getElementById('message-packet');
    const transmissionProgress = document.getElementById('transmission-progress');
    const progressFill = transmissionProgress.querySelector('.progress-fill');
    const progressText = transmissionProgress.querySelector('.progress-text');
    
    const planets = {
      mars: { emoji: '🔴', distance: '225M km', time: 10000 },
      jupiter: { emoji: '🟠', distance: '628M km', time: 12000 },
      saturn: { emoji: '🪐', distance: '1.4B km', time: 15000 },
      neptune: { emoji: '🔵', distance: '4.5B km', time: 18000 }
    };
    
    const planet = planets[this.selectedPlanet];
    const targetPlanet = document.querySelector('.target-planet');
    targetPlanet.textContent = planet.emoji;
    
    // Show progress bar
    transmissionProgress.classList.add('active');
    
    // Phase 1: Initializing
    statusText.textContent = 'Initializing quantum transmission...';
    await this.updateProgress(progressFill, progressText, 0, 20, 2000);
    
    // Phase 2: Encoding
    statusText.textContent = 'Encoding message into quantum packets...';
    await this.updateProgress(progressFill, progressText, 20, 40, 2000);
    
    // Phase 3: Launching
    statusText.textContent = `Launching to ${this.selectedPlanet.charAt(0).toUpperCase() + this.selectedPlanet.slice(1)}...`;
    messagePacket.classList.add('active');
    signalBeam.style.width = '100%';
    await this.updateProgress(progressFill, progressText, 40, 70, 3000);
    
    // Phase 4: Traveling
    statusText.textContent = `Message traveling through space (${planet.distance})...`;
    await this.updateProgress(progressFill, progressText, 70, 90, 4000);
    
    // Phase 5: Delivered
    statusText.textContent = `Signal reached ${this.selectedPlanet.charAt(0).toUpperCase() + this.selectedPlanet.slice(1)}!`;
    await this.updateProgress(progressFill, progressText, 90, 100, 1000);
    
    // Final confirmation
    setTimeout(() => {
      statusText.textContent = 'Transmission successful! Buddha Citta will respond soon.';
    }, 1000);
  }

  async updateProgress(progressFill, progressText, startPercent, endPercent, duration) {
    return new Promise(resolve => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentPercent = startPercent + (endPercent - startPercent) * progress;
        
        progressFill.style.width = `${currentPercent}%`;
        progressText.textContent = `${Math.round(currentPercent)}%`;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      animate();
    });
  }

  startAdvancedTransmissionAnimation() {
    const transmissionStatus = document.getElementById('transmission-status');
    transmissionStatus.style.background = 'rgba(0, 255, 255, 0.1)';
    transmissionStatus.style.borderColor = '#00ffff';
    transmissionStatus.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
  }

  resetTransmissionAnimation() {
    const transmissionStatus = document.getElementById('transmission-status');
    const signalBeam = document.querySelector('.signal-beam');
    const statusText = document.querySelector('.status-text');
    const messagePacket = document.getElementById('message-packet');
    const transmissionProgress = document.getElementById('transmission-progress');
    const progressFill = transmissionProgress.querySelector('.progress-fill');
    const progressText = transmissionProgress.querySelector('.progress-text');
    
    setTimeout(() => {
      transmissionStatus.style.background = '';
      transmissionStatus.style.borderColor = '';
      transmissionStatus.style.boxShadow = '';
      signalBeam.style.width = '0';
      messagePacket.classList.remove('active');
      transmissionProgress.classList.remove('active');
      progressFill.style.width = '0%';
      progressText.textContent = '0%';
      statusText.textContent = 'Ready to transmit';
    }, 3000);
  }

  createSuccessParticles() {
    const transmissionStatus = document.getElementById('transmission-status');
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: #00ff88;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        pointer-events: none;
        animation: successParticle 2s ease-out forwards;
        animation-delay: ${i * 0.1}s;
      `;
      
      transmissionStatus.appendChild(particle);
      setTimeout(() => particle.remove(), 2000);
    }
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes successParticle {
        0% { 
          opacity: 1; 
          transform: translate(-50%, -50%) scale(0); 
        }
        50% { 
          opacity: 1; 
          transform: translate(calc(-50% + ${Math.random() * 200 - 100}px), calc(-50% + ${Math.random() * 200 - 100}px)) scale(1); 
        }
        100% { 
          opacity: 0; 
          transform: translate(calc(-50% + ${Math.random() * 400 - 200}px), calc(-50% + ${Math.random() * 400 - 200}px)) scale(0); 
        }
      }
    `;
    document.head.appendChild(style);
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
    const cursor = document.getElementById('custom-cursor');
    const cursorCore = cursor.querySelector('.cursor-core');
    const cursorTrail = cursor.querySelector('.cursor-trail');
    const cursorParticles = cursor.querySelector('.cursor-particles');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    };
    updateCursor();

    // Create cursor particles
    setInterval(() => {
      this.createCursorParticle(cursorParticles, cursorX, cursorY);
    }, 100);

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .project-pod, .skill-node, .mind-node, .planet-option, .blog-result');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(2)';
        this.createCursorRipple(cursorX, cursorY);
      });
      
      element.addEventListener('mouseleave', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }

  createCursorParticle(container, x, y) {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    particle.style.cssText = `
      left: ${Math.random() * 40 - 20}px;
      top: ${Math.random() * 40 - 20}px;
      --random-x: ${Math.random() * 40 - 20}px;
      --random-y: ${Math.random() * 40 - 20}px;
    `;
    
    container.appendChild(particle);
    setTimeout(() => particle.remove(), 2000);
  }

  createCursorRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 40px;
      height: 40px;
      border: 2px solid #00ffff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      animation: cursorRipple 0.6s ease-out;
    `;
    
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  setupBioDataUpdates() {
    this.updateBioData();
    setInterval(() => {
      this.updateBioData();
    }, 1000);
  }

  updateBioData() {
    const now = new Date();
    const age = this.calculateAge(this.birthDate, now);
    const lifeStats = this.calculateLifeStats(this.birthDate, now);
    
    // Update age displays
    const currentAgeElement = document.getElementById('current-age');
    const detailedAgeElement = document.getElementById('detailed-age');
    
    if (currentAgeElement) {
      currentAgeElement.textContent = age.years;
    }
    
    if (detailedAgeElement) {
      detailedAgeElement.textContent = 
        `${age.years} years, ${age.months} months, ${age.days} days`;
    }
    
    // Update life statistics
    const daysLivedElement = document.getElementById('days-lived');
    const heartbeatsElement = document.getElementById('heartbeats');
    const earthRotationsElement = document.getElementById('earth-rotations');
    const solarOrbitsElement = document.getElementById('solar-orbits');
    
    if (daysLivedElement) {
      daysLivedElement.textContent = lifeStats.daysLived.toLocaleString();
    }
    
    if (heartbeatsElement) {
      heartbeatsElement.textContent = Math.round(lifeStats.heartbeats / 1000000) + 'M';
    }
    
    if (earthRotationsElement) {
      earthRotationsElement.textContent = lifeStats.daysLived.toLocaleString();
    }
    
    if (solarOrbitsElement) {
      solarOrbitsElement.textContent = age.years;
    }
    
    // Update life progress
    const lifeExpectancy = 80; // Assuming 80 years life expectancy
    const lifeProgress = (age.years / lifeExpectancy) * 100;
    const lifeProgressElement = document.getElementById('life-progress');
    const lifePercentageElement = document.getElementById('life-percentage');
    
    if (lifeProgressElement) {
      lifeProgressElement.style.width = `${Math.min(lifeProgress, 100)}%`;
    }
    
    if (lifePercentageElement) {
      lifePercentageElement.textContent = `${lifeProgress.toFixed(1)}%`;
    }
  }

  calculateAge(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    
    if (days < 0) {
      months--;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    return { years, months, days };
  }

  calculateLifeStats(birthDate, currentDate) {
    const timeDiff = currentDate.getTime() - birthDate.getTime();
    const daysLived = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const heartbeats = daysLived * 24 * 60 * 100; // Assuming 100 beats per minute
    
    return { daysLived, heartbeats };
  }

  setupBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const searchBtn = document.getElementById('search-trigger');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!searchInput) return; // Exit if not on a page with blog search
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.performBlogSearch(e.target.value);
      }, 500);
    });
    
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.performBlogSearch(searchInput.value);
      });
    }
    
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        this.loadMoreResults();
      });
    }
    
    // Initial search to show some results
    this.performBlogSearch('');
  }

  async performBlogSearch(searchTerm) {
    const loadingState = document.getElementById('search-loading');
    const resultsContainer = document.getElementById('results-container');
    const searchResultsCount = document.getElementById('search-results-count');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!loadingState || !resultsContainer) return; // Exit if elements don't exist
    
    this.currentSearchTerm = searchTerm;
    this.currentPage = 0;
    
    // Show loading
    loadingState.style.display = 'flex';
    resultsContainer.innerHTML = '';
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Search in actual blog files if available, otherwise use mock data
    if (this.blogFiles.length > 0) {
      this.allBlogResults = this.searchInBlogFiles(searchTerm);
    } else {
      this.allBlogResults = this.generateMockBlogResults(searchTerm);
    }
    
    // Hide loading
    loadingState.style.display = 'none';
    
    // Update results count
    if (searchResultsCount) {
      searchResultsCount.textContent = `${this.allBlogResults.length} results found`;
    }
    
    // Display first page of results
    this.displayResults();
  }

  searchInBlogFiles(searchTerm) {
    if (!searchTerm.trim()) {
      // Return all blog files if no search term
      return this.blogFiles.map((file, index) => ({
        id: index + 1,
        title: file.title,
        excerpt: file.excerpt,
        url: file.url,
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
        readTime: Math.floor(Math.random() * 10) + 3
      }));
    }

    const results = [];
    const searchTermLower = searchTerm.toLowerCase();

    this.blogFiles.forEach((file, index) => {
      const titleMatch = file.title.toLowerCase().includes(searchTermLower);
      const contentMatch = file.content.toLowerCase().includes(searchTermLower);
      const excerptMatch = file.excerpt.toLowerCase().includes(searchTermLower);

      if (titleMatch || contentMatch || excerptMatch) {
        results.push({
          id: index + 1,
          title: file.title,
          excerpt: file.excerpt,
          url: file.url,
          date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
          readTime: Math.floor(Math.random() * 10) + 3
        });
      }
    });

    return results;
  }

  generateMockBlogResults(searchTerm) {
    const blogTopics = [
      'Quantum Computing and Web Development',
      'AI-Driven User Interface Design',
      'The Future of Virtual Reality',
      'Blockchain Technology in Creative Industries',
      'Mindful Design Principles',
      'Neural Networks and Creative AI',
      'Sustainable Technology Solutions',
      'Digital Consciousness and Ethics',
      'Metaverse Architecture Patterns',
      'Quantum UI/UX Paradigms',
      'Biometric Authentication Systems',
      'Holographic Display Technologies',
      'Space-Age Web Development',
      'Consciousness-Driven Design',
      'Digital Meditation Platforms',
      'Cosmic Web Architecture',
      'Interplanetary Communication Protocols',
      'Quantum Entanglement in Networks',
      'Galactic User Experience Design',
      'Time-Dilated Interface Systems'
    ];
    
    const results = [];
    
    blogTopics.forEach((topic, index) => {
      if (!searchTerm || topic.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({
          id: index + 1,
          title: topic,
          excerpt: `Exploring the fascinating intersection of ${topic.toLowerCase()} and human consciousness. This article delves deep into the practical applications and philosophical implications of modern technology.`,
          url: `blog/blog${index + 1}.html`,
          date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
          readTime: Math.floor(Math.random() * 10) + 3
        });
      }
    });
    
    return results;
  }

  displayResults() {
    const resultsContainer = document.getElementById('results-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!resultsContainer) return;
    
    const startIndex = this.currentPage * this.resultsPerPage;
    const endIndex = startIndex + this.resultsPerPage;
    const pageResults = this.allBlogResults.slice(startIndex, endIndex);
    
    pageResults.forEach((result, index) => {
      const resultElement = this.createBlogResultElement(result);
      resultElement.style.opacity = '0';
      resultElement.style.transform = 'translateY(20px)';
      resultsContainer.appendChild(resultElement);
      
      // Animate in
      setTimeout(() => {
        resultElement.style.transition = 'all 0.5s ease';
        resultElement.style.opacity = '1';
        resultElement.style.transform = 'translateY(0)';
      }, index * 100);
    });
    
    // Show load more button if there are more results
    if (loadMoreBtn) {
      if (endIndex < this.allBlogResults.length) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
    
    this.currentPage++;
  }

  createBlogResultElement(result) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'blog-result';
    resultDiv.innerHTML = `
      <h4>${result.title}</h4>
      <p>${result.excerpt}</p>
      <div class="blog-meta">
        <span class="blog-date">${result.date} • ${result.readTime} min read</span>
        <span class="blog-url">${result.url}</span>
      </div>
    `;
    
    resultDiv.addEventListener('click', () => {
      window.open(result.url, '_blank');
      this.createClickEffect(resultDiv);
    });
    
    return resultDiv;
  }

  createClickEffect(element) {
    const rect = element.getBoundingClientRect();
    const effect = document.createElement('div');
    effect.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      width: 100px;
      height: 100px;
      border: 2px solid #00ffff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0);
      animation: clickRipple 0.6s ease-out;
    `;
    
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
  }

  loadMoreResults() {
    this.displayResults();
  }

  setupAdvancedAnimations() {
    // DNA Helix animation
    const dnaHelix = document.querySelector('.dna-helix');
    if (dnaHelix) {
      setInterval(() => {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00ffff;
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: dnaParticleFloat 3s ease-out forwards;
          pointer-events: none;
        `;
        
        dnaHelix.appendChild(particle);
        setTimeout(() => particle.remove(), 3000);
      }, 2000);
    }

    // Project hover effects
    const projectPods = document.querySelectorAll('.project-pod');
    projectPods.forEach(pod => {
      pod.addEventListener('mouseenter', () => {
        this.createFloatingElements(pod);
      });
    });
  }

  createFloatingElements(container) {
    for (let i = 0; i < 5; i++) {
      const element = document.createElement('div');
      element.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: #00ffff;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatUp 2s ease-out forwards;
        pointer-events: none;
        z-index: 10;
      `;
      
      container.appendChild(element);
      setTimeout(() => element.remove(), 2000);
    }
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
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
      typingElement.style.animation = 'typeWriter 3s steps(11) 1s both, blink 1s infinite';
    }

    const hologramFrame = document.querySelector('.holographic-frame');
    if (hologramFrame) {
      hologramFrame.style.animation = 'hologramPulse 4s ease-in-out infinite';
    }

    const portalRing = document.querySelector('.portal-ring');
    if (portalRing) {
      portalRing.style.animation = 'portalSpin 3s linear infinite';
    }
  }

  handleResize() {
    const nav = document.querySelector('.nav-system');
    const navControls = document.querySelector('.nav-controls');
    
    if (window.innerWidth > 768) {
      if (navControls) navControls.classList.remove('active');
    }

    const particles = document.querySelectorAll('.floating-particles > div');
    particles.forEach(particle => {
      particle.style.left = Math.random() * 100 + '%';
    });
  }
}

// Enhanced Button Effects v3.0
class QuantumButtonEnhancer {
  constructor() {
    this.init();
  }

  init() {
    this.setupButtonEffects();
    this.setupHoverEffects();
    this.setupAdvancedEffects();
  }

  setupButtonEffects() {
    const buttons = document.querySelectorAll('.quantum-btn, .transmission-btn, .project-launch, .search-btn, .load-more-btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        this.createQuantumRipple(e, button);
        this.createButtonAura(button);
      });
      
      button.addEventListener('click', (e) => {
        this.createQuantumBurst(e, button);
      });
    });
  }

  setupHoverEffects() {
    const projectPods = document.querySelectorAll('.project-pod');
    projectPods.forEach(pod => {
      pod.addEventListener('mouseenter', () => {
        pod.style.transform = 'translateY(-10px) scale(1.02)';
        this.createHoverGlow(pod);
        this.createFloatingParticles(pod);
      });
      
      pod.addEventListener('mouseleave', () => {
        pod.style.transform = 'translateY(0) scale(1)';
      });
    });

    const skillNodes = document.querySelectorAll('.skill-node');
    skillNodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const icon = node.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'scale(1.1) rotateY(15deg)';
        }
        this.createSkillAura(node);
      });
      
      node.addEventListener('mouseleave', () => {
        const icon = node.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'scale(1) rotateY(0deg)';
        }
      });
    });
  }

  setupAdvancedEffects() {
    // Planet orbital effects
    const planetOptions = document.querySelectorAll('.planet-option');
    planetOptions.forEach(option => {
      option.addEventListener('mouseenter', () => {
        this.createOrbitalEffect(option);
      });
    });

    // Blog result hover effects
    const blogResults = document.querySelectorAll('.blog-result');
    blogResults.forEach(result => {
      result.addEventListener('mouseenter', () => {
        this.createDataStreamEffect(result);
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

  createButtonAura(button) {
    const aura = document.createElement('div');
    aura.style.cssText = `
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent);
      border-radius: inherit;
      pointer-events: none;
      z-index: -1;
      animation: auraGlow 2s ease-in-out infinite;
    `;
    
    button.style.position = 'relative';
    button.appendChild(aura);
    setTimeout(() => aura.remove(), 2000);
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

  createFloatingParticles(element) {
    for (let i = 0; i < 3; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatUp 2s ease-out forwards;
        pointer-events: none;
        z-index: 10;
      `;
      
      element.appendChild(particle);
      setTimeout(() => particle.remove(), 2000);
    }
  }

  createSkillAura(skillNode) {
    const aura = document.createElement('div');
    aura.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 255, 255, 0.05);
      border-radius: 10px;
      pointer-events: none;
      animation: skillAura 1s ease-out;
    `;
    
    skillNode.appendChild(aura);
    setTimeout(() => aura.remove(), 1000);
  }

  createOrbitalEffect(planetOption) {
    const orbital = document.createElement('div');
    orbital.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      border: 1px solid rgba(0, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: orbitalSpin 2s linear infinite;
    `;
    
    planetOption.appendChild(orbital);
    setTimeout(() => orbital.remove(), 2000);
  }

  createDataStreamEffect(blogResult) {
    const stream = document.createElement('div');
    stream.style.cssText = `
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
      pointer-events: none;
      animation: dataStream 1s ease-out;
    `;
    
    blogResult.appendChild(stream);
    setTimeout(() => stream.remove(), 1000);
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
  
  @keyframes auraGlow {
    0%, 100% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.05); }
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
  
  @keyframes clickRipple {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
  }
  
  @keyframes floatUp {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-50px); }
  }
  
  @keyframes dnaParticleFloat {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0) translateY(-30px); }
  }
  
  @keyframes skillAura {
    0% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(1.2); }
  }
  
  @keyframes orbitalSpin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @keyframes dataStream {
    0% { left: -100%; }
    100% { left: 100%; }
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
    
    #custom-cursor {
      display: none;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
