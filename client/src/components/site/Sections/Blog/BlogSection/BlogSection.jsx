import React, { useContext, useEffect, useState } from "react";
import "./BlogSection.scss";
import Img1 from "../../../../../assets/blog-img1.jpg";
import Img2 from "../../../../../assets/blog-img2.jpg";
import Img3 from "../../../../../assets/blog-img3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainContext from "../../../../../context/Context";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

const BlogSection = () => {
  const { blog } = useContext(MainContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      document.querySelector(".blog__section").style.opacity = "0";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = blog.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(blog.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="blog__section">
      <div data-aos="fade-up" data-aos-duration="3000" className="blog__section__wrapper container">
        <div className="blog__section__wrapper__slider slider-container">
          {currentItems && currentItems.map((item, index) => (
            <div key={index} className="blog__section__wrapper__slider__card">
              <div className="blog__section__wrapper__slider__card__img">
                <div className="overlay"></div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="blog__section__wrapper__slider__card__body">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <div className="blog__section__wrapper__slider__card__body__end">
                  <span className="blog__section__wrapper__slider__card__body__end__date">
                    {item.date}
                  </span>
                  <span className="blog__section__wrapper__slider__card__body__end__name">
                    {item.author}
                  </span>
                  <span className="blog__section__wrapper__slider__card__body__end__desc">
                    {item.tag}
                  </span>
                </div>
                <Link to={`/blogdetail/${item._id}`}>Read More</Link>
              </div>
            </div>
          ))}

          <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        </div>

        

        <div className="blog__section__right">
          <div className="blog__section__right__heading">
            <h3>Recent Articles</h3>
          </div>
          <div className="blog__section__right__cards">
            <div className="blog__section__right__cards__crd">
              <img width={80} height={80} src={Img1} alt="" />
              <div className="blog__section__right__cards__crd__content">
                <h3>Domestic Violence in California – How a Lawyer Can Help</h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>FEBRUARY 28, 2019</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-newspaper"></i>
                    <span>JOHN SMITH</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="blog__section__right__cards__crd">
              <img width={80} height={80} src={Img2} alt="" />
              <div className="blog__section__right__cards__crd__content">
                <h3>Filing a Claim against a Cruise Ship Contractual Limitations</h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>FEBRUARY 28, 2019</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-newspaper"></i>
                    <span>JOHN SMITH</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="blog__section__right__cards__crd">
              <img width={80} height={80} src={Img3} alt="" />
              <div className="blog__section__right__cards__crd__content">
                <h3>Day Care Responsibility to Protect Children</h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>FEBRUARY 28, 2019</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-newspaper"></i>
                    <span>JOHN SMITH</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog__section__right__text">
            <h3>Text Widget</h3>
            <p>Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
