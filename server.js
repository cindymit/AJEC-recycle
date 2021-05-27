import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT || 3001

import db from './db/connection.js'
import Post from './models/post.js'

const app = express()

app.use(express.json())
app.use(logger('dev'))

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})

app.get('/', (req, res) => res.send("This is root!"))

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if (!post) throw Error('Post not found')
        res.json(post)
    } catch (e) {
        console.log(e)
        res.send('Post not found!')
    }
})

app.post('/posts', async (req, res) => {
    try {
        const post = await new Post(req.body)
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.put('/posts/:id', async (req, res) => {
  const { id } = req.params
  const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(post)
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted")
        }
        throw new Error("Post not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})