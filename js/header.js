// Dropdown functionality for both More and Login buttons
const dropdownButtons = {
    more: {
        button: document.querySelector('.more-btn'),
        dropdown: document.querySelector('.more-btn-dropdown')
    },
    login: {
        button: document.querySelector('.login-btn'),
        dropdown: document.querySelector('.login-btn-dropdown')
    }
};

// Function to handle dropdown visibility
function handleDropdown(buttonKey) {
    const { button, dropdown } = dropdownButtons[buttonKey];

    // Show dropdown on hover
    button.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    // Hide dropdown when mouse leaves the button or dropdown
    button.addEventListener('mouseleave', (e) => {
        const toElement = e.relatedTarget;
        if (!dropdown.contains(toElement)) {
            dropdown.style.display = 'none';
        }
    });

    // Hide dropdown when mouse leaves the dropdown
    dropdown.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });

    // Prevent dropdown from closing when hovering over it
    dropdown.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });
}

// Initialize dropdowns
Object.keys(dropdownButtons).forEach(handleDropdown);
