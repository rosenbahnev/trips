const env = process.env.NODE_ENV || 'development'

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: 'mongodb',
        cookie: 'x-auth-token',
        secret: 'qwerty'
    },
    production: {}
}

module.exports = config[env]