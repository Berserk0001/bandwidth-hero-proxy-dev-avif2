#!/usr/bin/env node
'use strict'
const app = require('express')()
const index = require('./util/index')

const PORT = process.env.PORT || 8080

app.get('/' , index)
app.get('/favicon.ico', (req, res) => res.status(204).end())
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
