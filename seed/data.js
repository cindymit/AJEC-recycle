import db from "../db/connection.js";
import Bike from "../models/bike.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "bruno",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
    zip_code: "33309",
  });
  await user1.save();

  const bikes = [
    {
      brand: "Titus Racer X 18.5",
      imgURL:
        "https://images.unsplash.com/photo-1501857333393-a4963b840b49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "Mountain",
      condition: "Fair",
      price: "900",
      sellerName: "Joe",
      sellerEmail: "@@@",
    },

    {
      brand: "Giant Stance 2",
      imgURL: "https://buckscountybikes.com/oc-content/uploads/2/1709.jpg",
      category: "Mountain",
      condition: "Good",
      price: "950",
      sellerName: "Luke Cunningham",
      sellerEmail: "lCunningham@gmail.com",
    },

    {
      brand: "Motiv Rogue",
      imgURL: "https://img.ksl.com/mx/mplace-classifieds.ksl.com/884601-1620741669-756180.jpg?filter=marketplace/400x300_cropped",
      category: "Mountain",
      condition: "Good",
      price: "175",
      sellerName: "Lynette Morris",
      sellerEmail: "lMorris@gmail.com",
    },

    {
      brand: "FX Sport Carbon 4",
      imgURL:
        "https://trek.scene7.com/is/image/TrekBicycleProducts/FXSportCarbon4_21_32262_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440",
      category: "Hybrid",
      condition: "New",
      price: "1800",
      sellerName: "Sergio Salazar",
      sellerEmail: "SergioS@gmail.com",
    },
    
    {
      brand: "Marin Fairfax 1",
      imgURL:
        "https://cdn.thewirecutter.com/wp-content/uploads/2019/05/hybrid-bike-2019-update-lowres-4577.jpg",
      category: "Hybrid",
      condition: "New",
      price: "250",
      sellerName: "Melissa Rice",
      sellerEmail: "mrice@gmail.com",
    },

    {
      brand: "Cannondale",
      imgURL:
        "https://i.ebayimg.com/thumbs/images/g/EPEAAOSwRIJgh3LS/s-l300.jpg",
      category: "Hybrid",
      condition: "Fair",
      price: "699",
      sellerName: "Rosalie Anderson",
      sellerEmail: "RosalieAnderson@gmail.com",
    },

    {
      brand: "Diamondback",
      imgURL:
        "http://www.bikesdirect.com/products/diamondback-bicycles/diamondback-mountain-bikes/diamondback-trace-dualsport.jpg",
      category: "Road",
      condition: "New",
      price: "600",
      sellerName: "Jason Flores",
      sellerEmail: "JFlores@gmail.com",
    },

    {
      brand: "Challenger",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSx9awoaWB8YasOLeSkfW9qZ9okS7h4WJR1w&usqp=CAU",
      category: "Road",
      condition: "Good",
      price: "500",
      sellerName: "Roberta Frazier",
      sellerEmail: "RobertaFrazier@gmail.com",
    },

    {
      brand: "Huffy",
      imgURL:
        "https://i5.walmartimages.com/asr/90756fe0-79de-45b8-9f41-83c564267521.39c0f88cca407d66ddb13263ebab0237.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
      category: "Hybrid",
      condition: "New",
      price: "400",
      sellerName: "Jane Doe",
      sellerEmail: "JaneDoe@gmail.com",
    },

    {
      brand: "Huffy",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaXWDtmoc2oWFDnBln4bJBCxTrM0WG4yFyQ&usqp=CAU",
      category: "Hybrid",
      condition: "Poor",
      price: "30",
      sellerName: "Hugo Norris",
      sellerEmail: "HNorris@gmail.com",
    },
  ];

  await Bike.insertMany(bikes);
  console.log("Created bikes!");

  // close database connection. done.
  db.close();
};

insertData();
