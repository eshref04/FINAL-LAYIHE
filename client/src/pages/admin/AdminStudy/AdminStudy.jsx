// import React, { useContext, useEffect } from 'react';
// import MainContext from '../../../context/Context';
// import axios from 'axios';
// import { Helmet } from 'react-helmet-async';
// import "./AdminStudy.scss"
// import ScrollToTop from '../../../ScrollToTop';

// const AdminStudy = () => {
//   const { study, setStudy } = useContext(MainContext);



//   function deleteItem(id) {
//     axios
//       .delete(`http://localhost:8080/api/studys/${id}`)
//       .then((res) => {
//         setStudy(study.filter((item) => item._id !== id));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   return (
//     <section className='admin__study__section'>
//     <ScrollToTop/>
//       <Helmet>
//         <title>Study-Table</title>
//       </Helmet>
//       <div className='admin__study__section__wrapper container'>
//         <table className='table table-bordered table-hover'>
//           <thead className='table-dark'>
//             <tr>
//               <th scope='col'>Image</th>
//               <th scope='col'>Title</th>
//               <th scope='col'>Description</th>
//               <th scope='col'>Tag</th>
//               <th scope='col'>Time</th>
//               <th scope='col'>Lawyer</th>
//               <th scope='col'>Category</th>
//               <th scope='col'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {study && study.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={item.image} alt='' width='60px' height='60px' />
//                 </td>
//                 <td>{item.title}</td>
//                 <td>{item.description}</td>
//                 <td>{item.tag}</td>
//                 <td>{item.time}</td>
//                 <td>{item.lawyer}</td>
//                 <td>{item.category}</td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       deleteItem(item._id);
//                     }}
//                     className='btn btn-danger'
//                   >
//                     Sil
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default AdminStudy;

import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../../context/Context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../ScrollToTop';
import "./AdminStudy.scss"

const AdminStudy = () => {
  const { study, setStudy } = useContext(MainContext);
  const [editMode, setEditMode] = useState(null); 
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/studys')
      .then((res) => {
        setStudy(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setStudy]);

  function deleteItem(id) {
    axios
      .delete(`http://localhost:8080/api/studys/${id}`)
      .then((res) => {
        setStudy(study.filter((item) => item._id !== id));
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
      description: item.description,
      tag: item.tag,
      time: item.time,
      lawyer: item.lawyer,
      category: item.category,
    });
  };

  const cancelEdit = () => {
    setEditMode(null); 
    setEditedData({}); 
  };

  const saveEdit = () => {
    axios
      .patch(`http://localhost:8080/api/studys/${editMode}`, editedData)
      .then(() => {
        setStudy((prevStudys) =>
          prevStudys.map((item) =>
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
        <title>Study Table</title>
      </Helmet>
      <section className='admin__study__section'>
        <div className='admin__study__section__wrapper container'>
          <table className='table table-bordered table-hover'>
            <thead className='table-dark'>
              <tr>
                <th scope='col'>Image</th>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Tag</th>
                <th scope='col'>Time</th>
                <th scope='col'>Lawyer</th>
                <th scope='col'>Category</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {study &&
                study.map((item, index) => (
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
                        name='title'
                        value={editedData.title}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.title
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
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='tag'
                        value={editedData.tag}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.tag
                    )}</td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='time'
                        value={editedData.time}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.time
                    )}</td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='lawyer'
                        value={editedData.lawyer}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.lawyer
                    )}</td>
                    <td>{editMode === item._id ? (
                      <input
                        type='text'
                        name='category'
                        value={editedData.category}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item.category
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

export default AdminStudy;

