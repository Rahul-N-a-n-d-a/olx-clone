import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../../Firebase/Config';
import { addDoc, collection } from 'firebase/firestore';
import { authContext } from '../../Context/FirebaseContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const { user } = useContext(authContext)
  const date = new Date()
  const navigate = useNavigate()

  const handleSubmit = () => {
    uploadBytes(ref(storage, `/images/${image.name}`), image).then(() => {
      getDownloadURL(ref(storage, `/images/${image.name}`)).then(url => {
        addDoc(collection(db, 'products'), {
          name,
          category,
          price,
          url,
          UserId: user.uid,
          createdAt: date.toDateString()
        })
      }).then(() => {
        navigate('/');
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
