import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap';

function RestaurantReview({review}) {
    console.log(review);

    const [open, setOpen] = useState(false);
  return (
    <>
        {review?(                                                   
            <>
                <Button variant="light"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} 
                >
                    Client Review
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {
                            review?.map(item=>(
                                <div>
                                    <h6>{item.name} : (<span>{item.date}</span>)</h6>
                                    <p>Rating: {item.rating}</p>
                                    <p>Comments: {item.comments}</p>
                                </div>
                            ))
                        }
                    </div>
                </Collapse>
            </>
            ):''
        }
    </>
  )
}

export default RestaurantReview