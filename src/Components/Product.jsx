import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import itemsData from './items.json';
import './Product.css'

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category') || 'no'; // Default to 'all' if no category specified

  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = itemsData[category] || [];
    setItems(filteredItems);
  }, [category]);

  return (
    <div>
      <div className={`header-prod header-prod-${category}`}><h2>-{category}-</h2></div>
      <div className="product-grid">

      {items.map(item => (
        
            <div className="product-card" id={item.id}>

              <div className="product-card-image"><img src={item.img} alt="product-card-view" /></div>

              <div className="product-card-text">         
                <h3>{item.name}</h3>
                    <Link to={`/showcase?id=${item.id}`} className="view-item-button">
                    -View Item-
                    </Link>
              </div> 

            </div>
      ))}
      </div>

          <div className="footer p-5 text-xl-center fw-lighter " style={{background: "#f4e0ea"}}>
            <Link to='/shop'><p style={{color: "black"}}>- BACK TO COLLECTION -</p></Link>
           <small style={{color: "black"}}>-😊 HAPPY SHOPPING ハッピー・ショッピング 😊-</small>
          </div>
    </div>
  );
};

export default Products;
