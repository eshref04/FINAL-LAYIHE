import React, { useState, useEffect } from 'react';
import './App.scss';
import MainContext from './context/Context';
import ROUTES from './routes/Routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import Swal from 'sweetalert2';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [data, setData] = useState([]);
  const [study, setStudy] = useState([]);
  const [attorney, setAttorney] = useState([]);
  const [blog, setBlog] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || {});

  const router = createBrowserRouter(ROUTES);

  const contextData = {
    data,
    setData,
    blog,
    setBlog,
    study,
    attorney,
    setAttorney,
    setStudy,
    login,
    logout,
    user,
    cart,
    setCart
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: null,
          role: "",
          wishlist: [],
          basket: [],
        })
      );
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function login(user) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        role: user.role,
        id: user._id,
        wishlist: user.wishlist,
        basket: user.basket,
      })
    );

    setUser(JSON.parse(localStorage.getItem("user")));
  }
  
  function logout() {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: null,
        role: "",
        wishlist: null,
        basket: null,
      })
    );
    setUser(JSON.parse(localStorage.getItem("user")));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Signed out successfully",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/attorneys')
      .then((res) => {
        setAttorney(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/blogs')
      .then((res) => {
        setBlog(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/studys')
      .then((res) => {
        setStudy(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  return (
    <>
      <MainContext.Provider value={contextData}>
        <HelmetProvider>
          <RouterProvider router={router}>
            
          </RouterProvider>
        </HelmetProvider>
      </MainContext.Provider>
    </>
  );
}

export default App;
