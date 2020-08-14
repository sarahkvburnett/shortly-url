import validator from 'validator';

export const isLoginValid = ({email, password}) => {
    const errorMsgs = [];
    if (validator.isEmpty(email) || !validator.isEmail(email)) errorMsgs.push('Please enter your email');
    if ( validator.isEmpty(password)) errorMsgs.push('Please enter your password')
    return errorMsgs;
}

export const isSignupValid = ({firstName, lastName, email, password, password2}) => {
    const errorMsgs = [];
    if ( validator.isEmpty(firstName)) errorMsgs.push('Please enter your first name');
    if ( validator.isEmpty(lastName)) errorMsgs.push('Please enter your last name');
    if (validator.isEmpty(email) || !validator.isEmail(email)) errorMsgs.push('Please enter your email');
    if ( validator.isEmpty(password)) errorMsgs.push('Please enter your password');
    if ( validator.isEmpty(password2)) errorMsgs.push('Please confirm your password');
    if ( password.length < 6 ) errorMsgs.push('Password must be at least 6 characters')
    if ( password !== password2) errorMsgs.push('Entered passwords are not the same');
    return errorMsgs;
}