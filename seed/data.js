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
      sellerName: "Joe James",
      sellerEmail: "jj@gmail.com",
      description: "This has been my commuter bike for years. In 3 years have only ever gotten a flat tire 1 time due to the puncture resistant tires. I believe it’s a 58cm frame. I am 5’10” if that helps you gauge. Let me know if you have any questions. I don’t know a ton about bikes but I do know this one is sturdy and reliable. Thanks!",

    },

    {
      brand: "Giant Stance 2",
      imgURL: "https://buckscountybikes.com/oc-content/uploads/2/1709.jpg",
      category: "Mountain",
      condition: "Good",
      price: "950",
      sellerName: "Luke Cunningham",
      sellerEmail: "lCunningham@gmail.com",
      description: "New handle bars, comfy seat, rides like an angel. Great for rides in these covid summers Coaster and handle brakes, original fenders with a basket."
    },

    {
      brand: "Motiv Rogue",
      imgURL: "https://img.ksl.com/mx/mplace-classifieds.ksl.com/884601-1620741669-756180.jpg?filter=marketplace/400x300_cropped",
      category: "Mountain",
      condition: "Good",
      price: "175",
      sellerName: "Lynette Morris",
      sellerEmail: "lMorris@gmail.com",
      description: `Miyata Handmade Japan Sport/Road Bike. Very Light and Fast.
      All components work perfectly. Brand New Tire.
      Comfortable Handlebar and brake levers are excellent for city ride also up position gears shifter.
      Well maintained. Mechanically, the bike has been tuned for use.
      Brakes working perfect. All Gears shift smoothly.
      Completely tuned and inspected by Professional Bike Mechanic.
      Good for people from 5'5" to 6'2"
      Ready to ride.`
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
      description: `Selling a 2018 Cannondale F-Si Carbon 5
      Carbon fiber frame size small
      Shimano XT / SLX 11 speed. Deore Hydraulic disc brakes. 27.5 inch wheels
      Rockshox fork with 100mm travel
      Excellent condition. New brake pads and rotors. Comes with everything pictured`
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
      description:`Completely stock. Gently used . Excellent condition
      Features:
      Smartform C1 Premium Alloy frame - the lightest, most sophisticated aluminum construction available
      Ballistec Carbon fiber Fork
      Airfoil tube shape - reducing drag
      Hollowgram Knot 27 seatpost
      Shimano 105 r7000 drivetrain
      Hydraulic Disc brakes`
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
      description:`Aluminum frame making it very light weight (I live on 4th floor walk up!). I loved this bike, I'm just getting too old for a road bike in the city.`
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
      description: `For sale I have an Origin8 Cutler 7 Commuter Bike in excellent condition. Though known for making bike parts Origin8 released this bike about 10 years ago. It's a very solid bike with 7 speeds and some good components. No issues but it has been sitting for a while and could use a light tune up.
                    It's a simple process: you see, you like, you pick up, cash only.
                    Thanks for looking.`
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
      description: `2017 State undefeated II with All City crank, rims and brake levers. Mint condition! Indoor storage, NO rust NO cracks. Super Quick bike, tires in good condition. You’ll fall in love how light it is. Adding the original handlebars with grips and a specialized saddle.
      `
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
      description: `GT -Palomar Mountain bike in Like New condition
      --- 21 speed (3x7)
      --- dual suspension
      --- Medium size fits rider of 5'5" to 6'0"
      --- Used twice then moved to an apartment
      --- smooth braking and shifting
      --- sorry, price firm ---`
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
      description: `selling a custum made 2021 cinelli tutto plus
      everything is new condition ready to race.
      all details in the  picture.
      any question welcome.`
    },
  ];

  await Bike.insertMany(bikes);
  console.log("Created bikes!");

  // close database connection. done.
  db.close();
};

insertData();
