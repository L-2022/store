import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import React, {useContext, useEffect} from 'react';
import DeviceItem from "../components/DeviceItem";
import DeviceList from "../components/DeviceList";

import {observer} from "mobx-react-lite";

const Basket = () => {


    // const [device, setDevice] = useState({info: []})
    // const {id} = useParams()
    //
    // useEffect(() => {
    //     fetchOneDevice(id).then(data => setDevice(data))
    // }, [])
    // const {baskets} = useContext(Context)
    // const {device} = useContext(Context)
    const device = [
        {id: 1, name: 1, price: 1543,},
        {id: 2, name: 6, price: 1345,},
        {id: 3, name: 7, price: 1354,},
        {id: 4, name: 8, price: 1345,},
    ];
    const baskets = [
        {id: 1, device_id: 1, basket_id: 1,},

    ];

    return (
        <Container className="mt-4">
            <Row className="d-flex flex-column m-3">
                <h1>Параметри</h1>
                {baskets.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.device_id}: {info.basket_id}
                        {device.map(device =>
                            <DeviceItem key={info.device_id} device={device.name}/>
                        )}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Basket;











// import React, {useContext} from 'react';
// import {Container, Row} from "react-bootstrap";
// import {Context} from "../index";
// import {observer} from "mobx-react-lite";
// import DeviceItem from "../components/DeviceItem";
// import Col from "react-bootstrap/Col";
// import TypeBar from "../components/TypeBar";
// import BrandBar from "../components/BrandBar";
// import DeviceList from "../components/DeviceList";
// import Pages from "../components/Pages";
// import BasketList from "../components/BasketList";
//
//
// const Basket = observer(() => {
//     const {baskets} = useContext(Context)
//     // baskets.id.map(i =>
//
// // );
//
//     return (
//         <Container>
//             <Row className="mt-2">
//                 <Col md={9}>
//                     <BasketList/>
//                 </Col>
//             </Row>
//         </Container>
//         // <p>123</p>
//         // <Row className="d-flex">
//         //     {baskets.devices.map(i =>
//         //         <DeviceItem key={i.id} baskets={i}/>
//         //     )}
//         //
//         // </Row>
//     );
// });
//
//
//
// export default Basket;
