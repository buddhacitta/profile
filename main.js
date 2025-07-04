// Buddha Citta Portfolio v3.0 - Advanced Interactive Experience
class FuturisticPortfolioV3 {
  constructor() {
    this.formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with actual Formspree ID
    this.selectedPlanet = 'mars';
    this.birthDate = new Date('2000-09-26');
    this.currentPage = 0;
    this.resultsPerPage = 10;
    this.allResults = [];
    this.isSearching = false;
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
    this.setupBioData();
    this.setupBlogSearch();
    this.setupAdvancedTransmission();
    this.updateRealTimeStats();
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

  setupCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorCore = cursor.querySelector('.cursor-core');
    const cursorTrail = cursor.querySelector('.cursor-trail');
    const cursorParticles = cursor.querySelector('.cursor-particles');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Mouse movement tracking
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor following
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    };
    updateCursor();

    // Create floating particles around cursor
    setInterval(() => {
      this.createCursorParticle(cursorParticles, cursorX, cursorY);
    }, 100);

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .project-pod, .skill-node, .mind-node, .planet-option, .blog-result');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
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
    
    const randomX = (Math.random() - 0.5) * 40;
    const randomY = (Math.random() - 0.5) * 40;
    
    particle.style.cssText = `
      left: 50%;
      top: 50%;
      --random-x: ${randomX}px;
      --random-y: ${randomY}px;
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
      border: 2px solid var(--quantum-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%) scale(0);
      animation: cursorRipple 0.6s ease-out;
    `;
    
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  setupBioData() {
    this.updateAge();
    this.updateLifeStats();
    
    // Update age every second
    setInterval(() => {
      this.updateAge();
      this.updateLifeStats();
    }, 1000);
  }

  updateAge() {
    const now = new Date();
    const ageInMs = now - this.birthDate;
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor(((ageInYears - years) * 12 - months) * 30.44);
    
    const currentAgeElement = document.getElementById('current-age');
    const detailedAgeElement = document.getElementById('detailed-age');
    
    if (currentAgeElement) {
      currentAgeElement.textContent = years;
    }
    
    if (detailedAgeElement) {
      detailedAgeElement.textContent = `${years} years, ${months} months, ${days} days`;
    }
  }

