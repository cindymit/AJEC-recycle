import db from '../db/connection.js'
import Bike from '../models/bike.js'


const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const bikes =
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

  await Bike.insertMany(bikes)
  console.log("Created bikes!")

  // close database connection. done.
  db.close()
}

insertData()