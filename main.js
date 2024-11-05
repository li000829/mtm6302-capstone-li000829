// JavaScript to handle date selection changes
document.getElementById("apod-date").addEventListener("change", function() {
    const selectedDate = this.value;
    console.log("Selected date:", selectedDate);
    // Additional code to fetch or update content based on the selected date can go here
});

// Toggle the dropdown menu when the hamburger icon is clicked
function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

// Get the modal
const modal = document.getElementById("imageModal");

const img = document.getElementById("apodImage");
const modalImg = document.getElementById("hdImage");
const captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "/images/Astronomy Picture of the Day.jpg"; 
    captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

