import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row,Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestaurantHours from './RestaurantHours';
import RestaurantReview from './RestaurantReview';

function Viewrestuarant() {
  const {id} = useParams()
  console.log(id);

  const [restuarant,setRestaurants] = useState({})

  const getRestaurants = async ()=>{
    const {data} =  await axios.get(`http://localhost:4000/restaurants/${id}`)
    // console.log(data);
    setRestaurants(data)
  }

console.log(restuarant);

  useEffect(()=>{
    getRestaurants()
  },[])
  // console.log("rest hours"+restuarant.operating_hours);
  return (
    <>
      <Row className='mt-0'>
        <Col lg={3}>
          <Image src={restuarant.photograph} alt="" fluid/>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item style={{overflow:'hidden'}}><h3>{restuarant.name}</h3></ListGroup.Item>
            <ListGroup.Item>Neighborhood: {restuarant.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Cuisine Type: {restuarant.cuisine_type}</ListGroup.Item>
            <ListGroup.Item>Address: {restuarant.address}</ListGroup.Item>
          </ListGroup>
          <p><RestaurantHours  hours={restuarant.operating_hours}/></p>
          <p><RestaurantReview review={restuarant.reviews}/></p>
        </Col>
      </Row>
    </>
  )
}

export default Viewrestuarant