let dynamic_autoplay = false;
// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

function animateProgressBars() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const progress = bar.dataset.progress;
        bar.style.width = `${progress}%`;
    });
}
animateProgressBars();


// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    menuBackdrop.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

mobileMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);
menuBackdrop.addEventListener('click', toggleMenu);

// Update Locomotive Scroll on window resize
window.addEventListener('resize', () => {
    // scroll.update();
});

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
                default: 'bounce'
            },
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: {
                enable: true,
                mode: 'grab'
            },
            onClick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                lineLinked: {
                    opacity: 1
                }
            },
            push: {
                quantity: 4
            }
        }
    },
    retina_detect: true
});

// Initialize Lottie Animation
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: dynamic_autoplay, // Default loop value
    autoplay: true,
    path: 'hero_pic.json' // Path to your animation file
});

document.getElementById('lottie-container').addEventListener('click', function () {
    dynamic_autoplay = !dynamic_autoplay;
    animation.loop = dynamic_autoplay; // Update the loop property
    if (!animation.isPaused) {
        animation.stop(); // Stop the animation if already running
    }
    animation.play(); // Restart the animation with the new loop setting
});



VanillaTilt.init(document.querySelectorAll(".feature-card"), {
    max: 25,
    speed: 450,
    glare: true,
    "max-glare": 0.2,
});

// Progress Bar Animation


// Number Counter Animation
function animateNumbers() {
    document.querySelectorAll('.number-counter').forEach(counter => {
        const target = parseFloat(counter.textContent);
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const step = duration / 50;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.round(current * 10) / 10;
                setTimeout(updateCounter, step);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
}

// Intersection Observer for animations
new Swiper('.reviewsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepValue = target / steps;
    let current = 0;

    const updateCounter = () => {
        current += stepValue;
        if (current > target) current = target;
        counter.textContent = current.toFixed(1);

        if (current < target) {
            setTimeout(updateCounter, duration / steps);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCounter();
            observer.unobserve(counter);
        }
    });

    observer.observe(counter);
});

// Form animations


// Smooth scroll for footer links
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href !== '#') {
            window.scrollTo({
                top: document.querySelector(href).offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

var animationed = lottie.loadAnimation({
    container: document.getElementById('lottie'), // the DOM element that will contain the animation
    renderer: 'svg', // render as SVG
    loop: false, // loop the animation
    autoplay: true, // start playing the animation
    path: 'contact.json' // the path to the animation json
});


// Wait until the page is fully loaded
window.addEventListener('load', function () {
    // Hide the loading container when the page has loaded
    document.getElementById('loading-overlay').style.display = 'none';
});

// Optionally, if you want to show the loader for a few seconds after the page loads:
// setTimeout(function() {
//   document.getElementById('loading-container').style.display = 'none';
// }, 5000); // Hide after 5 seconds
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
};

// Scroll to top function
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
};

// <
// !--Security checks-- >

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // Block Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }

    // Block Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }

    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
    }
});
let devtools = false;

const element = new Image();
Object.defineProperty(element, 'id', {
    get: function () {
        devtools = true;
        alert('Developer tools are not allowed on this site!');
    }
});

setInterval(function () {
    devtools = false;
    console.log(element);
    if (devtools) {
        window.location.reload();
    }
}, 1000);
// ----DIsable dragging 
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});
// Disable copy
document.addEventListener('keydown', function (e) {
    // Block Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        alert('Copying is disabled on this site.');
    }

    // Block Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x') {
        e.preventDefault();
        alert('Cutting is disabled on this site.');
    }

    // Block Ctrl+V (Paste)
    if (e.ctrlKey && e.key === 'v') {
        e.preventDefault();
        alert('Pasting is disabled on this site.');
    }

    // Block Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        alert('Saving is disabled on this site.');
    }

    // Block Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        alert('Printing is disabled on this site.');
    }
});

// disable user text select 
document.body.style.userSelect = 'none';