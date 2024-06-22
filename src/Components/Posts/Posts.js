import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Config';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';

function Posts() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { setPostDetails } = useContext(ProductContext);

  useEffect(() => {
    getDocs(collection(db, 'products')).then(items => {
      const allProducts = items.docs.map(item => {
        return {
          ...item.data(),
          id: item.id
        }
      });
      setProduct(allProducts);
    })
  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {product.map((item, index) => {
            return (
              <div
                key={index}
                className="card"
                onClick={() => {
                  setPostDetails(item)
                  navigate('/viewpost')
                }
                }
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={item.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {item.price}</p>
                  <span className="kilometer">{item.category}</span>
                  <p className="name">{item.name}</p>
                </div>
                <div className="date">
                  <span>{item.createdAt}</span>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
