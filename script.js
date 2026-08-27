
// button script
function button(pid, bid) {
    const clicker = document.getElementById(bid);
    const paragraph = document.getElementById(pid);
    function click() {
        paragraph.textContent = "You Clicked the button!";
    }
    if (clicker) {
        clicker.addEventListener("click", click)
    }
}

button("paragraph", "click");

// end button script

// google script
document.getElementById('search-form').addEventListener('submit', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// end google script
