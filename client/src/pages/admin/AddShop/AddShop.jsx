import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/Context";
import axios from "axios";
import ScrollToTop from "../../../ScrollToTop";

const AddShop = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div className="add__shop__section__wrapper container d-flex justify-content-center align-items-center">
    <ScrollToTop/>
      <Helmet>
        <title>Add-Book</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", price: "", description: "" }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:8080/api/products", {
              image: values.image,
              title: values.title,
              price: values.price,
              description: values.description,
            })
            .then((res) => {
              setData((prevState) => [...prevState, res.data.data]);
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
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="form-control p-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && (
              <div className="text-danger">{errors.price}</div>
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

            <button style={{ width: "100px" }} className="btn btn-primary mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddShop;



