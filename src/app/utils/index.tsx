export const validationRules = {
    phone: {
        required: 'Mobile number is required.',
        pattern: {
            value: /^[0-9]{10}$/,
            message: 'Invalid mobile number.',
        },
    },
    password: {
        required: 'Password is required.',
        minLength: {
            value: 5,
            message: 'Password must be at least 5 characters long.',
        },
        maxLength: {
            value: 12,
            message: 'Password must not exceed 12 characters.',
        },
    },
    name: {
        required: 'Name is required.',
        minLength: {
            value: 4,
            message: 'Name must be at least 4 characters long.',
        },
        maxLength: {
            value: 20,
            message: 'Name must not exceed 20 characters.',
        },
    },
    companyname: {
        required: 'Company Name is required.',
        minLength: {
            value: 4,
            message: 'Company Name must be at least 4 characters long.',
        },
        maxLength: {
            value: 25,
            message: 'Company Name must not exceed 20 characters.',
        },
    },
    email: {
        required: 'Email is required.',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address.',
        },
    },
};