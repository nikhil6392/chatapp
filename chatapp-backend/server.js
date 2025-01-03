import mongoose from 'mongoose'

import config from './config/index.js'
import app from './app.js'

(async() => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("DB is connected")

        app.on ('error', (err) => {
            console.log("Error", err)
            throw err
        })

        const onListening = () => {
            console.log(`Listening on ${config.PORT}`)
        }
        app.listen(config.PORT,onListening)
    } catch(error){
        console.log("error", error)
        throw error
    }
})()
