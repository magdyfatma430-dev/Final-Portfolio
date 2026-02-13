const text = "Frontend Developer | Python Enthusiast | Future Software Engineer";
let index = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
});

const stars = document.querySelectorAll(".star");
stars.forEach(star => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    star.style.left = randomX + "px";
    star.style.top = randomY + "px";
});

const hero = document.querySelector('.hero-section');

const emojis = ['💻','📜','🖥️','✨','⭐','🌟'];

for(let i=0; i<25; i++){
    let span = document.createElement('span');
    span.classList.add('floating-element');
    span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.fontSize = (10 + Math.random() * 25) + 'px';
    span.style.animationDuration = (5 + Math.random() * 10) + 's';
    span.style.animationDelay = (Math.random() * 5) + 's';
    hero.appendChild(span);
}

for(let j=0;j<5;j++){
    let div = document.createElement('div');
    div.classList.add('morph-bg');
    div.style.width = (50 + Math.random()*200)+'px';
    div.style.height = (50 + Math.random()*200)+'px';
    div.style.top = Math.random()*80+'%';
    div.style.left = Math.random()*80+'%';
    div.style.background = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},0.2)`;
    hero.appendChild(div);
}
