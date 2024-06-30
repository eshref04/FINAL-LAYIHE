// import React, { useContext, useEffect } from 'react';
// import MainContext from '../../../context/Context';
// import axios from 'axios';
// import { Helmet } from 'react-helmet-async';
// import "./AdminBlog.scss"
// import ScrollToTop from '../../../ScrollToTop';

// const AdminBlog = () => {
//   const { blog, setBlog } = useContext(MainContext);



//   function deleteItem(id) {
//     axios
//       .delete(`http://localhost:8080/api/blogs/${id}`)
//       .then((res) => {
//         setBlog(blog.filter((item) => item._id !== id));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   return (
//     <section className='admin__blog__section'>
//     <ScrollToTop/>
//       <Helmet>
//         <title>Blog-Table</title>
//       </Helmet>
//       <div className='admin__blog__section__wrapper container'>
//         <table className='table table-bordered table-hover'>
//           <thead className='table-dark'>
//             <tr>
//               <th scope='col'>Image</th>
//               <th scope='col'>Title</th>
//               <th scope='col'>Subtitle</th>
//               <th scope='col'>Description</th>
//               <th scope='col'>Date</th>
//               <th scope='col'>Author</th>
//               <th scope='col'>Tag</th>
//               <th scope='col'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {blog && blog.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={item.image} alt='' width='60px' height='60px' />
//                 </td>
//                 <td>{item.title}</td>
//                 <td>{item.subtitle}</td>
//                 <td>{item.description}</td>
//                 <td>{item.date}</td>
//                 <td>{item.author}</td>
//                 <td>{item.tag}</td>
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

// export default AdminBlog;

import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../../context/Context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../ScrollToTop';
import "./AdminBlog.scss";

const AdminBlog = () => {
  const { blog, setBlog } = useContext(MainContext);
  const [editMode, setEditMode] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/blogs')
      .then((res) => {
        setBlog(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setBlog]);

  function deleteItem(id) {
    axios
      .delete(`http://localhost:8080/api/blogs/${id}`)
      .then(() => {
        setBlog(blog.filter((item) => item._id !== id));
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
      subtitle: item.subtitle,
      description: item.description,
      date: item.date,
      author: item.author,
      tag: item.tag,
    });
  };

  const cancelEdit = () => {
    setEditMode(null);
    setEditedData({});
  };

  const saveEdit = () => {
    axios
      .patch(`http://localhost:8080/api/blogs/${editMode}`, editedData)
      .then(() => {
        setBlog((prevBlogs) =>
          prevBlogs.map((item) =>
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

  const truncate = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };

  return (
    <section className='admin__blog__section'>
      <ScrollToTop />
      <Helmet>
        <title>Blog Table</title>
      </Helmet>
      <div className='admin__blog__section__wrapper container'>
        <table className='table table-bordered table-hover'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Image</th>
              <th scope='col'>Title</th>
              <th scope='col'>Subtitle</th>
              <th scope='col'>Description</th>
              <th scope='col'>Date</th>
              <th scope='col'>Author</th>
              <th scope='col'>Tag</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blog &&
              blog.map((item, index) => (
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
                      name='subtitle'
                      value={editedData.subtitle}
                      onChange={handleInputChange}
                    />
                  ) : (
                    truncate(item.subtitle, 30)
                  )}</td>
                  <td>{editMode === item._id ? (
                    <textarea
                      name='description'
                      value={editedData.description}
                      onChange={handleInputChange}
                    />
                  ) : (
                    truncate(item.description, 50)
                  )}</td>
                  <td>{editMode === item._id ? (
                    <input
                      type='text'
                      name='date'
                      value={editedData.date}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.date
                  )}</td>
                  <td>{editMode === item._id ? (
                    <input
                      type='text'
                      name='author'
                      value={editedData.author}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.author
                  )}</td>
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
                          className='btn btn-secondary'
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

export default AdminBlog;

