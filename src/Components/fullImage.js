import React, { useState, useEffect } from 'react';
import './App.css';

function Image({ match }) {

    useEffect(() => {
        fetchItem();
        // eslint-disable-next-line
    }, []);

    const [item, setItem] = useState([]);

    const fetchItem = async () => {

        const pixabay_key = '14964570-16eaede65be3093b01f90f685';
        var URL = "https://pixabay.com/api/?key=" + pixabay_key + `&id=${match.params.id}`;

        const data = await fetch(URL);
        const dataJson = await data.json();
        const img = await dataJson.hits[0];

        setItem(img);
    }

    return (
        <div className="full-image">
            <img src={item.largeImageURL} alt="img" />
            <h3>{item.user}</h3>
        </div>
    );
}

export default Image;