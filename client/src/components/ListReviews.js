import {useParams} from "react-router-dom"

import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";

import {fetchOneDevice} from "../http/deviceAPI";
import CreateReviews from "./modals/CreateReviews";

const ListReviews = () => {
    const [device, setDevice] = useState({listReviews: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Row className="d-flex flex-column m-3">
            <h1>Відгуки</h1>
            <CreateReviews/>
            {device.listReviews.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0
                        ? 'lightgray' : 'transparent', padding: 10}}>
                    <h6>{info.username}: </h6>
                    {/*<hr/>*/}
                    <p>{info.review}</p>
                </Row>
            )}

        </Row>
    );
};

export default ListReviews;
