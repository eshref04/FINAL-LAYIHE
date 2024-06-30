import React, { useState } from 'react'
import './RegisterForm.scss'
import {useFormik} from "formik"
import { useNavigate } from 'react-router';
import User from '../../../../../classes/User';
import Swal from "sweetalert2"
import userValidation from '../../../../../validations/user.validation';
import controller from '../../../../../services/api/requests';
import { endpoints } from '../../../../../services/api/constants';
import { Helmet } from 'react-helmet-async';

const RegisterForm = () => {
    const navigate = useNavigate("");
const [image,setImage]=useState(null)

const  handleImageChange=(e,setFieldValue)=> {
  const file=e.currentTarget.files[0]
  setImage(file)
  setFieldValue("src",file)
}
    const formik = useFormik({
        initialValues: {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          src: "",
        },
        validationSchema: userValidation,
        onSubmit: async ({ username, email, password, src }, actions) => {
          const formData = new FormData();
          
          const newUser = new User(username, email, password, src);
        
          formData.append("src", newUser.src);
          formData.append("username", newUser.username);
          formData.append("password", newUser.password);
          formData.append("email", newUser.email);
    
          formData.append("role", "client");
          formData.append("banDate", newUser.banDate);
          formData.append("banCount", newUser.banCount);
          formData.append("isBanned", newUser.isBanned);
          
          
          const response = await controller.post(endpoints.users, formData);

          actions.resetForm();
          if (response.error) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: response.message,
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Signed up successfully",
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              navigate("/login");
            });
          }
        },
      });
  return (
    <div>

       <form action="#" encType='multipart/form-data' onSubmit={formik.handleSubmit}>
              <h1>Create Account</h1>

              <span>or use your email for registration</span>
              <input
                          type="text"
                          className="form-control"
                          placeholder="User name"
                          name="username"
                          id="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username && (
                          <small style={{ color: "red" }}>
                            {formik.errors.username}
                          </small>
                        )}
              
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Image url"
                          name="src"
                          id="src"
                          onChange={(e)=>{
                         handleImageChange(e,formik.setFieldValue)   
                          }}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.src && formik.errors.src && (
                          <small style={{ color: "red" }}>
                            {formik.errors.src}
                          </small>
                        )}

                        <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <small style={{ color: "red" }}>
                        {formik.errors.email}
                      </small>
                    )}

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <small style={{ color: "red" }}>
                        {formik.errors.password}
                      </small>
                    )}

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <small style={{ color: "red" }}>
                          {formik.errors.confirmPassword}
                        </small>
                      )}
              
              <button className="signup-btn">Sign Up</button>
            </form>
    </div>
  )
}

export default RegisterForm

