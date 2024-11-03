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