import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/Context";
import axios from "axios";
import ScrollToTop from "../../../ScrollToTop";


const AddBlog = () => {
  const { blog, setBlog } = useContext(MainContext);

  return (
    
     <div className="add__blog__section__wrapper container d-flex justify-content-center align-items-center">
     <ScrollToTop/>
      <Helmet>
        <title>Add-Blog</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", subtitle: "", description: "",date:"" ,author:"",tag:""}}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:8080/api/blogs", {
              image: values.image,
              title: values.title,
              subtitle: values.subtitle,
              description: values.description,
              date: values.date,
              author: values.author,
              tag: values.tag
            })
            .then((res) => {
              setBlog((prevState) => [...prevState, res.data.data]);
              resetForm();
            })
            .catch((error) => {
              console.error("There was an error adding the product!", error);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form style={{background:"#F3F3F3",borderRadius:"10px"}}
            className="container p-5 d-flex flex-column gap-5 "
            onSubmit={handleSubmit}
          >
            
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              className="form-control p-3"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control p-3"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}


            <input
              type="text"
              name="subtitle"
              placeholder="Enter subtitle"
              className="form-control p-3"
              id="subtitle"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subtitle}
            />
            {errors.subtitle && touched.subtitle && <div className="text-danger">{errors.subtitle}</div>}

           
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="form-control p-3"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

            
           <input
              type="text"
              name="date"
              id="date"
              placeholder="Enter date"
              className="form-control p-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            {errors.date && touched.date && <div className="text-danger">{errors.date}</div>}

            <input
              type="text"
              name="author"
              id="author"
              placeholder="Enter author"
              className="form-control p-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
            {errors.author && touched.author && <div className="text-danger">{errors.author}</div>}

            <input
              type="text"
              name="tag"
              id="tag"
              placeholder="Enter tag"
              className="form-control p-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tag}
            />
            {errors.tag && touched.tag && <div className="text-danger">{errors.tag}</div>}


           
            <button style={{width:"100px"}} className="btn btn-primary mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>

   
  );
};

export default AddBlog;