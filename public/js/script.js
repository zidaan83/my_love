const noMessages = [
    "No",
    "Huh wdym",
    "mumma?",
    "please dont break my heart like this",
    "naraz hojaunga",
    "gande",
    "ok…but Ill ask again"
];

let i = 1;
let size = 50;

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');

no_button.addEventListener('click', () => {

    // Change banner
    const banner = document.getElementById('banner');
    banner.src = "public/images/no.gif";
    refreshBanner();

    // Make Yes button grow
    size += 20;
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    // Change No button text
    if (i < noMessages.length) {
        no_button.innerHTML = noMessages[i];
        i++;
    } else {
        no_button.innerHTML = noMessages[0];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
        i = 1;
    }
});

yes_button.addEventListener('click', () => {

    const banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    // Hide buttons
    document.querySelector('.buttons').style.display = "none";

    // Show success message
    document.querySelector('.message').style.display = "block";
});

function refreshBanner() {
    const banner = document.getElementById('banner');
    const src = banner.src;
    banner.src = '';
    banner.src = src;
}