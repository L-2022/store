import React, {useState, useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {createReview} from "../../http/deviceAPI";

const CreateReviews = () => {

    const [value, setReviews] = useState('')
    const {id} = useParams()
    console.log(id)
    console.log(value)
    const addReview = () => {
        const formData = new FormData()
        formData.append('review', value)
        formData.append('userId', id)
        console.log(formData)
        createReview(formData)
    }


    return (
                <Form>
                    <Form.Control

                        // onChange={e => setReviews(e.target.value)}
                        placeholder={"Відгук"}
                    />
                    <Button variant="outline-success" onClick={addReview}>Дадати</Button>
                </Form>
    );
};
export default CreateReviews;
