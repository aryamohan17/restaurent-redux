import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ResruarantCard({item}) {
  console.log(item);
  return (
    <>
        <Link to={`/view-restuarant/${item.id}`} style={{textDecoration:'none'}}>
          <Card className='m-5'>
              <Card.Img variant="top" src={item.photograph} style={{height:'18rem',width: '25rem'}} className='p-3'/>
                  <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                          <p>Cuisine: {item.cuisine_type}</p>
                          <p>Neighborhood: {item.neighborhood}</p>
                      </Card.Text>
                  </Card.Body>
          </Card>
        </Link>
    </>
  )
}

export default ResruarantCard