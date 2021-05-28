import db from '../db/connection.js'
import Bike from '../models/bike.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'


const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'bruno',
    email: 'root@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11),
    zip_code: '33309'
  })
  await user1.save()


  const bikes =
    [
      {
        "brand": "Titus Racer X 18.5",
        "imgURL": "https://images.unsplash.com/photo-1501857333393-a4963b840b49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "category": "Mountain",
        "condition": "fair",
        "price": "900",
        "sellerName": "Joe",
        "sellerEmail": "@@@"
      },
      {
        "brand": "Giant",
        "imgURL": "https://buckscountybikes.com/oc-content/uploads/2/1709.jpg",
        "category": "Mountain",
        "condition": "new",
        "price": "950",
        "sellerName": "Luke Cunningham",
        "sellerEmail": "lCunningham@gmail.com"
      },
      {
      "brand": "Scott",
      "imgURL": "https://i.ebayimg.com/images/g/wB8AAOSwlpNc7pUg/s-l800.jp",
      "category": "Mountain",
      "condition": "new",
      "price": "80",
      "sellerName": "Lynette Morris",
      "sellerEmail": "lMorris@gmail.com"
      },
      {
        "brand": "Trek",
        "imgURL": "https://trek.scene7.com/is/image/TrekBicycleProducts/FXSportCarbon4_21_32262_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440",
        "category": "hybrid",
        "condition": "new",
        "price": "1800",
        "sellerName": "Sergio Salazar",
        "sellerEmail": "SergioS@gmail.com"
      },
      {
        "brand": "Marin Fairfax",
        "imgURL": "https://cdn.thewirecutter.com/wp-content/uploads/2019/05/hybrid-bike-2019-update-lowres-4577.jpg",
        "category": "hybrid",
        "condition": "new",
        "price": "250",
        "sellerName": "Melissa Rice",
        "sellerEmail": "mrice@gmail.com"
      },
      
      {
        "brand": "Cannondale",
        "imgURL": "https://i.ebayimg.com/thumbs/images/g/EPEAAOSwRIJgh3LS/s-l300.jpg",
        "category": "hybrid",
        "condition": "fair",
        "price": "699",
        "sellerName": "  Rosalie Anderson",
        "sellerEmail": "RosalieAnderson@gmail.com"
      },


      {
        "brand": "Diamondback",
        "imgURL": "http://www.bikesdirect.com/products/diamondback-bicycles/diamondback-mountain-bikes/diamondback-trace-dualsport.jpg",
        "category": "Road",
        "condition": "new",
        "price": "600",
        "sellerName": "Jason Flores",
        "sellerEmail": "JFlores@gmail.com"
      },

      {
        "brand": "Challenger",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSx9awoaWB8YasOLeSkfW9qZ9okS7h4WJR1w&usqp=CAU",
        "category": "Road",
        "condition": "Good",
        "price": "500",
        "sellerName": "Roberta Frazier",
        "sellerEmail": "RobertaFrazier@gmail.com"
      },
      {
        "brand": "huffy",
        "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "category": "hybrid",
        "condition": "new",
        "price": "100",
        "sellerName": "Jane Doe",
        "sellerEmail": "@@@.com"
      },

      {
        "brand": "huffy",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaXWDtmoc2oWFDnBln4bJBCxTrM0WG4yFyQ&usqp=CAU",
        "category": "hybrid",
        "condition": "poor",
        "price": "30",
        "sellerName": "Hugo Norris",
        "sellerEmail": "HNorris@gmail.com"
      },

      
    ]

  await Bike.insertMany(bikes)
  console.log("Created bikes!")

  // close database connection. done.
  db.close()
}

insertData()