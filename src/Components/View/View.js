import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { ProductContext } from '../../Context/ProductContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/Config';
function View() {
  const { postDetails } = useContext(ProductContext)
  const [userdetails, setUserdetails] = useState()

  useEffect(() => {
    getDocs(query(collection(db, 'user'), where("id", "==", postDetails.UserId))).then((snap) => {
      snap.forEach(doc => {
        setUserdetails(doc.data())
      })
    })
  }, [])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userdetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>Name: {userdetails.username}</p>
          <p>Phone: {userdetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
