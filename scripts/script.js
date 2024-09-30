const texts = ["Student", "Frontend Developer", "UI/UX Designer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
const dynamicTextElement = document.querySelector('.dynamic-text');
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenTexts = 1000; 

function typeText() {
    if (charIndex < texts[index].length) {
        dynamicTextElement.textContent += texts[index].charAt(charIndex); 
        charIndex++;
        setTimeout(typeText, typingSpeed); 
    } else {
        setTimeout(eraseText, delayBetweenTexts); 
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicTextElement.textContent = texts[index].substring(0, charIndex - 1); 
        charIndex--;
        setTimeout(eraseText, erasingSpeed); 
    } else {
        index = (index + 1) % texts.length; 
        setTimeout(typeText, typingSpeed); 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText, delayBetweenTexts); 
});


document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const explanation1 = document.getElementById('explanation1');
    const explanation2 = document.getElementById('explanation2');


    button1.addEventListener('click', function() {
        explanation1.style.display = 'flex'; 
        explanation2.style.display = 'none'; 

        button1.classList.add('active');
        button2.classList.remove('active');
    });


    button2.addEventListener('click', function() {
        explanation1.style.display = 'none'; 
        explanation2.style.display = 'flex'; 

        button2.classList.add('active');
        button1.classList.remove('active');
    });

    window.onload = function() {
        button1.classList.add('active');
        
        explanation1.style.display = 'flex';
        explanation2.style.display = 'none';
    };
});

document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.hero a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });
});
