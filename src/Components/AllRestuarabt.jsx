import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import RestaurantCard from './RestaurantCard';
import { allRestaurentAction } from "../actions/allrestaurentAction";
import {useDispatch,useSelector} from 'react-redux'
function AllRestaurants() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        // dispatch all restaurent action
        dispatch(allRestaurentAction())
    }, []);
    const {allRestaurent} = useSelector((state)=>state.allRestaurentReducer)
    console.log(allRestaurent);
    
    return (
        <Row>
            {
                allRestaurent.map(restaurant=>(
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <RestaurantCard item={restaurant} />
                    </Col>
                ))
            }
        </Row>
    );
}

export default AllRestaurants;
