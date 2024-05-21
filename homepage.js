
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Array of fun facts
const funFacts = [
    "The world's largest pizza was 122 feet in diameter.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    "The most expensive spice in the world is saffron.",
    "The fear of cooking is known as Mageirocophobia.",
    "Carrots were originally purple.",
    "Ketchup was sold in the 1830s as medicine.",
    "Peanuts are not nuts, they are legumes.",
    "The average American eats about 18 pounds of bacon each year."
];

let currentIndex = 0;

function changeFunFact() {
    const funFactText = document.getElementById("fun-fact-text");
    funFactText.textContent = funFacts[currentIndex];
    currentIndex = (currentIndex + 1) % funFacts.length;
}

// Call the function to display a random fun fact every 5 seconds
setInterval(changeFunFact, 5000);

const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 650);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});