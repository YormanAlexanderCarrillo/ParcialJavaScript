const express = require('express');
const app = express()
const path = require('path')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.set('PORT', process.env.PORT || 3000)
app.set(express.v)

app.listen(app.get('PORT'), ()=>{
    console.log(`THE SERVER LISTENING ON PORT ${app.get('PORT')}`)
})

app.use('/',require('./routes/index') )