  updateLifeStats() {
    const now = new Date();
    const ageInMs = now - this.birthDate;
    const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    
    // Assuming average lifespan of 80 years
    const lifeProgress = (ageInYears / 80) * 100;
    
    // Calculate various stats
    const heartbeats = Math.floor(ageInDays * 100000); // ~100k beats per day
    const earthRotations = ageInDays;
    const solarOrbits = Math.floor(ageInYears);
    
    // Update DOM elements
    const elements = {
      'days-lived': ageInDays.toLocaleString(),
      'heartbeats': (heartbeats / 1000000).toFixed(0) + 'M',
      'earth-rotations': earthRotations.toLocaleString(),
      'solar-orbits': solarOrbits,
      'life-percentage': lifeProgress.toFixed(2) + '%',
      'life-progress': lifeProgress
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        if (id === 'life-progress') {
          element.style.width = value + '%';
        } else {
          element.textContent = value;
        }
      }
    });
  }

  setupBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const searchBtn = document.getElementById('search-trigger');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.performBlogSearch();
      });
    }
    
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.performBlogSearch();
        }
      });
      
      // Real-time search with debounce
      let searchTimeout;
      searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          if (searchInput.value.trim().length > 2) {
            this.performBlogSearch();
          }
        }, 500);
      });
    }
    
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        this.loadMoreResults();
      });
    }
  }

  async performBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const query = searchInput.value.trim();
    
    if (!query) return;
    
    this.showSearchLoading();
    this.currentPage = 0;
    
    try {
      // Simulate API call to search blogs
      const results = await this.searchBlogs(query);
      this.allResults = results;
      this.displaySearchResults();
    } catch (error) {
      this.showSearchError();
    }
  }

  async searchBlogs(query) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock blog data - in real implementation, this would call your blog API
    const mockBlogs = [
      {
        title: "The Future of Quantum Computing in Web Development",
        excerpt: "Exploring how quantum computing principles can revolutionize frontend frameworks and user interfaces...",
        url: "https://imincognito.github.io/blog/quantum-computing-web.html",
        date: "2025-01-15"
      },
      {
        title: "Building Consciousness-Aware AI Interfaces",
        excerpt: "A deep dive into creating AI systems that adapt to user consciousness and emotional states...",
        url: "https://imincognito.github.io/blog/consciousness-ai-interfaces.html",
        date: "2025-01-10"
      },
      {
        title: "Metaverse Design Patterns for 2025",
        excerpt: "Essential design patterns and best practices for creating immersive metaverse experiences...",
        url: "https://imincognito.github.io/blog/metaverse-design-patterns.html",
        date: "2025-01-05"
      },
      {
        title: "Neural Networks and Creative Coding",
        excerpt: "How machine learning can enhance creative coding practices and generative art...",
        url: "https://imincognito.github.io/blog/neural-networks-creative-coding.html",
        date: "2024-12-28"
      },
      {
        title: "The Philosophy of Digital Minimalism",
        excerpt: "Applying Buddhist principles to modern web design and user experience...",
        url: "https://imincognito.github.io/blog/digital-minimalism-philosophy.html",
        date: "2024-12-20"
      },
      {
        title: "WebXR and the Future of Human-Computer Interaction",
        excerpt: "Exploring the potential of WebXR technologies in creating more natural interfaces...",
        url: "https://imincognito.github.io/blog/webxr-future-hci.html",
        date: "2024-12-15"
      },
      {
        title: "Sustainable Web Development Practices",
        excerpt: "How to build environmentally conscious websites and applications...",
        url: "https://imincognito.github.io/blog/sustainable-web-development.html",
        date: "2024-12-10"
      },
      {
        title: "The Art of Micro-Interactions in Modern UX",
        excerpt: "Creating delightful user experiences through thoughtful micro-interactions...",
        url: "https://imincognito.github.io/blog/micro-interactions-modern-ux.html",
        date: "2024-12-05"
      },
      {
        title: "Blockchain Integration in Frontend Applications",
        excerpt: "Practical approaches to integrating blockchain technology in web applications...",
        url: "https://imincognito.github.io/blog/blockchain-frontend-integration.html",
        date: "2024-11-30"
      },
      {
        title: "The Psychology of Color in Digital Interfaces",
        excerpt: "Understanding how color psychology affects user behavior and decision making...",
        url: "https://imincognito.github.io/blog/color-psychology-digital-interfaces.html",
        date: "2024-11-25"
      },
      {
        title: "Advanced CSS Grid Techniques for Complex Layouts",
        excerpt: "Mastering CSS Grid for creating sophisticated and responsive layouts...",
        url: "https://imincognito.github.io/blog/advanced-css-grid-techniques.html",
        date: "2024-11-20"
      },
      {
        title: "Building Accessible Web Applications",
        excerpt: "Best practices for creating inclusive digital experiences for all users...",
        url: "https://imincognito.github.io/blog/building-accessible-web-apps.html",
        date: "2024-11-15"
      }
    ];
    
    // Filter results based on query
    const filteredResults = mockBlogs.filter(blog => 
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    return filteredResults;
  }

  showSearchLoading() {
    const loadingState = document.getElementById('search-loading');
    const resultsContainer = document.getElementById('results-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (loadingState) loadingState.style.display = 'flex';
    if (resultsContainer) resultsContainer.innerHTML = '';
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    
    this.isSearching = true;
  }

  displaySearchResults() {
    const loadingState = document.getElementById('search-loading');
    const resultsContainer = document.getElementById('results-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const searchResultsCount = document.getElementById('search-results-count');
    
    if (loadingState) loadingState.style.display = 'none';
    this.isSearching = false;
    
    if (searchResultsCount) {
      searchResultsCount.textContent = `${this.allResults.length} results found`;
    }
    
    if (resultsContainer) {
      resultsContainer.innerHTML = '';
      
      const startIndex = this.currentPage * this.resultsPerPage;
      const endIndex = Math.min(startIndex + this.resultsPerPage, this.allResults.length);
      const currentResults = this.allResults.slice(0, endIndex);
      
      currentResults.forEach((result, index) => {
        const resultElement = this.createBlogResultElement(result, index);
        resultsContainer.appendChild(resultElement);
      });
      
      // Show load more button if there are more results
      if (loadMoreBtn && endIndex < this.allResults.length) {
        loadMoreBtn.style.display = 'block';
      } else if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
      }
    }
  }

  createBlogResultElement(result, index) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'blog-result';
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(20px)';
    
    resultDiv.innerHTML = `
      <h4>${result.title}</h4>
      <p>${result.excerpt}</p>
      <div class="blog-meta">
        <span class="blog-date">${new Date(result.date).toLocaleDateString()}</span>
        <span class="blog-url">${result.url}</span>
      </div>
    `;
    
    // Add click handler to open blog
    resultDiv.addEventListener('click', () => {
      window.open(result.url, '_blank');
      this.createClickEffect(resultDiv);
    });
    
    // Animate in
    setTimeout(() => {
      resultDiv.style.transition = 'all 0.6s ease';
      resultDiv.style.opacity = '1';
      resultDiv.style.transform = 'translateY(0)';
    }, index * 100);
    
    return resultDiv;
  }

  loadMoreResults() {
    this.currentPage++;
    this.displaySearchResults();
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
      border: 2px solid var(--quantum-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0);
      animation: clickRipple 0.8s ease-out;
    `;
    
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 800);
  }

  showSearchError() {
    const loadingState = document.getElementById('search-loading');
    const resultsContainer = document.getElementById('results-container');
    
    if (loadingState) loadingState.style.display = 'none';
    
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div class="search-error">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Search failed. Please try again.</p>
        </div>
      `;
    }
    
    this.isSearching = false;
  }

  setupAdvancedTransmission() {
    // Enhanced transmission with visual effects
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAdvancedTransmission(form);
      });
    }
  }

  async handleAdvancedTransmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Start advanced transmission animation
    this.startAdvancedTransmissionAnimation();
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Transmitting...</span>';
    submitBtn.disabled = true;
    
    try {
      // Simulate space transmission with realistic timing
      await this.simulateAdvancedSpaceTransmission();
      
      // Try to send via Formspree (or your preferred service)
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
      setTimeout(() => {
        this.resetAdvancedTransmissionAnimation();
      }, 3000);
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
      mars: { emoji: '🔴', distance: '225M km', time: 5000 },
      jupiter: { emoji: '🟠', distance: '628M km', time: 7000 },
      saturn: { emoji: '🪐', distance: '1.4B km', time: 10000 },
      neptune: { emoji: '🔵', distance: '4.5B km', time: 15000 }
    };
    
    const planet = planets[this.selectedPlanet];
    const targetPlanet = document.querySelector('.target-planet');
    targetPlanet.textContent = planet.emoji;
    
    // Show transmission progress
    transmissionProgress.classList.add('active');
    
    // Phase 1: Initializing
    statusText.textContent = 'Initializing quantum transmission...';
    await this.updateProgress(progressFill, progressText, 0, 20, 1000);
    
    // Phase 2: Encoding message
    statusText.textContent = 'Encoding message with quantum encryption...';
    await this.updateProgress(progressFill, progressText, 20, 40, 1500);
    
    // Phase 3: Launching signal
    statusText.textContent = `Launching signal to ${this.selectedPlanet.charAt(0).toUpperCase() + this.selectedPlanet.slice(1)}...`;
    signalBeam.style.width = '100%';
    messagePacket.classList.add('active');
    await this.updateProgress(progressFill, progressText, 40, 70, 2000);
    
    // Phase 4: Traveling through space
    statusText.textContent = `Signal traveling ${planet.distance} through space...`;
    await this.updateProgress(progressFill, progressText, 70, 90, planet.time - 4500);
    
    // Phase 5: Signal received
    statusText.textContent = `Signal received by Buddha Citta on ${this.selectedPlanet.charAt(0).toUpperCase() + this.selectedPlanet.slice(1)}!`;
    await this.updateProgress(progressFill, progressText, 90, 100, 1000);
    
    // Success animation
    this.createTransmissionSuccessEffect();
  }

  async updateProgress(progressFill, progressText, startPercent, endPercent, duration) {
    return new Promise(resolve => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentPercent = startPercent + (endPercent - startPercent) * progress;
        
        progressFill.style.width = currentPercent + '%';
        progressText.textContent = Math.round(currentPercent) + '%';
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      animate();
    });
  }

  createTransmissionSuccessEffect() {
    const transmissionStatus = document.getElementById('transmission-status');
    
    // Create success particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--neural-green);
        border-radius: 50%;
        left: 50%;
        top: 50%;
        pointer-events: none;
        animation: successParticle 2s ease-out forwards;
        animation-delay: ${i * 0.1}s;
      `;
      
      transmissionStatus.appendChild(particle);
      setTimeout(() => particle.remove(), 2000 + i * 100);
    }
  }

  startAdvancedTransmissionAnimation() {
    const transmissionStatus = document.getElementById('transmission-status');
    transmissionStatus.style.background = 'rgba(0, 255, 255, 0.1)';
    transmissionStatus.style.borderColor = '#00ffff';
    transmissionStatus.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
    
    // Add pulsing effect
    transmissionStatus.style.animation = 'transmissionPulse 2s ease-in-out infinite';
  }

  resetAdvancedTransmissionAnimation() {
    const transmissionStatus = document.getElementById('transmission-status');
    const signalBeam = document.querySelector('.signal-beam');
    const messagePacket = document.getElementById('message-packet');
    const transmissionProgress = document.getElementById('transmission-progress');
    const progressFill = transmissionProgress.querySelector('.progress-fill');
    const progressText = transmissionProgress.querySelector('.progress-text');
    const statusText = document.querySelector('.status-text');
    
    transmissionStatus.style.background = '';
    transmissionStatus.style.borderColor = '';
    transmissionStatus.style.boxShadow = '';
    transmissionStatus.style.animation = '';
    
    signalBeam.style.width = '0';
    messagePacket.classList.remove('active');
    transmissionProgress.classList.remove('active');
    progressFill.style.width = '0%';
    progressText.textContent = '0%';
    statusText.textContent = 'Ready to transmit';
  }

  setupCosmicEffects() {
    this.createFloatingParticles();
    this.setupNeuralNetwork();
    this.animateStars();
    this.createQuantumField();
  }

  createQuantumField() {
    const quantumField = document.querySelector('.quantum-field');
    if (!quantumField) return;

    // Create quantum particles
    setInterval(() => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--quantum-cyan);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: quantumParticle 5s linear infinite;
        opacity: ${Math.random() * 0.5 + 0.2};
      `;
      
      quantumField.appendChild(particle);
      setTimeout(() => particle.remove(), 5000);
    }, 2000);
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

    for (let i = 0; i < 100; i++) {
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
    const colors = ['#00ffff', '#ff00ff', '#ffd700', '#00ff88', '#ff6b6b'];
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
      
      @keyframes quantumParticle {
        0% { 
          transform: translateX(0) translateY(0) scale(0);
          opacity: 0;
        }
        50% { 
          opacity: 1;
          transform: translateX(50px) translateY(-50px) scale(1);
        }
        100% { 
          transform: translateX(100px) translateY(-100px) scale(0);
          opacity: 0;
        }
      }
      
      @keyframes successParticle {
        0% { 
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% { 
          transform: translate(calc(-50% + ${Math.random() * 200 - 100}px), calc(-50% + ${Math.random() * 200 - 100}px)) scale(0);
          opacity: 0;
        }
      }
      
      @keyframes transmissionPulse {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }
        50% { 
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.6);
        }
      }
      
      @keyframes clickRipple {
        0% { 
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% { 
          transform: translate(-50%, -50%) scale(2);
          opacity: 0;
        }
      }
      
      @keyframes cursorRipple {
        0% { 
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% { 
          transform: translate(-50%, -50%) scale(2);
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
          
          if (entry.target.classList.contains('stat-card')) {
            this.animateStatCard(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('.data-stream, .skill-category, .project-pod, .stat-node, .stat-card, .blog-result');
    elementsToObserve.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s ease';
      observer.observe(element);
    });
  }

  animateStatCard(card) {
    const number = card.querySelector('.stat-number');
    if (number) {
      const finalValue = number.textContent;
      const isNumeric = !isNaN(parseFloat(finalValue));
      
      if (isNumeric) {
        const target = parseFloat(finalValue);
        let current = 0;
        const increment = target / 50;
        
        const animate = () => {
          current += increment;
          if (current < target) {
            number.textContent = Math.floor(current);
            requestAnimationFrame(animate);
          } else {
            number.textContent = finalValue;
          }
        };
        animate();
      }
    }
  }

  setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAdvancedTransmission(contactForm);
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
        this.createPlanetSelectEffect(option);
      });
    });
  }

  createPlanetSelectEffect(option) {
    const rect = option.getBoundingClientRect();
    const effect = document.createElement('div');
    
    effect.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      width: 60px;
      height: 60px;
      border: 2px solid var(--quantum-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0);
      animation: planetSelectRipple 1s ease-out;
    `;
    
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
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
        this.createNodeConnection(node);
      });
      
      node.addEventListener('mouseenter', () => {
        this.createNodeHoverEffect(node);
      });
    });
  }

  createNodeHoverEffect(node) {
    const effect = document.createElement('div');
    effect.style.cssText = `
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 1px solid var(--quantum-cyan);
      border-radius: 50%;
      pointer-events: none;
      animation: nodeHoverPulse 1s ease-out;
    `;
    
    node.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
  }

  showAspectInfo(aspect) {
    const aspectInfo = {
      creativity: 'Creative Vision: Transforming imagination into digital reality through innovative design and artistic expression',
      technology: 'Tech Mastery: Wielding cutting-edge tools and frameworks with precision and expertise',
      mindfulness: 'Mindful Design: Conscious creation focused on human connection and meaningful experiences',
      innovation: 'Innovation: Pushing boundaries of what\'s possible in the digital realm'
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

  updateRealTimeStats() {
    // Update real-time statistics
    setInterval(() => {
      this.updateAge();
      this.updateLifeStats();
    }, 1000);
  }

  showTransmissionSuccess() {
    this.showNotification('🚀 Transmission successful! Message sent across the cosmos to Buddha Citta.', 'success');
  }

  showTransmissionError() {
    this.showNotification('⚠️ Transmission failed! Cosmic interference detected. Please try again.', 'error');
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

// Enhanced Button Effects v3.0
class QuantumButtonEnhancerV3 {
  constructor() {
    this.init();
  }

  init() {
    this.setupButtonEffects();
    this.setupHoverEffects();
    this.setupAdvancedInteractions();
  }

  setupButtonEffects() {
    const buttons = document.querySelectorAll('.quantum-btn, .transmission-btn, .project-launch, .search-btn, .load-more-btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        this.createQuantumRipple(e, button);
        this.createHoverParticles(button);
      });
      
      button.addEventListener('click', (e) => {
        this.createQuantumBurst(e, button);
        this.createClickWave(e, button);
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
        this.createFloatingElements(pod);
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

  setupAdvancedInteractions() {
    // Blog result interactions
    const blogResults = document.querySelectorAll('.blog-result');
    blogResults.forEach(result => {
      result.addEventListener('mouseenter', () => {
        this.createDataStreamEffect(result);
      });
    });

    // Planet option interactions
    const planetOptions = document.querySelectorAll('.planet-option');
    planetOptions.forEach(option => {
      option.addEventListener('mouseenter', () => {
        this.createPlanetOrbitEffect(option);
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

  createHoverParticles(button) {
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: var(--quantum-cyan);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: hoverParticle 1s ease-out forwards;
        pointer-events: none;
      `;
      
      button.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  }

  createQuantumBurst(e, button) {
    button.style.transform = 'scale(0.95)';
    
    // Create burst particles
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      const angle = (i / 12) * Math.PI * 2;
      const distance = 60;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--quantum-cyan);
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: burstParticle 1s ease-out forwards;
        --burst-x: ${x}px;
        --burst-y: ${y}px;
        pointer-events: none;
      `;
      
      button.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
    
    setTimeout(() => {
      button.style.transform = '';
    }, 100);
  }

  createClickWave(e, button) {
    const wave = document.createElement('div');
    const rect = button.getBoundingClientRect();
    
    wave.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 100px;
      height: 100px;
      border: 2px solid var(--quantum-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0);
      animation: clickWave 0.8s ease-out;
    `;
    
    document.body.appendChild(wave);
    setTimeout(() => wave.remove(), 800);
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

  createFloatingElements(element) {
    for (let i = 0; i < 3; i++) {
      const floater = document.createElement('div');
      floater.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: var(--neural-green);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatingElement 3s ease-in-out infinite;
        animation-delay: ${i * 0.5}s;
        pointer-events: none;
      `;
      
      element.appendChild(floater);
      setTimeout(() => floater.remove(), 3000);
    }
  }

  createSkillAura(node) {
    const aura = document.createElement('div');
    aura.style.cssText = `
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 1px solid var(--quantum-cyan);
      border-radius: 10px;
      pointer-events: none;
      animation: skillAura 1s ease-out;
    `;
    
    node.appendChild(aura);
    setTimeout(() => aura.remove(), 1000);
  }

  createDataStreamEffect(result) {
    const stream = document.createElement('div');
    stream.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--quantum-cyan), transparent);
      animation: dataStream 1s ease-in-out;
      pointer-events: none;
    `;
    
    result.appendChild(stream);
    setTimeout(() => stream.remove(), 1000);
  }

  createPlanetOrbitEffect(option) {
    const orbit = document.createElement('div');
    orbit.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      border: 1px solid rgba(0, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: planetOrbit 2s linear infinite;
      pointer-events: none;
    `;
    
    option.appendChild(orbit);
    setTimeout(() => orbit.remove(), 2000);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FuturisticPortfolioV3();
  new QuantumButtonEnhancerV3();
});

// Add additional CSS animations
const additionalStylesV3 = `
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
  
  @keyframes hoverParticle {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1) translateY(-20px); opacity: 0; }
  }
  
  @keyframes clickWave {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
  }
  
  @keyframes glowPulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
  
  @keyframes floatingElement {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
  }
  
  @keyframes skillAura {
    0% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.1); }
    100% { opacity: 0; transform: scale(1); }
  }
  
  @keyframes dataStream {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes planetOrbit {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @keyframes planetSelectRipple {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }
  
  @keyframes nodeHoverPulse {
    0% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0; transform: scale(1); }
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
  
  .search-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Orbitron', monospace;
  }
  
  .search-error i {
    font-size: 2rem;
    color: #ff6b6b;
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
`;

const styleSheetV3 = document.createElement('style');
styleSheetV3.textContent = additionalStylesV3;
document.head.appendChild(styleSheetV3);
