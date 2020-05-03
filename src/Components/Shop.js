import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {

    const pixabay_key = '14964570-16eaede65be3093b01f90f685';
    var URL = "https://pixabay.com/api/?key=" + pixabay_key + "&q=" + encodeURIComponent('coding');

    const data = await fetch(URL);
    const dataJson = await data.json();
    const items = await dataJson.hits;

    setItems(items)
  }

  return (
    <div>
      {
        items.map(item => {
          return (
            <Link key={item.id} to={`/shop/${item.id}`}>
              <div className="thumbnail">
                <img src={item.previewURL} alt="img" />
                <h3>{item.user}</h3>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
}

export default Shop;