import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import RestaurantCard from './RestaurantCard';

function AllRestaurants() {
    const [allRestaurants, setAllRestaurants] = useState([]);

    const getAllRestaurants = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/restaurants`);
            setAllRestaurants(response.data);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    useEffect(() => {
        getAllRestaurants();
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
