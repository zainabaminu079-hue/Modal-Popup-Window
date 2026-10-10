document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalIcon = document.getElementById("closeModalIcon");
    const modalOverlay = document.getElementById("modalOverlay");

    // Function to open the modal
    const openModal = () => {
        modalOverlay.classList.add("show");
    };

    // Function to close the modal
    const closeModal = () => {
        modalOverlay.classList.remove("show");
    };

    // Event listeners for user interaction
    openModalBtn.addEventListener("click", openModal);
    closeModalIcon.addEventListener("click", closeModal);

    // Close modal if user clicks anywhere on the dark overlay background
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // Optional: Close modal if user presses the 'Escape' key on their keyboard
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modalOverlay.classList.contains("show")) {
            closeModal();
        }
    });
});

