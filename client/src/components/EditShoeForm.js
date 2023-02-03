import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditShoeForm = () => {
    const {id} = useParams();
    const [shoeBrand, setShoeBrand] = useState("");
    const [shoeModel, setShoeModel] = useState("");
    const [shoeType, setShoeType] = useState("");
    const [shoePrimaryColor, setShoePrimaryColor] = useState("");
    const [shoeSecondaryColor, setShoeSecondaryColor] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/shoe/${id}`)
            .then((response) => {
                setShoeBrand(response.data.brand);
                setShoeModel(response.data.model);
                setShoeType(response.data.type);
                setShoePrimaryColor(response.data.primaryColor);
                setShoeSecondaryColor(response.data.secondaryColor);
            })
            .catch((err) => {
                console.log(err.response);
                setShoeBrand(`Shoe not found using that ID`);
            });
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/shoe/edit/${id}`, {
                brand: shoeBrand,
                model: shoeModel,
                type: shoeType,
                primaryColor: shoePrimaryColor,
                secondaryColor: shoeSecondaryColor
            })
            .then((response) => {
                console.log(response);
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1> Edit Shoe </h1>
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
                                    onChange={(e) => setShoeBrand(e.target.value)}
                                    value={shoeBrand}
                                />
                                {errors.brand ? <p>{errors.brand.message}</p>: null}
                                <label htmlFor="type">Model:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setShoeModel(e.target.value)}
                                    value={shoeModel}
                                />
                                {errors.model ? <p>{errors.model.message}</p>: null}
                                <label htmlFor="type">Type:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setShoeType(e.target.value)}
                                    value={shoeType}
                                />
                            </div>
                            <div className="col-6">
                                <p>Color:</p>
                                <label htmlFor="primaryColor">Primary Color:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setShoePrimaryColor(e.target.value)}
                                    value={shoePrimaryColor}
                                />
                                <label htmlFor="secondaryColor">Secondary Color:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setShoeSecondaryColor(e.target.value)}
                                    value={shoeSecondaryColor}
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary" type ="submit">Edit Shoe</button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default EditShoeForm;