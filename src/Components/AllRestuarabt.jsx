import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import RestaurantCard from './RestaurantCard';
import { allRestaurentAction } from "../actions/allrestaurentAction";
import {useDispatch} from 'react-redux'
function AllRestaurants() {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const dispatch = useDispatch()
    const getAllRestaurants = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/restaurants`);
            setAllRestaurants(response.data);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    useEffect(() => {
        // getAllRestaurants();
        // dispatch all restaurent action
        dispatch(allRestaurentAction)
    }, []);

    return (
        <Row>
            {
                allRestaurants.map(restaurant=>(
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <RestaurantCard item={restaurant} />
                    </Col>
                ))
            }
        </Row>
    );
}

export default AllRestaurants;
