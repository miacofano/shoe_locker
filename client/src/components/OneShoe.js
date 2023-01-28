import React, {useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const OneShoe = (props) => {

    const {id} = useParams();
    const [oneShoe, setOneShoe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/shoe/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneShoe(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/shoe/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1> {oneShoe.brand} {oneShoe.model} </h1>
                </div>
                <div className="col-6">
                    <Link to='/'>HOME</Link>
                </div>
            </div>
            <div className="row">
                <span className="border border-dark">
                    <p>Color: {oneShoe.primaryColor}|{oneShoe.secondaryColor} </p>
                    <p>Type: {oneShoe.type}</p>
                    <p>Mileage: {oneShoe.mileage} </p>
                </span>
                <div className="col-6">
                    <button className="btn btn-danger" onClick={handleDelete}> RETIRE </button>
                </div>
            </div>
        </div>
    )

}

export default OneShoe