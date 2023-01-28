import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShoeForm = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [type, setType] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [secondaryColor, setSecondaryColor] = useState("");
    const [mileage, setMileage] = useState(0);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/shoe", {
                brand,
                model,
                type,
                primaryColor,
                secondaryColor,
                mileage
            })
            .then((response) => {
                console.log(response);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1> New Shoe </h1>
                </div>
                <div className="col-6">
                    <Link to='/'>HOME</Link>
                </div>
            </div>
            <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row"> 
                            <div className="col-6">
                                <label htmlFor="name">Brand:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setBrand(e.target.value)}
                                    value={brand}
                                />
                                <label htmlFor="type">Model:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setModel(e.target.value)}
                                    value={model}
                                />
                                <label htmlFor="type">Type:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                />
                            </div>
                            <div className="col-6">
                                <p>Color:</p>
                                <label htmlFor="primaryColor">Primary Color:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    value={primaryColor}
                                />
                                <label htmlFor="secondaryColor">Secondary Color:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setSecondaryColor(e.target.value)}
                                    value={secondaryColor}
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary" type ="submit">Add Shoe</button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default ShoeForm;