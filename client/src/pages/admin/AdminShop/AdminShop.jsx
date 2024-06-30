import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../../context/Context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../ScrollToTop';
import "./AdminShop.scss";

const AdminShop = () => {
  const { data, setData } = useContext(MainContext);
  const [editMode, setEditMode] = useState(null); 
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setData]);

  function deleteItem(id) {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        setData(data.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleEdit = (item) => {
    setEditMode(item._id); 
    setEditedData({
      image: item.image,
      title: item.title,
      price: item.price,
      description: item.description,
    });
  };

  const cancelEdit = () => {
    setEditMode(null); 
    setEditedData({}); 
  };

  const saveEdit = () => {
    axios
      .patch(`http://localhost:8080/api/products/${editMode}`, editedData)
      .then(() => {
        setData((prevData) =>
          prevData.map((item) =>
            item._id === editMode ? { ...item, ...editedData } : item
          )
        );
        cancelEdit();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className='admin__shop__section'>
      <ScrollToTop />
      <Helmet>
        <title>Shop-Table</title>
      </Helmet>
      <div className='admin__shop__section__wrapper container'>
        <table className='table table-bordered table-hover'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Image</th>
              <th scope='col'>Title</th>
              <th scope='col'>Price</th>
              <th scope='col'>Description</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>
                    {editMode === item._id ? (
                      <input
                        type='text'
                        name='image'
                        value={editedData.image}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <img src={item.image} alt='' width='60px' height='60px' />
                    )}
                  </td>
                  <td>{editMode === item._id ? (
                    <input
                      type='text'
                      name='title'
                      value={editedData.title}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.title
                  )}</td>
                  <td>{editMode === item._id ? (
                    <input
                      type='text'
                      name='price'
                      value={editedData.price}
                      onChange={handleInputChange}
                    />
                  ) : (
                    `${item.price}$`
                  )}</td>
                  <td>
                    {editMode === item._id ? (
                      <textarea
                        name='description'
                        value={editedData.description}
                        onChange={handleInputChange}
                      />
                    ) : (
                      truncateText(item.description, 100)
                    )}
                  </td>
                  <td className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    {editMode === item._id ? (
                      <>
                        <button className='btn btn-success' onClick={saveEdit}>
                          Save
                        </button>
                        <button className='btn btn-secondary' onClick={cancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button className='btn btn-primary' onClick={() => handleEdit(item)}>
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => deleteItem(item._id)}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminShop;
