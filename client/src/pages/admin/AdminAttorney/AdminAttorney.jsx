

import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../../context/Context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../ScrollToTop';
import "./AdminAttorney.scss"

const AdminAttorney = () => {
  const { attorney, setAttorney } = useContext(MainContext);
  const [editMode, setEditMode] = useState(null); 
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/attorneys')
      .then((res) => {
        setAttorney(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setAttorney]); 

  function deleteItem(id) {
    axios
      .delete(`http://localhost:8080/api/attorneys/${id}`)
      .then(() => {
        setAttorney(attorney.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

 
  const handleEdit = (item) => {
    setEditMode(item._id); 
    setEditedData({
      image: item.image,
      name: item.name,
      biography: item.biography,
      status: item.status,
      email: item.email,
      phone: item.phone,
    });
  };


  const cancelEdit = () => {
    setEditMode(null); 
    setEditedData({}); 
  };

  
  const saveEdit = () => {
    axios
      .patch(`http://localhost:8080/api/attorneys/${editMode}`, editedData)
      .then(() => {
        setAttorney((prevAttorneys) =>
          prevAttorneys.map((item) =>
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
    <>
      <ScrollToTop />
      <Helmet>
        <title>Attorney Table</title>
      </Helmet>
      <section className='admin__attorney__section'>
        <div className='admin__attorney__section__wrapper'>
          <table className='table table-bordered table-hover'>
            <thead className='table-dark'>
              <tr>
                <th scope='col'>Image</th>
                <th scope='col'>Name</th>
                <th scope='col'>Biography</th>
                <th scope='col'>Status</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {attorney &&
                attorney.map((item, index) => (
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
                        <img
                          src={item.image}
                          alt=''
                          width='60px'
                          height='60px'
                        />
                      )}
                    </td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='name'
                        value={editedData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.name
                    )}</td>
                    <td>
                      {editMode === item._id ? (
                        <textarea
                          name='biography'
                          value={editedData.biography}
                          onChange={handleInputChange}
                        />
                      ) : (
                        truncateText(item.biography, 100)
                      )}
                    </td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='status'
                        value={editedData.status}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.status
                    )}</td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='email'
                        value={editedData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.email
                    )}</td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='phone'
                        value={editedData.phone}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.phone
                    )}</td>
                    <td className='d-flex flex-column justify-content-center align-items-center gap-3'>
                      {editMode === item._id ? (
                        <>
                          <button
                            className='btn btn-success'
                            onClick={saveEdit}
                          >
                            Save
                          </button>
                          <button
                            className='btn btn-secondary '
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className='btn btn-primary'
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => {
                          deleteItem(item._id);
                        }}
                        className='btn btn-danger '
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
    </>
  );
};

export default AdminAttorney;
