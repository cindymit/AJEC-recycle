# Project Overview

## Project Name

Re-Cycle

## Project Description

The purpose of this web application is to allow users the ability to resale and purchase used bikes. New guests to the site will have the ability to view bike inventory and limited access to bike details. Once guests create a user profile, they will be able to view full bike details, which includes seller's username and email address. In addition, users have the ability to post bikes for resale with the option to edit and delete the post as needed.

## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1CfwPFpXbkrzVORA8lZNtuHvR9Qy-HTMvPQrbXy6MLtc/edit?usp=sharing)

## Wireframes

[Figma Wireframe](https://www.figma.com/file/kv2Un4Wg9qpxKTgswK992x/Re-CyCle?node-id=0%3A1)

## Component Hierarchy

[Component Hierarchy](https://whimsical.com/ajec-recycle-XT2oHb6NT8eHkv8nPiaVPc)

## Schema

Bike Schema

```
const Bike = new Schema(
  {
    brand: { type: String, required: true },
    imgURL: { type: String, required: true },
    category: { type: String, required: true },
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
  },
```

### MVP/PostMVP

#### MVP 
- Full CRUD
- Sign-Up
- Login
- Users post used bikes
- Potential Buyers should be able to add bikes to Favorites
- Filter & Search Functionality


#### PostMVP  
- Shopping cart for Instant Purchase
- Only User’s have the ability to view seller contact information when they click on image for bike details
- Click on User’s Profile to display all of their bike postings
- Location filter
- Image carousel
- User favorites
