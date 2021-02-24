const express = require('express')
const Whppt = require('@whppt/api-express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const options = {
  security: {
    provider: 'jwt',
    jwt: {
      secret: process.env.APP_KEY,
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE
    }
  }
}

Whppt(options).then(whppt => app.use(whppt))

module.exports = app
