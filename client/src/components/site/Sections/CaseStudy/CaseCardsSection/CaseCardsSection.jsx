import React, { useContext, useEffect, useState } from "react";
import "./CaseCardsSection.scss";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainContext from "../../../../../context/Context";



const CaseCardsSection = () => {
  const {study,setStudy} = useContext(MainContext)
  const [category,setCategory] = useState("all")


  

  return (
    <>
      <section className="case__cards__section">
        <div  className="case__cards__section__wrapper container">
          <div className="case__cards__section__wrapper__categories">
            <Link onClick={()=>{setCategory("all")}}>All</Link>
            <Link onClick={()=>{setCategory("accidental")}}>Accidental</Link>
            <Link onClick={()=>{setCategory("financial")}}>Financial</Link>
            <Link onClick={()=>{setCategory("violence")}}>Violence</Link>
          </div>
          <div className="case__cards__section__wrapper__cards">
            {study && study.filter(x=>category!="all" ? x.category==category : x).map((item, index) => (
              <div
                key={index}
                className="case__cards__section__wrapper__cards__crd"
              >
                <div className="case__cards__section__wrapper__cards__crd__img">
                  <img src={item.image} alt="" />
                  <div className="overlay">
                    
                  </div>
                </div>
                <h3>
                  <Link to={`/studydetail/${item._id}`}>{item.title}</Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default CaseCardsSection;
