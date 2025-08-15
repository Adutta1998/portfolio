// ===== GLOBAL VARIABLES =====
let particlesArray = [];
let isLoading = true;

// ===== DOM ELEMENTS =====
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const loadingScreen = document.getElementById("loading-screen");
const typedName = document.getElementById("typed-name");
const contactForm = document.getElementById("contact-form");
const particlesContainer = document.getElementById("particles");

// ===== LOADING SCREEN =====
function hideLoadingScreen() {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    isLoading = false;

    // Initialize animations after loading is complete
    setTimeout(() => {
      initializeAnimations();
      initializeScrollAnimations();
    }, 100);
  }, 1500);
}

// ===== NAVIGATION =====
function initializeNavigation() {
  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active navigation link
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
}

// ===== PARTICLES ANIMATION =====
function createParticles() {
  if (!particlesContainer) return;

  const particleCount = window.innerWidth > 768 ? 50 : 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    particlesContainer.appendChild(particle);
  }
}

// ===== TYPING ANIMATION =====
function initializeTypingEffect() {
  if (!typedName) return;

  const text = "Avinaba Dutta";
  const speed = 150;
  let i = 0;

  // Clear existing content
  typedName.textContent = "";

  function typeWriter() {
    if (i < text.length) {
      typedName.textContent = text.substring(0, i + 1);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter, 500);
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate skill progress bars
        if (entry.target.classList.contains("skill-item")) {
          const progressBar = entry.target.querySelector(".progress-bar");
          if (progressBar) {
            const width = progressBar.getAttribute("data-width");
            setTimeout(() => {
              progressBar.style.width = width + "%";
            }, 200);
          }
        }
      }
    });
  }, observerOptions);

  // Add animation classes to elements that need them
  addAnimationClasses();

  // Observe elements for animations
  document
    .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });

  // Observe skill items for progress animation
  document.querySelectorAll(".skill-item").forEach((el) => {
    observer.observe(el);
  });
}

function addAnimationClasses() {
  // Add animation classes to elements
  document.querySelectorAll(".section-header").forEach((el) => {
    el.classList.add("fade-in");
  });

  document.querySelectorAll(".about-text").forEach((el) => {
    el.classList.add("slide-in-left");
  });

  document.querySelectorAll(".skills-grid").forEach((el) => {
    el.classList.add("slide-in-right");
  });

  document.querySelectorAll(".project-card").forEach((el, index) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = index * 0.1 + "s";
  });

  document.querySelectorAll(".contact-info").forEach((el) => {
    el.classList.add("slide-in-left");
  });

  document.querySelectorAll(".contact-form").forEach((el) => {
    el.classList.add("slide-in-right");
  });

  document.querySelectorAll(".about-stats").forEach((el) => {
    el.classList.add("fade-in");
  });
}

// ===== PROJECT FILTERING =====
function initializeProjectFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects
      projectCards.forEach((card) => {
        const cardCategories = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategories.includes(filterValue)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Validate form
    if (!validateForm(data)) {
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector(".btn");
    submitButton.classList.add("loading");

    // Simulate form submission
    try {
      await simulateFormSubmission(data);
      showSuccessMessage();
      contactForm.reset();
    } catch (error) {
      showErrorMessage();
    } finally {
      submitButton.classList.remove("loading");
    }
  });

  // Real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
    });
  });
}

function validateForm(data) {
  let isValid = true;
  const fields = ["name", "email", "subject", "message"];

  fields.forEach((field) => {
    const input = document.getElementById(field);
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(input) {
  const value = input.value.trim();
  const formGroup = input.closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  let isValid = true;
  let message = "";

  if (!value) {
    isValid = false;
    message = "This field is required";
  } else if (input.type === "email" && !isValidEmail(value)) {
    isValid = false;
    message = "Please enter a valid email address";
  } else if (input.name === "message" && value.length < 10) {
    isValid = false;
    message = "Message must be at least 10 characters long";
  }

  if (isValid) {
    formGroup.classList.remove("error");
    errorMessage.textContent = "";
  } else {
    formGroup.classList.add("error");
    errorMessage.textContent = message;
  }

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function simulateFormSubmission(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful submission
      console.log("Form submitted:", data);
      resolve();
    }, 2000);
  });
}

function showSuccessMessage() {
  const message = document.createElement("div");
  message.className = "success-message";
  message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        ">
            <i class="fas fa-check"></i> Message sent successfully!
        </div>
    `;
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 3000);
}

function showErrorMessage() {
  const message = document.createElement("div");
  message.className = "error-message";
  message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f44336;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        ">
            <i class="fas fa-times"></i> Something went wrong. Please try again.
        </div>
    `;
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 3000);
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== INITIALIZATION =====
function initializeAnimations() {
  createParticles();
  initializeTypingEffect();
  initializeProjectFiltering();
  initializeSmoothScrolling();
}

// ===== EVENT LISTENERS =====
document.addEventListener("DOMContentLoaded", () => {
  // Initialize navigation first
  initializeNavigation();
  initializeContactForm();

  // Hide loading screen and initialize animations
  hideLoadingScreen();
});

// Resize handler
window.addEventListener(
  "resize",
  debounce(() => {
    // Recreate particles on resize
    if (particlesContainer) {
      particlesContainer.innerHTML = "";
      createParticles();
    }
  }, 250)
);

// Prevent scroll during loading
document.addEventListener(
  "wheel",
  (e) => {
    if (isLoading) {
      e.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener(
  "touchmove",
  (e) => {
    if (isLoading) {
      e.preventDefault();
    }
  },
  { passive: false }
);
