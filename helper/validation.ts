interface ValidationResult {
    isValid: boolean;
    errorMessage?: string;
}

function validateEmail(email: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return { isValid, errorMessage: isValid ? undefined : 'Invalid email format' };
}

function validatePassword(password: string): ValidationResult {
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const minLength = 10;
    const isLongEnough = password.length >= minLength;

    const validationErrors: string[] = [];
    if (!isLongEnough) {
        validationErrors.push(`Password must be at least ${minLength} characters long`);
    }
    if (!hasUppercase) {
        validationErrors.push('Password must contain at least one uppercase letter');
    }
    if (!hasLowercase) {
        validationErrors.push('Password must contain at least one lowercase letter');
    }
    if (!hasNumber) {
        validationErrors.push('Password must contain at least one number');
    }

    const isValid = validationErrors.length === 0;
    const errorMessage = isValid ? undefined : validationErrors.join('\n'); // Combine errors
    return { isValid, errorMessage };
}

function validateSimplePassword(password: string): ValidationResult {
    const isLongEnough = password.length >= 5;

    const isValid = isLongEnough;
    const errorMessage = isValid ? undefined : 'Password must be at least 5 characters long';
    return { isValid, errorMessage };
}

function validateUsername(username: string): ValidationResult {
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]*$/; // Restricts starting character and allowed characters
    const minLength = 5;
    const maxLength = 30;

    const validationErrors: string[] = [];
    if (!usernameRegex.test(username)) {
        validationErrors.push('Username can only contain letters, numbers, and underscores.');
    }
    if (username.length < minLength) {
        validationErrors.push(`Username must be at least ${minLength} characters long.`);
    } else if (username.length > maxLength) {
        validationErrors.push(`Username must be less than ${maxLength + 1} characters long.`);
    }

    const isValid = validationErrors.length === 0;
    const errorMessage = isValid ? undefined : validationErrors.join('\n'); // Combine errors
    return { isValid, errorMessage };
}

function validateName(name: string, fieldName: string): ValidationResult {
    const usernameRegex = /^[a-zA-Z ]+$/; // Restricts starting character and allowed characters
    const minLength = 3;
    const maxLength = 30;

    const validationErrors: string[] = [];
    if (!usernameRegex.test(name)) {
        validationErrors.push(`${fieldName} can only contain letters and space`);
    }
    if (name.length < minLength) {
        validationErrors.push(`${fieldName} must be at least ${minLength} characters long.`);
    } else if (name.length > maxLength) {
        validationErrors.push(`${fieldName} must be less than ${maxLength + 1} characters long.`);
    }

    const isValid = validationErrors.length === 0;
    const errorMessage = isValid ? undefined : validationErrors.join('\n'); // Combine errors
    return { isValid, errorMessage };
}

function validatePhone(name: string): ValidationResult {
    const usernameRegex = /^[0-9+]+$/; // Restricts starting character and allowed characters
    const minLength = 7;
    const maxLength = 15;

    const validationErrors: string[] = [];
    if (!usernameRegex.test(name)) {
        validationErrors.push(`Phone can only contain number`);
    }
    if (name.length < minLength) {
        validationErrors.push(`Phone must be at least ${minLength} characters long.`);
    } else if (name.length > maxLength) {
        validationErrors.push(`Phone must be less than ${maxLength + 1} characters long.`);
    }

    const isValid = validationErrors.length === 0;
    const errorMessage = isValid ? undefined : validationErrors.join('\n'); // Combine errors
    return { isValid, errorMessage };
}


export { validateEmail, validatePassword, validateSimplePassword, validateUsername, validateName, validatePhone };
