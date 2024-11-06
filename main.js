// JavaScript to be executed once the DOM content is fully loaded

document.addEventListener("DOMContentLoaded", function() {
    // Set the current date as the default value in the date input
    const dateInput = document.getElementById("apod-date");
    const today = new Date().toISOString().split("T")[0];
    if (dateInput) {
        if (!dateInput.value) {
            dateInput.value = today;
        }
    }

    // Event listener for date selection changes
    if (dateInput) {
        dateInput.addEventListener("change", function() {
            const selectedDate = this.value;
            console.log("Selected date:", selectedDate);
            // Additional code to fetch or update content based on the selected date can go here
        });
    }

    // Redirect to apod.html when the get APOD button is clicked
    const getApodButton = document.querySelector(".apod-label");
    if (getApodButton) {
        getApodButton.addEventListener("click", function() {
            window.location.href = "apod.html";
        });
    }

    // Redirect to apod.html when the get APOD button is clicked
    const saveAsFavoriteButton = document.querySelector(".save-btn");
    if (saveAsFavoriteButton) {
        saveAsFavoriteButton.addEventListener("click", function() {
            window.location.href = "gallery.html";
        });
    }

    // Redirect to index.html when the Home button is clicked
    const homeButton = document.querySelector(".nav-btn:nth-child(1)");
    if (homeButton) {
        homeButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }


    // Toggle the dropdown menu when the hamburger icon is clicked
    function toggleDropdown() {
        const dropdownMenu = document.getElementById("dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("show");
        }
    }

    // Attach the toggleDropdown function to the hamburger menu click event
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", toggleDropdown);
    }

    // Get the modal and other related elements
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("apodImage");
    const modalImg = document.getElementById("hdImage");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];

    // Open modal when image is clicked (if image exists)
    if (img && modal && modalImg && captionText) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = "/images/Astronomy Picture of the Day.jpg";
            captionText.innerHTML = this.alt;
        };
    }

    // Close modal when the close button (x) is clicked
    if (span && modal) {
        span.onclick = function() {
            modal.style.display = "none";
        };
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});
