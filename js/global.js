window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'  // <pre rel="HTML"><code markup="tt" class="language-markup">
});

// Scroll certain amounts from current position
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hero').scrollIntoView({
    behavior: 'smooth'
});

let modal = document.getElementById('modal');

function openFeatures() {
    modal.className = 'modal is-active';
}

function closeFeatures() {
    modal.className = 'modal';
}