import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice, fetchReviews} from "../http/deviceAPI";
import ListReviews from "../components/ListReviews";


const DevicePage = () => {
    const [device,  setDevice] = useState({info: []},)
    console.log(device.info)
    // console.log(device.listReviews)
    // const [reviews, setDevice] = useState({listReviews: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // const [reviews, setReviews] = useState({listReviews: []})
    //
    //    useEffect(() => {
    //     fetchReviews(reviews).then(data => setReviews(data))
    // }, [])
    // console.log(reviews.listReviews)
    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '3px solid lightgray'}}
                    >
                        <h3>Вартість {device.price} грн.</h3>
                        <Button variant={"outline-dark"}>Додати в корзину</Button>
                        <div
                            className="text-right"
                        >
                            Рейтинг: {device.rating}
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Параметри {device.name}</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            <ListReviews/>
            {/*<Row className="d-flex flex-column m-3">*/}
            {/*    <h1>Відгуки</h1>*/}
            {/*    {reviews.listReviews.map((info, index) =>*/}
            {/*        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>*/}
            {/*            {info.userId}: {info.review}*/}
            {/*        </Row>*/}
            {/*    )}*/}
            {/*</Row>*/}
        </Container>
    );
};

export default DevicePage;



