# Project Overview

## Project Name

Re-Cycle

[Deployed Site Link](https://ajec-recycle.netlify.app/)

## Project Description

The purpose of this web application is to allow users the ability to resale and purchase used bikes. New guests to the site will have the ability to view bike inventory and have limited access to bike details. Once guests create a user profile, they will be able to view full bike details, which includes the seller's username and email address. In addition, users have the ability to post bikes for resale with the option to edit and delete the post as needed.

## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1CfwPFpXbkrzVORA8lZNtuHvR9Qy-HTMvPQrbXy6MLtc/edit?usp=sharing)

## Wireframes

Homepage Screenshot

![Homepage Screenshot](https://i.imgur.com/xiFbaZL.png")

Bike Details Screenshot

![Bike Details Screenshot](https://i.imgur.com/pGzjTdl.png")

## Component Hierarchy

![Component Hierarchy](https://i.imgur.com/OgRAAxW.png")

## Schema

Bike Schema

```
const Bike = new Schema(
  {
    brand: { type: String, required: true },
    imgURL: { type: String, required: true },
    category: { type: String, required: true },
    description: {type: String, required: true},
    condition: { type: String, required: true },
    price: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerEmail: { type: String, required: true }
  },
)
```

User schema

```
const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    zip_code: { type: String, required: true},
  },
  { timestamps: true }
)
```

### MVP/PostMVP

#### MVP 
- Full CRUD
- Sign-up for new account
- Login/Logout of current account
- Users post used bikes
- Filter & Search Functionality
- Media query/responsiveness design


#### PostMVP
- Only Users have the ability to view seller contact information when they click on image for bike details
- Hamburger menu for navigation links
- Shopping cart for Instant Purchase
- Click on User’s Profile to display all of their bike postings
- Location filter
- Image carousel
- User favorites