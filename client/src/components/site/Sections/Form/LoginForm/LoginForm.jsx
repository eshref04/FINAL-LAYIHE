import React, { useContext } from 'react'
import './LoginForm.scss'
import { useNavigate } from 'react-router';
import MainContext from './../../../../../context/Context';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import controller from '../../../../../services/api/requests';
import loginValidation from '../../../../../validations/login.validation';
import { Helmet } from 'react-helmet-async';

const LoginForm = () => {

    const { login,getUser } = useContext(MainContext);
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit: async ({ email, password }, actions) => {
        try {
          const response = await controller.post("/login", {
            email: email,
            password: password,
          });

          if (response.auth) {
            actions.resetForm();
            login(response.user);

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1000,
            });
            
            if (response.user.role === "client") {
              navigate("/");
            } else {
              navigate("/admin");
            }
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: response.message,
              showConfirmButton: false,
              timer: 1000,
            });
          }
        } catch (error) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      },
    });
  return (
    <div>
     
       <form action="#" onSubmit={formik.handleSubmit}>
              <h1>Sign In</h1>

              <span>or use your email Password</span>
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
             
              <button className="signin-btn">Sign In</button>
            </form>
    </div>
  )
}

export default LoginForm

