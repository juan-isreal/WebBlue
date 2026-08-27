
// button script
function button(pid, bid) {
    const clicker = document.getDocumentById(bid);
    const paragraph = document.getDocumentById(pid);
    function click() {
        paragraph.textContent = "You Clicked the button!";
    }
    if (clicker) {
        clicker.addEventListener("click", click)
    }
}

button("paragraph", "click");

// end button script
