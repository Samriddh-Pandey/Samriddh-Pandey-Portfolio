// Scroll to top
$("#top-button").click(
    function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    }
)

// AOS
AOS.init();

// Google sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbzokAkDLR49TiShzU5exfFwpTK_5t3C_R7WUBWBJRlDtAxMuER2ZGB4wRJG-IpkbaPT5A/exec"
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
});