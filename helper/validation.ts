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
    const isLongEnough = password.length >= 8;

    const validationErrors: string[] = [];
    if (!isLongEnough) {
        validationErrors.push('Password must be at least 8 characters long');
    }
    if (!hasUppercase) {
        validationErrors.push('Password must contain at least one uppercase letter');
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

export { validateEmail, validatePassword, validateSimplePassword };
