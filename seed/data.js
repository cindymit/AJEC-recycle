import db from '../db/connection.js'
import Post from '../models/post.js'


const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const posts =
    [
      {
        "brand": "abstract art #1",
        "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "category": ".",
        "condition": "Jane Doe",
        "price": "Lorem ipsum dolor um.",
        "sellerName": "Jane Doe",
        "sellerEmail": "@@@"
      },
      {
        "brand": "huffy",
        "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "category": "hybrid",
        "condition": "new",
        "price": "100",
        "sellerName": "Jane Doe",
        "sellerEmail": "@@@.com"
      }
    ]

  await Post.insertMany(posts)
  console.log("Created posts!")

  // close database connection. done.
  db.close()
}

insertData()