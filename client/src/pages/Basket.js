import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {checkBasket, login, registration} from "../http/userAPI";
const Basket = () => {
    const {basket} = useContext(Context)
    const click = async () => {
        try {

            let data= await checkBasket(28);
            console.log(data)
            console.log(data.rows)
        } catch (e) {
            console.log(e)
        }

    }
    let data= checkBasket(28);
    console.log(data)
    // const {basket} = useContext(Context)
    // console.log(basket.idUser.map(i =>console.log(i)))
    // useEffect(() => {
    //     fetchTypes().then(data => device.setTypes(data))
    //     fetchBrands().then(data => device.setBrands(data))
    //     fetchDevices(null, null, 4, 5).then(data => {
    //         device.setDevices(data.rows)
    //         device.setTotalCount(data.count)
    //     })
    // }, [])
    //
    // useEffect(() => {
    //     fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 15).then(data => {
    //         device.setDevices(data.rows)
    //         device.setTotalCount(data.count)
    //     })
    // }, [device.page, device.selectedType, device.selectedBrand,])
    return (
        <Container className="mt-4">
            <p>{basket}</p>

            {/*<Row className="d-flex flex-column m-3">*/}
            {/*    <h1>Basket {basket.length}</h1>*/}

            {/*    {basket.idDevise.map((basket =>*/}

            {/*        <Card>*/}
            {/*            {basket.device_id}*/}
            {/*        </Card>)*/}
            {/*    )}*/}
            {/*</Row>*/}
        </Container>
    );
};

export default Basket;



{/*<Row className="d-flex flex-column m-3">*/}
{/*    <h1>Параметри</h1>*/}
{/*    {baskets.map((info, index) =>*/}
{/*        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>*/}
{/*            {info.device_id}: {info.basket_id}*/}
{/*            {device.map(device =>*/}
{/*                <DeviceItem key={info.device_id} device={device.name}/>*/}
{/*            )}*/}
{/*        </Row>*/}
{/*    )}*/}
{/*</Row>*/}







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
