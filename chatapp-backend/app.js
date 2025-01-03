/**
 * @file app.js
 * @description this file contains the API routes for messages.
 * @author Nikhil Pathak
 * @version 1.0.0
 */

import express from 'express'
import Messages from './model/dbMessages.js'

// Initialize express app
const app = express()


// API Endpoints

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

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

/**
 * @route GET /messages/sync
 * @description get the data from the DB
 * @function find gets the msgs
 * @param {object} req object containing the req to get data
 * @param {object} res the response object
 * @returns {object} returns messages or error
 */
app.get('/messages/sync', (req,res) => {
    Messages.find((err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})

export default app;