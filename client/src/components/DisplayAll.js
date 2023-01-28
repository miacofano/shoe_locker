import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const DisplayAll = () => {
    const [allShoes, setAllShoes] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/shoes")
            .then((response) => {
                setAllShoes(response.data)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1> Shoe Locker </h1>
                </div>
                <div className="col-6">
                    <Link to = '/shoe'> NEW SHOES </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2> Current Shoes </h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col">Color</th>
                                <th scope="col">Mileage</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allShoes.map((shoe, index) => {
                                return (
                                    <tr key={shoe._id}>
                                        <td>{shoe.brand}</td>
                                        <td>{shoe.model}</td>
                                        <td>{shoe.primaryColor}|{shoe.secondaryColor}</td>
                                        <td>{shoe.mileage}</td>
                                        <td>
                                            <Link to={`/shoe/${shoe._id}`}>
                                                <button>Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DisplayAll