import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/Context";
import axios from "axios";
import ScrollToTop from "../../../ScrollToTop";

const AddStudy = () => {
  const { study, setStudy } = useContext(MainContext);

  return (
    <div className="add__study__section__wrapper container d-flex justify-content-center align-items-center">
    <ScrollToTop/>
      <Helmet>
        <title>Add-Study</title>
      </Helmet>
      <Formik
        initialValues={{
          image: "",
          title: "",
          description: "",
          tag: "",
          time: "",
          lawyer: "",
          category: ""
        }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:8080/api/studys", values)
            .then((res) => {
              setStudy((prevState) => [...prevState, res.data.data]);
              resetForm();
            })
            .catch((error) => {
              console.error("There was an error adding the study!", error);
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
          <form
            style={{ background: "#F3F3F3", borderRadius: "10px" }}
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
            {errors.image && touched.image && (
              <div className="text-danger">{errors.image}</div>
            )}

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
            {errors.title && touched.title && (
              <div className="text-danger">{errors.title}</div>
            )}

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
            {errors.description && touched.description && (
              <div className="text-danger">{errors.description}</div>
            )}

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
            {errors.tag && touched.tag && (
              <div className="text-danger">{errors.tag}</div>
            )}

            <input
              type="text"
              name="time"
              placeholder="Enter time"
              className="form-control p-3"
              id="time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
            />
            {errors.time && touched.time && (
              <div className="text-danger">{errors.time}</div>
            )}

            <input
              type="text"
              name="lawyer"
              id="lawyer"
              placeholder="Enter lawyer"
              className="form-control p-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lawyer}
            />
            {errors.lawyer && touched.lawyer && (
              <div className="text-danger">{errors.lawyer}</div>
            )}

            <select 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category} name="category" id="category" className="form-control p-3">
              <option value="accidental">Accidental</option>
              <option value="financial">Financial</option>
              <option value="violence">Violence</option>
            </select>

            {errors.category && touched.category && (
              <div className="text-danger">{errors.category}</div>
            )}

            <button
              style={{ width: "100px" }}
              className="btn btn-primary mt-3"
              type="submit"
            >
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddStudy;
