document.addEventListener("DOMContentLoaded", function () {
    const toggleSections = document.querySelectorAll(".toggle-content");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");

    let currentSectionIndex = 0;

    // Function to show or hide sections based on the current index
    function updateSectionsVisibility() {
        toggleSections.forEach((section, index) => {
            section.style.display = index === currentSectionIndex ? "block" : "none";
        });

        // Enable/disable buttons based on the current index
        nextButton.disabled = currentSectionIndex === toggleSections.length - 1;
        prevButton.disabled = currentSectionIndex === 0;
    }

    // Show the initial sections
    updateSectionsVisibility();

    // Add event listener for the "Next" button
    nextButton.addEventListener("click", function () {
        if (currentSectionIndex < toggleSections.length - 1) {
            currentSectionIndex++;
            updateSectionsVisibility();
        }
    });

    // Add event listener for the "Previous" button
    prevButton.addEventListener("click", function () {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            updateSectionsVisibility();
        }
    });
});
