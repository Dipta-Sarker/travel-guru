import React, { useEffect, useState } from 'react';
import Css from'./Home.css';
import Button from '@material-ui/core/Button';
import Location from '../Location/Location';
import {data} from '../../FakeData/FakeData';

const Home = () => {
    const cart3 = data.slice(0,3);
    const [cart, setCard] = useState(cart3);

    return (
        <div>
            <div className="details">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...,
                </p>           
                <Button variant="contained" color="secondary">
                Booking
                </Button>
            </div> 
            <div className="card">
                {
                cart.map(cart =><Location cart={cart}></Location>)
                }
            </div>
        </div>
    );
};

export default Home;