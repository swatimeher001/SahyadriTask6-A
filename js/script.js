document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for now

        // Validate Name field
        const nameInput = form.querySelector('input[name="name"]');
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            showError(nameInput, 'Name is required');
            return;
        } else {
            clearError(nameInput);
        }

        // Validate Username field
        const usernameInput = form.querySelector('input[name="username"]');
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
            showError(usernameInput, 'Username is required');
            return;
        } else {
            clearError(usernameInput);
        }

        // Validate Email field
        const emailInput = form.querySelector('input[name="email"]');
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            showError(emailInput, 'Email is required');
            return;
        } else if (!isValidEmail(emailValue)) {
            showError(emailInput, 'Please enter a valid email address');
            return;
        } else {
            clearError(emailInput);
        }

        // Validate Password field
        const passwordInput = form.querySelector('input[name="password"]');
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            showError(passwordInput, 'Password is required');
            return;
        } else if (passwordValue.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            return;
        } else {
            clearError(passwordInput);
        }

        // Validate Terms checkbox
        const termsCheckbox = form.querySelector('input[name="terms"]');
        if (!termsCheckbox.checked) {
            showError(termsCheckbox.parentElement, 'You must agree to the terms and conditions');
            return;
        } else {
            clearError(termsCheckbox.parentElement);
        }

        // If all validations pass, show success message
        showSuccessMessage();
    });

    // Function to show error message
    function showError(input, message) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.textContent = message;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            input.parentElement.appendChild(errorDiv);
        }
        input.classList.add('error');
    }

    // Function to clear error message
    function clearError(input) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.classList.remove('error');
    }

    // Function to validate email format using a simple regex
    function isValidEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to show success message (popup or modal)
    function showSuccessMessage() {
        // Example using alert() for simplicity
        alert('Account created successfully!');
        
        // You can replace alert() with a more sophisticated modal or notification mechanism
        // Example using Bootstrap modal:
        // $('#successModal').modal('show');
    }
});


