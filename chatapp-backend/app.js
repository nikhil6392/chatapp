/**
 * @file app.js
 * @description this file contains the API routes for messages.
 * @author Nikhil Pathak
 * @version 1.0.0
 */

import express from 'express'
import Pusher from 'pusher'
import Messages from './model/dbMessages.js'
import mongoose from 'mongoose'
import config from './config/index.js'

// Initialize express app
const app = express()
app.use(express.json())

const pusher = new Pusher({
    app_id: config.app_id,
    key:    config.app_key,
    secret: config.secret,
    cluster: "ap2",
    useTLS: true
})


// API Endpoints

// Changes for test
const db = mongoose.connection
db.once("open", () => {
    console.log("Db is connected")
    const msgCollection = db.collection("msgs")
    const changeStream = msgCollection.watch()
    changeStream.on('change', change => {
        console.log("change")
        if(change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusher')
        }
    })
})

/**
 *  @route GET /
 *  @description Home route tp check API status
 *  @returns {String} returns a welcome message
 */
app.get("/",(req,res) => res.status(200).send("Hello developer"))

/**
 * @route POST /messages/new
 * @description Endpoint to create new message
 * @param {object} req req object containing msg data
 * @param {object} res the response object
 * @returns {object} returns a message or error
 */
app.post('/messages/new', async (req, res) => {
    try {
        const dbMessage = req.body;
        const newMessage = await Messages.create(dbMessage);
        res.status(201).send(newMessage);
    } catch (err) {
        res.status(500).send(err);
    }
});


/**
 * @route GET /messages/sync
 * @description get the data from the DB
 * @function find gets the msgs
 * @param {object} req object containing the req to get data
 * @param {object} res the response object
 * @returns {object} returns messages or error
 */


app.get('/messages/sync', async(req,res) => {
    try{
        const data = await Messages.find()
        res.status(200).json(data)
    } catch(err) {
        res.status(500).send(err)
    }
    
})

export default app;