import {useParams} from "react-router-dom"

import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import {fetchOneDevice} from "../http/deviceAPI";

const ListReviews = () => {
    const [device, setDevice] = useState({listReviews: []})

    console.log(device.info)
    // console.log(device.listReviews)
    // const [reviews, setDevice] = useState({listReviews: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    console.log(device.listReviews)
    return (
        <Row className="d-flex flex-column m-3">
            <h1>Відгуки</h1>
            {device.listReviews.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0
                        ? 'lightgray' : 'transparent', padding: 10}}>
                    <h6>{info.username}</h6>

                    <p>{info.review}</p>
                </Row>
            )}
        </Row>
    );
};

export default ListReviews;
