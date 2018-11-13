const mongoose = require('../db/mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        validate: {
            validator: v => {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: props => `${props.value} is not a valid email!!`
        },
        required: [true, 'Email required']
    }
});

module.exports = User;