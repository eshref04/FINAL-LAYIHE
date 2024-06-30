import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/Context";
import axios from "axios";
import ScrollToTop from "../../../ScrollToTop";

const AddAttorney = () => {
  const { attorney, setAttorney } = useContext(MainContext);

  return (
    <div className="add__shop__section__wrapper container d-flex justify-content-center align-items-center">
    <ScrollToTop/>
      <Helmet>
        <title>Add-Attorney</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", name: "", biography: "", status: "",email:"",phone:"" }}
        onSubmit={(values, { resetForm }) => {
          axios
  .post("http://localhost:8080/api/attorneys", {
    image: values.image,
    name: values.name,
    biography: values.biography,
    status: values.status,
    email: values.email,
    phone: values.phone,
  })
  .then((res) => {
    setAttorney((prevState) => [...prevState, res.data.data]);
    resetForm();
  })
  .catch((error) => {
    console.error("Error:", error);
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
            className="container p-5 d-flex flex-column gap-5"
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
              name="name"
              placeholder="Enter name"
              className="form-control p-3"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <div className="text-danger">{errors.name}</div>
            )}

            <input
              type="text"
              name="biography"
              placeholder="Enter biography"
              className="form-control p-3"
              id="biography"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.biography}
            />
            {errors.biography && touched.biography && (
              <div className="text-danger">{errors.biography}</div>
            )}

            <input
              type="text"
              name="status"
              placeholder="Enter status"
              className="form-control p-3"
              id="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
            />
            {errors.status && touched.status && (
              <div className="text-danger">{errors.status}</div>
            )}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="form-control p-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className="text-danger">{errors.email}</div>
            )}

            <input
              type="text"
              name="phone"
              placeholder="Enter phone"
              className="form-control p-3"
              id="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <div className="text-danger">{errors.phone}</div>
            )}

            <button style={{ width: "100px" }} className="btn btn-primary mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddAttorney;
