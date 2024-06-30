import React, { useContext, useEffect, useState } from "react";
import "./CaseCardsSection.scss";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import MainContext from "../../../../../context/Context";



const CaseCardsSection = () => {
  const {study,setStudy} = useContext(MainContext)
  const [category,setCategory] = useState("all")

  useEffect(() => {
    AOS.init();
  }, [])
  const [modalImgIndex, setModalImgIndex] = useState(null);

  const openModal = (index) => {
    setModalImgIndex(index);
  };

  const closeModal = () => {
    setModalImgIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setModalImgIndex((modalImgIndex - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setModalImgIndex((modalImgIndex + 1) % images.length);
  };

  return (
    <>
      <section className="case__cards__section">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="case__cards__section__wrapper container">
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

      {modalImgIndex !== null && (
        <Modal
          show={modalImgIndex !== null}
          onHide={closeModal}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Case Studies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-content">
              <img src={images[modalImgIndex]} alt="" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="prev btn btn-danger" onClick={prevImage}>
              &#10094;
            </button>
            <button className="next btn btn-danger" onClick={nextImage}>
              &#10095;
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CaseCardsSection;
