const validate = function (email, password, password_confirm) {
    // Email
    if (typeof email !== 'string') {
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    // Password
    if (typeof password !== 'string') {
        return false;
    }

    if (password.length < 6 || password.length > 20) {
        return false;
    }

    // Password Confirm
    if (password_confirm !== password) {
        return false;
    }

    return true;
}
module.exports = validate;