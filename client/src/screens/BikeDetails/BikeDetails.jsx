import React from 'react';
import { useState, useEffect } from 'react'
import './BikeDetails.css'
import { Layout } from '../../components'
import { getBike, deleteBike } from '../../services/products'
import { useParams, Link } from 'react-router-dom'


const BikeDetails = (props) => {
  const [bike, setBike] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchBike = async () => {
      const product = await getBike(id)
      setBike(product)
      setLoaded(true)
    }
    fetchBike()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }



  return (
    <Layout user={props.user}>
    <div className='bike-detail'>
        <img
          className='bike-detail-image'
          src={bike.imgURL}
          alt={bike.name}
        />
        <div className='detail'>
          <div className='name'>{bike.name}</div>
          <div className='price'>{`$${bike.price}`}</div>
          <div className='description'>{bike.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/bikes/${bike._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteProduct(bike._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default BikeDetails;