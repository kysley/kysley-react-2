'use strict'

const app = require('./app')

const PORT = process.env.PORT || 8090

app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}!`)
})